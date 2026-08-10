const SERVICES=[

{id:'pothole',title:'Potholes & street repair',icon:'🛣️',category:'roads',keywords:'pothole pavement road street damage debris asphalt curb gutter sidewalk',agency:'LA County Public Works',division:'Road Maintenance',description:'Report damaged pavement, roadway debris, and unsafe street conditions.',prepare:'Exact location, direction of travel, approximate size, and a photo if available.'},

{id:'speeding',title:'Traffic calming & street improvements',icon:'🚗',category:'roads',keywords:'speeding speed bump hump traffic study stop sign crosswalk signal traffic calming',agency:'LA County Public Works',division:'Traffic and Lighting',description:'Request traffic studies, signage, signals, crosswalk improvements, or consideration of traffic-calming measures.',prepare:'Street segment, times, observed conditions, requested improvement, and any neighborhood support.'},

{id:'graffiti',title:'Graffiti removal',icon:'🎨',category:'community',keywords:'graffiti vandalism paint wall cleanup tagging',agency:'LA County Public Works',division:'Graffiti Abatement',description:'Report graffiti and tagging for cleanup or referral.',prepare:'Photo, exact location, surface type, and whether threatening or offensive content is present.'},

{id:'dumping',title:'Illegal dumping',icon:'🗑️',category:'community',keywords:'dumping trash furniture waste bulky items debris mattress',agency:'LA County Public Works',division:'Environmental Programs',description:'Report abandoned furniture, dumped waste, or debris in public areas.',prepare:'Material type, approximate amount, exact location, and whether it creates an immediate hazard.'},

{id:'housing',title:'Rent & tenant help',icon:'🏠',category:'housing',keywords:'rent tenant landlord eviction housing repairs tenant protection mediation',agency:'LA County Department of Consumer and Business Affairs',division:'Housing and Tenant Protections',description:'Find tenant resources, mediation, rental assistance information, and housing support.',prepare:'Address, tenancy status, notices received, deadlines, and the type of help needed.'},

{id:'sheriff',title:'Non-emergency public safety',icon:'🛡️',category:'safety',keywords:'sheriff crime suspicious activity patrol safety non emergency theft drugs disturbance',agency:'Los Angeles County Sheriff’s Department',division:'Walnut/Diamond Bar Station',description:'Document and route non-emergency public-safety concerns involving Rowland Heights.',prepare:'Location, date and time, and a factual description of what you personally observed.'},

{id:'parking',title:'Parking enforcement',icon:'🚙',category:'roads',keywords:'parking blocked driveway abandoned vehicle overnight parking citation car sidewalk red curb',agency:'Los Angeles County Sheriff’s Department',division:'Walnut/Diamond Bar Station Parking Enforcement',description:'Report parking concerns in unincorporated Rowland Heights.',prepare:'Service address, vehicle description, license plate if safely visible, and the type of parking concern.'},

{id:'chp',title:'Traffic enforcement & dangerous driving',icon:'🚓',category:'safety',keywords:'chp reckless driving street racing speeding enforcement traffic motorcycle freeway dangerous driving dui',agency:'California Highway Patrol',division:'Santa Fe Springs Area',description:'Document recurring traffic-enforcement concerns, reckless driving, street racing, or other roadway safety issues appropriate for CHP review.',prepare:'Roadway, direction of travel, dates and times, vehicle descriptions if safely observed, and whether the problem is recurring.'},

{id:'schools',title:'Schools & youth services',icon:'🎓',category:'community',keywords:'school student youth education bus bullying district transportation enrollment',agency:'Rowland Unified School District',division:'District and School-Site Services',description:'Connect with school, student support, transportation, enrollment, and youth resources.',prepare:'School name, student grade if relevant, and the type of support needed.'},

{id:'utilities',title:'Utilities & outages',icon:'💡',category:'utilities',keywords:'power outage gas water utility streetlight electricity leak service',agency:'Relevant Utility Provider',division:'Customer and Emergency Services',description:'Identify the provider responsible for power, gas, water, streetlights, or other utility concerns.',prepare:'Service address, utility type, known provider, and whether there is an immediate hazard.'},

{id:'code',title:'Building & safety code concerns',icon:'🏗️',category:'community',keywords:'building code unsafe structure illegal construction unpermitted addition garage conversion electrical plumbing substandard property',agency:'LA County Public Works',division:'Building and Safety — Property Rehabilitation & Code Enforcement',description:'Document concerns involving unsafe buildings, suspected unpermitted construction, substandard structures, or building-code compliance.',prepare:'Property address, observable conditions, dates observed, photos from lawful locations if available, and any previous complaint or case number.'},

{id:'zoning',title:'Zoning & property-use concerns',icon:'📐',category:'community',keywords:'zoning land use business residential property use setback storage vehicles commercial use illegal use planning',agency:'LA County Planning',division:'Zoning Enforcement',description:'Document possible zoning or land-use violations on private property in unincorporated Rowland Heights.',prepare:'Property address, factual description of the observed use or condition, how long it has occurred, and any previous report information.'},

{id:'property',title:'Complex property / neighborhood concern',icon:'🏘️',category:'community',keywords:'property multiple violations nuisance neighborhood house illegal construction suspicious activity zoning building code ongoing problem',agency:'RHCCC Review',division:'Multi-Agency Routing',description:'Use this when one property appears to involve several different issues and you are not sure which agency should handle each part.',prepare:'Exact property address, factual observations, timeline, agencies already contacted, case numbers, and the outcome you are requesting.'},

{id:'propertytax',title:'Property tax questions',icon:'📄',category:'housing',keywords:'property tax taxes bill payment penalty secured unsecured tax collector treasurer delinquent',agency:'Los Angeles County Treasurer and Tax Collector',division:'Property Tax Services',description:'Find help with property-tax bills, payments, penalties, account questions, and related inquiries.',prepare:'Property address, Assessor Identification Number if available, tax year, notice or bill involved, and your question.'},

{id:'animal',title:'Animal control & animal services',icon:'🐾',category:'community',keywords:'animal control dog cat stray dangerous animal barking loose animal dead animal shelter',agency:'Los Angeles County Department of Animal Care and Control',division:'Baldwin Park Animal Care Center',description:'Route animal-control and animal-services concerns affecting Rowland Heights.',prepare:'Exact location, animal type and description, current situation, and whether there is an immediate safety concern.'},

{id:'homeless',title:'Homeless outreach & services',icon:'🤝',category:'housing',keywords:'homeless unhoused outreach shelter person experiencing homelessness services encampment assistance',agency:'Los Angeles Homeless Services Authority',division:'LA-HOP Outreach',description:'Request outreach for a person experiencing unsheltered homelessness who may need services. Crime, emergencies, dumping, and other municipal issues should be reported separately.',prepare:'Exact location, description of where the person can be found, when they are usually present, and any observed service needs.'},

{id:'parks',title:'Parks & recreation',icon:'🌳',category:'community',keywords:'park recreation community center playground field trail trees sports facility maintenance rowland heights park',agency:'Los Angeles County Department of Parks and Recreation',division:'Local Parks and Recreation Services',description:'Document park maintenance, recreation programming, facility, access, or community-center concerns.',prepare:'Park or facility name, exact location within the facility, description of the concern, and a photo if useful.'}

];


const AGENCIES=[

{name:'LA County Public Works',topic:'roads',icon:'🏗️',handles:['Road maintenance','Traffic and lighting','Building and safety','Graffiti','Illegal dumping'],description:'Handles infrastructure, streets, traffic engineering, environmental services, and building-safety matters in unincorporated communities.'},

{name:'LA County Planning',topic:'community',icon:'📐',handles:['Zoning enforcement','Land use','Property-use concerns','Planning'],description:'Administers and enforces zoning and land-use rules in unincorporated Los Angeles County.'},

{name:'Los Angeles County Sheriff’s Department — Walnut/Diamond Bar Station',topic:'safety',icon:'🛡️',handles:['Non-emergency calls','Patrol services','Crime reports','Community safety'],description:'Provides Sheriff’s Department law-enforcement services to Rowland Heights.'},

{name:'LASD Parking Enforcement',topic:'roads',icon:'🚙',handles:['Parking violations','Blocked driveways','Parking concerns','Vehicle parking complaints'],description:'Handles parking-enforcement concerns in unincorporated Los Angeles County through local Sheriff’s stations.'},

{name:'California Highway Patrol — Santa Fe Springs Area',topic:'safety',icon:'🚓',handles:['Traffic enforcement','Reckless driving','Street racing','Traffic safety','Unincorporated roadways'],description:'Provides traffic-management and enforcement services for Rowland Heights and surrounding roadways.'},

{name:'Rowland Unified School District',topic:'community',icon:'🎓',handles:['Schools','Student services','Transportation','Family resources'],description:'Provides K–12 education and district services for local students and families.'},

{name:'LA County Department of Consumer and Business Affairs',topic:'housing',icon:'🏠',handles:['Tenant protections','Mediation','Consumer help','Housing assistance information'],description:'Provides consumer and tenant assistance and dispute-resolution resources.'},

{name:'Los Angeles County Treasurer and Tax Collector',topic:'housing',icon:'📄',handles:['Property taxes','Tax bills','Payments','Penalties','Tax inquiries'],description:'Administers Los Angeles County property-tax collection and related taxpayer inquiries.'},

{name:'Los Angeles County Department of Animal Care and Control',topic:'community',icon:'🐾',handles:['Animal control','Stray animals','Dangerous animals','Animal shelters','Animal services'],description:'Provides animal-control and animal-care services to Rowland Heights through the Baldwin Park Animal Care Center.'},

{name:'Los Angeles Homeless Services Authority / LA-HOP',topic:'housing',icon:'🤝',handles:['Homeless outreach','Unsheltered outreach','Connection to services'],description:'Coordinates outreach requests for people experiencing unsheltered homelessness.'},

{name:'Los Angeles County Department of Parks and Recreation',topic:'community',icon:'🌳',handles:['Parks','Community centers','Recreation programs','Facility concerns'],description:'Operates County parks, recreation facilities, and community programs serving Rowland Heights.'},

{name:'211 LA',topic:'community',icon:'☎️',handles:['Food assistance','Shelter resources','Health resources','Family support','Social services'],description:'Connects residents with government and nonprofit social-service resources throughout Los Angeles County.'},

{name:'Utility Providers',topic:'utilities',icon:'💡',handles:['Power','Gas','Water','Outages','Service emergencies'],description:'The responsible utility depends on the service address and type of utility.'}

];


const REPORT_TYPES={

speeding:{
label:'Traffic calming or street-improvement request',
agency:'LA County Public Works — Traffic and Lighting',
questions:[
['streetSegment','Street segment involved','Example: Fullerton Road between Colima and Pathfinder'],
['problemTimes','When does the problem usually occur?','Morning commute, weekends, after school'],
['observedPattern','What have you observed?','Speeding, difficult crossing, poor visibility, recurring near-misses'],
['requestedMeasure','What improvement are you requesting?','Traffic study, signage, signal review, speed hump consideration'],
['support','Have neighbors expressed similar concerns?','Describe conversations, petitions, or other community support'],
['previousReport','Has this been reported before?','Agency contacted, approximate date, and case/request number if available']
]},

pothole:{
label:'Pothole or road damage',
agency:'LA County Public Works — Road Maintenance',
questions:[
['lane','Where in the roadway is it?','Lane, shoulder, curb area, direction of travel'],
['size','Approximate size and severity','Width, depth, or immediate hazard'],
['firstObserved','When did you first notice it?','Approximate date'],
['previousReport','Has this been reported before?','Agency and request number if known']
]},

graffiti:{
label:'Graffiti',
agency:'LA County Public Works — Graffiti Abatement',
questions:[
['surface','What surface is affected?','Wall, sign, utility box, bridge'],
['offensive','Is the content threatening or offensive?','Describe the nature without repeating slurs'],
['firstObserved','When did you notice it?','Approximate date']
]},

dumping:{
label:'Illegal dumping',
agency:'LA County Public Works — Environmental Programs',
questions:[
['material','What material was dumped?','Furniture, construction debris, household waste'],
['amount','Approximately how much material is present?','One item, several items, truckload, etc.'],
['blocking','Does it block a road or walkway?','Describe any immediate hazard'],
['firstObserved','When did you first observe it?','Approximate date and time']
]},

housing:{
label:'Housing or tenant concern',
agency:'LA County Department of Consumer and Business Affairs',
questions:[
['housingIssue','What type of housing issue is this?','Rent increase, eviction notice, repairs, discrimination'],
['deadline','Is there an upcoming deadline?','Notice date, hearing date, or required response'],
['landlordContact','Have you contacted the landlord or property manager?','Describe the response if applicable'],
['desiredOutcome','What assistance are you seeking?','Information, mediation, referral, or other help']
]},

sheriff:{
label:'Non-emergency public-safety concern',
agency:'Los Angeles County Sheriff’s Department — Walnut/Diamond Bar Station',
questions:[
['timeObserved','When did this occur?','Date and approximate time'],
['ongoing','Is the issue ongoing or recurring?','One-time incident, daily, weekends, etc.'],
['descriptionObserved','What did you personally observe?','Use factual details; avoid assumptions about motives or identities'],
['vehicleDescription','Were vehicles involved?','Description or plate number only if safely observed'],
['previousReport','Has law enforcement already been contacted?','Agency, date, and report/call number if known']
]},

parking:{
label:'Parking-enforcement concern',
agency:'LASD — Walnut/Diamond Bar Station Parking Enforcement',
questions:[
['parkingIssue','What type of parking problem is occurring?','Blocked driveway, prohibited parking, recurring violation, abandoned vehicle'],
['vehicle','Describe the vehicle','Make, model, color, and plate if safely visible'],
['frequency','How often does this occur?','One time, daily, overnight, specific days'],
['timeObserved','When is the vehicle usually present?','Dates and approximate times'],
['previousReport','Has this been reported before?','Date and citation/request number if known']
]},

chp:{
label:'Traffic-enforcement concern',
agency:'California Highway Patrol — Santa Fe Springs Area',
questions:[
['roadway','Where is the traffic problem occurring?','Street, intersection, or roadway segment'],
['behavior','What driving behavior have you observed?','Reckless driving, racing, repeated speeding, unsafe turns'],
['problemTimes','When does it usually occur?','Days and approximate times'],
['frequency','How often does it happen?','Daily, weekends, occasionally'],
['vehicleInfo','Are the same vehicles repeatedly involved?','Descriptions only if safely observed'],
['previousReport','Has this been reported before?','Agency, date, and reference number if known']
]},

schools:{
label:'School or youth-service concern',
agency:'Rowland Unified School District',
questions:[
['schoolName','Which school or program?','School name or district program'],
['studentNeed','What help is needed?','Transportation, student services, enrollment, safety'],
['contactMade','Have you contacted the school or district already?','Who you contacted and the response'],
['desiredOutcome','What outcome are you seeking?','Describe the assistance requested']
]},

utilities:{
label:'Utility or service concern',
agency:'Relevant Utility Provider',
questions:[
['utilityType','What utility is involved?','Electricity, gas, water, streetlight, other'],
['provider','Do you know the provider?','Utility company or water district if known'],
['serviceStatus','What is happening?','Outage, leak, damaged equipment, billing/service issue'],
['hazard','Is there an immediate hazard?','Describe without approaching damaged equipment'],
['previousReport','Have you contacted the provider?','Date and service/request number if known']
]},

code:{
label:'Building or safety code concern',
agency:'LA County Public Works — Building and Safety / Property Rehabilitation & Code Enforcement',
questions:[
['propertyAddress','What property is involved?','Exact street address if known'],
['observedConditions','What conditions have you personally observed?','Unsafe structure, major alterations, exposed wiring, structural damage, suspected unpermitted construction'],
['constructionActivity','Is construction or alteration occurring?','Describe visible work and when it occurs'],
['timeline','How long has the condition existed?','Approximate dates or duration'],
['publicImpact','How is the condition affecting the neighborhood?','Safety, access, debris, noise, other observable impact'],
['previousAgency','Have you reported this to any agency before?','Agency name and approximate date'],
['caseNumber','Do you have an existing case or complaint number?','Enter the number if available'],
['desiredOutcome','What would you like RHCCC to help clarify or follow up on?','Inspection status, correct agency, follow-up, other']
]},

zoning:{
label:'Zoning or property-use concern',
agency:'LA County Planning — Zoning Enforcement',
questions:[
['propertyAddress','What property is involved?','Exact street address if known'],
['observedUse','What property use or condition are you concerned about?','Commercial activity, outdoor storage, land use, setbacks, vehicle storage, other observable activity'],
['timeline','How long has this been occurring?','Approximate dates or duration'],
['frequency','How often does it occur?','Constant, daily, weekends, occasional'],
['publicImpact','What observable impact does it have?','Traffic, noise, access, neighborhood compatibility, other'],
['previousAgency','Have you contacted LA County Planning or another agency?','Agency and approximate date'],
['caseNumber','Do you have an existing enforcement case number?','Enter it if known']
]},

property:{
label:'Complex property or neighborhood concern',
agency:'RHCCC Review — Multi-Agency Routing',
questions:[
['propertyAddress','What property or properties are involved?','Exact addresses if known'],
['concerns','List the conditions or activities you have personally observed','Separate each concern if several different issues are involved'],
['timeline','How long have you observed these issues?','Approximate dates or duration'],
['frequency','Are the issues ongoing or recurring?','Describe how often they occur'],
['agenciesContacted','Which agencies have already been contacted?','Planning, Building and Safety, Sheriff, Public Works, CHP, other'],
['caseNumbers','List any existing case, service-request, or report numbers','Include the agency associated with each number'],
['publicImpact','How is this affecting the surrounding community?','Safety, traffic, noise, property conditions, access, other observable impacts'],
['desiredOutcome','What would you like RHCCC to do?','Help identify agencies, request status, document the concern, consider a letter or resolution, other']
]},

propertytax:{
label:'Property-tax question or concern',
agency:'Los Angeles County Treasurer and Tax Collector',
questions:[
['taxType','What type of tax issue is involved?','Secured property tax, unsecured tax, penalty, payment, tax-defaulted property'],
['taxYear','What tax year is involved?','Example: 2025–26'],
['ain','Assessor Identification Number, if available','AIN from the property-tax bill'],
['notice','Did you receive a bill or notice?','Describe the document and date'],
['previousContact','Have you contacted the Treasurer and Tax Collector?','Date and inquiry/reference number if available'],
['desiredOutcome','What information or assistance are you seeking?','Explain the question or problem']
]},

animal:{
label:'Animal-control or animal-services concern',
agency:'LA County Department of Animal Care and Control — Baldwin Park Animal Care Center',
questions:[
['animalType','What type of animal is involved?','Dog, cat, wildlife, livestock, other'],
['animalDescription','Describe the animal','Color, size, breed if known'],
['situation','What is happening?','Loose animal, stray, dangerous behavior, welfare concern, barking, other'],
['currentLocation','Where is the animal now?','Address or nearest cross streets'],
['ongoing','Is this an ongoing or recurring concern?','Describe frequency'],
['previousReport','Have Animal Care and Control or another agency been contacted?','Date and case/reference number if known']
]},

homeless:{
label:'Homeless outreach request',
agency:'Los Angeles Homeless Services Authority — LA-HOP',
questions:[
['locationDetail','Where can the person or people usually be found?','Specific location, landmark, side of street, or nearby business'],
['numberPeople','Approximately how many people need outreach?','Best estimate'],
['schedule','When are they usually at this location?','Days and approximate times'],
['serviceNeed','What makes you believe outreach may be helpful?','Observed need for shelter, services, medical support, etc.'],
['previousOutreach','Has an outreach request been made before?','Approximate date and reference information if known'],
['additionalDetails','What would help an outreach team locate the person?','Description of location or other useful non-sensitive details']
]},

parks:{
label:'Park, recreation, or community-center concern',
agency:'Los Angeles County Department of Parks and Recreation',
questions:[
['facility','Which park or facility is involved?','Rowland Heights Park, Community Center, trail, field, other'],
['facilityArea','Where within the facility is the issue?','Playground, restroom, field, parking lot, building, trail'],
['parkIssue','What is the concern?','Maintenance, damaged equipment, programming, access, facility condition'],
['firstObserved','When did you first notice it?','Approximate date'],
['previousReport','Have park staff already been notified?','Date and response if known'],
['desiredOutcome','What action or information are you requesting?','Describe the desired result']
]},

other:{
label:'Other or not sure',
agency:'RHCCC Navigation Assistance',
questions:[
['issueCategory','What general topic does this concern involve?','Property, traffic, public safety, government service, business, neighborhood condition, other'],
['timeline','How long has the issue been occurring?','Approximate dates or duration'],
['frequency','Is it ongoing or recurring?','One-time, daily, weekly, occasional'],
['observations','What have you personally observed?','Provide factual details and avoid assumptions'],
['agenciesContacted','Have you already contacted any agency or organization?','List who you contacted and when'],
['caseNumbers','Do you have any existing case, report, or service-request numbers?','List them here'],
['desiredOutcome','What outcome are you seeking?','Explain what you would like RHCCC to help accomplish']
]}

};


// Compatibility with any older links that used these names.
REPORT_TYPES.safety = REPORT_TYPES.sheriff;
REPORT_TYPES.school = REPORT_TYPES.schools;


// Events are now managed through the separate Google Sheets events feed.
const EVENTS=[];
