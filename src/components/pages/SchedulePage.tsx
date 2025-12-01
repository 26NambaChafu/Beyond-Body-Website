import { useState } from 'react';
import { Calendar, Clock, Users, CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

type ClassSchedule = {
  id: string;
  name: string;
  time: string;
  duration: string;
  instructor: string;
  spots: number;
  level: string;
};

const weeklySchedule: Record<string, ClassSchedule[]> = {
  Monday: [
    { id: 'mon-1', name: 'Mat Yoga', time: '06:30 AM', duration: '60 min', instructor: 'Sarah', spots: 8, level: 'All levels' },
    { id: 'mon-2', name: 'Barre', time: '09:00 AM', duration: '55 min', instructor: 'Lisa', spots: 12, level: 'All levels' },
    { id: 'mon-3', name: 'Aerial Silks', time: '12:00 PM', duration: '60 min', instructor: 'Jordan', spots: 6, level: 'Intermediate' },
    { id: 'mon-4', name: 'Interval Training', time: '05:30 PM', duration: '45 min', instructor: 'Mike', spots: 15, level: 'Intermediate' },
    { id: 'mon-5', name: 'Yoga Trapeze', time: '07:00 PM', duration: '60 min', instructor: 'Emma', spots: 8, level: 'All levels' },
  ],
  Tuesday: [
    { id: 'tue-1', name: 'Pilates', time: '06:30 AM', duration: '55 min', instructor: 'Rachel', spots: 10, level: 'All levels' },
    { id: 'tue-2', name: 'Dance Fitness', time: '09:30 AM', duration: '50 min', instructor: 'Carlos', spots: 20, level: 'Beginner' },
    { id: 'tue-3', name: 'Mat Yoga', time: '12:30 PM', duration: '60 min', instructor: 'Sarah', spots: 12, level: 'All levels' },
    { id: 'tue-4', name: 'Barre', time: '05:00 PM', duration: '55 min', instructor: 'Lisa', spots: 12, level: 'All levels' },
    { id: 'tue-5', name: 'Aerial Silks', time: '06:30 PM', duration: '60 min', instructor: 'Jordan', spots: 6, level: 'Beginner' },
  ],
  Wednesday: [
    { id: 'wed-1', name: 'Interval Training', time: '06:00 AM', duration: '45 min', instructor: 'Mike', spots: 15, level: 'Advanced' },
    { id: 'wed-2', name: 'Yoga Trapeze', time: '09:00 AM', duration: '60 min', instructor: 'Emma', spots: 8, level: 'All levels' },
    { id: 'wed-3', name: 'Pilates', time: '12:00 PM', duration: '55 min', instructor: 'Rachel', spots: 10, level: 'All levels' },
    { id: 'wed-4', name: 'Dance Fitness', time: '05:30 PM', duration: '50 min', instructor: 'Carlos', spots: 20, level: 'Intermediate' },
    { id: 'wed-5', name: 'Mat Yoga', time: '07:00 PM', duration: '60 min', instructor: 'Sarah', spots: 12, level: 'All levels' },
  ],
  Thursday: [
    { id: 'thu-1', name: 'Barre', time: '06:30 AM', duration: '55 min', instructor: 'Lisa', spots: 12, level: 'All levels' },
    { id: 'thu-2', name: 'Aerial Silks', time: '09:30 AM', duration: '60 min', instructor: 'Jordan', spots: 6, level: 'All levels' },
    { id: 'thu-3', name: 'Interval Training', time: '12:00 PM', duration: '45 min', instructor: 'Mike', spots: 15, level: 'Intermediate' },
    { id: 'thu-4', name: 'Pilates', time: '05:00 PM', duration: '55 min', instructor: 'Rachel', spots: 10, level: 'All levels' },
    { id: 'thu-5', name: 'Yoga Trapeze', time: '06:30 PM', duration: '60 min', instructor: 'Emma', spots: 8, level: 'Beginner' },
  ],
  Friday: [
    { id: 'fri-1', name: 'Mat Yoga', time: '06:30 AM', duration: '60 min', instructor: 'Sarah', spots: 12, level: 'All levels' },
    { id: 'fri-2', name: 'Dance Fitness', time: '09:00 AM', duration: '50 min', instructor: 'Carlos', spots: 20, level: 'All levels' },
    { id: 'fri-3', name: 'Barre', time: '12:30 PM', duration: '55 min', instructor: 'Lisa', spots: 12, level: 'All levels' },
    { id: 'fri-4', name: 'Aerial Silks', time: '05:30 PM', duration: '60 min', instructor: 'Jordan', spots: 6, level: 'Intermediate' },
    { id: 'fri-5', name: 'Interval Training', time: '07:00 PM', duration: '45 min', instructor: 'Mike', spots: 15, level: 'All levels' },
  ],
  Saturday: [
    { id: 'sat-1', name: 'Yoga Trapeze', time: '08:00 AM', duration: '60 min', instructor: 'Emma', spots: 10, level: 'All levels' },
    { id: 'sat-2', name: 'Dance Fitness', time: '10:00 AM', duration: '50 min', instructor: 'Carlos', spots: 25, level: 'All levels' },
    { id: 'sat-3', name: 'Pilates', time: '11:30 AM', duration: '55 min', instructor: 'Rachel', spots: 12, level: 'All levels' },
    { id: 'sat-4', name: 'Mat Yoga', time: '01:00 PM', duration: '60 min', instructor: 'Sarah', spots: 15, level: 'All levels' },
  ],
  Sunday: [
    { id: 'sun-1', name: 'Mat Yoga', time: '08:00 AM', duration: '60 min', instructor: 'Sarah', spots: 15, level: 'All levels' },
    { id: 'sun-2', name: 'Barre', time: '10:00 AM', duration: '55 min', instructor: 'Lisa', spots: 12, level: 'All levels' },
    { id: 'sun-3', name: 'Aerial Silks', time: '11:30 AM', duration: '60 min', instructor: 'Jordan', spots: 8, level: 'All levels' },
    { id: 'sun-4', name: 'Yoga Trapeze', time: '01:00 PM', duration: '60 min', instructor: 'Emma', spots: 10, level: 'All levels' },
  ],
};

const packages = [
  {
    name: 'Single Class',
    price: 'KES 1,500',
    description: 'Drop-in For Any Class',
    features: ['Valid For 1 Class', 'Any Class Type', 'Flexible Scheduling'],
  },
  {
    name: '5-Class Pack',
    price: 'KES 6,500',
    description: 'Save KES 1,000',
    features: ['Valid For 30 Days', 'Any Class Type', 'Transferable'],
    popular: true,
  },
  {
    name: '10-Class Pack',
    price: 'KES 12,000',
    description: 'Save KES 3,000',
    features: ['Valid For 60 Days', 'Any Class Type', 'Transferable'],
  },
  {
    name: 'Unlimited Monthly',
    price: 'KES 18,000',
    description: 'Best Value For Regulars',
    features: ['Unlimited Classes', 'Priority Booking', '10% Off Workshops'],
  },
];

export function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedClass, setSelectedClass] = useState<ClassSchedule | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
  });

  const days = Object.keys(weeklySchedule);

  const handleBookClass = (classItem: ClassSchedule) => {
    setSelectedClass(classItem);
    setShowBookingModal(true);
    setBookingStep('details');
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setBookingStep('confirmation');
      toast.success('Booking Confirmed! Check Your Email For Details.');
    }, 1500);
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setSelectedClass(null);
    setFormData({ name: '', email: '', phone: '', paymentMethod: 'card' });
    setBookingStep('details');
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Schedule & Booking</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            View Our Weekly Class Schedule & Book Your Spot. All Classes Can Be Booked Online With Secure Payment Options.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Pricing & Packages</h2>
            <p className="text-xl text-gray-600">Choose The Package That Fits Your Lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg p-6 ${
                  pkg.popular
                    ? 'bg-emerald-600 text-white shadow-xl scale-105'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-2">
                    <span className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-3xl ${pkg.popular ? 'text-white' : 'text-emerald-600'}`}>
                    {pkg.price}
                  </span>
                </div>
                <p className={`mb-4 ${pkg.popular ? 'text-emerald-50' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${pkg.popular ? 'text-white' : 'text-gray-700'}`}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Weekly Schedule</h2>
            <p className="text-xl text-gray-600">Click On a Class To Book Your Spot</p>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedDay === day
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Class List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule[selectedDay].map((classItem) => (
              <div key={classItem.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl mb-3 text-gray-900">{classItem.name}</h3>
                
                <div className="space-y-2 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{classItem.time} • {classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{classItem.spots} Spots Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{classItem.level}</span>
                  </div>
                  <p className="text-sm">Instructor: {classItem.instructor}</p>
                </div>

                <button
                  onClick={() => handleBookClass(classItem)}
                  className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Book Class
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {bookingStep === 'details' && (
                <>
                  <h2 className="text-2xl mb-4">Book {selectedClass.name}</h2>
                  <p className="text-gray-600 mb-6">
                    {selectedDay} at {selectedClass.time}
                  </p>

                  <form onSubmit={handleSubmitDetails} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        title="Phone Number"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </>
              )}

              {bookingStep === 'payment' && (
                <>
                  <h2 className="text-2xl mb-4">Payment</h2>
                  <p className="text-gray-600 mb-6">
                    Class: {selectedClass.name} - KES 1,500
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-3">Select Payment Method</label>
                      <div className="space-y-2">
                        <button
                          onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                          className={`w-full p-4 rounded-lg border-2 text-left flex items-center gap-3 transition-colors ${
                            formData.paymentMethod === 'card'
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-gray-300 hover:border-emerald-300'
                          }`}
                        >
                          <CreditCard size={24} />
                          <span>Credit/Debit Card</span>
                        </button>
                        <button
                          onClick={() => setFormData({ ...formData, paymentMethod: 'mobile' })}
                          className={`w-full p-4 rounded-lg border-2 text-left flex items-center gap-3 transition-colors ${
                            formData.paymentMethod === 'mobile'
                              ? 'border-emerald-600 bg-emerald-50'
                              : 'border-gray-300 hover:border-emerald-300'
                          }`}
                        >
                          <Smartphone size={24} />
                          <span>Mobile Payment (M-PESA)</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => setBookingStep('details')}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handlePayment}
                        className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Complete Booking
                      </button>
                    </div>
                  </div>
                </>
              )}

              {bookingStep === 'confirmation' && (
                <>
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-emerald-600" />
                    </div>
                    <h2 className="text-2xl mb-2">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-6">
                      You are all set for {selectedClass.name} on {selectedDay} at {selectedClass.time}.
                    </p>
                    <p className="text-gray-600 mb-6">
                      A confirmation email has been sent to {formData.email}.
                    </p>
                    <button
                      onClick={closeModal}
                      className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Payment Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4 text-gray-900">Flexible Payment Options</h2>
          <p className="text-xl text-gray-600 mb-8">
            We accept multiple payment methods for your convenience
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-700">
              <CreditCard size={24} className="text-emerald-600" />
              <span>Credit & Debit Cards</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Smartphone size={24} className="text-emerald-600" />
              <span>M-PESA & Mobile Money</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
