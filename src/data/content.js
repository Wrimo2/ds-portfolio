export const profile = {
  name: "Wrimo Das",
  role: "Data Scientist",
  tagline: "Turning messy data into useful stories.",
  summary: "Data scientist with a love for probability, rigorous experimentation, and human-centered design. I build end-to-end analytics and ML that actually ship.",
  email: "wrimo@example.com",
  phone: "+91-9000000000",
  location: "Chennai, India",
  avatar: "/src/assets/avatar.png",
  social: [
    {label:'GitHub', href:'https://github.com/your-handle'},
    {label:'LinkedIn', href:'https://linkedin.com/in/your-handle'},
    {label:'X / Twitter', href:'https://x.com/your-handle'},
    {label:'Kaggle', href:'https://kaggle.com/your-handle'}
  ]
}

export const milestones = [
  { year: "2025", title: "Data Science BS @ IIT Madras (Diploma level)", detail: "Deep dive into statistics, Python, and ML foundations." },
  { year: "2024", title: "Business Process Associate @ TCS", detail: "Automated reporting pipelines; reduced manual ops by 60%." },
  { year: "2023", title: "Launched Hanging Bulb 2.0", detail: "Grew to 28k followers; built a data-driven content calendar." },
]

export const education = [
  { school:"IIT Madras — BS in Data Science", period:"2023 — present",
    details:["Math for DS, Statistics, Python for DS","Projects: menu engineering, customer analytics","Honors: Foundation topper"]},
  { school:"KD College of Commerce — B.Com (Marketing)", period:"2019 — 2022",
    details:["Top rank in college","Courses: Marketing Analytics, Consumer Behavior"]},
]

export const experiences = [
  { company:"TCS", title:"Business Process Associate", period:"2022 — 2024",
    bullets:[
      "Managed client data flows for Australian Unity energy accounts; improved SLA adherence by 15%.",
      "Built Excel+Python automations to cut weekly reporting time by 6 hours.",
      "Collaborated with cross‑functional stakeholders, closed the loop on feedback quickly."
    ]},
  { company:"Toastmasters", title:"VP-PR & Secretary", period:"2021 — 2023",
    bullets:[
      "Ran campaigns, grew engagement, and hosted events.",
      "Maintained member data and meeting minutes."
    ]},
]

export const projects = [
  { title:"Restaurant Menu Engineering", tags:["EDA","Optimization","A/B"],
    image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/your-handle/menu-engineering",
    caseStudy:{
      problem:"Identify high-margin items and redesign menu layout to maximize profit.",
      approach:["Cleaned POS data","ABC analysis & contribution margin","Price elasticity tests","Champion-challenger layout"],
      results:["+12% avg order value","+7% weekly revenue","Fewer stockouts via forecast"]
    }
  },
  { title:"Solar Inverter Telemetry Dashboard", tags:["Time-series","BI","Forecasting"],
    image:"https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/your-handle/solar-dashboard",
    caseStudy:{
      problem:"Monitor and forecast loads from 5kVA inverter with 4x200Ah batteries.",
      approach:["ETL with Python","Prophet forecast","Anomaly alerts"],
      results:["10% downtime reduction","Better battery health tracking"]
    }
  },
  { title:"Churn Prediction", tags:["ML","XGBoost","Explainability"],
    image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    link:"https://github.com/your-handle/churn-xgb",
    caseStudy:{
      problem:"Predict churn for subscription product with class imbalance.",
      approach:["SMOTE","XGBoost w/ Bayesian tuning","SHAP explanations"],
      results:["AUC 0.88","Precision@10 = 0.41","Interventions improved retention"]
    }
  }
]

export const skills = {
  stacks: [
    { label:"Python", level: 90 },
    { label:"SQL", level: 85 },
    { label:"Power BI", level: 80 },
    { label:"Statistics", level: 88 },
    { label:"Machine Learning", level: 75 },
    { label:"Excel / Sheets", level: 92 },
  ],
  categories: [
    { label:"Data Wrangling", pct: 90 },
    { label:"Feature Engineering", pct: 80 },
    { label:"Modeling", pct: 78 },
    { label:"Visualization", pct: 88 },
  ]
}

export const certifications = [
  { title:"Google Data Analytics", org:"Google/Coursera", year:"2024"},
  { title:"Harvard CS50P: Python", org:"Harvard", year:"2024"},
  { title:"Power BI Analyst", org:"Microsoft (mock)", year:"2025"},
]

export const blogPosts = [
  { slug:"why-probability-is-a-superpower", title:"Why Probability is a Superpower", date:"2025-07-01",
    summary:"Move fast, but with posterior probabilities. A love letter to uncertainty-aware thinking." },
  { slug:"notebook-to-production", title:"From Notebook to Production", date:"2025-06-12",
    summary:"Bridging the last mile: testing, data contracts, and monitoring." }
]

export const testimonials = [
  { name:"A. Sengupta", role:"Team Lead, TCS",
    quote:"Wrimo blends rigor with clarity. Our ops got faster—and our dashboards finally told a story."},
  { name:"R. Banerjee", role:"Club Mentor, Toastmasters",
    quote:"Clear communicator, measured thinker, reliable teammate."}
]
