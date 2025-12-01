import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Have Questions? Want To Learn More? We'd Love To Hear From You.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900">Phone</h3>
                    <a
                      href="tel:0780516777"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      0780 516777
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call Us During Business Hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900">Email</h3>
                    <a
                      href="mailto:info@beyondbody.co.ke"
                      className="text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      info@beyondbody.co.ke
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We Will Respond Within 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-700">
                      2 Kitisuru Road (3.2B Kitisuru Road)<br />
                      Kivulini House, Nairobi<br />
                      Plus Code: QQ77+72 Nairobi
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Wheelchair Accessible Parking & Entrance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 8:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-100 rounded-lg h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Map View</p>
                  <p className="text-sm">Plus Code: QQ77+72 Nairobi</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                    placeholder="0700 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                  >
                    <option value="">Select A Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership & Packages</option>
                    <option value="classes">Class Information</option>
                    <option value="accessibility">Accessibility Questions</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 text-gray-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">Do I Need To Book In Advance?</h3>
              <p className="text-gray-600">
                Yes, We Recommend Booking Classes In Advance As Spots Can Fill Up Quickly, Especially For Popular Times. You Can Book Online Through Our Website Or Call Us At 0780 516777.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">What Should I Bring To Class?</h3>
              <p className="text-gray-600">
                Bring Comfortable Workout Clothes, A Water Bottle, And A Positive Attitude! We Provide Mats And Equipment. For Aerial Classes, Avoid Wearing Jewelry Or Clothing With Zippers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">Are You Really Wheelchair Accessible?</h3>
              <p className="text-gray-600">
                Absolutely! Our Parking, Entrance, Studio Space, and Facilities Are All Wheelchair Accessible. We're Committed To Making Fitness Accessible To Everyone. Please Call Ahead If You Have Specific Accessibility Needs So We Can Ensure The Best Experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">Can Beginners Join Any Class?</h3>
              <p className="text-gray-600">
                Most Of Our Classes Welcome All Levels, And Our Instructors Provide Modifications. However, Some Classes (Like Interval Training - Advanced) Are Better Suited For Those With A Fitness Base. Check The Class Level Before Booking, And Feel Free To Ask Us For Recommendations!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">What Payment Methods Do You Accept?</h3>
              <p className="text-gray-600">
                We Accept Credit/Debit Cards, M-PESA, And Other Mobile Payment Options (NFC). Payment Can Be Made Online When Booking Or In-Person At The Studio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl mb-2 text-gray-900">Do You Offer Personal Training?</h3>
              <p className="text-gray-600">
                Yes! We Offer One-On-One And Small Group Personal Training Sessions. Contact Us To Discuss Your Goals And Schedule A Session With One Of Our Expert Instructors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
