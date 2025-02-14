
import { BrainCircuit, Database, Code, LineChart, Rocket, Shield, Cloud, Workflow } from "lucide-react";

export const TechStackSection = () => {
  const techStackData = [
    {
      icon: BrainCircuit,
      title: "Enterprise AI & ML",
      description: "Advanced AI models and ML pipelines for enterprise-scale automation",
      details: [
        "Custom large language models (LLMs)",
        "Neural networks for predictive analytics",
        "AutoML for continuous optimization",
        "Computer vision & NLP solutions"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud architecture for mission-critical operations",
      details: [
        "Multi-cloud deployment strategies",
        "Kubernetes orchestration",
        "Microservices architecture",
        "Zero-trust security framework"
      ]
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Enterprise-grade data processing and analytics solutions",
      details: [
        "Real-time data streaming & processing",
        "Data lakes and warehousing",
        "Advanced BI dashboards",
        "Predictive analytics models"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Industry-leading security protocols and compliance frameworks",
      details: [
        "End-to-end encryption",
        "SOC 2 Type II compliance",
        "GDPR & HIPAA compliance",
        "Advanced threat detection"
      ]
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Intelligent workflow automation for business processes",
      details: [
        "RPA integration & orchestration",
        "Smart document processing",
        "Automated decision systems",
        "Business process optimization"
      ]
    },
    {
      icon: Code,
      title: "Modern Development",
      description: "Cutting-edge development practices and tools",
      details: [
        "CI/CD automation pipelines",
        "Infrastructure as Code (IaC)",
        "Containerization & orchestration",
        "API-first architecture"
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Enterprise Technology Stack</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Built for Enterprise Scale</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage our comprehensive technology stack designed for scalability, security, and innovation in enterprise operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map((tech, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-accent/10 bg-white/5 p-6 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 hover-lift glow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <tech.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
                {tech.title}
              </h3>
              <p className="mb-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {tech.description}
              </p>
              <ul className="space-y-2">
                {tech.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/70" />
                    <span className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
