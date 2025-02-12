
import { EnhancedNav } from "@/components/enhanced-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

const Terms = () => {
  return (
    <div className="relative min-h-screen">
      <EnhancedNav />

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <ScrollArea className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                  <p className="text-muted-foreground mb-4">
                    Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>The materials cannot be modified or copied</li>
                    <li>The materials cannot be used for commercial purposes</li>
                    <li>The materials cannot be redistributed</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
                  <p className="text-muted-foreground">
                    We provide AI-powered SaaS and PaaS solutions. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. User Obligations</h2>
                  <p className="text-muted-foreground mb-4">
                    Users agree to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate account information</li>
                    <li>Maintain the security of their account</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not misuse our services</li>
                  </ul>
                </section>
              </div>
            </ScrollArea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
