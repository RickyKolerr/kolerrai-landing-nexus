
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Star, Quote } from "lucide-react";

const Success = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote: "KolerrAI has transformed our operations. The AI-driven automation has reduced our processing time by 70% and improved accuracy significantly.",
      metrics: "70% faster processing",
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow",
      company: "DataFlow Analytics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      quote: "Implementing KolerrAI's platform was seamless. Our team's productivity has doubled, and we've seen a 40% reduction in operational costs.",
      metrics: "40% cost reduction",
    },
    {
      name: "Emily Roberts",
      role: "Head of AI",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      quote: "The machine learning capabilities of KolerrAI have helped us build and deploy models faster than ever. Our time-to-market has improved by 60%.",
      metrics: "60% faster deployment",
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
                Success Stories
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up">
                See how leading companies are transforming with KolerrAI
              </p>
            </div>

            {/* Case Studies */}
            <div className="grid gap-8 md:grid-cols-3 mb-24">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-accent">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-accent/40 mb-4" />
                  <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-accent font-semibold">{testimonial.metrics}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-8">
                Join these successful companies and start your AI transformation journey today.
              </p>
              <ButtonGradient size="lg" className="hover-lift glow">
                Start Free Trial
              </ButtonGradient>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Success;
