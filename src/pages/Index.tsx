import { BrainCircuit, Rocket, Shield, Laptop, Cpu, Database, Code, LineChart, Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FeatureCard } from "@/components/feature-card";
import { EnhancedNav } from "@/components/enhanced-nav";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                AI-Powered PaaS & SaaS Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Leverage advanced AI technology to optimize, automate, and scale your business operations with our custom-built platforms and solutions.
              </p>
              <div className="flex gap-4 justify-center">
                <ButtonGradient onClick={() => handleNavigation("/contact")}>Get Started</ButtonGradient>
                <ButtonGradient variant="outline" onClick={() => handleNavigation("/about")}>Learn More</ButtonGradient>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 bg-secondary/30">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/lovable-uploads/99c4eb06-a618-421b-a272-81e310d4431d.png"
                  alt="Ricky Anh Nguyen"
                  className="w-40 h-40 rounded-full object-cover border-4 border-accent/20 hover-scale"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ricky Anh Nguyen</h3>
              <p className="text-accent mb-6">CEO & Founder</p>
              <p className="text-xl text-muted-foreground italic">
                "Our mission is to empower businesses by designing and building custom platforms that integrate cutting-edge AI capabilities. We don't just develop software, we create scalable, future-proof digital solutions that drive seamless digital transformation, optimize business operations, and deliver measurable value through automation and intelligent workflows."
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={BrainCircuit}
                title="AI Integration"
                description="Seamlessly integrate AI capabilities into your existing systems"
              />
              <FeatureCard
                icon={Rocket}
                title="Custom Development"
                description="Tailored solutions built specifically for your business needs"
              />
              <FeatureCard
                icon={Shield}
                title="Security First"
                description="Enterprise-grade security measures to protect your data"
              />
              <FeatureCard
                icon={Laptop}
                title="Cloud Solutions"
                description="Scalable cloud infrastructure for optimal performance"
              />
            </div>
          </div>
        </section>

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

        <footer className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">About Us</h3>
                <p className="text-muted-foreground">
                  KolerrAI specializes in AI-powered PaaS and SaaS solutions for businesses of all sizes.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:info@kolerr.ai" className="text-muted-foreground hover:text-primary">
                      info@kolerr.ai
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-muted-foreground">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-muted-foreground hover:text-primary">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              <p>&copy; 2024 KolerrAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
