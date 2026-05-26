import nodemailer from 'nodemailer'

// ─── Helpers ────────────────────────────────────────────────────────────────

function esc(str) {
  if (str == null) return ''
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;')
}

function row(label, value) {
  return `<tr>
    <td style="padding:6px 14px;color:#666;width:160px;vertical-align:top;font-size:13px;white-space:nowrap">${esc(label)}</td>
    <td style="padding:6px 14px;font-size:13px;white-space:pre-wrap">${esc(value) || '-'}</td>
  </tr>`
}

function wrap(title, rows) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#222;margin:0;padding:24px">
    <h2 style="color:#2D6A4F;margin-bottom:4px">${esc(title)}</h2>
    <p style="color:#888;font-size:12px;margin-top:0">Submitted via waveearthinfratech.com</p>
    <table style="border-collapse:collapse;margin-top:16px;width:100%;max-width:640px">
      ${rows}
    </table>
  </body></html>`
}

// ─── Turnstile verification ──────────────────────────────────────────────────

async function verifyTurnstile(token, ip) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    // Allow in development when key is not set
    if (process.env.NODE_ENV === 'development') return true
    return false
  }
  const body = new URLSearchParams({
    secret:   process.env.TURNSTILE_SECRET_KEY,
    response: token,
    ...(ip ? { remoteip: ip } : {}),
  })
  const res  = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const data = await res.json()
  return data.success === true
}

// ─── SMTP transporter ────────────────────────────────────────────────────────

function createTransporter() {
  const port   = parseInt(process.env.SMTP_PORT || '587', 10)
  const secure = port === 465
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// ─── Email templates ─────────────────────────────────────────────────────────

function contactEmail(d) {
  return {
    subject: `Contact Enquiry from ${esc(d.name)} - Wave Earth Infratech`,
    html: wrap('New Contact Enquiry', [
      row('Name',    d.name),
      row('Email',   d.email),
      row('Phone',   d.phone),
      row('Subject', d.subject),
      row('Message', d.message),
    ].join('')),
  }
}

function inviteEmail(d) {
  return {
    subject: `Tender Invitation - ${esc(d.org)} - Wave Earth Infratech`,
    html: wrap('Tender Invitation Request', [
      row('Name',            d.name),
      row('Organisation',    d.org),
      row('Email',           d.email),
      row('Phone',           d.phone),
      row('Project Type',    d.projectType),
      row('Location',        d.location),
      row('Est. Value',      d.value),
      row('Deadline',        d.deadline),
      row('Description',     d.description),
    ].join('')),
  }
}

function vendorEmail(d) {
  return {
    subject: `Vendor Registration - ${esc(d.company)} - Wave Earth Infratech`,
    html: wrap('Vendor / Sub-contractor Registration', [
      row('Company',         d.company),
      row('Contact Person',  d.contact),
      row('Email',           d.email),
      row('Phone',           d.phone),
      row('Category',        d.category),
      row('GST / Reg. No.',  d.regNo),
      row('Base Location',   d.address),
    ].join('')),
  }
}

function csrEmail(d) {
  return {
    subject: `CSR/NGO Partnership Enquiry - ${esc(d.org)} - Wave Earth Infratech`,
    html: wrap('CSR / NGO Partnership Enquiry', [
      row('Organisation',    d.org),
      row('Contact Person',  d.contact),
      row('Designation',     d.designation),
      row('Email',           d.email),
      row('Phone',           d.phone),
      row('Location',        d.location),
      row('Project Type',    d.projectType),
      row('Budget',          d.budget),
      row('Timeline',        d.timeline),
      row('Description',     d.description),
    ].join('')),
  }
}

// ─── Route handler ───────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const { type, token, ...data } = req.body ?? {}

  // Validate presence of CAPTCHA token
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ error: 'Missing CAPTCHA token' })
  }

  // Verify Turnstile token with Cloudflare
  const ip      = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '').split(',')[0].trim()
  const captchaOk = await verifyTurnstile(token, ip)
  if (!captchaOk) {
    return res.status(400).json({ error: 'CAPTCHA verification failed. Please try again.' })
  }

  // Build the email for the requested form type
  let mail
  if (type === 'contact') {
    mail = contactEmail(data)
  } else if (type === 'invite') {
    mail = inviteEmail(data)
  } else if (type === 'vendor') {
    mail = vendorEmail(data)
  } else if (type === 'csr') {
    mail = csrEmail(data)
  } else {
    return res.status(400).json({ error: 'Unknown form type' })
  }

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from:    `"Wave Earth Infratech Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to:      process.env.SMTP_TO || process.env.SMTP_USER,
      cc:      process.env.SMTP_CC || undefined,
      replyTo: typeof data.email === 'string' ? data.email : undefined,
      subject: mail.subject,
      html:    mail.html,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[api/contact] SMTP error:', err?.message || err)
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' })
  }
}
