
import { MainNav } from "@/components/main-nav";

const Blog = () => {
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
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h1 className="text-gradient mb-6 text-4xl font-bold tracking-tight sm:text-6xl fade-in">
                Latest Updates
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                News, articles, and insights from the KolerrAI team
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Post Cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-accent/10 hover-lift">
                  <div className="aspect-video bg-accent/10" />
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">March {i}, 2024</p>
                    <h3 className="text-xl font-semibold mb-2">The Future of AI in Enterprise</h3>
                    <p className="text-muted-foreground mb-4">
                      Exploring how artificial intelligence is transforming business operations...
                    </p>
                    <a href="#" className="text-accent hover:text-accent/80">Read More →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
