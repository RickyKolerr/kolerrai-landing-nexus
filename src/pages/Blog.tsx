
import { MainNav } from "@/components/main-nav";
import { PwaMenuBar } from "@/components/pwa-menu-bar";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Search } from "lucide-react";

const Blog = () => {
  const categories = ["All", "AI & ML", "Enterprise", "Tech News", "Case Studies"];
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise",
      excerpt: "Exploring how artificial intelligence is transforming business operations and decision-making processes in modern enterprises.",
      category: "AI & ML",
      date: "March 1, 2024",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 2,
      title: "Machine Learning Best Practices",
      excerpt: "A comprehensive guide to implementing machine learning solutions in your organization with proven methodologies.",
      category: "Tech News",
      date: "March 2, 2024",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world examples of companies that have successfully leveraged AI to transform their operations.",
      category: "Case Studies",
      date: "March 3, 2024",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
  ];

  return (
    <div className="relative min-h-screen pb-16 md:pb-0">
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

            {/* Search and Filter Section */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-accent/10 hover:bg-accent/10 transition-colors whitespace-nowrap"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-accent/10 hover-lift card-shine"
                >
                  <div 
                    className="aspect-video bg-accent/10 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <ButtonGradient variant="link" className="px-0 hover:no-underline">
                      Read More →
                    </ButtonGradient>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-accent/10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Get the latest articles and insights delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-accent/10 focus:border-accent/20 focus:outline-none focus:ring-2 focus:ring-accent/10"
                  />
                  <ButtonGradient>Subscribe</ButtonGradient>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <PwaMenuBar />
    </div>
  );
};

export default Blog;
