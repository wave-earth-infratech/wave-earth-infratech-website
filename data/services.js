// ─────────────────────────────────────────────────────────────────────────────
// data/services.js  - single source of truth for all 10 service definitions
// ─────────────────────────────────────────────────────────────────────────────

export const services = [

  // ── 1. Canal Construction & Repair ─────────────────────────────────────────
  {
    slug: 'canal-construction',
    name: 'Canal Construction & Repair',
    tagline: 'New canal construction and rejuvenation for state irrigation departments',
    hero_image: '/images/placeholder.svg',
    description:
      'We execute new canal construction and canal repair works for state irrigation departments, including clearing, desilting, bank reinforcement, and structural repair of deteriorated canal sections. Our work is aligned with PMKSY and state Jal Shakti scheme requirements.',
    importance_points: [
      'Canal irrigation is the backbone of agricultural water supply in UP and MP - any efficiency loss directly reduces crop yield for thousands of farmers.',
      'Deteriorated canal banks cause embankment breaches, flooding adjacent agricultural land and destroying standing crops.',
      'Desilted and repaired canals restore original capacity, improving water delivery to tail-end commands that are often underserved.',
      'Government scheme compliance (PMKSY, Jal Shakti) requires certified canal works to unlock departmental funding and scheme benefits.',
      'Properly constructed canals reduce operation and maintenance burden on departments for 15-20 years after completion.',
    ],
    scope: [
      'New canal excavation (earthen and pucca)',
      'Canal bank earthwork and compaction',
      'Desilting and deepening of existing canals',
      'Stone pitching and slope protection',
      'Head regulator and cross structures',
      'Canal rejuvenation under government schemes',
    ],
    technical_specs: [
      { label: 'Earthwork Compaction',    value: 'IS 2720 Parts 7/8 - 95% Modified Proctor' },
      { label: 'Bank Slope',              value: '1:1 (V:H) to 1:1.5 as per design' },
      { label: 'Canal Invert Level',      value: 'Set to departmental benchmark ±5 mm' },
      { label: 'Stone Pitching Grade',    value: 'Cement mortar 1:4 minimum' },
      { label: 'Freeboard',               value: '0.3 - 0.6 m depending on design discharge' },
      { label: 'Subgrade CBR',            value: 'Minimum 3% for earthen canals' },
    ],
    process: [
      { title: 'Site Survey',             description: 'Alignment verification, bench marking, soil assessment, and reference level establishment against departmental plans.' },
      { title: 'Equipment Mobilisation',  description: 'Deployment of excavators, dumper trucks, compaction rollers, and water tankers to site with access track preparation.' },
      { title: 'Excavation',              description: 'Canal excavation to specified cross-section dimensions - bed width, depth, and side slopes as per approved drawings.' },
      { title: 'Bank Formation',          description: 'Systematic earthwork compaction in 150-200 mm layers using roller compaction to IS standards.' },
      { title: 'Slope Protection',        description: 'Stone pitching, RCC lining, or grass sodding of banks as per specification to prevent erosion.' },
      { title: 'Inspection & Handover',   description: 'Final profile check, measurement book recording, departmental inspection, and water test before formal handover.' },
    ],
    machinery: [
      { name: 'Excavator 1.5m³',    type: 'excavator' },
      { name: 'JCB 3DX',            type: 'excavator' },
      { name: 'Tipper Trucks 10T',  type: 'truck' },
      { name: 'Compaction Roller',  type: 'roller' },
      { name: 'Water Tanker',       type: 'truck' },
    ],
    related_project_slugs: ['2024-03-canal-redevelopment-chitrakoot'],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What is the difference between canal construction and canal repair?',
        answer: 'Canal construction involves building a new channel from scratch - excavation, bank formation, lining, and structures. Canal repair covers restoration of existing canals - desilting, bank rebuilding, patching deteriorated lining, and structure repairs.',
      },
      {
        question: 'Which government schemes cover canal construction in UP and MP?',
        answer: 'Primary schemes include PMKSY (Pradhan Mantri Krishi Sinchayee Yojana), Jal Shakti Abhiyan, Command Area Development, and state-specific irrigation department annual works programmes.',
      },
      {
        question: 'How long does a typical canal repair project take?',
        answer: 'Depending on canal length and scope, repair projects typically span 3-6 months. A 5 km canal repair with full lining usually takes 4-5 months with a full equipment and workforce deployment.',
      },
      {
        question: 'Do you handle measurement book (MB) and departmental documentation?',
        answer: 'Yes. Our site team maintains MB entries, layer-wise compaction records, progress photographs, and all compliance documentation as required by the executing department.',
      },
    ],
    client_types: [
      'State Irrigation Department',
      'Jal Shakti Mission',
      'PMKSY Executing Agencies',
      'Command Area Development Board',
    ],
  },

  // ── 2. Nahar Lining Works ───────────────────────────────────────────────────
  {
    slug: 'nahar-lining',
    name: 'Nahar Lining Works',
    tagline: 'Cement concrete and HDPE lining for irrigation channels per BIS/IS standards',
    hero_image: '/images/placeholder.svg',
    description:
      'Nahar lining prevents water seepage losses and extends canal lifespan by 3-5 times. We execute cement concrete and HDPE lining works for minor and major irrigation channels as per BIS/IS standards and departmental specifications.',
    importance_points: [
      'Unlined canals lose 30-50% of water to seepage before reaching fields - lining eliminates this loss and makes irrigation reliable.',
      'Concrete lining extends canal lifespan from 5-10 years (earthen) to 40-50 years, providing long-term asset value to departments.',
      'Smooth lined canals carry water faster with less turbulence, improving delivery to tail-end commands.',
      'Lining prevents weed growth on canal beds and banks, reducing annual O&M costs significantly.',
      'Central government schemes like PMKSY actively fund lining works as a priority intervention for water-use efficiency.',
    ],
    scope: [
      'Cement concrete canal lining (M20/M25)',
      'Pre-cast concrete lining panels',
      'HDPE / Geo-membrane lining',
      'Side slope and bed preparation',
      'Expansion joints and sealing',
      'Lining inspection and quality testing',
    ],
    technical_specs: [
      { label: 'Concrete Grade',          value: 'M20 (minor canals) / M25 (major canals)' },
      { label: 'Lining Thickness',        value: '75 mm bed / 75-100 mm side walls' },
      { label: 'Expansion Joint Spacing', value: 'Every 3 m along canal length' },
      { label: 'Curing Period',           value: 'Minimum 21 days - wet jute / polythene cover' },
      { label: 'HDPE Membrane Thickness', value: '0.5 mm - 1.0 mm as per discharge' },
      { label: 'Water Absorption (IS)',   value: '≤ 0.5% per IS 456:2000' },
    ],
    process: [
      { title: 'Bed Profiling',           description: 'Canal bed and side slope trimming to accurate dimensions as per lining cross-section drawing.' },
      { title: 'Sub-grade Preparation',   description: 'Thorough compaction of sub-grade, removal of soft spots, and geo-textile placement where specified.' },
      { title: 'Formwork Placement',      description: 'Steel shuttering fixed for defined lining thickness, properly braced and checked for alignment.' },
      { title: 'Concrete Pouring',        description: 'M20/M25 concrete poured and vibrated continuously to avoid cold joints - monitored for slump and w/c ratio.' },
      { title: 'Curing',                  description: 'Minimum 21 days wet curing using jute matting or polythene sheet - critical for durability.' },
      { title: 'Joint Sealing',           description: 'Bituminous compound or PVC strip joints sealed at specified intervals - tested for water tightness.' },
    ],
    machinery: [
      { name: 'Concrete Mixer 500L', type: 'mixer' },
      { name: 'Slipform Paver',      type: 'other' },
      { name: 'Plate Compactor',     type: 'compactor' },
      { name: 'Concrete Vibrators',  type: 'vibrator' },
      { name: 'Transit Mixer',       type: 'mixer' },
    ],
    related_project_slugs: [
      '2023-11-nahar-lining-banda',
      '2024-03-canal-redevelopment-chitrakoot',
    ],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What concrete grade is used for nahar lining?',
        answer: 'Minor irrigation channels typically use M20 grade concrete. Major canals with higher velocities use M25. Grade selection depends on departmental specification and discharge velocity.',
      },
      {
        question: 'How does lining improve irrigation efficiency?',
        answer: 'Concrete lining eliminates seepage (which accounts for 30-50% of water loss in earthen channels) and reduces surface roughness, increasing flow velocity and ensuring more water reaches the fields.',
      },
      {
        question: 'What is the lifespan of a lined canal?',
        answer: 'A properly constructed M20/M25 concrete-lined canal lasts 40-50 years with minimal maintenance, compared to 5-10 years for an unlined earthen canal.',
      },
      {
        question: 'Can lining be done on canals that carry water year-round?',
        answer: 'Yes, but it requires temporary flow diversion during the lining phase. We construct bypass earthen channels or work in sections during low-flow periods to maintain irrigation supply.',
      },
    ],
    client_types: [
      'Minor Irrigation Department',
      'Canal Revenue Division',
      'Jal Nigam',
      'PMKSY Programme Management Units',
    ],
  },

  // ── 3. Irrigation Infrastructure ───────────────────────────────────────────
  {
    slug: 'irrigation-infrastructure',
    name: 'Irrigation Infrastructure',
    tagline: 'Distribution channels, field channels, and last-mile irrigation connectivity',
    hero_image: '/images/placeholder.svg',
    description:
      'Complete irrigation infrastructure development including distribution channels, field channels, water control structures, and last-mile connectivity works ensuring water reaches agricultural fields efficiently.',
    importance_points: [
      'Last-mile irrigation infrastructure is often missing or broken - millions of acres of command area receive no water despite main canals being functional.',
      'Field channels and outlet structures determine whether individual farmers actually benefit from irrigation schemes.',
      'Water control structures prevent flooding and allow proportional distribution across farmer groups.',
      'Lift irrigation systems open up water access on elevated terrain where gravity flow is insufficient.',
      'Integrated distribution networks reduce conflicts over water allocation between upstream and downstream farmers.',
    ],
    scope: [
      'Distribution channel construction',
      'Field channel (rajwaha) works',
      'Water control structures (escapes, falls, regulators)',
      'Farm water outlet construction',
      'Lift irrigation pump house construction',
      'Pipe irrigation works',
    ],
    technical_specs: [
      { label: 'Channel Bed Slope',    value: '1:1000 to 1:5000 depending on terrain' },
      { label: 'Concrete Grade (RCC)', value: 'M20 minimum for all structures' },
      { label: 'Outlet Discharge',     value: 'Calibrated to command area allocation' },
      { label: 'Pipe Class (PVC)',      value: 'Class 4 / 6 as per IS 4985' },
      { label: 'Pump Motor Rating',    value: 'As per lift height and discharge - IS 9137' },
      { label: 'Flap Gate Material',   value: 'Cast iron / FRP as per specification' },
    ],
    process: [
      { title: 'Network Survey',         description: 'Alignment survey of distribution and field channel network, command area mapping and outlet location planning.' },
      { title: 'Channel Excavation',     description: 'Excavation to specified channel cross-section, bed formation and side slope grading.' },
      { title: 'Structure Construction', description: 'RCC casting of control structures - regulators, falls, escapes, and farm outlets.' },
      { title: 'Pipe Laying',            description: 'Trench excavation, pipe bedding, joint testing, and backfilling for pipe irrigation networks.' },
      { title: 'Trial Run',              description: 'Water flow testing through full network, checking outlet discharge and structure performance.' },
      { title: 'Handover',               description: 'As-built drawing preparation, measurement book completion, and formal handover to department.' },
    ],
    machinery: [
      { name: 'Excavator',     type: 'excavator' },
      { name: 'Concrete Mixer', type: 'mixer' },
      { name: 'Compactor',     type: 'compactor' },
      { name: 'Transit Mixer', type: 'mixer' },
    ],
    related_project_slugs: ['2023-06-irrigation-infrastructure-rewa'],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What is the difference between a main canal and a distribution channel?',
        answer: 'Main canals carry water from reservoir or diversion weir at large discharge. Distribution channels carry water from main canal to individual field outlets. We work on all levels, from secondary distribution channels down to farm outlet construction.',
      },
      {
        question: 'What is the last-mile irrigation problem?',
        answer: 'Many schemes have functional main canals but broken or incomplete field channels - water cannot reach the final 1-2 km to farms. We specialise in completing exactly this final link.',
      },
      {
        question: 'Can you construct lift irrigation systems?',
        answer: 'Yes. We construct pump house structures, sump chambers, rising main pipe networks, and distribution tanks for lift irrigation systems where gravity-fed channels are not feasible.',
      },
    ],
    client_types: [
      'Agriculture Department',
      'Jal Shakti Mission',
      'Rural Development Bodies',
      'Water User Associations',
    ],
  },

  // ── 4. Rural Redevelopment ──────────────────────────────────────────────────
  {
    slug: 'rural-redevelopment',
    name: 'Rural Redevelopment',
    tagline: 'Internal roads, drainage, community structures under government and NGO schemes',
    hero_image: '/images/placeholder.svg',
    description:
      'Comprehensive rural infrastructure improvement works including internal roads, drainage systems, community structures, and basic civic amenity construction under government and NGO-funded schemes.',
    importance_points: [
      'Rural roads are the single most transformative infrastructure investment - connecting villages to markets, schools, and hospitals.',
      'Open drainage in villages causes waterlogging, disease spread, and property damage during monsoon - proper drainage is a public health intervention.',
      'Community structures become lasting focal points for village governance and welfare delivery.',
      'Rural redevelopment creates local employment during construction and improves asset base valued by gram panchayats.',
      'PMGSY, MNREGS, and DRDA programmes make rural redevelopment works consistently funded and executed at scale.',
    ],
    scope: [
      'Village internal roads (CC / WBM / Gravel)',
      'Storm water drains and culverts',
      'Community hall / panchayat bhawan construction',
      'School / Anganwadi infrastructure',
      'Public toilet blocks',
      'Boundary walls and fencing',
    ],
    technical_specs: [
      { label: 'Road Base (WBM)',       value: 'IS 73 - 150 mm compacted layer' },
      { label: 'CC Road Grade',         value: 'M25 for village roads (PMGSY norms)' },
      { label: 'Drain Minimum Size',    value: '300 mm × 300 mm for internal drains' },
      { label: 'RCC Culvert',          value: 'M25 reinforced - 1:25 yr flood design' },
      { label: 'Masonry Mortar',        value: '1:6 cement:sand for boundary walls' },
      { label: 'Toilet Block Standard', value: 'SBM-G design specifications' },
    ],
    process: [
      { title: 'Village Survey',        description: 'Community consultation, work prioritisation, and layout marking in coordination with gram panchayat.' },
      { title: 'Subgrade Preparation',  description: 'Earthwork, levelling, and compaction of road formation and structure foundation areas.' },
      { title: 'Drainage First',        description: 'Drain and culvert construction before road works - ensures drainage integration and no future road cutting.' },
      { title: 'Road Construction',     description: 'Sub-base, base course, and wearing surface laid in correct sequence with compaction testing.' },
      { title: 'Structure Works',       description: 'Community structures built per approved drawings with reinforcement inspection before concrete pouring.' },
      { title: 'Handover',              description: 'Joint inspection with panchayat officials, photographic documentation, and defect liability period registration.' },
    ],
    machinery: [
      { name: 'JCB Mini Excavator', type: 'excavator' },
      { name: 'Concrete Mixer',     type: 'mixer' },
      { name: 'Plate Compactor',    type: 'compactor' },
      { name: 'Tipper Trucks',      type: 'truck' },
    ],
    related_project_slugs: ['2024-01-rural-redevelopment-satna'],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'Which government schemes fund rural redevelopment works?',
        answer: 'Key schemes include PMGSY (roads), MNREGS (labour-intensive works), SBM-G (sanitation), state government DRDA programmes, and 14th / 15th Finance Commission grants to gram panchayats.',
      },
      {
        question: 'Do you handle works funded by NGOs and development organisations?',
        answer: 'Yes. We have experience executing NGO-funded rural infrastructure with donor documentation requirements - milestone-based reporting, geo-tagged photographs, and beneficiary records.',
      },
      {
        question: 'Can you execute multiple villages in parallel?',
        answer: 'Yes. Our workforce structure supports concurrent execution across 3-5 village clusters with separate site supervisors for each cluster, while central management monitors progress and quality.',
      },
    ],
    client_types: [
      'Panchayati Raj Department',
      'DRDA',
      'NGO / Development Foundations',
      'CSR Partners',
    ],
  },

  // ── 5. Water Resource Projects ─────────────────────────────────────────────
  {
    slug: 'water-resource-projects',
    name: 'Water Resource Projects',
    tagline: 'Checkdams, ponds, percolation tanks, and overhead storage in water-stressed areas',
    hero_image: '/images/placeholder.svg',
    description:
      'Construction of water harvesting and storage structures including checkdams, ponds, percolation tanks, and overhead water tanks to improve water availability in water-stressed rural areas.',
    importance_points: [
      'Water scarcity in the Bundelkhand and central MP belt directly reduces agricultural yields and forces seasonal migration.',
      'Farm ponds and percolation tanks recharge groundwater during monsoon, stabilising water table for post-monsoon irrigation.',
      'Checkdams on seasonal streams convert episodic flood flows into storable water - extending effective availability by 3-4 months.',
      'Overhead tanks and community water supply structures are basic civic infrastructure under Jal Jeevan Mission.',
      'Every 100 farm ponds constructed can benefit 250-400 farming families through improved kharif and rabi irrigation.',
    ],
    scope: [
      'Checkdam construction (masonry / RCC)',
      'Farm pond construction',
      'Percolation tank construction',
      'Overhead water storage tanks',
      'Underground sump construction',
      'Recharge shaft construction',
    ],
    technical_specs: [
      { label: 'Checkdam Foundation',   value: 'Hard rock / dense soil - CWC norms' },
      { label: 'Masonry Grade',         value: 'CM 1:3 for hydraulic structures' },
      { label: 'Farm Pond Lining',      value: 'HDPE 0.5 mm or compacted clay' },
      { label: 'Overflow Weir Design',  value: '25-yr flood frequency discharge' },
      { label: 'OHT Design Code',       value: 'IS 3370 (water retaining structures)' },
      { label: 'Water Tightness Test',  value: '24-hr ponding test before handover' },
    ],
    process: [
      { title: 'Hydrological Survey',   description: 'Catchment area analysis, stream flow assessment, and siting study for checkdam / pond location.' },
      { title: 'Design Review',         description: 'Structural design verification per departmental specifications, storm return period, and soil bearing capacity.' },
      { title: 'Foundation Excavation', description: 'Excavation to hard strata, dewatering, and foundation preparation.' },
      { title: 'Masonry / RCC',         description: 'Sequential masonry or RCC construction with quality testing of materials and concrete batches.' },
      { title: 'Backfill & Compaction', description: 'Backfilling and compaction around structures, approach bank formation.' },
      { title: 'Water Test & Handover', description: 'Ponding test to confirm water tightness, departmental inspection, and formal handover.' },
    ],
    machinery: [
      { name: 'Excavator',      type: 'excavator' },
      { name: 'Concrete Mixer', type: 'mixer' },
      { name: 'Vibrators',      type: 'vibrator' },
      { name: 'Roller',         type: 'roller' },
    ],
    related_project_slugs: [],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What is the difference between a farm pond and a percolation tank?',
        answer: 'Farm ponds are on-farm storage structures for direct irrigation use. Percolation tanks allow water to seep into the ground, recharging groundwater for wells and bore wells nearby.',
      },
      {
        question: 'Which schemes fund checkdam and farm pond construction?',
        answer: 'Schemes include MNREGS, PMKSY (watershed component), WDC-PMKSY, NABARD-funded watershed projects, and state-specific Bundelkhand package works.',
      },
      {
        question: 'Can you construct overhead tanks for Jal Jeevan Mission?',
        answer: 'Yes. We construct elevated storage reservoirs (ESR), ground level storage reservoirs (GLSR), and associated rising mains for Jal Jeevan Mission village water supply schemes.',
      },
    ],
    client_types: [
      'Groundwater Department',
      'MNREGS Executing Agencies',
      'Watershed Development Authority',
      'NGOs (Water & Sanitation)',
    ],
  },

  // ── 6. Earthwork & Excavation ──────────────────────────────────────────────
  {
    slug: 'earthwork-excavation',
    name: 'Earthwork & Excavation',
    tagline: 'Heavy bulk earthwork, embankment formation, and site preparation at scale',
    hero_image: '/images/placeholder.svg',
    description:
      'Heavy earthwork and bulk excavation services for civil and infrastructure projects including site clearing, embankment formation, cut-and-fill operations, and subgrade preparation.',
    importance_points: [
      'Earthwork quality directly determines the long-term stability of canals, embankments, roads, and foundations - poor compaction causes settlement and failure.',
      'Own equipment fleet means no rental delays - our machines are on site and productive from Day 1 of mobilisation.',
      'Bulk earthwork requires experienced operators - improper geometry causes rework, material waste, and timeline overruns.',
      'Layer-by-layer compaction with proctor testing ensures earthwork meets IS specifications required for government acceptance.',
      'Efficient cut-fill management - optimal haul distances - directly controls project cost and schedule.',
    ],
    scope: [
      'Bulk excavation (rock and soil)',
      'Embankment / bund formation',
      'Filling and compaction',
      'Sub-grade preparation for roads',
      'Topsoil stripping and stockpiling',
      'Slope cutting and shaping',
    ],
    technical_specs: [
      { label: 'Compaction Standard',  value: 'IS 2720 Parts 7/8 - 95% Modified Proctor' },
      { label: 'Layer Thickness',      value: '150-200 mm loose, 125-175 mm compacted' },
      { label: 'Moisture Content',     value: 'OMC ± 2% as per field density test' },
      { label: 'Field Density Test',   value: 'Core cutter - every 500 m³' },
      { label: 'Excavation Tolerance', value: '±50 mm from specified level' },
      { label: 'Embankment Slope',     value: '1:2 (V:H) standard - modified per soil type' },
    ],
    process: [
      { title: 'Volume Calculation',    description: 'Topographic survey, cross-section plotting, and cut-fill volume calculation to optimise material movement.' },
      { title: 'Equipment Mobilisation', description: 'Deployment of excavators, tippers, grader, and compaction roller as per project scale.' },
      { title: 'Clearing & Stripping',  description: 'Removal of topsoil, vegetation, and unsuitable material from formation area.' },
      { title: 'Cut / Fill Operations', description: 'Excavation in cut zones, transport, and placing in fill zones - managed for minimum haul distance.' },
      { title: 'Layer Compaction',      description: 'Material placed in 150-200 mm layers, moisture conditioned, and roller-compacted to proctor standard.' },
      { title: 'Profile & Testing',     description: 'Final level check, field density testing, and departmental inspection before proceeding to next stage.' },
    ],
    machinery: [
      { name: 'Excavators (multi)', type: 'excavator' },
      { name: 'Bulldozer',          type: 'other' },
      { name: 'Tippers 10-20T',     type: 'truck' },
      { name: 'Motor Grader',       type: 'grader' },
      { name: 'Vibratory Roller',   type: 'roller' },
      { name: 'JCB',                type: 'excavator' },
    ],
    related_project_slugs: ['2022-09-earthwork-excavation-panna'],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What compaction standard do you follow for earthwork?',
        answer: 'We follow IS 2720 Parts 7 and 8, targeting 95% Modified Proctor Dry Density. Field density tests are conducted using core cutter or sand replacement method at specified intervals and results recorded in the quality register.',
      },
      {
        question: 'Can you mobilise quickly for urgent projects?',
        answer: 'Yes. Because we own our equipment fleet (excavators, tippers, rollers), we can mobilise within 3-5 days for projects within UP and MP - no rental lead time or third-party equipment availability issues.',
      },
      {
        question: 'Do you handle rock excavation?',
        answer: 'Yes, soft to medium rock excavation using rippers and hydraulic rock breaker attachments. For hard rock requiring blasting, we coordinate with licensed blasting contractors.',
      },
    ],
    client_types: [
      'Irrigation Department',
      'PWD',
      'Urban Local Bodies',
      'Private Infrastructure Developers',
    ],
  },

  // ── 7. Concrete Structures ─────────────────────────────────────────────────
  {
    slug: 'concrete-structures',
    name: 'Concrete Structures',
    tagline: 'RCC retaining walls, slabs, foundations, and water-retaining structures',
    hero_image: '/images/placeholder.svg',
    description:
      'Design-and-build or drawing-based RCC structure construction for civil and infrastructure projects including retaining walls, slabs, columns, beams, foundations, and water-retaining structures.',
    importance_points: [
      'Concrete structures in irrigation and rural infrastructure bear direct hydraulic and structural loads - quality of concrete and reinforcement placement is non-negotiable.',
      'Properly designed RCC structures outlast the asset lifecycle - poorly built ones fail within 5-7 years at far greater replacement cost.',
      'Cross-drainage structures are critical chokepoints - a failed culvert or aqueduct disrupts an entire canal command.',
      'Water-retaining structures must meet IS 3370 requirements for crack control - ordinary construction practice is insufficient.',
      'Our in-house bar bending, formwork, and concrete teams ensure single-point accountability from foundation to finishing.',
    ],
    scope: [
      'RCC retaining walls',
      'Foundation work (isolated, strip, raft)',
      'Columns, beams, slabs',
      'RCC water tanks and sumps',
      'Bridge culverts and causeways',
      'Canal cross-drainage structures',
    ],
    technical_specs: [
      { label: 'Concrete Grade',           value: 'M20 minimum / M25 for water-retaining' },
      { label: 'Rebar Grade',              value: 'Fe 500 TMT as per IS 1786' },
      { label: 'Cover (water-retaining)',  value: '40-50 mm as per IS 3370' },
      { label: 'Slump (structural)',       value: '75-125 mm' },
      { label: 'Water Cement Ratio',       value: '≤ 0.45 for water-retaining structures' },
      { label: 'Cube Strength Test',       value: 'Min 3 cubes per 5 cum - IS 456' },
    ],
    process: [
      { title: 'Drawing Review',           description: 'Structural drawing review, BOQ preparation, and reinforcement schedule extraction.' },
      { title: 'Formwork Fabrication',     description: 'Steel shuttering fabricated and assembled to specified dimensions, properly braced.' },
      { title: 'Reinforcement Placement',  description: 'Bar cutting, bending, and placement per drawing - spacing, cover, and lap lengths verified by site engineer.' },
      { title: 'Concrete Pouring',         description: 'Concrete poured continuously to avoid cold joints, vibrated thoroughly, and surface finished.' },
      { title: 'Curing',                   description: 'Minimum 14-28 days curing (28 days for water-retaining) using wet jute or curing compound.' },
      { title: 'Deshuttering & QC',        description: 'Formwork removed at specified age, surface defects repaired, cube test results reviewed and recorded.' },
    ],
    machinery: [
      { name: 'Transit Mixer',       type: 'mixer' },
      { name: 'Concrete Pump',       type: 'pump' },
      { name: 'Vibrators',           type: 'vibrator' },
      { name: 'Bar Bending Machine', type: 'other' },
      { name: 'Crane / Hydra',       type: 'other' },
    ],
    related_project_slugs: [],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What standards govern water-retaining concrete structures?',
        answer: 'IS 3370 (Code of Practice for Concrete Structures for Storage of Liquids). Key requirements: M25 minimum, w/c ≤ 0.45, cover ≥ 40 mm, and crack width ≤ 0.2 mm under service loads.',
      },
      {
        question: 'Do you use ready-mix concrete (RMC)?',
        answer: 'For large pour volumes we use transit mixer concrete. For remote sites without RMC supply, we use on-site weigh batching with design mix compliance testing.',
      },
      {
        question: 'How do you ensure reinforcement placement quality?',
        answer: 'Our site engineer verifies bar diameter, spacing, cover blocks, lap length, and tie wire quality before any pour. Photographs are taken at each stage as part of our quality documentation protocol.',
      },
    ],
    client_types: [
      'Irrigation Department',
      'Urban Local Bodies',
      'DRDA',
      'PWD',
    ],
  },

  // ── 8. Road & Drainage Works ───────────────────────────────────────────────
  {
    slug: 'road-drainage',
    name: 'Road & Drainage Works',
    tagline: 'Rural access roads, link roads, and stormwater drainage systems',
    hero_image: '/images/placeholder.svg',
    description:
      'Construction of rural access roads, link roads, and drainage systems connecting villages to main roads and ensuring stormwater management for rural and peri-urban communities.',
    importance_points: [
      'Rural road connectivity reduces post-harvest losses by enabling timely transport to mandis - every km of road is an economic multiplier.',
      'Proper drainage alongside roads prevents failure from waterlogging - unlined shoulders and absent drains cause rapid deterioration.',
      'PMGSY and CM Gram Sadak Yojana actively fund rural road construction for all-weather access to unconnected habitations.',
      'Stormwater drainage in rural settlements prevents waterborne disease and infrastructure damage during monsoon.',
      'Culvert and causeway construction on seasonal streams opens year-round connectivity in flood-prone rural zones.',
    ],
    scope: [
      'Gravel / WBM / CC roads',
      'Bituminous (BT) road works (surface dressing)',
      'Kerb and channel construction',
      'Storm water drains (brick / RCC)',
      'Culverts and causeways',
      'Road marking and signage',
    ],
    technical_specs: [
      { label: 'Sub-base (GSB)',        value: 'IS 63 - min 150 mm compacted' },
      { label: 'CC Road Grade',         value: 'M30 for PMGSY - M25 for panchayat roads' },
      { label: 'BT Surface Dressing',   value: 'SS-1 emulsion as per MORTH spec' },
      { label: 'Road Width (PMGSY)',    value: '3.75 m carriageway + 0.5 m earthen shoulders' },
      { label: 'Drain Minimum Depth',   value: '0.6 m × 0.45 m for village drains' },
      { label: 'Culvert Design Flood',  value: '1:25 year return period minimum' },
    ],
    process: [
      { title: 'Alignment Survey',     description: 'Road alignment staking, cross-section surveys, and drainage design in coordination with approved DPR.' },
      { title: 'Subgrade Preparation', description: 'Formation cutting, filling, and compaction to specified subgrade level and CBR requirements.' },
      { title: 'Drainage First',       description: 'Side drains, culverts, and cross-drainage structures built before road surface.' },
      { title: 'Base Course',          description: 'Granular sub-base (GSB), water bound macadam (WBM), or base course layers compacted in lifts.' },
      { title: 'Wearing Surface',      description: 'CC slab / BT surface dressing / gravel surface as per design - finished to grade and camber.' },
      { title: 'Final Inspection',     description: 'Roughness measurement, drain functionality check, and quality register completion before handover.' },
    ],
    machinery: [
      { name: 'Motor Grader',     type: 'grader' },
      { name: 'Vibratory Roller', type: 'roller' },
      { name: 'JCB',              type: 'excavator' },
      { name: 'Tipper Trucks',    type: 'truck' },
      { name: 'Concrete Mixer',   type: 'mixer' },
    ],
    related_project_slugs: [],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What is the difference between WBM, CC, and BT roads?',
        answer: 'WBM (Water Bound Macadam) uses graded stone consolidated with water - low cost, moderate durability. CC (Cement Concrete) slabs are durable for 20-30 years. BT (Bituminous) uses asphalt surface - smooth but requires periodic resurfacing.',
      },
      {
        question: 'Do you handle PMGSY-compliant construction?',
        answer: 'Yes. We are familiar with PMGSY technical specifications, DPR format, quality monitoring requirements, and documentation standards including online portal updates.',
      },
      {
        question: 'Can you construct causeways on seasonal streams?',
        answer: 'Yes. Vented causeways (with pipe or box vents) and low-level causeways are a regular part of our rural road works - designed for site-specific flood discharge.',
      },
    ],
    client_types: [
      'PWD',
      'PMGSY Programme Units',
      'Urban Local Bodies',
      'Gram Panchayat',
    ],
  },

  // ── 9. NGO Development Projects ────────────────────────────────────────────
  {
    slug: 'ngo-development',
    name: 'NGO Development Projects',
    tagline: 'Civil execution for development-sector projects - NGO, foundation, and CSR funded',
    hero_image: '/images/placeholder.svg',
    description:
      'Dedicated civil execution capability for development-sector projects funded by NGOs, foundations, CSR bodies, and bilateral aid programmes. We understand the reporting, documentation, and community engagement expectations of the development sector.',
    importance_points: [
      'Development sector projects require a contractor who understands both technical execution AND donor compliance - most civil contractors lack this combination.',
      'Milestone-based funding in NGO projects requires precise schedule management - delays block the next tranche of funding.',
      'Community-sensitive execution - engagement, participation, and grievance redressal - is essential for acceptance and sustainability.',
      'Geo-tagged documentation, beneficiary records, and before/after photographs are mandatory for most donor reports - we document all this systematically.',
      'CSR-funded projects require clear corporate accountability documentation that government projects do not - we are experienced with both.',
    ],
    scope: [
      'Community water infrastructure',
      'School / health centre construction',
      'Sanitation and WASH infrastructure',
      'Livelihood-linked civil works',
      'Geo-technical community structures',
    ],
    technical_specs: [
      { label: 'Documentation Standard',  value: 'Geo-tagged photographs every milestone' },
      { label: 'Reporting Format',        value: 'As per donor / NGO prescribed format' },
      { label: 'Beneficiary Records',     value: 'Maintained per community and structure' },
      { label: 'Structure Grade (WASH)',  value: 'SBM-G / JJM standard specifications' },
      { label: 'Community Participation', value: 'Shramdaan and participation logged' },
      { label: 'Defect Warranty',         value: '12 months post-handover standard' },
    ],
    process: [
      { title: 'Needs Assessment',      description: 'Community consultation, participatory rural appraisal (PRA) support, and technical needs mapping.' },
      { title: 'Design & Costing',      description: 'Technical design, BOQ preparation, and budget submission in donor-prescribed format.' },
      { title: 'Community Engagement',  description: 'Regular site meetings with community, grievance handling, and community labour integration.' },
      { title: 'Milestone Reporting',   description: 'Progress reports with geo-tagged photos, beneficiary records, and fund utilisation statements.' },
      { title: 'Quality Documentation', description: 'Site register, material test certificates, and compliance records maintained per donor checklist.' },
      { title: 'Community Handover',    description: 'Formal handover ceremony, usage training, and maintenance committee formation support.' },
    ],
    machinery: [
      { name: 'Mini Excavator', type: 'excavator' },
      { name: 'Concrete Mixer', type: 'mixer' },
      { name: 'Compactor',      type: 'compactor' },
    ],
    related_project_slugs: ['2024-01-rural-redevelopment-satna'],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'Do you have experience with international donor documentation requirements?',
        answer: 'Yes. We maintain geo-tagged site photographs, beneficiary count records, shramdaan logs, and financial utilisation statements as required by national and international donors.',
      },
      {
        question: 'Can you execute WASH projects?',
        answer: 'Yes. Our WASH execution includes community water supply structures, platform wells, toilet blocks (SBM design), soak pits, and school WASH facilities - all as per applicable government or donor standards.',
      },
      {
        question: 'How do you handle community sensitivity during construction?',
        answer: 'We hold community meetings before mobilisation, incorporate community labour where donor guidelines permit, address grievances within 48 hours, and provide regular progress updates to the community committee.',
      },
    ],
    client_types: [
      'National NGOs',
      'International Development Organisations',
      'CSR Teams',
      'Foundations',
    ],
  },

  // ── 10. Civil Maintenance Contracts ────────────────────────────────────────
  {
    slug: 'civil-maintenance',
    name: 'Civil Maintenance Contracts',
    tagline: 'AMC and O&M services for canals, roads, and government-owned infrastructure',
    hero_image: '/images/placeholder.svg',
    description:
      'Annual Maintenance Contracts (AMC) and Operation & Maintenance (O&M) services for government-owned infrastructure assets including canals, roads, and water structures. Regular inspection, repair, and reporting as per department standards.',
    importance_points: [
      'Government infrastructure depreciates rapidly without maintenance - a canal desilted annually costs 5× less over 10 years than one repaired after collapse.',
      'AMC contracts provide departments with predictable maintenance costs and a single accountable contractor for the full asset portfolio.',
      'Timely maintenance of canal structures prevents irrigation season failures that affect tens of thousands of farmers.',
      'Road pothole patching and drain desilting are simple works but require local presence, equipment, and fast response - we provide all three.',
      'O&M contracts improve department reporting compliance - our maintenance logs feed directly into departmental performance reports.',
    ],
    scope: [
      'Canal cleaning and desilting (annual)',
      'Canal bank maintenance',
      'Road pothole repair and patch work',
      'Structure inspection and reporting',
      'Emergency repair mobilisation',
      'Vegetation removal from canal beds',
    ],
    technical_specs: [
      { label: 'Inspection Frequency',  value: 'Monthly (routine) + quarterly (detailed)' },
      { label: 'Canal Desilting',       value: 'Full cross-section restoration to design depth' },
      { label: 'Pothole Patching',      value: 'Hot mix / cold mix bituminous - MORTH spec' },
      { label: 'Emergency Response',    value: 'Site mobilisation within 24-48 hours' },
      { label: 'Report Submission',     value: 'Monthly maintenance report - prescribed format' },
      { label: 'Asset Record',          value: 'Asset register updated after each cycle' },
    ],
    process: [
      { title: 'Baseline Survey',       description: 'Asset condition survey and baseline documentation - photographs, measurements, and defect mapping.' },
      { title: 'Maintenance Schedule',  description: 'Annual maintenance calendar prepared with monthly and seasonal activity scheduling.' },
      { title: 'Routine Maintenance',   description: 'Periodic inspections, minor repairs, vegetation removal, and drain desilting per schedule.' },
      { title: 'Preventive Works',      description: 'Pre-monsoon and post-monsoon preventive maintenance to protect assets during critical periods.' },
      { title: 'Emergency Response',    description: 'Rapid mobilisation for storm damage, breach events, and urgent repair requirements.' },
      { title: 'Annual Reporting',      description: 'Annual compliance report covering all maintenance works, expenditure, and asset condition.' },
    ],
    machinery: [
      { name: 'Desilting Tractor', type: 'other' },
      { name: 'JCB',               type: 'excavator' },
      { name: 'Tipper Trucks',     type: 'truck' },
      { name: 'Concrete Mixer',    type: 'mixer' },
    ],
    related_project_slugs: [],
    before_after: {
      before: '/images/placeholder.svg',
      after:  '/images/placeholder.svg',
    },
    gallery: [
      '/images/placeholder.svg',
      '/images/placeholder.svg',
    ],
    faqs: [
      {
        question: 'What is an AMC (Annual Maintenance Contract) for civil infrastructure?',
        answer: 'An AMC is a fixed-term contract where the contractor is responsible for all scheduled maintenance, inspection, minor repairs, and reporting for a defined set of assets over one or more financial years.',
      },
      {
        question: 'Do you handle emergency repairs under AMC?',
        answer: 'Yes. Our AMC contracts include an emergency mobilisation clause - we can deploy a JCB, workforce, and materials to site within 24-48 hours for breach events, storm damage, or urgent road failures.',
      },
      {
        question: 'Can you take O&M responsibility for canals in multiple districts?',
        answer: 'Yes. We have operational presence across multiple districts of UP and MP, with locally stationed equipment and site teams available for rapid response across the AMC area.',
      },
    ],
    client_types: [
      'State Irrigation Department',
      'PWD',
      'Urban Local Bodies',
      'Canal Revenue Department',
    ],
  },

]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) || null
}
