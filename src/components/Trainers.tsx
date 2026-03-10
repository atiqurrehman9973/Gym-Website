import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Marcus Steel',
      role: 'Strength & Conditioning Coach',
      specialty: 'Powerlifting & Bodybuilding',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: '15+ years experience training professional athletes',
    },
    {
      name: 'Sarah Williams',
      role: 'CrossFit & HIIT Specialist',
      specialty: 'Functional Fitness',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Former Olympic athlete, certified nutrition coach',
    },
    {
      name: 'David Chen',
      role: 'Personal Training Director',
      specialty: 'Weight Loss & Nutrition',
      image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Helped 500+ clients achieve their transformation goals',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Yoga & Mobility Expert',
      specialty: 'Recovery & Flexibility',
      image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specializes in injury prevention and rehabilitation',
    },
  ];

  return (
    <section id="trainers" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EXPERT <span className="text-red-600">TRAINERS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet our certified professionals dedicated to helping you reach your peak performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-red-600 text-sm font-semibold mb-2">{trainer.role}</p>
                  <p className="text-gray-300 text-xs mb-3">{trainer.specialty}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{trainer.bio}</p>
                </div>
              </div>

              <div className="p-4 bg-gray-900 border-t border-gray-800">
                <div className="flex justify-center space-x-4">
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
