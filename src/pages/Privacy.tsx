
import { EnhancedNav } from "@/components/enhanced-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

const Privacy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <ScrollArea className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Account information</li>
                    <li>Usage data</li>
                    <li>Communication preferences</li>
                    <li>Payment information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide and maintain our services</li>
                    <li>Process your transactions</li>
                    <li>Send you technical notices and updates</li>
                    <li>Respond to your comments and questions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to protect your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to data processing</li>
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

export default Privacy;
