import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Brain, Globe, Users, Trophy, Target, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
                Pioneering AI Innovation
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                Building the future of AI-powered solutions for businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6 text-accent" />
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To revolutionize business operations through cutting-edge AI solutions, making advanced technology accessible to companies of all sizes.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="h-6 w-6 text-accent" />
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To empower businesses with innovative AI tools and platforms that drive growth, efficiency, and digital transformation.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="/lovable-uploads/0e91fd2a-58a6-4954-83ff-eadb10237801.png"
                    alt="Ricky Anh Nguyen"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Ricky Anh Nguyen</h3>
                  <p className="text-accent mb-4">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm">
                    A visionary leader with extensive experience in AI and cloud computing, 
                    driving innovation in the SaaS and PaaS industry.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                    alt="David Chen"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">David Chen</h3>
                  <p className="text-accent mb-4">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm">
                    An AI expert with a proven track record in developing scalable cloud solutions 
                    and machine learning systems.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                    alt="Sarah Mitchell"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Sarah Mitchell</h3>
                  <p className="text-accent mb-4">Chief Operating Officer</p>
                  <p className="text-muted-foreground text-sm">
                    A strategic leader focused on scaling operations and delivering 
                    exceptional client experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">1M+</div>
                <p className="text-muted-foreground">API Calls Daily</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime SLA</p>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Brain className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                  <p className="text-muted-foreground">
                    Constantly pushing boundaries in AI technology to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Creating solutions that transform businesses across borders and cultures.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Client Success</h3>
                  <p className="text-muted-foreground">
                    Dedicated to helping our clients achieve their business objectives through AI.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <ButtonGradient 
                  size="lg"
                  className="hover-lift glow"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </ButtonGradient>
                <ButtonGradient 
                  size="lg"
                  variant="outline"
                  className="hover-lift"
                  onClick={() => navigate('/platform')}
                >
                  Explore Platform
                </ButtonGradient>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
