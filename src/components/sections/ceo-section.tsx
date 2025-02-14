
export const CeoSection = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-secondary/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/lovable-uploads/99c4eb06-a618-421b-a272-81e310d4431d.png"
              alt="Ricky Anh Nguyen"
              className="w-40 h-40 rounded-full object-cover border-4 border-accent/20 hover-scale"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Ricky Anh Nguyen</h3>
          <p className="text-accent mb-6">CEO & Founder</p>
          <p className="text-xl text-muted-foreground italic">
            "Our mission is to empower businesses by designing and building custom platforms that integrate cutting-edge AI capabilities. We don't just develop software, we create scalable, future-proof digital solutions that drive seamless digital transformation, optimize business operations, and deliver measurable value through automation and intelligent workflows."
          </p>
        </div>
      </div>
    </section>
  );
};
