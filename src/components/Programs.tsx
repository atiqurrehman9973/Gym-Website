import { Dumbbell, Heart, Zap, User } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build raw power and muscle mass with our comprehensive strength training programs designed for all levels.',
      features: ['Free Weights', 'Powerlifting', 'Bodybuilding', 'Progressive Overload'],
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Heart,
      title: 'Cardio & Conditioning',
      description: 'Enhance your endurance and burn fat with high-intensity cardio workouts that deliver results.',
      features: ['HIIT Training', 'Running', 'Cycling', 'Rowing'],
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Zap,
      title: 'CrossFit',
      description: 'Experience the ultimate full-body workout combining strength, cardio, and functional movements.',
      features: ['WODs', 'Olympic Lifting', 'Gymnastics', 'Metabolic Conditioning'],
      image: 'https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: User,
      title: 'Personal Training',
      description: 'Get customized one-on-one training with certified experts who focus on your specific goals.',
      features: ['Custom Plans', 'Nutrition Guidance', 'Progress Tracking', 'Accountability'],
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TRAINING <span className="text-red-600">PROGRAMS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our diverse range of programs designed to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{program.description}</p>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-500 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded-full font-semibold transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
