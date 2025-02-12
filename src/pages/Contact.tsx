
import { MainNav } from "@/components/main-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>

      <div className="pt-16">
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          <div className="relative mx-auto max

-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                We'd love to hear from you
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                  />
                </div>
                <ButtonGradient className="w-full">Send Message</ButtonGradient>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
