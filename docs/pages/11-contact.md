# Page 11 - Contact (`pages/contact-us.js`)

## Purpose

The Contact page must make it as easy as possible for potential clients to reach Wave Earth Infratech - especially from mobile devices in areas with slower connectivity. Government officers and field-level NGO staff frequently contact contractors via WhatsApp and phone before email.

The page must also include the footer used across all pages.

---

## Section Breakdown

### Section 1 - Page Hero

**Headline:** `Contact Us`
**Subheadline:** `Get in Touch for Project Enquiries, Quotations, or Tender Invitations`
**Breadcrumb:** `Home / Contact`

---

### Section 2 - Contact Information Cards

**Layout:** 3 cards in a row (or 2 rows on mobile).

| Card | Content |
|---|---|
| Phone / WhatsApp | Phone icon + number + `Call Now` button + WhatsApp link button |
| Email | Email icon + address + `Send Email` button |
| Office Address | Location pin icon + full address |

**Phone card should prominently show:**
- Main office number: `+91 XXXXXXXXXX`
- WhatsApp button (opens WhatsApp chat directly with pre-filled message: "Hello, I am enquiring about your infrastructure services.")

---

### Section 3 - Contact Form

**Heading:** `Send Us a Message`

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Your Name | Text | Yes |
| Organisation / Department | Text | No |
| Phone Number | Tel | Yes |
| Email Address | Email | No |
| Subject | Dropdown | Yes |
| Message | Textarea (min 4 rows) | Yes |
| Submit | Button | - |

**Subject dropdown options:**
- Project Enquiry
- Request Quotation
- Tender Invitation
- NGO / CSR Partnership
- Vendor Registration
- General Enquiry

**Form validation:**
- Phone: numeric, 10 digits
- Email: valid format (if filled)
- Message: minimum 20 characters

**Success state:**
> Thank you for reaching out. We will respond within 1–2 business days. For urgent matters, please call or WhatsApp us directly.

**Backend:** Connect to server-side handler (Laravel API endpoint or Next.js API route). Do NOT use mailto: links. Send email notification to admin on submission.

---

### Section 4 - Office Location Map

**Layout:** Full-width embedded map below the form.

**Show:**
- Registered office / primary work location pin
- Project site pins (optional - can use the same map from homepage)

**Implementation:** Google Maps iframe embed or Leaflet.js with custom pin.

**Text below map:**
```
Registered Office:
Wave Earth Infratech
[Full Address]
Chitrakoot, Uttar Pradesh – [PIN]
```

---

### Section 5 - Quick Connect (Sticky / Floating)

These elements appear on **every page**, not just the contact page.

**Floating action buttons (bottom-right, fixed position):**

| Button | Action |
|---|---|
| WhatsApp | `https://wa.me/91XXXXXXXXXX?text=Hello%2C+I+am+enquiring+about+your+services` |
| Call | `tel:+91XXXXXXXXXX` |

**Desktop:** Show as circular buttons stacked vertically, bottom-right.
**Mobile:** Show as a bottom action bar (full-width, 2 equal buttons).

---

## Footer Specification

The footer appears on all pages. It must be professional and information-dense.

### Footer Layout (4-column desktop, 2-column tablet, 1-column mobile)

#### Column 1 - About / Brand

- Company logo (white version)
- Short tagline: `Building Sustainable Infrastructure for Rural India`
- MSME badge / certified logo strip
- Social media icons: LinkedIn | YouTube | WhatsApp

#### Column 2 - Quick Links

- Home
- About Us
- Services
- Projects
- Equipment
- Gallery

#### Column 3 - More Links

- Tenders
- Certifications
- CSR & NGO Works
- Blog
- Contact Us
- Download Company Profile

#### Column 4 - Contact Details

- Phone: `+91 XXXXXXXXXX`
- Email: `info@waveearthinfratech.com`
- Address: `[Full address], Chitrakoot, UP`
- WhatsApp quick link

### Footer Bottom Bar

- Copyright: `© [Year] Wave Earth Infratech. All rights reserved.`
- Links: Privacy Policy | Terms & Conditions | Sitemap
- GST No.: `[GSTIN]`

---

## SEO Metadata

```
Title:    Contact Us | Wave Earth Infratech – Canal & Civil Contractor UP MP
Description: Contact Wave Earth Infratech for canal construction, irrigation, and civil
             infrastructure project enquiries, quotations, and tender invitations across
             Uttar Pradesh and Madhya Pradesh.
Keywords: contact canal contractor UP, civil contractor enquiry Chitrakoot, irrigation
          contractor contact, infrastructure company contact UP MP
```

---

## Content Checklist

- [ ] Phone number confirmed and active
- [ ] WhatsApp number configured (same or separate)
- [ ] Email address active and monitored
- [ ] Full registered office address confirmed
- [ ] Google Maps / Leaflet pin placed at correct location
- [ ] Contact form backend handler set up
- [ ] Admin email notification on form submission
- [ ] Floating WhatsApp + Call buttons implemented globally
- [ ] Footer logo (white version) prepared
- [ ] Social media profiles created and linked (LinkedIn, YouTube at minimum)
- [ ] GSTIN visible in footer
- [ ] Privacy Policy and Terms pages linked from footer
