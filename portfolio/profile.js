// =============================================================
// profile.js — ALL site content lives here. Edit this file only
// to change text; app.js renders it into index.html.
// =============================================================
window.PROFILE = {
  name: "Vishal Raj",
  headline: "AI Product Manager · Analytics Manager · Data Scientist",
  roles: ["AI Product Manager", "Analytics Manager", "Data Scientist", "ML Engineer"],
  summary:
    "8+ years turning payments, lending and product data into decisions, and more recently into AI products. I frame the problem, set the success metric and the guardrails, build the model myself, and ship it where people use it: Qwery, Phoenix, ARES.",
  location: "Bangalore, India",
  yearsExperience: 8,
  photo: "assets/vishal-raj.jpg",
  resume: { file: "assets/Vishal_Raj_Resume.pdf", filename: "Vishal_Raj_Resume.pdf" },
  contact: {
    email: "00vishalraj99@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishalraj13",
    linkedinLabel: "linkedin.com/in/vishalraj13",
    github: "https://github.com/shinobi-00",
    githubLabel: "github.com/shinobi-00",
  },
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
  ],
  education: {
    degree: "B.Tech, Information Technology",
    school: "Inderprastha Engineering College, Ghaziabad",
    years: "2014 – 2018",
  },

  // Impact ledger: before → after, change
  impact: [
    { metric: "Cross-border payment delay rate", org: "Aspire", before: "12%", after: "8%", change: "−4 pts in 1 quarter" },
    { metric: "Payment rejection rate", org: "Aspire", before: "3.0%", after: "1.4%", change: "−53%" },
    { metric: "Ad hoc data requests to the team", org: "Aspire", before: "—", after: "−80%", change: "US$5k/mo saved" },
    { metric: "Gross profit protected a year (Phoenix, replayed)", org: "Aspire", before: "$0", after: "US$274k", change: "82.5% precision" },
    { metric: "Annual gross profit at risk surfaced (churn model)", org: "Aspire", before: "—", after: "US$384k", change: "ROC-AUC 0.93" },
    { metric: "P90 support resolution time", org: "Razorpay", before: "5 days", after: "2 days", change: "−60%" },
    { metric: "Net promoter score", org: "Razorpay", before: "52", after: "64", change: "+12 pts" },
    { metric: "Monthly transacting users", org: "Razorpay", before: "62,000", after: "78,000", change: "+24%" },
    { metric: "Loan application funnel conversion", org: "Zet", before: "4%", after: "7%", change: "+75%" },
    { metric: "Visit-to-sign-up conversion", org: "Airtel", before: "40%", after: "79%", change: "+39 pts" },
    { metric: "Monthly net revenue, agent programme", org: "Zet", before: "—", after: "US$156k", change: "~4,000 agents" },
  ],

  // One card per target role, each backed by CV evidence
  roleEvidence: [
    {
      role: "AI Product Manager", icon: "sparkles",
      title: "Ships AI products people can trust",
      points: [
        "Designed, built and launched Qwery (qwery.co.in), a natural-language analytics product: scope, plans, pricing tiers and the eight accuracy guards behind every answer.",
        "Framed Phoenix around one question per failed payment, made compliance a hard veto, and proved it in shadow mode before any customer was contacted.",
        "Chose operating points by unit economics, not default metrics: skipped a 95%-recall threshold that would add 3,747 wasted calls a month.",
        "Cut ad hoc data requests 80% with ARES, an LLM assistant, saving US$5k a month.",
      ],
      stack: ["Product discovery", "Success metrics", "AI guardrails", "Pricing & packaging", "Shadow-mode pilots"],
    },
    {
      role: "Analytics Manager", icon: "users",
      title: "Leads teams that ship decisions fast",
      points: [
        "Working remotely from India, lead a six-person analytics team for Singapore-based Aspire (FX, cross-border and local payments), with turnaround under 3 days.",
        "Ran analytics for Airtel's CEO office: six analysts and two data engineers on fixed SLAs.",
        "Scaled a data function from 2 to 11 people in 8 months at Newton School.",
        "Comfortable in a SQL editor and in a C-suite review.",
      ],
      stack: ["Team leadership", "Stakeholder management", "SLAs", "Agile", "GDPR"],
    },
    {
      role: "Data Scientist", icon: "flask-conical",
      title: "Models and experiments tied to revenue",
      points: [
        "Re-engineered supervised credit-risk models with bureau-data features: loan funnel conversion 4% → 7%.",
        "Built a supervised merchant-referral model: 300 new sign-ups and US$26k MRR a month.",
        "Designed A/B tests across cohorts and channels; WhatsApp lifted high-value sign-ups 12% → 20%.",
        "Root-cause analysis behind a 3% → 1.4% payment rejection rate.",
      ],
      stack: ["Python", "scikit-learn", "pandas", "A/B testing", "Credit risk"],
    },
    {
      role: "ML Engineer", icon: "cpu",
      title: "LLM and ML systems in production",
      points: [
        "Built ARES, an LLM assistant that turns plain English into SQL, runs it and returns charts. Cut ad hoc requests by 80%.",
        "Deployed an LLM ticket-routing agent that classifies and assigns merchant cases: P90 resolution 5 → 2 days.",
        "Built ETL pipelines and a real-time error monitor that opens Jira tickets automatically.",
        "Wrote a Python NLP pipeline at Amazon that ticketed every wrong-delivery complaint.",
      ],
      stack: ["LLMs", "NLP", "Airflow", "dbt", "Databricks", "AWS"],
    },
  ],

  cases: [
    {
      id: "QWERY", org: "Own product", year: "2026", tag: "AI product · SaaS", featured: true,
      title: "Qwery: ask your data anything",
      body: "Business teams queue simple data questions with analysts, and a wrong number from an LLM is worse than no answer. Qwery turns a plain-English question into read-only Databricks SQL, charts and written insights, behind eight automated accuracy guards. Economy, Balanced and Max model tiers with per-user budgets keep spend predictable, and an MCP server lets Claude query each curated data room.",
      flow: ["Question", "LLM writes SQL", "8 guards, read-only run", "Chart + insight"],
      result: "8 accuracy guards", detail: "Individual and Company plans, free trial", link: { href: "https://qwery.co.in", label: "qwery.co.in" },
    },
    { id: "PHOENIX", org: "Aspire", year: "2026", tag: "ML decisioning · Payments", title: "Phoenix: failed payments, rescued",
      body: "About 1,355 payments fail every month and 61% are never re-sent; customers who are not recovered are 3× as likely to leave. An hour after each failure Phoenix scores the risk and picks an account-manager call, a one-tap fix message or a retry. Compliance holds a veto, so screening rejections are never contacted. Run in shadow mode on live failures.",
      result: "≈US$274k GP protected a year", detail: "Replayed on 10,236 real failures · 82.5% precision on unseen months · 0 compliance breaches · ~US$16/month to run" },
    { id: "CHURN", org: "Aspire", year: "2026", tag: "ML · Churn", title: "Churn model, tested like a product",
      body: "A 15-feature LightGBM model predicts which businesses go silent within 90 days. Evaluated on a window it never saw during training, feature selection or thresholding: calibration, drift, fairness across ten slices and SHAP sense-checks. I set the operating point for value, not recall.",
      result: "ROC-AUC 0.93 · 4.4× lift", detail: "Out-of-time Jan–May 2026, 85,783 rows · four-fifths fairness rule passed on all 10 slices" },
    { id: "WATCHLIST", org: "Aspire", year: "2026", tag: "Internal tool · Churn", title: "Churn Watchlist for account managers",
      body: "A ranked list of every active business with a 0–100% churn probability, filters by product, geography and owner, CSV export, and a win-back list of accounts already silent for 90+ days. Tier 1 points account managers at accounts worth a call.",
      result: "107 Tier-1 accounts, US$302k GP", detail: "17,961 active businesses · 4,147 High or Critical · US$384k annual GP at risk" },
    {
      id: "ARES", org: "Aspire", year: "2026", tag: "LLM · Text-to-SQL",
      title: "ARES: an LLM analytics assistant",
      body: "Teams across six markets queued simple data questions with analysts, and a paid assistant cost US$5,000 a month. ARES takes a plain-English question, writes SQL against the warehouse, runs it and returns the result with a chart.",
      flow: ["Question", "LLM writes SQL", "Warehouse", "Result + chart"],
      result: "−80% ad hoc requests", detail: "US$5,000/month saved",
    },
    { id: "ROUTER", org: "Razorpay", year: "2025", tag: "LLM agent", title: "Merchant ticket-routing agent",
      body: "An LLM agent categorises each support case and assigns it to the right team on arrival.", result: "5 → 2 days P90 resolution", detail: "NPS 52 → 64" },
    { id: "RCA", org: "Aspire", year: "2026", tag: "Root-cause analysis", title: "The silent address-field failure",
      body: "Tracing rejection codes across banking partners exposed a Singapore/Hong Kong address-field mismatch that was quietly failing inbound payments.", result: "3% → 1.4% rejection rate" },
    { id: "CREDIT", org: "Zet", year: "2023", tag: "Credit-risk ML", title: "Credit-risk model rebuild",
      body: "New bureau-data features and refined credit-line recommendations, enabling 50,000+ disbursals in 12 months with NBFC partners.", result: "4% → 7% funnel conversion" },
    { id: "REFERRAL", org: "Razorpay", year: "2025", tag: "Supervised ML", title: "Merchant referral model",
      body: "A supervised model, with LLM tooling, reads merchant website behaviour to surface cross-sell referrals.", result: "+US$26k MRR", detail: "300 sign-ups / month" },
  ],

  experience: [
    { when: "Apr 2026 – Present", title: "Analytics Manager", org: "Aspire", meta: "Singapore (Remote) · Payments & Fintech",
      points: ["Built ARES, an LLM text-to-SQL assistant: −80% ad hoc requests, US$5k/month saved.", "Phoenix failed-payment recovery model: ≈US$274k GP protected a year (replayed), 82.5% precision, zero compliance breaches.", "LightGBM churn model (ROC-AUC 0.93, 4.4× lift) and a Churn Watchlist: 107 Tier-1 accounts holding US$302k GP.", "Cut cross-border payment delays from 12% to 8% in one quarter.", "Lowered payment rejections from 3% to 1.4%.", "Lead a six-person analytics team, working remotely from Bangalore."] },
    { when: "Nov 2024 – Apr 2026", title: "Senior Analytics Specialist", org: "Razorpay", meta: "Bangalore · Payments Infrastructure",
      points: ["LLM ticket-routing agent: P90 resolution 5 → 2 days, NPS 52 → 64.", "Grew monthly transacting users 62k → 78k (+24%).", "Supervised referral model: 300 sign-ups and US$26k MRR a month.", "Automated Tableau and Slack scorecards: delivery 2–5 → 1–3 days."] },
    { when: "May 2024 – Nov 2024", title: "Senior Manager, Analytics", org: "Airtel", meta: "Gurugram · Telecoms & EdTech",
      points: ["Led six analysts and two data engineers building ETL and reporting for the CEO's office.", "Real-time error monitoring with automated Jira tickets via Python.", "Funnel instrumentation lifted visit-to-sign-up 40% → 79%."] },
    { when: "Nov 2022 – Apr 2024", title: "Data Analyst", org: "Zet", meta: "Bangalore · Fintech Lending",
      points: ["Credit-risk model rebuild: loan funnel conversion 4% → 7%.", "50,000+ loan disbursals in 12 months via NBFC pre-approvals.", "Agent loyalty programme: +US$156k/month net revenue."] },
    { when: "Apr 2022 – Nov 2022", title: "Data Analyst", org: "Relevel by Unacademy", meta: "Bangalore · EdTech",
      points: ["Self-serve dashboards cut ad hoc requests by 40% in one sprint."] },
    { when: "May 2021 – Mar 2022", title: "Business Analyst", org: "Newton School", meta: "Bangalore · EdTech",
      points: ["Scaled the data function from 2 to 11; quarterly growth 8.2% → 13% via A/B-tested funnel redesign."] },
    { when: "Mar 2020 – Apr 2021", title: "Associate, MIS & Reporting", org: "Tech Mahindra", meta: "Noida · Client: Vodafone Qatar",
      points: ["Leadership MIS reporting packs across business units."] },
    { when: "Jun 2018 – Nov 2019", title: "Business Analyst", org: "Amazon", meta: "Hyderabad · E-commerce Logistics",
      points: ["Fixed map coordinates for 1M+ North American addresses: delivery time −10%, returns −30%.", "Python NLP script for the Proof of Delivery programme."] },
  ],

  // `core: true` = used in production
  skills: [
    { group: "AI product", icon: "sparkles", items: [["Product discovery", 1], ["Success metrics & KPIs", 1], ["Human-in-the-loop design", 1], ["AI guardrails & compliance", 1], ["Pricing & packaging", 0], ["Go-to-market", 0], ["Roadmapping & prioritisation", 0], ["Shadow-mode pilots", 0], ["Unit economics", 0]] },
    { group: "ML & AI", icon: "brain", items: [["LLM applications", 1], ["Text-to-SQL", 1], ["Prompt engineering", 1], ["MCP (Model Context Protocol)", 1], ["Supervised learning", 1], ["LightGBM & SHAP", 1], ["Model monitoring & fairness testing", 0], ["NLP & text classification", 1], ["Credit-risk modelling", 1], ["Feature engineering", 0], ["scikit-learn", 0]] },
    { group: "Data engineering", icon: "database", items: [["SQL", 1], ["Python", 1], ["Airflow", 1], ["Databricks", 1], ["FastAPI", 1], ["Next.js", 0], ["Docker", 0], ["dbt", 0], ["pandas", 0], ["NumPy", 0], ["AWS (S3, Lambda, Glue, EC2, RDS)", 0], ["PostgreSQL", 0], ["BigQuery", 0], ["Trino", 0], ["Git", 0]] },
    { group: "Analytics & experimentation", icon: "chart-line", items: [["A/B testing", 1], ["Cohort analysis", 1], ["Funnel analytics", 1], ["Statistical modelling", 0], ["Forecasting", 0], ["Root-cause analysis", 0]] },
    { group: "BI & product analytics", icon: "layout-dashboard", items: [["Tableau", 1], ["Power BI", 0], ["Looker Studio", 0], ["Metabase", 0], ["Mixpanel", 0], ["Amplitude", 0], ["Google Analytics", 0]] },
    { group: "Domain", icon: "landmark", items: [["Cross-border payments", 1], ["FX", 1], ["Lending", 0], ["Payments infrastructure", 0], ["EdTech", 0], ["Telecoms", 0]] },
    { group: "Leadership", icon: "compass", items: [["Team leadership", 1], ["Stakeholder management", 0], ["Hiring & scaling teams", 0], ["Agile", 0], ["Data governance (GDPR)", 0]] },
  ],

  building: [
    { repo: "fraud-detection-platform", desc: "Real-time fraud scoring: streaming features, FastAPI, Docker, MLflow, drift monitoring." },
    { repo: "credit-risk-ml", desc: "Credit default model with calibration, cost-based thresholds and SHAP reason codes." },
    { repo: "fin-nlp", desc: "Fine-tuned transformers, RAG over filings and a guard-railed text-to-SQL agent." },
    { repo: "ml-from-scratch", desc: "Core ML algorithms in NumPy, from regression to attention." },
  ],
};
