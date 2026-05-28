// ============================================================
// PORTFOLIO STATIC CONTENT — Edit all personal data here
// ============================================================

export const PERSONAL = {
  name: "T. Vinoth Veliappan",
  title: "Senior Cloud & DevOps Engineer",
  tagline: "AWS Certified Solutions Architect – Professional",
  email: "hivinoth8@gmail.com",
  phone: "+91 98403 68580",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/vinotht",
  github: "https://github.com/vinotht", // update with actual GitHub username
  resumeFile: "/Vinoth_Veliappan_Resume.pdf", // place resume PDF in /public folder
  photoFile: "/profile.jpg", // place your photo in /public folder
  summary:
    "Results-driven Senior Cloud & DevOps Engineer with 10+ years of IT experience, including 6+ years architecting and operating production AWS environments. Deep expertise in ECS/EKS container orchestration, multi-tier network architecture, CI/CD GitOps automation, AI/ML Ops (vLLM, Ollama), and full-stack observability. Proven track record of reducing release cycles by 60%, cutting infrastructure costs, and improving system reliability at scale.",
};

export const ACHIEVEMENTS = [
  { metric: "10+", label: "Years Experience" },
  { metric: "6+", label: "Years AWS" },
  { metric: "60%", label: "Faster Release Cycles" },
  { metric: "80+", label: "Microservices Managed" },
];

export const SKILLS = [
  {
    category: "Cloud & IaC",
    icon: "☁️",
    items: [
      "AWS EC2", "ECS", "EKS", "S3", "RDS", "ALB",
      "CloudFront", "WAF", "Route 53", "CloudFormation", "Terraform",
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    items: [
      "Docker", "Amazon ECS (Fargate/EC2)", "Amazon EKS",
      "Kubernetes", "Cloud Map Service Discovery",
    ],
  },
  {
    category: "CI/CD & GitOps",
    icon: "🔄",
    items: [
      "GitHub Actions", "GitLab CI", "Jenkins",
      "Argo CD", "AWS CodeDeploy", "Bamboo",
    ],
  },
  {
    category: "AI/ML Ops",
    icon: "🤖",
    items: [
      "vLLM (Hugging Face, PagedAttention)",
      "Ollama (GGUF – Llama 3, Mistral)",
    ],
  },
  {
    category: "Observability",
    icon: "📊",
    items: [
      "Prometheus", "Grafana", "CloudWatch",
      "EFK Stack", "OpenSearch", "Filebeat", "Kibana",
      "OpenObserve", "Airbrake",
    ],
  },
  {
    category: "Security & Governance",
    icon: "🔒",
    items: [
      "AWS WAF", "GuardDuty", "Security Hub",
      "IAM", "AWS Control Tower", "Keycloak", "CIS Benchmarks",
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "MongoDB", "RDS", "Amazon OpenSearch"],
  },
  {
    category: "Network Architecture",
    icon: "🌐",
    items: [
      "VPC", "Subnets", "NACL", "Security Groups",
      "Transit Gateway", "WAF→CDN→ALB→Nginx→Cloud Map",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Cloud & DevOps Engineer",
    company: "Cloud Ripples Pvt Ltd",
    location: "Chennai",
    period: "Sep 2020 – Present",
    current: true,
    highlights: [
      "Designed multi-tier AWS network: WAF → CloudFront → ALB → Nginx (ECS) → Cloud Map → microservices.",
      "Managed ECS (Fargate & EC2) and EKS workloads for Java, Node.js, and Python microservices.",
      "Built CI/CD pipelines with GitHub Actions, GitLab CI, Jenkins, and Argo CD using GitOps.",
      "Developed Terraform & CloudFormation IaC for repeatable, versioned AWS provisioning.",
      "Productionized LLM inference with vLLM (PagedAttention) and Ollama for GGUF model testing.",
      "Implemented DevSecOps: GuardDuty, Security Hub, IAM least-privilege, Keycloak SSO, Control Tower.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "BambeeQ Software Solutions Pvt Ltd",
    location: "Chennai",
    period: "Mar 2020 – Aug 2020",
    current: false,
    highlights: [
      "Automated database backups with Bash and S3; reduced costs via S3 lifecycle policies.",
      "Configured Apache/Nginx with SSL/TLS on Linux; CI/CD via Bamboo and AWS CodeDeploy.",
    ],
  },
  {
    role: "Delivery Software Engineer",
    company: "Mphasis Ltd (An HP Company)",
    location: "Bangalore",
    period: "Apr 2010 – Aug 2014",
    current: false,
    highlights: [
      "Incident management via HP Service Manager, Zenoss, and BAC within SLA targets.",
      "Maintained documentation of environment strategies, processes, and support procedures.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Student Risk Management & Intervention Platform",
    period: "2026 – Present",
    tags: ["AWS ECS", "ALB", "ECR", "RDS", "Keycloak", "Terraform", "GitHub Actions"],
    description:
      "Provisioned ECS services behind ALB; integrated Keycloak for IAM and AWS Client VPN for secure access. Configured Transfer Family (SFTP) and PostgreSQL RDS. Implemented observability with OpenObserve and Airbrake; GrowthBook for feature flagging.",
  },
  {
    title: "AI-Powered Adaptive Learning Platform",
    period: "2025 – Present",
    tags: ["AWS WAF", "CloudFront", "ECS", "vLLM", "Ollama", "GitHub Actions"],
    description:
      "Architected WAF → CloudFront (React SPA) → ALB → ECS → Nginx → Cloud Map → microservices. Deployed vLLM for production LLM inference achieving 50% cost savings; Ollama for local GGUF testing.",
  },
  {
    title: "Open-Source Adaptive Learning Platform",
    period: "2021 – 2024",
    tags: ["EKS", "Argo CD", "Jenkins", "OpenSearch", "Prometheus", "Grafana"],
    description:
      "Architected WAF → CloudFront → ALB → Nginx Ingress → EKS microservices. Full GitOps pipeline. Built observability stack: Filebeat→OpenSearch + Prometheus/Grafana.",
  },
  {
    title: "AWS Infrastructure for Biotechnology",
    period: "2020 – 2021",
    tags: ["VPC", "Transit Gateway", "FSx Lustre", "GuardDuty", "CloudTrail"],
    description:
      "Designed VPC with public/private subnets and Transit Gateway. Site-to-site VPN, FSx Lustre with S3 backup, full compliance stack: CloudWatch, GuardDuty, Security Hub, AWS Backup.",
  },
  {
    title: "Healthcare Information System",
    period: "2019 – 2020",
    tags: ["API Gateway", "Lambda", "Cognito", "RDS", "SNS", "CloudFront"],
    description:
      "Managed Cognito user pools; tuned RDS connection pools; monitored API Gateway/Lambda logs; validated SNS delivery for email/mobile; provided 24×7 support.",
  },
  {
    title: "Email Marketing Web Application",
    period: "2018 – 2019",
    tags: ["Nginx", "Apache", "WordPress", "MySQL", "CloudFront", "ALB"],
    description:
      "Deployed high-availability WordPress with SSL/TLS; MySQL/PostgreSQL upgrades; auto-scaling with ALB; monitored via Nagios and CloudWatch with 24×7 support.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Velammal College of Management & Computer Studies",
    university: "University of Madras",
    period: "2001 – 2004",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Science – Mathematics",
    institution: "Pachaiyappa's College",
    university: "University of Madras",
    period: "1997 – 2000",
    icon: "📐",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "January 2026",
    badge: "SAP",
    color: "#FF9900",
    description: "Validates advanced technical skills designing distributed systems on AWS.",
  },
];

export const CONTACT_INFO = [
  { label: "Email", value: "hivinoth8@gmail.com", href: "mailto:hivinoth8@gmail.com", icon: "✉️" },
  { label: "Phone", value: "+91 98403 68580", href: "tel:+919840368580", icon: "📞" },
  { label: "Location", value: "Chennai, Tamil Nadu, India", href: null, icon: "📍" },
  { label: "LinkedIn", value: "linkedin.com/in/vinotht", href: "https://linkedin.com/in/vinotht", icon: "💼" },
];
