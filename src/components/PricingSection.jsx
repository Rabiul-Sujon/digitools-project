

//  Check icon from Lucide React 
import { Check } from 'lucide-react'; 

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      tagline: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      tagline: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-10 rounded-[32px] border ${
                plan.isPopular 
                  ? "bg-[#7C3AED] text-white border-transparent scale-105 z-10 shadow-2xl" 
                  : "bg-white text-slate-900 border-gray-100 shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-slate-900 text-xs font-black px-4 py-1.5 rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-8 ${plan.isPopular ? "text-purple-100" : "text-slate-500"}`}>{plan.tagline}</p>

              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-lg ml-1 ${plan.isPopular ? "text-purple-200" : "text-slate-400"}`}>/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/*  Use the Check icon using Tailwind */}
                    <Check className={`w-5 h-5 mt-0.5 ${plan.isPopular ? "text-white" : "text-green-500"}`} />
                    
                    <span className={`text-sm font-medium ${plan.isPopular ? "text-purple-50" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.isPopular 
                  ? "bg-white text-[#7C3AED] hover:bg-gray-100" 
                  : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;