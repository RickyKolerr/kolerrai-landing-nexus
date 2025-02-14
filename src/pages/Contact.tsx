
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                We'd love to hear from you
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative backdrop-blur-xl rounded-2xl p-8 bg-black/40 border border-white/10 hover:border-white/20 transition-all">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/90">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/10 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/90">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/10 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white/90">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/10 text-white"
                      />
                    </div>
                    <ButtonGradient type="submit" className="w-full hover-lift glow">
                      Send Message
                    </ButtonGradient>
                  </form>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-white/70 mb-4">Or explore our solutions</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <ButtonGradient 
                    variant="outline"
                    onClick={() => handleNavigation('/platform')}
                  >
                    View Platform
                  </ButtonGradient>
                  <ButtonGradient 
                    variant="outline"
                    onClick={() => handleNavigation('/pricing')}
                  >
                    See Pricing
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

export default Contact;
