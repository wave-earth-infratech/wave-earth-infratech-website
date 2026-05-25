/**
 * data/siteConstants.js
 *
 * SINGLE SOURCE OF TRUTH for all site stats, company info, and contact data.
 *
 * How to update a stat:
 *   1. Change the value here.
 *   2. Change the matching field in content/settings/stats.md (for Decap CMS UI).
 *   That's it — every page and component that imports from here is automatically updated.
 *
 * DO NOT hardcode these values anywhere else in the codebase.
 */

// ─── Company identity ─────────────────────────────────────────────────────────

export const COMPANY = {
  name:         'Wave Earth Infratech',
  legalName:    'Wave Earth Infratech Private Limited',
  foundedYear:  2017,
  estLabel:     'Est. 2017',
  sinceLabel:   'Since 2017',
  states:       'Uttar Pradesh & Madhya Pradesh',
  statesShort:  'UP & MP',
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  phone:      '+91 258 368 3158',
  phoneTel:   'tel:+912583683158',
  whatsapp:   'https://wa.me/912583683158?text=Hello%2C%20I%20am%20enquiring%20about%20your%20infrastructure%20services.',
  email:      'contact@waveearthinfratech.com',
  address1:   'M38, Sector-12 Pratap Vihar',
  address2:   '',
  city:       'Ghaziabad',
  state:      'Uttar Pradesh',
  pincode:    '201309',
}

// ─── Stats ────────────────────────────────────────────────────────────────────
// Change a number once here → it updates on every page automatically.

export const STATS = {
  yearsExperience:  { value: 8,   suffix: '+', label: 'Years Since 2017' },
  kmCanal:          { value: 120, suffix: '+', label: 'KM Canal Developed' },
  projectsDone:     { value: 45,  suffix: '+', label: 'Projects Completed' },
  villagesImpacted: { value: 80,  suffix: '+', label: 'Villages Impacted' },
  workforce:        { value: 200, suffix: '+', label: 'Workforce Strength' },
  concurrentSites:  { value: 15,  suffix: '+', label: 'Concurrent Project Sites' },
  serviceCount:     { value: 10,  suffix: '',  label: 'Service Categories' },
}

// ─── Pre-built arrays for each context ───────────────────────────────────────

/** Animated counter row — homepage stats section */
export const HOME_STATS = [
  STATS.kmCanal,
  STATS.villagesImpacted,
  STATS.projectsDone,
  STATS.workforce,
  STATS.yearsExperience,
]

/** Footer brand column — 3-item mini strip */
export const FOOTER_STATS = [
  [`${STATS.kmCanal.value}${STATS.kmCanal.suffix}`,         'KM Canal'],
  [`${STATS.projectsDone.value}${STATS.projectsDone.suffix}`, 'Projects'],
  [`${STATS.yearsExperience.value}${STATS.yearsExperience.suffix}`, 'Yrs Exp'],
]

/** Services listing page — horizontal stats bar */
export const SERVICES_BAR_STATS = [
  [STATS.serviceCount.value.toString(),                                      STATS.serviceCount.label],
  [`${STATS.yearsExperience.value}${STATS.yearsExperience.suffix}`,          STATS.yearsExperience.label],
  [COMPANY.statesShort,                                                       'States We Operate In'],
  [`${STATS.projectsDone.value}${STATS.projectsDone.suffix}`,                STATS.projectsDone.label],
]

/** About page — headline stat badge (image overlay) */
export const ABOUT_BADGE = {
  value: `${STATS.yearsExperience.value}${STATS.yearsExperience.suffix}`,
  label: STATS.yearsExperience.label,
}

/** About page — key facts sidebar */
export const KEY_FACTS = [
  { label: 'Registered Office', value: `${CONTACT.city}, ${CONTACT.state}` },
  { label: 'Work Zones',        value: COMPANY.states },
  { label: 'Primary Sector',    value: 'Irrigation, Canal & Rural Infrastructure' },
  { label: 'MSME Registered',   value: 'Yes' },
  { label: 'GST Registered',    value: 'Yes' },
  { label: 'Contractor Class',  value: 'Government Approved' },
]
