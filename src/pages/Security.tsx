
import { EnhancedNav } from "@/components/enhanced-nav";
import { Shield, Lock, Server, AlertTriangle } from "lucide-react";

const Security = () => {
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
                Security First
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-2xl mx-auto">
                Enterprise-grade security measures to protect your data
              </p>
            </div>

            {/* Security Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <Shield className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• End-to-end encryption for all data</li>
                  <li>• Regular security audits</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Automated backup systems</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <Lock className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4">Access Control</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• IP whitelisting capabilities</li>
                  <li>• Audit logs and monitoring</li>
                  <li>• Secure password policies</li>
                </ul>
              </div>
            </div>

            {/* Infrastructure Security */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Infrastructure Security</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Server className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• SOC 2 Type II certified infrastructure</li>
                    <li>• 24/7 infrastructure monitoring</li>
                    <li>• DDoS protection</li>
                    <li>• Regular vulnerability assessments</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <AlertTriangle className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 24/7 security team</li>
                    <li>• Automated threat detection</li>
                    <li>• Incident response plan</li>
                    <li>• Regular security training</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA'].map((cert) => (
                  <div 
                    key={cert}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-accent/10 hover-lift text-center"
                  >
                    <p className="font-semibold text-xl">{cert}</p>
                    <p className="text-sm text-muted-foreground mt-2">Compliant</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Security;
