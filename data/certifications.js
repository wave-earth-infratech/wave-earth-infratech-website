// ─────────────────────────────────────────────────────────────────────────────
// data/certifications.js  - Registration and compliance data
// Mask sensitive numbers before deploying to production
// ─────────────────────────────────────────────────────────────────────────────

export const certifications = [
  {
    id: 'gst',
    category: 'Tax Registration',
    name: 'GST Registration',
    authority: 'Government of India - GSTN',
    regNo: '09XXXXX0000X1ZX',   // replace with actual partial display number
    validFrom: '2018',
    validity: 'Permanent',
    status: 'valid',
    description: 'Registered taxpayer under the Goods and Services Tax Act. All transactions are GST compliant with regular return filing.',
    icon: 'tax',
  },
  {
    id: 'pan',
    category: 'Tax Registration',
    name: 'Permanent Account Number (PAN)',
    authority: 'Income Tax Department, Govt. of India',
    regNo: 'XXXXX0000X',        // replace with actual partial display
    validFrom: '2017',
    validity: 'Permanent',
    status: 'valid',
    description: 'Permanent tax identification number for all financial and contractual transactions.',
    icon: 'tax',
  },
  {
    id: 'msme',
    category: 'Industry Registration',
    name: 'MSME / Udyam Registration',
    authority: 'Ministry of MSME, Govt. of India',
    regNo: 'UP-XX-XXXX-XXXXXXX',
    validFrom: '2020',
    validity: 'Permanent',
    status: 'valid',
    description: 'Registered as a Micro, Small & Medium Enterprise under the Udyam registration portal. Enables priority in government procurement.',
    icon: 'industry',
  },
  {
    id: 'epf',
    category: 'Labour Compliance',
    name: 'Employees\' Provident Fund (EPF)',
    authority: 'Employees\' Provident Fund Organisation (EPFO)',
    regNo: 'UP/XXXX/XXXX',
    validFrom: '2019',
    validity: 'Active',
    status: 'valid',
    description: 'Enrolled as an EPF subscriber. All eligible workforce covered with provident fund contributions as per statutory requirements.',
    icon: 'labour',
  },
  {
    id: 'esic',
    category: 'Labour Compliance',
    name: 'ESIC Registration',
    authority: 'Employees\' State Insurance Corporation',
    regNo: 'XX-XX-XXXXXXX-XXX',
    validFrom: '2019',
    validity: 'Active',
    status: 'valid',
    description: 'Registered for Employee State Insurance providing health and social security benefits to the workforce.',
    icon: 'labour',
  },
  {
    id: 'contractor-up',
    category: 'Contractor Registration',
    name: 'UP Jal Nigam Contractor Registration',
    authority: 'Uttar Pradesh Jal Nigam',
    regNo: 'UPJN/XXXX/XXXX',
    validFrom: '2018',
    validity: 'Renewed Annually',
    status: 'valid',
    description: 'Registered contractor for civil works under UP Jal Nigam including canal, drainage, and water supply projects.',
    icon: 'contractor',
  },
  {
    id: 'contractor-irrigation',
    category: 'Contractor Registration',
    name: 'Irrigation Department Contractor Registration',
    authority: 'UP Sinchai Vibhag',
    regNo: 'IRR/XXXX/XXXX',
    validFrom: '2019',
    validity: 'Renewed Annually',
    status: 'valid',
    description: 'Empanelled contractor for earthwork, canal lining, and irrigation infrastructure works under the state irrigation department.',
    icon: 'contractor',
  },
  {
    id: 'shops-est',
    category: 'Business Registration',
    name: 'Shops & Establishment Registration',
    authority: 'Labour Department, Govt. of UP',
    regNo: 'UP-XX-XXXX',
    validFrom: '2017',
    validity: 'Renewed Annually',
    status: 'valid',
    description: 'Registered under the UP Shops and Commercial Establishments Act.',
    icon: 'business',
  },
]

export const certCategories = [
  'All',
  'Tax Registration',
  'Industry Registration',
  'Labour Compliance',
  'Contractor Registration',
  'Business Registration',
]

export const empanelments = [
  { org: 'UP Jal Nigam', type: 'Canal & Water Supply Works', class: 'Class B' },
  { org: 'UP Sinchai Vibhag', type: 'Earthwork & Canal Lining', class: 'Class B' },
  { org: 'Panchayati Raj Department, UP', type: 'Rural Infrastructure Works', class: 'Registered' },
  { org: 'MNREGA Implementing Agency', type: 'Community Infrastructure', class: 'Registered' },
]
