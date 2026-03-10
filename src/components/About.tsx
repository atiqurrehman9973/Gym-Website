import { Award, Users, Dumbbell, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '5000+', label: 'Active Members' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Dumbbell, value: '50+', label: 'Training Programs' },
    { icon: Target, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gym Equipment"
              className="rounded-lg shadow-2xl shadow-red-900/30"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-lg shadow-2xl">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              WHERE <span className="text-red-600">CHAMPIONS</span> ARE BUILT
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At IronFit, we don't just build bodies – we forge warriors. Our state-of-the-art facility
              combines cutting-edge equipment with world-class training programs designed to push you beyond
              your limits.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you're a beginner starting your fitness journey or an athlete looking to reach new
              heights, our expert trainers and supportive community will guide you every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition-all duration-300 group"
                  >
                    <Icon className="w-8 h-8 text-red-600 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
