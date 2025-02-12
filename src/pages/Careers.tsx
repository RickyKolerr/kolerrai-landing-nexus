
import { EnhancedNav } from "@/components/enhanced-nav";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { Briefcase, Users, Globe, Rocket, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();

  const jobPostings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our core AI team to develop cutting-edge machine learning solutions."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead the development of our AI-powered SaaS products."
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
                Join Our Mission
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl slide-up max-w-2xl mx-auto">
                Help us shape the future of AI technology
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {jobPostings.map((job, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-accent/10 hover-lift"
                >
                  <Briefcase className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {job.department}
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {job.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <ButtonGradient onClick={() => navigate('/contact')}>
                    Apply Now
                  </ButtonGradient>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
