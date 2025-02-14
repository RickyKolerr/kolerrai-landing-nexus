
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import { PricingCategory } from "@/components/pricing/pricing-category";

const pricingCategories = [
  {
    title: "AI Integration & Automation",
    description: "Enhance your existing systems with AI capabilities",
    packages: [
      {
        name: "Basic AI Integration",
        price: "Starting from $10,000",
        timeframe: "4-6 weeks",
        description: "Integration of basic AI capabilities into existing systems to automate workflows and processes.",
        features: [
          "Workflow automation",
          "Basic AI integration",
          "System optimization",
          "Initial training"
        ]
      },
      {
        name: "Advanced AI Automation",
        price: "Starting from $25,000",
        timeframe: "8-12 weeks",
        description: "Development and integration of advanced AI solutions such as chatbots, AI-driven analytics, and workflow automation.",
        features: [
          "Advanced AI capabilities",
          "Custom chatbot development",
          "AI-driven analytics",
          "Complex workflow automation"
        ]
      }
    ]
  },
  {
    title: "Custom AI Platform Development",
    description: "Build your own AI-powered platform from scratch",
    packages: [
      {
        name: "MVP AI-Powered Platform",
        price: "Starting from $50,000",
        timeframe: "3-6 months",
        description: "Development of an MVP SaaS/PaaS AI-driven platform from scratch, including backend AI, frontend UI/UX, and data integration.",
        features: [
          "Custom AI backend",
          "Modern UI/UX design",
          "Data integration",
          "Basic scalability"
        ]
      },
      {
        name: "Enterprise AI Platform",
        price: "Starting from $100,000",
        timeframe: "6-12 months",
        description: "Full-scale AI platform development with enterprise-grade infrastructure, security, and long-term scalability.",
        features: [
          "Enterprise infrastructure",
          "Advanced security",
          "High scalability",
          "Full customization"
        ]
      }
    ]
  },
  {
    title: "AI-Powered SaaS & PaaS Solutions",
    description: "Transform your business with ready-to-use AI solutions",
    packages: [
      {
        name: "SaaS AI Prototype",
        price: "Starting from $75,000",
        timeframe: "4-8 months",
        description: "Development of a prototype AI-driven SaaS platform with subscription model, optimized for cloud computing and multi-tenant architecture.",
        features: [
          "Multi-tenant architecture",
          "Subscription management",
          "Cloud optimization",
          "Basic AI features"
        ]
      },
      {
        name: "Full-Scale PaaS Development",
        price: "Starting from $150,000",
        timeframe: "6-12 months",
        description: "Development of a full-scale AI-powered PaaS to allow businesses to deploy AI services quickly, with scalable infrastructure and API marketplace.",
        features: [
          "Complete PaaS solution",
          "API marketplace",
          "Advanced AI services",
          "Enterprise scalability"
        ]
      }
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

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
                Investment in Your AI Future
              </h1>
              <p className="text-lg text-white/70 sm:text-xl slide-up max-w-3xl mx-auto">
                Transform your business with our AI solutions. All packages can be customized to your specific requirements.
              </p>
            </div>

            <div className="space-y-24">
              {pricingCategories.map((category, categoryIndex) => (
                <div key={category.title} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all">
                    <PricingCategory category={category} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all">
                  <p className="text-white/70 mb-8">
                    Need a custom solution? Contact us for a tailored package that meets your specific requirements.
                  </p>
                  <ButtonGradient 
                    size="lg"
                    className="hover-lift glow"
                    onClick={() => navigate('/contact')}
                  >
                    Schedule Consultation
                  </ButtonGradient>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
