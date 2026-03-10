import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-white">
                IRON<span className="text-red-600">FIT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transform your body and mind with premium fitness training and world-class facilities.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Programs
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Trainers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Fitness Street, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                <span>info@ironfit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IronFit Gym. All rights reserved. Built for champions.
          </p>
        </div>
      </div>
    </footer>
  );
}
