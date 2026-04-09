// ─── Saved topic from localStorage ───────────────────────────────────────────
const savedSubtopic = localStorage.getItem("subtopic");
const savedCategory = localStorage.getItem("category");

// Update header to show selected topic
const topicTitle = document.querySelector(".topic");
if (savedSubtopic) {
  topicTitle.textContent = savedSubtopic;
}

// ─── Logo rotation ────────────────────────────────────────────────────────────
const logo = [
  { image: "images/images (7).jpeg" },
  { image: "images/Coat_of_arms_of_Ghana.svg" },
];

const logobox = document.getElementById("logoImage");
let currentLogoIndex = 0;

setInterval(updateLogo, 5000);

function updateLogo() {
  logobox.style.opacity = "0";
  setTimeout(() => {
    currentLogoIndex = (currentLogoIndex + 1) % logo.length;
    logobox.src = logo[currentLogoIndex].image;
    logobox.style.opacity = "1";
  }, 500);
}

// ─── Question Banks ───────────────────────────────────────────────────────────
const ConstitutionTest = [
  {
    question: "What is the main role of the Ghana Immigration Service?",
    options: [
      { text: "Collect taxes", correct: false },
      { text: "Control movement of people in and out of the country", correct: true },
      { text: "Build roads", correct: false },
      { text: "Manage schools", correct: false },
    ],
  },
  {
    question: "The Ghana Immigration Service operates under which ministry?",
    options: [
      { text: "Ministry of Education", correct: false },
      { text: "Ministry of Health", correct: false },
      { text: "Ministry of Interior", correct: true },
      { text: "Ministry of Finance", correct: false },
    ],
  },
  {
    question: "Which document is required for international travel?",
    options: [
      { text: "Volta ID", correct: false },
      { text: "Birth Certificate", correct: false },
      { text: "Passport", correct: true },
      { text: "School ID", correct: false },
    ],
  },
  {
    question: "What is the capital city of Ghana?",
    options: [
      { text: "Kumasi", correct: false },
      { text: "Takoradi", correct: false },
      { text: "Tamale", correct: false },
      { text: "Accra", correct: true },
    ],
  },
  {
    question: "Which of the following is a major duty of immigration officers?",
    options: [
      { text: "Teaching in school", correct: false },
      { text: "Issuing drivers licenses", correct: false },
      { text: "Border patrol and security", correct: true },
      { text: "Farming", correct: false },
    ],
  },
  {
    question: "Which currency is used in Ghana?",
    options: [
      { text: "Naira", correct: false },
      { text: "Dollar", correct: false },
      { text: "Cedi", correct: true },
      { text: "Rand", correct: false },
    ],
  },
  {
    question: "Ghana gained independence in which year?",
    options: [
      { text: "1950", correct: false },
      { text: "1957", correct: true },
      { text: "1960", correct: false },
      { text: "1965", correct: false },
    ],
  },
  {
    question: "Which of these is a major border point in Ghana?",
    options: [
      { text: "Tema Harbour", correct: false },
      { text: "Accra International Airport", correct: false },
      { text: "Aflao Border", correct: false },
      { text: "All the above", correct: true },
    ],
  },
  {
    question: "What is the primary function of a visa?",
    options: [
      { text: "To serve as money", correct: false },
      { text: "To allow legal entry to a country", correct: true },
      { text: "To replace a passport", correct: false },
      { text: "To identify citizens only", correct: false },
    ],
  },
  {
    question: "Which uniform is associated with the Ghana Immigration Service?",
    options: [
      { text: "Blue camouflage", correct: false },
      { text: "White lab coat", correct: false },
      { text: "Khaki uniform", correct: true },
      { text: "Black robe", correct: false },
    ],
  },
];

const CitizenshipTest = [
  {
    question: "What does citizenship by birth mean in Ghana?",
    options: [
      { text: "Being born in any African country", correct: false },
      { text: "Being born to at least one Ghanaian parent", correct: true },
      { text: "Living in Ghana for 5 years", correct: false },
      { text: "Owning property in Ghana", correct: false },
    ],
  },
  {
    question: "Which law governs citizenship in Ghana?",
    options: [
      { text: "Immigration Act, 2000", correct: false },
      { text: "Citizenship Act, 2000", correct: true },
      { text: "Foreign Exchange Act, 2006", correct: false },
      { text: "Security Agencies Act, 1996", correct: false },
    ],
  },
  {
    question: "How many years must a foreign spouse of a Ghanaian citizen reside before applying for citizenship?",
    options: [
      { text: "2 years", correct: false },
      { text: "5 years", correct: true },
      { text: "10 years", correct: false },
      { text: "1 year", correct: false },
    ],
  },
  {
    question: "Can a Ghanaian citizen hold dual citizenship?",
    options: [
      { text: "No, it is strictly prohibited", correct: false },
      { text: "Yes, under certain conditions", correct: true },
      { text: "Only if the other country is African", correct: false },
      { text: "Only for children under 18", correct: false },
    ],
  },
  {
    question: "Which body processes citizenship applications in Ghana?",
    options: [
      { text: "Ghana Revenue Authority", correct: false },
      { text: "Ministry of Foreign Affairs", correct: false },
      { text: "Ghana Immigration Service", correct: true },
      { text: "Electoral Commission", correct: false },
    ],
  },
  {
    question: "What is 'naturalization' in the context of citizenship?",
    options: [
      { text: "Being born a citizen", correct: false },
      { text: "Acquiring citizenship through legal process as a foreigner", correct: true },
      { text: "Losing citizenship", correct: false },
      { text: "Renewing a passport", correct: false },
    ],
  },
  {
    question: "A child born outside Ghana to Ghanaian parents is considered?",
    options: [
      { text: "A foreigner", correct: false },
      { text: "Stateless", correct: false },
      { text: "A Ghanaian citizen by descent", correct: true },
      { text: "A resident only", correct: false },
    ],
  },
  {
    question: "Which of these can lead to loss of Ghanaian citizenship?",
    options: [
      { text: "Traveling abroad", correct: false },
      { text: "Voluntarily acquiring another citizenship", correct: true },
      { text: "Getting married", correct: false },
      { text: "Changing your name", correct: false },
    ],
  },
  {
    question: "What document proves Ghanaian citizenship?",
    options: [
      { text: "Driver's license", correct: false },
      { text: "Voter ID card", correct: false },
      { text: "Certificate of citizenship or passport", correct: true },
      { text: "Birth certificate alone", correct: false },
    ],
  },
  {
    question: "The Citizenship Act of Ghana was enacted in which year?",
    options: [
      { text: "1992", correct: false },
      { text: "1996", correct: false },
      { text: "2000", correct: true },
      { text: "2006", correct: false },
    ],
  },
];

const ImmigrationActTest = [
  {
    question: "The Ghana Immigration Act was enacted in which year?",
    options: [
      { text: "1992", correct: false },
      { text: "1996", correct: false },
      { text: "2000", correct: true },
      { text: "2006", correct: false },
    ],
  },
  {
    question: "What is a 'prohibited immigrant' under the Immigration Act?",
    options: [
      { text: "A tourist visiting Ghana", correct: false },
      { text: "A person deemed unfit to enter or remain in Ghana", correct: true },
      { text: "A diplomat with immunity", correct: false },
      { text: "A Ghanaian returning from abroad", correct: false },
    ],
  },
  {
    question: "Which type of visa allows a foreigner to work in Ghana?",
    options: [
      { text: "Tourist visa", correct: false },
      { text: "Transit visa", correct: false },
      { text: "Work permit / employment visa", correct: true },
      { text: "Student visa", correct: false },
    ],
  },
  {
    question: "What is the role of an immigration officer at a port of entry?",
    options: [
      { text: "Collecting customs duties", correct: false },
      { text: "Examining and admitting or refusing entry to persons", correct: true },
      { text: "Selling travel insurance", correct: false },
      { text: "Issuing national ID cards", correct: false },
    ],
  },
  {
    question: "A foreigner who overstays their visa in Ghana is liable to?",
    options: [
      { text: "A warning letter only", correct: false },
      { text: "Arrest, detention, and deportation", correct: true },
      { text: "Community service", correct: false },
      { text: "A fine only", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a port of entry recognized under the Immigration Act?",
    options: [
      { text: "Kotoka International Airport", correct: false },
      { text: "Aflao Border", correct: false },
      { text: "Tema Port", correct: false },
      { text: "A private farm road", correct: true },
    ],
  },
  {
    question: "An ECOWAS citizen entering Ghana is generally allowed to stay for how long without a visa?",
    options: [
      { text: "30 days", correct: false },
      { text: "60 days", correct: false },
      { text: "90 days", correct: true },
      { text: "180 days", correct: false },
    ],
  },
  {
    question: "Who has the power to declare a person a prohibited immigrant?",
    options: [
      { text: "The President of Ghana", correct: false },
      { text: "The Minister of Interior", correct: true },
      { text: "The Chief Justice", correct: false },
      { text: "The Director of GRA", correct: false },
    ],
  },
  {
    question: "What does 'deportation' mean under immigration law?",
    options: [
      { text: "Granting permanent residency", correct: false },
      { text: "Formally removing a person from the country", correct: true },
      { text: "Issuing a new visa", correct: false },
      { text: "Transferring a person to another prison", correct: false },
    ],
  },
  {
    question: "Which document does the Immigration Service issue to allow a foreigner to reside in Ghana?",
    options: [
      { text: "Voter ID", correct: false },
      { text: "Residence Permit", correct: true },
      { text: "Birth Certificate", correct: false },
      { text: "NHIS Card", correct: false },
    ],
  },
];

// Security Law question banks
const AntiTerrorismTest = [
  {
    question: "Ghana's Anti-Terrorism Act was enacted in which year?",
    options: [
      { text: "2000", correct: false },
      { text: "2004", correct: false },
      { text: "2008", correct: true },
      { text: "2012", correct: false },
    ],
  },
  {
    question: "Under the Anti-Terrorism Act, which body coordinates counter-terrorism efforts in Ghana?",
    options: [
      { text: "Ghana Police Service", correct: false },
      { text: "National Security Council", correct: true },
      { text: "Ghana Armed Forces", correct: false },
      { text: "Ghana Revenue Authority", correct: false },
    ],
  },
  {
    question: "Which of the following is considered a terrorist act under the Act?",
    options: [
      { text: "Peaceful protest", correct: false },
      { text: "Bombing a public building to intimidate the government", correct: true },
      { text: "A strike by workers", correct: false },
      { text: "Filing a court case", correct: false },
    ],
  },
  {
    question: "The Anti-Terrorism Regulations of Ghana were issued in which year?",
    options: [
      { text: "2008", correct: false },
      { text: "2010", correct: false },
      { text: "2012", correct: true },
      { text: "2015", correct: false },
    ],
  },
  {
    question: "Financing terrorism in Ghana is punishable by?",
    options: [
      { text: "A fine only", correct: false },
      { text: "Community service", correct: false },
      { text: "Imprisonment", correct: true },
      { text: "Loss of voting rights", correct: false },
    ],
  },
  {
    question: "Which of these actions would NOT constitute terrorism under the Act?",
    options: [
      { text: "Hijacking an aircraft", correct: false },
      { text: "Attacking critical infrastructure", correct: false },
      { text: "Holding a licensed political rally", correct: true },
      { text: "Taking hostages to influence government policy", correct: false },
    ],
  },
  {
    question: "Under the Act, banks are required to report suspicious transactions linked to terrorism to?",
    options: [
      { text: "The President directly", correct: false },
      { text: "Financial Intelligence Centre (FIC)", correct: true },
      { text: "The Electoral Commission", correct: false },
      { text: "Ghana Bar Association", correct: false },
    ],
  },
  {
    question: "The Anti-Terrorism Act applies to acts committed?",
    options: [
      { text: "Only within Ghana's borders", correct: false },
      { text: "Only outside Ghana", correct: false },
      { text: "Both within and outside Ghana in relevant circumstances", correct: true },
      { text: "Only by foreign nationals", correct: false },
    ],
  },
  {
    question: "Which ministry has primary oversight of the Anti-Terrorism Act?",
    options: [
      { text: "Ministry of Finance", correct: false },
      { text: "Ministry of Interior", correct: true },
      { text: "Ministry of Foreign Affairs", correct: false },
      { text: "Ministry of Justice", correct: false },
    ],
  },
  {
    question: "A person convicted of a terrorist act in Ghana faces a maximum sentence of?",
    options: [
      { text: "5 years", correct: false },
      { text: "10 years", correct: false },
      { text: "20 years", correct: false },
      { text: "Life imprisonment", correct: true },
    ],
  },
];

const CriminalOffencesTest = [
  {
    question: "The Criminal Offences Act of Ghana was enacted in which year?",
    options: [
      { text: "1957", correct: false },
      { text: "1960", correct: true },
      { text: "1972", correct: false },
      { text: "1992", correct: false },
    ],
  },
  {
    question: "Under the Criminal Offences Act, what is the legal term for intentionally causing the death of another?",
    options: [
      { text: "Manslaughter", correct: false },
      { text: "Murder", correct: true },
      { text: "Assault", correct: false },
      { text: "Battery", correct: false },
    ],
  },
  {
    question: "Which of the following is a first-degree felony under Ghanaian criminal law?",
    options: [
      { text: "Petty theft", correct: false },
      { text: "Murder", correct: true },
      { text: "Trespassing", correct: false },
      { text: "Littering", correct: false },
    ],
  },
  {
    question: "What does 'mens rea' mean in criminal law?",
    options: [
      { text: "The physical act of the crime", correct: false },
      { text: "The guilty mind or criminal intent", correct: true },
      { text: "The evidence presented in court", correct: false },
      { text: "The verdict of the jury", correct: false },
    ],
  },
  {
    question: "Robbery differs from theft in that robbery involves?",
    options: [
      { text: "Stealing from a shop", correct: false },
      { text: "Use of force or threat", correct: true },
      { text: "Stealing at night only", correct: false },
      { text: "Stealing government property", correct: false },
    ],
  },
  {
    question: "Under the Act, the age of criminal responsibility in Ghana is?",
    options: [
      { text: "7 years", correct: false },
      { text: "12 years", correct: false },
      { text: "Under 12 cannot be held criminally responsible", correct: true },
      { text: "18 years", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a defense recognized under the Criminal Offences Act?",
    options: [
      { text: "Self-defense", correct: false },
      { text: "Insanity", correct: false },
      { text: "Wealth and social status", correct: true },
      { text: "Mistake of fact", correct: false },
    ],
  },
  {
    question: "Forging a government document in Ghana is classified as?",
    options: [
      { text: "A misdemeanor", correct: false },
      { text: "A felony", correct: true },
      { text: "A civil wrong only", correct: false },
      { text: "Not an offense", correct: false },
    ],
  },
  {
    question: "Which court in Ghana handles serious criminal offences like murder?",
    options: [
      { text: "District Court", correct: false },
      { text: "High Court", correct: true },
      { text: "Community Tribunal", correct: false },
      { text: "Family Court", correct: false },
    ],
  },
  {
    question: "What is the term for an attempt to commit a crime that was not completed?",
    options: [
      { text: "Conspiracy", correct: false },
      { text: "Abetment", correct: false },
      { text: "Criminal attempt", correct: true },
      { text: "Accessory", correct: false },
    ],
  },
];

const SecurityAgenciesTest = [
  {
    question: "The Security and Intelligence Agencies Act was enacted in which year?",
    options: [
      { text: "1992", correct: false },
      { text: "1994", correct: false },
      { text: "1996", correct: true },
      { text: "2000", correct: false },
    ],
  },
  {
    question: "Which body is the highest security coordinating authority in Ghana?",
    options: [
      { text: "Ghana Police Service", correct: false },
      { text: "National Security Council", correct: true },
      { text: "Ghana Armed Forces", correct: false },
      { text: "Bureau of National Investigations (BNI)", correct: false },
    ],
  },
  {
    question: "The Bureau of National Investigations (BNI) operates under which body?",
    options: [
      { text: "Ministry of Defence", correct: false },
      { text: "Office of the President / National Security", correct: true },
      { text: "Ministry of Interior", correct: false },
      { text: "Ghana Police Service", correct: false },
    ],
  },
  {
    question: "Who chairs the National Security Council of Ghana?",
    options: [
      { text: "The Chief Justice", correct: false },
      { text: "The Speaker of Parliament", correct: false },
      { text: "The President", correct: true },
      { text: "The Minister of Interior", correct: false },
    ],
  },
  {
    question: "Which agency is primarily responsible for external intelligence gathering in Ghana?",
    options: [
      { text: "Ghana Police Service", correct: false },
      { text: "Research Department", correct: true },
      { text: "Ghana Immigration Service", correct: false },
      { text: "NACOB", correct: false },
    ],
  },
  {
    question: "What does EOCO stand for in Ghana's security landscape?",
    options: [
      { text: "Economic and Organized Crime Office", correct: true },
      { text: "External Operations and Criminal Office", correct: false },
      { text: "Emergency Operations and Control Office", correct: false },
      { text: "Electoral and Operations Control Office", correct: false },
    ],
  },
  {
    question: "The National Security Act empowers security agencies to?",
    options: [
      { text: "Arrest and detain citizens without any legal basis indefinitely", correct: false },
      { text: "Gather intelligence and protect national security within the law", correct: true },
      { text: "Override decisions of the Supreme Court", correct: false },
      { text: "Collect taxes on behalf of GRA", correct: false },
    ],
  },
  {
    question: "Which of these is NOT one of Ghana's security and intelligence agencies?",
    options: [
      { text: "BNI", correct: false },
      { text: "Research Department", correct: false },
      { text: "Ghana Revenue Authority", correct: true },
      { text: "Defence Intelligence", correct: false },
    ],
  },
  {
    question: "Leaking classified national security information in Ghana is?",
    options: [
      { text: "Permitted if done to the press", correct: false },
      { text: "A criminal offence", correct: true },
      { text: "Only a disciplinary matter", correct: false },
      { text: "Legal if the person has retired", correct: false },
    ],
  },
  {
    question: "The Narcotics Control Commission (formerly NACOB) falls under which ministry?",
    options: [
      { text: "Ministry of Finance", correct: false },
      { text: "Ministry of Interior", correct: true },
      { text: "Ministry of Health", correct: false },
      { text: "Ministry of Foreign Affairs", correct: false },
    ],
  },
];

// Investment Law question banks
const ForeignExchangeTest = [
  {
    question: "Ghana's Foreign Exchange Act was enacted in which year?",
    options: [
      { text: "2000", correct: false },
      { text: "2003", correct: false },
      { text: "2006", correct: true },
      { text: "2010", correct: false },
    ],
  },
  {
    question: "Which institution regulates foreign exchange transactions in Ghana?",
    options: [
      { text: "Ghana Revenue Authority", correct: false },
      { text: "Bank of Ghana", correct: true },
      { text: "Securities and Exchange Commission", correct: false },
      { text: "Ministry of Finance", correct: false },
    ],
  },
  {
    question: "Under the Foreign Exchange Act, who is a 'resident' for forex purposes?",
    options: [
      { text: "Only Ghanaian citizens", correct: false },
      { text: "Anyone living or operating in Ghana for a defined period", correct: true },
      { text: "Only government employees", correct: false },
      { text: "Only those with a Ghanaian passport", correct: false },
    ],
  },
  {
    question: "Capital transfers out of Ghana by foreign investors require?",
    options: [
      { text: "No approval at all", correct: false },
      { text: "Compliance with Bank of Ghana guidelines", correct: true },
      { text: "Parliamentary approval", correct: false },
      { text: "Presidential decree", correct: false },
    ],
  },
  {
    question: "Which of these is a violation under the Foreign Exchange Act?",
    options: [
      { text: "Opening a foreign currency account with an approved bank", correct: false },
      { text: "Repatriating profits legally through a bank", correct: false },
      { text: "Trading forex without a licence", correct: true },
      { text: "Converting cedis to dollars at a bank", correct: false },
    ],
  },
  {
    question: "Foreign investors in Ghana are guaranteed the right to?",
    options: [
      { text: "Pay no taxes", correct: false },
      { text: "Repatriate capital and profits freely within the law", correct: true },
      { text: "Own land without restrictions", correct: false },
      { text: "Bypass immigration requirements", correct: false },
    ],
  },
  {
    question: "Forex bureaus in Ghana are licensed by?",
    options: [
      { text: "Ghana Investment Promotion Centre", correct: false },
      { text: "Bank of Ghana", correct: true },
      { text: "Ministry of Trade", correct: false },
      { text: "Ghana Chamber of Commerce", correct: false },
    ],
  },
  {
    question: "What is the purpose of the Foreign Exchange Act?",
    options: [
      { text: "To ban foreign currency use in Ghana", correct: false },
      { text: "To regulate foreign exchange dealings and protect the cedi", correct: true },
      { text: "To set income tax rates for foreigners", correct: false },
      { text: "To control immigration", correct: false },
    ],
  },
  {
    question: "A person convicted of dealing in foreign exchange without a licence faces?",
    options: [
      { text: "Only a warning", correct: false },
      { text: "Fines and/or imprisonment", correct: true },
      { text: "Deportation only", correct: false },
      { text: "Loss of voting rights", correct: false },
    ],
  },
  {
    question: "Which account allows a Ghanaian to hold foreign currency legally?",
    options: [
      { text: "Standard savings account", correct: false },
      { text: "Foreign Currency Account (FCA) at an approved bank", correct: true },
      { text: "Pension account", correct: false },
      { text: "Susu account", correct: false },
    ],
  },
];

const FreeZoneTest = [
  {
    question: "Ghana's Free Zones Act was enacted in which year?",
    options: [
      { text: "1990", correct: false },
      { text: "1992", correct: false },
      { text: "1995", correct: true },
      { text: "2000", correct: false },
    ],
  },
  {
    question: "Which body administers Ghana's Free Zone programme?",
    options: [
      { text: "Ghana Revenue Authority", correct: false },
      { text: "Ghana Free Zones Authority (GFZA)", correct: true },
      { text: "Bank of Ghana", correct: false },
      { text: "Ghana Investment Promotion Centre", correct: false },
    ],
  },
  {
    question: "Free zone enterprises in Ghana are exempt from taxes for how many years?",
    options: [
      { text: "5 years", correct: false },
      { text: "7 years", correct: false },
      { text: "10 years", correct: true },
      { text: "15 years", correct: false },
    ],
  },
  {
    question: "What percentage of output must free zone companies export?",
    options: [
      { text: "50%", correct: false },
      { text: "70%", correct: true },
      { text: "80%", correct: false },
      { text: "100%", correct: false },
    ],
  },
  {
    question: "Free zone companies in Ghana benefit from?",
    options: [
      { text: "Tax holidays and duty-free imports for production", correct: true },
      { text: "Free land from the government", correct: false },
      { text: "Exemption from all Ghanaian laws", correct: false },
      { text: "Free electricity and water", correct: false },
    ],
  },
  {
    question: "Goods produced in a free zone and sold on Ghana's domestic market are subject to?",
    options: [
      { text: "No taxes at all", correct: false },
      { text: "Normal import duties and taxes", correct: true },
      { text: "A flat 5% tax only", correct: false },
      { text: "Free zone regulations only", correct: false },
    ],
  },
  {
    question: "What is the main purpose of Ghana's Free Zone policy?",
    options: [
      { text: "To attract foreign investment and boost exports", correct: true },
      { text: "To provide free housing to workers", correct: false },
      { text: "To replace the customs authority", correct: false },
      { text: "To allow tax-free shopping for tourists", correct: false },
    ],
  },
  {
    question: "Which of these is a designated free zone enclave in Ghana?",
    options: [
      { text: "Kotoka International Airport cargo area", correct: false },
      { text: "Tema Export Processing Zone", correct: true },
      { text: "Accra Central Market", correct: false },
      { text: "Kumasi Tech Hub", correct: false },
    ],
  },
  {
    question: "Employees in Ghana's free zones are covered by?",
    options: [
      { text: "No labour laws", correct: false },
      { text: "Ghana's Labour Act", correct: true },
      { text: "Only company policies", correct: false },
      { text: "International Labour standards only", correct: false },
    ],
  },
  {
    question: "A free zone developer licence in Ghana allows the holder to?",
    options: [
      { text: "Develop and manage a free zone enclave", correct: true },
      { text: "Import goods for personal use duty-free", correct: false },
      { text: "Operate a forex bureau", correct: false },
      { text: "Own land indefinitely anywhere in Ghana", correct: false },
    ],
  },
];

const InternationalProtocolsTest = [
  {
    question: "The Vienna Convention on Diplomatic Relations governs?",
    options: [
      { text: "International trade rules", correct: false },
      { text: "The rights and duties of diplomatic missions", correct: true },
      { text: "Immigration procedures for tourists", correct: false },
      { text: "Foreign exchange regulations", correct: false },
    ],
  },
  {
    question: "Under the ECOWAS Protocol, citizens of member states can move freely within the region for up to?",
    options: [
      { text: "30 days", correct: false },
      { text: "60 days", correct: false },
      { text: "90 days", correct: true },
      { text: "180 days", correct: false },
    ],
  },
  {
    question: "The UN Refugee Convention of 1951 protects persons who?",
    options: [
      { text: "Travel for business purposes", correct: false },
      { text: "Face persecution based on race, religion, nationality, or political opinion", correct: true },
      { text: "Are economic migrants seeking better wages", correct: false },
      { text: "Hold diplomatic passports", correct: false },
    ],
  },
  {
    question: "Which international body oversees refugee affairs globally?",
    options: [
      { text: "World Trade Organization (WTO)", correct: false },
      { text: "UNHCR", correct: true },
      { text: "INTERPOL", correct: false },
      { text: "World Bank", correct: false },
    ],
  },
  {
    question: "What does 'non-refoulement' mean in international law?",
    options: [
      { text: "The right to deport any foreigner", correct: false },
      { text: "The prohibition on returning a refugee to a country where they face danger", correct: true },
      { text: "The right to tax foreign investments", correct: false },
      { text: "The freedom of movement within ECOWAS", correct: false },
    ],
  },
  {
    question: "Ghana ratified the 1951 Refugee Convention in which year?",
    options: [
      { text: "1957", correct: false },
      { text: "1963", correct: true },
      { text: "1975", correct: false },
      { text: "1992", correct: false },
    ],
  },
  {
    question: "The Palermo Protocol deals with?",
    options: [
      { text: "International trade tariffs", correct: false },
      { text: "Trafficking in persons, especially women and children", correct: true },
      { text: "Nuclear disarmament", correct: false },
      { text: "Environmental protection", correct: false },
    ],
  },
  {
    question: "INTERPOL assists Ghana Immigration by?",
    options: [
      { text: "Issuing visas on behalf of Ghana", correct: false },
      { text: "Sharing intelligence on wanted persons and stolen documents", correct: true },
      { text: "Training immigration officers directly", correct: false },
      { text: "Processing asylum claims", correct: false },
    ],
  },
  {
    question: "Under the African Union Free Movement Protocol, the goal is to?",
    options: [
      { text: "Eliminate all borders in Africa immediately", correct: false },
      { text: "Gradually allow free movement of persons across African member states", correct: true },
      { text: "Ban immigration enforcement", correct: false },
      { text: "Standardize African currencies", correct: false },
    ],
  },
  {
    question: "Which international document is used to identify refugees who have no national passport?",
    options: [
      { text: "ECOWAS card", correct: false },
      { text: "Convention Travel Document", correct: true },
      { text: "Diplomatic Note", correct: false },
      { text: "Work Permit", correct: false },
    ],
  },
];

// ─── Topic-to-Array Map ───────────────────────────────────────────────────────
const questionBanks = {
  // Immigration Laws
  "CONSTITUTION AND THE REPULBLIC  OF GHANA": ConstitutionTest,
  "CITIZENSHIP ACT,2000 AND REGULATION": CitizenshipTest,
  "IMMIGRATION ACT,2000 AND REGULATIONS": ImmigrationActTest,
  // Security Laws
  "ANTI TOURRISM ACT, 2008 AND REGULATIONS (2012)": AntiTerrorismTest,
  "CRIMINAL AND OTHER OFFENCES ACT,1960": CriminalOffencesTest,
  "SECURITY AND INTELLIGENCE AGENCIES ACT 1996": SecurityAgenciesTest,
  // Investment Laws
  "FOREIGN EXCHANGE ACT, 2006": ForeignExchangeTest,
  "FREE ZONE ACT 1995 AND REGULATIONS": FreeZoneTest,
  "INTERNATIONAL PROTOCOLS": InternationalProtocolsTest,
};

// Pick the right question array; fall back to ConstitutionTest if not found
const activeQuestions = questionBanks[savedSubtopic] || ConstitutionTest;

// ─── DOM References ───────────────────────────────────────────────────────────
const questionEl = document.getElementById("question");
const optionBox = document.getElementById("options");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;
let score = 0;
let answered = false; // track if current question has been answered

// ─── Core Functions ───────────────────────────────────────────────────────────
function startQuiz() {
  index = 0;
  score = 0;
  answered = false;
  nextBtn.innerHTML = "NEXT";
  prevBtn.innerHTML = "PREV";
  showQuestion();
}

function showQuestion() {
  clearState();
  answered = false;

  const current = activeQuestions[index];
  const questionNo = index + 1;
  questionEl.innerHTML = questionNo + ". " + current.question;

  // Show / hide Prev button
  prevBtn.style.display = index > 0 ? "flex" : "none";
  nextBtn.style.display = "none";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerHTML = option.text;
    btn.classList.add("opt-btn");
    if (option.correct) {
      btn.dataset.correct = "true";
    }
    btn.addEventListener("click", selectedAns);
    optionBox.appendChild(btn);
  });
}

function clearState() {
  while (optionBox.firstChild) {
    optionBox.removeChild(optionBox.firstChild);
  }
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}

function selectedAns(e) {
  if (answered) return; // prevent double-clicking
  answered = true;

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Highlight correct answer and disable all buttons
  Array.from(optionBox.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextBtn.style.display = "flex";
  if (index > 0) prevBtn.style.display = "flex";
}

function showScore() {
  clearState();
  const total = activeQuestions.length;
  const percentage = Math.round((score / total) * 100);

  let grade = "";
  if (percentage >= 80) grade = "🏆 Excellent!";
  else if (percentage >= 60) grade = "✅ Good Pass";
  else if (percentage >= 40) grade = "⚠️ Keep Studying";
  else grade = "❌ Needs Improvement";

  questionEl.innerHTML = `
    You scored <strong>${score}</strong> out of <strong>${total}</strong>
    &nbsp;(${percentage}%)&nbsp; — ${grade}
  `;

  nextBtn.innerHTML = "PLAY AGAIN";
  nextBtn.style.display = "flex";
  prevBtn.style.display = "none";
}

// ─── Navigation ───────────────────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  if (nextBtn.innerHTML === "PLAY AGAIN") {
    startQuiz();
    return;
  }

  index++;
  if (index < activeQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    showQuestion();
  }
});

// ─── Kick off ─────────────────────────────────────────────────────────────────
startQuiz();