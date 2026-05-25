# Page 07 — Tenders (`pages/tenders.js`)

## Purpose

The Tenders page makes the website useful as a business tool — not just a brochure. It serves two audiences:

1. **Government & client officers** who want to invite Wave Earth Infratech for tendering — they can register their requirement here.
2. **Internal and vendor use** — Wave Earth Infratech can list current tenders they are bidding on, or invite sub-vendors and labour contractors through this page.

This page also helps with organic search ranking for terms like "canal contractor tender UP."

---

## Section Breakdown

### Section 1 — Page Hero

**Headline:** `Tenders & Procurement`
**Subheadline:** `Current Tender Participation • Vendor Registration • Partnership Enquiries`
**Breadcrumb:** `Home / Tenders`

---

### Section 2 — Current Tender Participation

**Heading:** `Tenders We Are Currently Bidding / Active On`

**Purpose:** Demonstrates activity, scale, and the type of work currently being pursued. Government evaluators appreciate transparency.

**Layout:** Table or card list.

**Each tender entry shows:**

| Field | Description |
|---|---|
| Tender Name | Short descriptive name of the work |
| Issuing Authority | Department/body issuing the tender |
| Location | District and state |
| Tender Value (approx.) | Optional — include if public |
| Submission Date | Tender submission deadline |
| Status | Bidding / Awarded / Under Execution |

**Note:** Only list tenders that are public information (NIT published tenders). Do not list private or confidential negotiations.

**Example entries:**

| Tender Name | Authority | Location | Status |
|---|---|---|---|
| Canal Lining Work – Package [X] | Irrigation Dept., UP | Chitrakoot, UP | Awarded – Under Execution |
| Rural Road Construction – [GP Name] | PMGSY / State PWD | [District], UP | Bidding |
| Checkdam Construction – [Scheme] | Agriculture Dept., MP | [District], MP | Completed |

---

### Section 3 — Invite Us to Tender

**Heading:** `Invite Wave Earth Infratech for Your Project`

**Purpose:** Allow government departments, NGOs, and contractors to formally invite Wave Earth Infratech to submit a quote or bid.

**Layout:** Form with the following fields:

| Field | Type | Required |
|---|---|---|
| Organisation Name | Text | Yes |
| Contact Person Name | Text | Yes |
| Designation | Text | No |
| Phone Number | Tel | Yes |
| Email Address | Email | Yes |
| Project / Tender Name | Text | Yes |
| Project Location | Text | Yes |
| Estimated Project Value | Text | No |
| Work Type | Dropdown (Canal / Road / Earthwork / Concrete / Other) | Yes |
| Project Description | Textarea | Yes |
| Attach NIT / Tender Document | File upload (PDF, max 10MB) | No |
| Expected Start Date | Date | No |
| Message | Textarea | No |
| Submit | Button | — |

**Confirmation message after submit:**
> Thank you. We will review your tender invitation and respond within 2 working days.

**Security:** Form submissions must be validated server-side. File upload must be restricted to PDF only with size limits.

---

### Section 4 — Vendor / Sub-contractor Registration

**Heading:** `Register as a Vendor or Sub-contractor`

**Purpose:** Wave Earth Infratech can invite specialised sub-contractors (concrete specialists, surveying firms, labour contractors, plant hire companies) to register on this page for future project collaboration.

**Layout:** Registration form.

| Field | Type |
|---|---|
| Company / Individual Name | Text |
| Registration Type | Dropdown: Labour Contractor / Plant Hire / Material Supplier / Specialised Sub-contractor |
| Work Type Expertise | Multi-select checkboxes |
| Operating Area | Text |
| Phone | Tel |
| Email | Email |
| GST Number | Text |
| MSME Number (if applicable) | Text |
| Company Profile / Credentials | File upload (PDF) |
| Message | Textarea |

---

### Section 5 — CSR & NGO Partnership

**Heading:** `NGO & CSR Project Partnership`

**Content:**
> Wave Earth Infratech actively partners with NGOs, foundations, and CSR departments to execute civil works for development sector projects. We understand the documentation, reporting, and community engagement needs of the development sector.
>
> If your organisation is planning rural infrastructure, water, or livelihood-linked civil works, we welcome partnership discussions.

**CTA Form / Link:** Simple enquiry form or link to Contact page with pre-filled subject "NGO Partnership Enquiry."

---

### Section 6 — Download Tender Documents

**Heading:** `Company Documents for Tender Submission`

Provide downloadable documents useful for tender file preparation:

| Document | File |
|---|---|
| Company Profile (PDF) | Download |
| MSME Certificate | Download |
| GST Certificate | Download |
| PAN Card | Download |
| Contractor Registration Certificate | Download |
| Work Experience List | Download |
| Machinery List (for tender schedules) | Download |
| Bank Details for Tender EMD | On request |

**Security note:** Do not expose sensitive financial documents publicly. PAN and bank details should only be shared on request / via secure channel.

---

## SEO Metadata

```
Title:    Tenders | Canal & Civil Infrastructure Contractor – Wave Earth Infratech
Description: Invite Wave Earth Infratech to tender for canal, irrigation, road, or rural
             infrastructure projects. Download company documents for tender submission.
             Register as a vendor or sub-contractor.
Keywords: canal contractor tender UP, invite contractor for irrigation tender, civil
          contractor tender MP, infrastructure tender Chitrakoot, vendor registration
          civil works India
```

---

## Content Checklist

- [ ] List of current / recent tenders prepared
- [ ] Tender invitation form set up and tested
- [ ] File upload limited to PDF, max 10MB
- [ ] Vendor registration form set up
- [ ] All downloadable documents prepared and reviewed
- [ ] Sensitive documents (PAN, bank) withheld from public download
- [ ] Form submission notification email configured
- [ ] Thank-you / confirmation messages written
