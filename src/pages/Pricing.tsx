
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Check, Cpu, Code, Wrench, Cloud, Clock, Shield, Brain, Building, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingCategories = [
    {
      title: "Custom SaaS and PaaS Platform Development",
      description: "Tailored platform solutions for businesses of all sizes",
      packages: [
        {
          name: "Basic Package",
          price: "$5,000 - $10,000",
          description: "For small businesses or startups seeking a simple platform with basic features and easy-to-use design.",
          features: [
            "Basic feature implementation",
            "User-friendly interface",
            "Essential functionality",
            "Standard deployment"
          ]
        },
        {
          name: "Advanced Package",
          price: "$15,000 - $30,000",
          description: "For medium to large businesses requiring more complex features and high customization.",
          features: [
            "Advanced feature set",
            "Third-party integrations",
            "Custom workflows",
            "Deployment support"
          ]
        },
        {
          name: "Premium Package",
          price: "$50,000+",
          description: "For large-scale projects with special features and deep system integration needs.",
          features: [
            "Full strategic consultation",
            "Complex system integration",
            "Custom architecture",
            "Premium support"
          ]
        }
      ]
    },
    {
      title: "AI and Automation Integration",
      description: "Intelligent solutions to enhance your platform",
      packages: [
        {
          name: "Basic AI Integration",
          price: "$2,000 - $5,000",
          description: "Basic AI solutions to automate some processes.",
          features: [
            "Data analysis automation",
            "Content suggestions",
            "Basic process automation",
            "Standard reporting"
          ]
        },
        {
          name: "Advanced AI Integration",
          price: "$10,000 - $20,000",
          description: "Advanced AI integration to optimize processes and support decisions.",
          features: [
            "Advanced process automation",
            "Decision support systems",
            "Predictive analytics",
            "Custom AI models"
          ]
        },
        {
          name: "Custom AI Solution",
          price: "$30,000 - $50,000+",
          description: "Fully customized AI solutions for automation and optimization.",
          features: [
            "Full system automation",
            "Custom AI algorithms",
            "Behavioral analysis",
            "Advanced optimization"
          ]
        }
      ]
    }
  ];

  const maintenancePackages = [
    {
      name: "Basic Maintenance",
      price: "$500 - $1,500",
      period: "per month",
      description: "Essential support for small to medium platforms",
      features: [
        "Regular updates",
        "Issue resolution",
        "Basic monitoring",
        "Email support"
      ]
    },
    {
      name: "Advanced Maintenance",
      price: "$2,000 - $5,000",
      period: "per month",
      description: "Comprehensive support for complex platforms",
      features: [
        "Priority updates",
        "24/7 monitoring",
        "Performance optimization",
        "Priority support"
      ]
    },
    {
      name: "Premium Maintenance",
      price: "$10,000+",
      period: "per month",
      description: "Enterprise-level support and optimization",
      features: [
        "Continuous optimization",
        "Proactive monitoring",
        "Custom development",
        "Dedicated support team"
      ]
    }
  ];

  const consultingServices = [
    {
      name: "Basic Consultation",
      price: "$1,000 - $3,000",
      description: "For small businesses and startups",
      features: [
        "Digital transformation assessment",
        "Technology recommendations",
        "Basic implementation plan",
        "ROI analysis"
      ]
    },
    {
      name: "Advanced Consultation",
      price: "$5,000 - $10,000",
      description: "For medium to large businesses",
      features: [
        "Comprehensive assessment",
        "Strategic planning",
        "Technology roadmap",
        "Integration planning"
      ]
    },
    {
      name: "Comprehensive Consultation",
      price: "$15,000+",
      description: "Full-scale strategic consultation",
      features: [
        "Enterprise architecture planning",
        "Digital transformation strategy",
        "Process optimization",
        "Change management"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Transparent Pricing for Digital Transformation
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                Flexible pricing models designed to accommodate different business needs and scales. 
                All packages can be customized to your specific requirements.
              </p>
            </div>

            {pricingCategories.map((category, index) => (
              <div key={category.title} className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-4">{category.title}</h2>
                <p className="text-center text-muted-foreground mb-12">{category.description}</p>
                <div className="grid md:grid-cols-3 gap-8">
                  {category.packages.map((pkg) => (
                    <div key={pkg.name} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-2xl font-bold text-accent mb-4">{pkg.price}</p>
                      <p className="text-muted-foreground mb-6">{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <ButtonGradient 
                        className="w-full hover-lift"
                        onClick={() => navigate('/contact')}
                      >
                        Get Started
                      </ButtonGradient>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4">Maintenance & Support</h2>
              <p className="text-center text-muted-foreground mb-12">
                Comprehensive support packages to ensure your platform's optimal performance
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {maintenancePackages.map((pkg) => (
                  <div key={pkg.name} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-accent mb-1">
                      {pkg.price}
                      <span className="text-base font-normal text-muted-foreground"> {pkg.period}</span>
                    </p>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <ButtonGradient 
                      className="w-full hover-lift"
                      onClick={() => navigate('/contact')}
                    >
                      Subscribe
                    </ButtonGradient>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4">Technology Consultation</h2>
              <p className="text-center text-muted-foreground mb-12">
                Expert guidance for your digital transformation journey
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {consultingServices.map((service) => (
                  <div key={service.name} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-2xl font-bold text-accent mb-4">{service.price}</p>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <ButtonGradient 
                      className="w-full hover-lift"
                      onClick={() => navigate('/contact')}
                    >
                      Book Consultation
                    </ButtonGradient>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 mb-12">
              <h2 className="text-2xl font-bold mb-6">Payment Options & Terms</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Payments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">30% upfront payment to initiate the project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">40% upon reaching agreed milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">30% upon project completion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Maintenance Payments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">Monthly or quarterly payment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">10% discount on annual commitments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-muted-foreground">Flexible terms for long-term contracts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <ButtonGradient 
                size="lg"
                className="hover-lift glow"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
