
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ricky Anh Nguyen",
      role: "Chief Executive Officer",
      description: "Visionary leader driving KolerrAI's mission to revolutionize AI solutions. Focused on strategic growth and innovation in the AI industry.",
      imageUrl: "/lovable-uploads/99c4eb06-a618-421b-a272-81e310d4431d.png"
    },
    {
      name: "Tony Nguyen",
      role: "Chief Technology Officer",
      description: "Leading our technology vision and driving innovation in AI solutions development. Expert in platform architecture and cutting-edge tech implementation.",
      imageUrl: ""
    },
    {
      name: "Dat Nguyen",
      role: "Chief Operating Officer",
      description: "Orchestrating operational excellence and ensuring seamless delivery of our AI solutions. Focused on scaling our platform capabilities and client success.",
      imageUrl: ""
    },
    {
      name: "Ashley Phạm",
      role: "Marketing Manager",
      description: "Driving our market presence and brand strategy. Specializes in communicating complex AI solutions to diverse audiences and building meaningful client relationships.",
      imageUrl: ""
    }
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-4">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Meet the Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The innovative minds behind KolerrAI's transformative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-accent/10 bg-white/5 p-6 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 hover-lift text-center"
            >
              <Avatar className="w-32 h-32 mx-auto mb-6">
                {member.imageUrl ? (
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                ) : (
                  <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                )}
              </Avatar>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-accent mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
