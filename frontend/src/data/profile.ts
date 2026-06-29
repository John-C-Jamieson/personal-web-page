export interface SkillGroup {
  title: string;
  items: string;
}

export interface Job {
  type: "job";
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface Note {
  type: "note";
  label: string;
  text: string;
}

export type ExperienceItem = Job | Note;

export interface Education {
  credential: string;
  school: string;
  year: string;
}

export const profile = {
  name: "John Jamieson",
  eyebrow: "Data & BI Analyst — Financial Systems",
  headline: "Turning financial data into reliable, decision-ready answers.",
  subline: "SQL · Reporting & Dashboards · Data Automation",
  intro:
    "I build the reporting, dashboards, and automated data processes that businesses run on — pairing hands-on SQL, BI, and automation with finance-domain depth most data analysts don't have.",
  about:
    "Data and BI analyst who builds the reporting, dashboards, and automated data processes that businesses run on. Strong SQL foundation — currently writing SQL every day against MS SQL Server in financial services — with a decade of turning messy financial and operational data into reliable, decision-ready datasets. Pairs hands-on data work with deep finance-domain knowledge that most data candidates don't have.",
  location: "Toronto, Ontario",
  linkedin: "https://www.linkedin.com/in/john-c-jamieson",
  footerQuote:
    '"Democracy is the worst form of government, except for all the others that have been tried." — Winston Churchill',
};

export const skills: SkillGroup[] = [
  {
    title: "Data & BI",
    items:
      "SQL (MS SQL Server, MySQL, PostgreSQL), Power BI, eazyBI, Crystal Reports, Tableau, dashboard & report automation, data modeling, Excel / VBA, MS Access",
  },
  {
    title: "Financial systems & ERP",
    items:
      "Microsoft Dynamics (GP / D365), general ledger & month-end close, revenue recognition (IFRS 15), reconciliations, data migration, UAT / SAT",
  },
  {
    title: "Platforms & practice",
    items:
      "ServiceNow (ITSM / ITIL), JIRA, Confluence, requirements & process improvement, Agile delivery; applied GenAI (RAG / vector search)",
  },
  {
    title: "Programming",
    items: "SQL, Python, JavaScript / TypeScript, Java, PowerShell, Bash; Git",
  },
];

export const experience: ExperienceItem[] = [
  {
    type: "job",
    company: "First National",
    role: "Junior AppOps Technician, Application Development — financial services (mortgage lender)",
    dates: "Nov 2025 – Present",
    location: "Toronto",
    bullets: [
      "Completed 30+ ad-hoc reporting and data-extract requests in roughly six months — writing SQL against MS SQL Server to support 5+ business areas, including mortgage operations, broker analytics, residential administration, project and transformation teams, and application support.",
      "Built repeatable SQL reporting logic for complex audit and operational requests — including a CMHC/Emili audit report spanning 13+ data points, multiple stakeholder validation cycles, and reusable scripts for future report pulls.",
      "Validated data across three mortgage and customer source systems (MyMortgage, Merlin, Optimus), resolving source-system limitations and one-to-many applicant and contact relationships before delivery.",
      "Designed and prototyped an AI-assisted semantic search over historical ticket data (vector embeddings / retrieval-augmented generation) to turn operational history into a reusable knowledge base.",
    ],
  },
  {
    type: "note",
    label: "Professional development · Jul 2024 – Nov 2025.",
    text: "Self-directed transition — focused upskilling in SQL, Power BI / reporting, and data automation.",
  },
  {
    type: "job",
    company: "CIBC",
    role: "Senior Change Planning Analyst",
    dates: "Jan 2022 – Jul 2024",
    location: "Toronto",
    bullets: [
      "Designed and built SQL- and eazyBI-driven reports and dashboards in JIRA and Confluence that directors and managers relied on for decision-making.",
      "Automated and refactored production code and reporting for maintainability — e.g., consolidated a four-file, 674-line program to two files (378 lines), a 44% reduction.",
      "Recognized ServiceNow subject-matter expert; analyzed logs, stack traces, and metrics to diagnose complex issues and led root-cause analysis to protect service reliability.",
    ],
  },
  {
    type: "note",
    label: "Career retraining · 2020 – 2021.",
    text: "Returned to school to move from accounting into data and systems — Computer Programming & Analysis (Seneca) and Full-Stack Web Development (U of T).",
  },
  {
    type: "job",
    company: "Entertainment One",
    role: "Senior Accountant — Television division",
    dates: "Nov 2016 – Dec 2019",
    location: "Toronto",
    bullets: [
      "Built and automated a new revenue and cost-of-sales reporting system spanning hundreds of projects, multiple currencies, and multiple entities; automated journal-entry uploads and consolidation (Tagetik).",
      "Cut monthly reporting turnaround from up to a week to hours through model automation and process redesign; led the IAS 18 → IFRS 15 revenue-recognition implementation.",
    ],
  },
  {
    type: "job",
    company: "Circle of Care",
    role: "Intermediate Accountant / Analyst",
    dates: "Jul 2014 – Oct 2016",
    location: "Toronto",
    bullets: [
      "Replaced a manual, multi-spreadsheet close with an automated process pulling data via SQL from the core database, improving reporting speed and accuracy.",
      "Led a Microsoft Dynamics (GP) version migration end-to-end — testing, implementation, and validation — and became the go-to user for data analysis out of the system.",
    ],
  },
  {
    type: "job",
    company: "Salumatics",
    role: "Junior Accountant / Finance Administrator",
    dates: "May 2011 – Jun 2014",
    location: "Toronto",
    bullets: [
      "Built custom metrics dashboards and automated routine reporting, giving management real-time visibility into financial data.",
    ],
  },
];

export const education: Education[] = [
  {
    credential: "Advanced Diploma, Computer Programming & Analysis",
    school: "Seneca College",
    year: "2021",
  },
  {
    credential: "Full-Stack Web Development",
    school: "University of Toronto",
    year: "2021",
  },
  {
    credential: "Honours Bachelor of Business Administration",
    school: "Wilfrid Laurier University",
    year: "2011",
  },
];
