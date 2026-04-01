
const StepsSection = () => {
  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
    // Solve the image path using the current file location
  };

  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      image: "user.png", 
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      image: "package.png",  
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      image: "rocket.png", 
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Get Started In 3 Steps</h2>
          <p className="text-slate-500 text-lg">Start using premium digital tools in minutes, not hours.</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-white p-12 rounded-[32px] border border-gray-100 shadow-sm text-center transition-transform hover:scale-[1.02]">
              
              {/* THE TOP-RIGHT CIRCLE  */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                {step.id}
              </div>

              {/* ICON CONTAINER */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <img 
                  src={getImageUrl(step.image)} 
                  alt={step.title} 
                  className="w-12 h-12 object-contain" 
                />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;