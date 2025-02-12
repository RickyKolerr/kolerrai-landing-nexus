
import { EnhancedNav } from "@/components/enhanced-nav";
import { Shield, CheckCircle, FileCheck, AlertCircle } from "lucide-react";

const Compliance = () => {
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
                Compliance & Standards
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-2xl mx-auto">
                Meeting global compliance standards for enterprise AI solutions
              </p>
            </div>

            {/* Compliance Standards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "GDPR Compliance",
                  description: "Full compliance with EU data protection regulations",
                  features: [
                    "Data protection by design",
                    "Regular impact assessments",
                    "Data processing agreements",
                    "Right to erasure support"
                  ]
                },
                {
                  title: "ISO 27001",
                  description: "Information security management certification",
                  features: [
                    "Risk management framework",
                    "Security controls",
                    "Regular audits",
                    "Continuous improvement"
                  ]
                },
                {
                  title: "SOC 2 Type II",
                  description: "Service organization control certification",
                  features: [
                    "Security monitoring",
                    "Access controls",
                    "System operations",
                    "Annual audits"
                  ]
                }
              ].map((standard, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift"
                >
                  <Shield className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground mb-6">{standard.description}</p>
                  <ul className="space-y-3">
                    {standard.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Compliance Process */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Our Compliance Process</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8">
                  <FileCheck className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Documentation</h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation of security measures
                  </p>
                </div>
                <div className="text-center p-8">
                  <AlertCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Monitoring</h3>
                  <p className="text-muted-foreground">
                    Continuous monitoring and assessments
                  </p>
                </div>
                <div className="text-center p-8">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Updates</h3>
                  <p className="text-muted-foreground">
                    Regular updates to maintain compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Compliance;
