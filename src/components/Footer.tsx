import { Link } from 'react-router-dom';
import { Phone, MapPin, Accessibility, CreditCard, Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl text-white mb-4">Beyond Body</h3>
            <p className="text-sm">
              Your Boutique Fitness & Wellness Destination In Nairobi. Aerial, Barre, Dance, Yoga, Pilates & More.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/classes" className="hover:text-emerald-400 transition-colors">Classes</Link></li>
              <li><Link to="/schedule" className="hover:text-emerald-400 transition-colors">Schedule & Booking</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>2 Kitisuru Road (3.2B), Kivulini House, Nairobi<br />Plus Code: QQ77+72</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0780516777" className="hover:text-emerald-400 transition-colors">0780 516777</a>
              </li>
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="text-white mb-4">Amenities</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Accessibility size={16} />
                <span>Wheelchair Accessible</span>
              </li>
              <li className="flex items-center gap-2">
                <CreditCard size={16} />
                <span>Card Payments</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone size={16} />
                <span>NFC/Mobile Payments</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Beyond Body. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
