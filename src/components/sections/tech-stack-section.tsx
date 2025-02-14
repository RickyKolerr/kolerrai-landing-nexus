
import { BrainCircuit, Database, Code, LineChart, Rocket } from "lucide-react";

export const TechStackSection = () => {
  const techStackData = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "State-of-the-art AI models powered by OpenAI, Google Vertex AI, and LangChain",
      details: [
        "Custom AI solutions with TensorFlow and PyTorch",
        "Adaptive AI workflows for continuous optimization",
        "Intelligent automation & decision-making systems"
      ]
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Real-time data streaming with Apache Kafka & Google Pub/Sub",
      details: [
        "Scalable cloud storage with AWS S3 & BigQuery",
        "AI-powered data insights using Spark & Hadoop",
        "Enterprise-grade data management solutions"
      ]
    },
    {
      icon: Code,
      title: "Modern Architecture",
      description: "Microservices-based SaaS/PaaS with Node.js, Python & Golang",
      details: [
        "Serverless & Cloud-native deployments",
        "GraphQL APIs for flexible data access",
        "OAuth2.0 & JWT for enterprise security"
      ]
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "AI-powered business intelligence with Tableau & Power BI",
      details: [
        "Custom predictive analytics models",
        "Real-time interactive dashboards",
        "Automated KPI tracking & reporting"
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
            <Rocket className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Technology Stack</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Built with Cutting-Edge Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage our advanced technology stack for optimal performance, scalability, and innovation in your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
