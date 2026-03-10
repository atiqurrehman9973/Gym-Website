import { Check } from 'lucide-react';

export default function Pricing() {
  
  const plans = [
    {
      name: 'Basic',
      price: '29',
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Access to gym equipment',
        'Locker room facilities',
        'Basic group classes',
        'Fitness assessment',
        'Mobile app access',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '59',
      period: 'month',
      description: 'Most popular choice for serious athletes',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal training (2x/month)',
        'Nutrition consultation',
        'Free guest passes (5/month)',
        'Sauna & spa access',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '99',
      period: 'month',
      description: 'Ultimate package for peak performance',
      features: [
        'Everything in Pro',
        'Personal training (8x/month)',
        'Custom meal planning',
        'Priority class booking',
        'Unlimited guest passes',
        'Recovery services',
        'VIP lounge access',
      ],
      popular: false,
    },
  ];
  

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MEMBERSHIP <span className="text-red-600">PLANS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexible pricing options to match your fitness goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'border-2 border-red-600 transform md:scale-105 shadow-2xl shadow-red-600/20'
                  : 'border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>

                <button onClick={() => alert("Membership signup coming soon")}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/50'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include a 7-day money-back guarantee • No hidden fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
