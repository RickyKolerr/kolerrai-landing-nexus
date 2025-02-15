
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
                Leading the SaaS & PaaS Evolution
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-3xl mx-auto">
                Empowering businesses with intelligent platforms that seamlessly integrate AI into everyday operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6 text-accent" />
                  Our Vision
                </h2>
                <p className="text-muted-foreground">
                  To be the global leader in delivering future-proof AI solutions that empower businesses to thrive in the digital age. We envision a world where every organization can harness the power of artificial intelligence through scalable, secure, and efficient platforms that drive continuous innovation and sustainable growth.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Rocket className="h-6 w-6 text-accent" />
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To empower businesses through custom-built platforms that seamlessly integrate AI capabilities, automation, and intelligent workflows. We are committed to delivering measurable business value by optimizing processes, accelerating digital transformation, and providing scalable solutions that help our clients stay competitive in an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-16">Our Leadership</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="/lovable-uploads/99c4eb06-a618-421b-a272-81e310d4431d.png"
                    alt="Ricky Anh Nguyen"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Ricky Anh Nguyen</h3>
                  <p className="text-accent mb-4">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm">
                    A pioneering leader in SaaS/PaaS development with extensive experience in 
                    building AI-integrated business platforms that drive digital transformation.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                    alt="David Chen"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">David Chen</h3>
                  <p className="text-accent mb-4">Chief Technology Officer</p>
                  <p className="text-muted-foreground text-sm">
                    An expert in platform architecture and AI integration, focusing on building 
                    scalable SaaS solutions that deliver measurable business value.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift text-center">
                  <img
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                    alt="Sarah Mitchell"
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Sarah Mitchell</h3>
                  <p className="text-accent mb-4">Chief Operating Officer</p>
                  <p className="text-muted-foreground text-sm">
                    A strategic leader focused on optimizing platform delivery and ensuring 
                    exceptional client success in their digital transformation journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">1M+</div>
                <p className="text-muted-foreground">Daily Platform Interactions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                <p className="text-muted-foreground">Active Platform Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <p className="text-muted-foreground">Integrated Solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                <p className="text-muted-foreground">Platform Uptime</p>
              </div>
            </div>

            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Brain className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Platform Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously enhancing our platforms with cutting-edge AI capabilities to solve real business challenges.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
                  <p className="text-muted-foreground">
                    Building platforms that work harmoniously with existing business systems and workflows.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-4">Client Success</h3>
                  <p className="text-muted-foreground">
                    Ensuring our platforms deliver measurable value and drive real business transformation.
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
                  Schedule Demo
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
