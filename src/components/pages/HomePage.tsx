import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Award, Accessibility, CreditCard, Smartphone, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const classHighlights = [
  {
    name: 'Aerial',
    description: 'Defy Gravity & Build Strength With Our Aerial Silk Classes.',
    image: 'https://images.pexels.com/photos/3984371/pexels-photo-3984371.jpeg'
  },
  {
    name: 'Barre',
    description: 'Ballet-Inspired Workouts To Tone, Sculpt, And Improve Flexibility.',
    image: 'https://images.pexels.com/photos/4324059/pexels-photo-4324059.jpeg'
  },
  {
    name: 'Dance',
    description: 'Express Yourself While Getting Fit With Energetic Dance Classes.',
    image: 'https://images.pexels.com/photos/8957662/pexels-photo-8957662.jpeg'
  },
  {
    name: 'Yoga & Pilates',
    description: 'Find Balance And Build Core Strength With Mindful Movement.',
    image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg'
  },
  {
    name: 'Interval Training',
    description: 'High-Intensity Workouts Designed To Maximize Calorie Burn.',
    image: 'https://images.pexels.com/photos/34043556/pexels-photo-34043556.jpeg'
  },
  {
    name: 'Yoga Trapeze',
    description: 'Inverted Yoga Practice For Deep Stretching And Decompression.',
    image: 'https://images.pexels.com/photos/8436430/pexels-photo-8436430.jpeg'
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Beyond Body has transformed my approach to fitness. The aerial classes are amazing and the instructors are so supportive!',
  },
  {
    name: 'David K.',
    text: 'The variety of classes keeps me coming back. From yoga to interval training, there\'s something for every mood and goal.',
  },
  {
    name: 'Amina R.',
    text: 'I love that the studio is wheelchair accessible. The welcoming atmosphere makes everyone feel at home.',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section with image background */}
      <section
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
        "url('https://images.pexels.com/photos/6455798/pexels-photo-6455798.jpeg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl mb-6 font-extrabold">
        Move Beyond Your Limits
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-emerald-50 italic">
        Boutique fitness & wellness in the heart of Nairobi. Aerial, Barre, Dance, Yoga, Pilates & more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/schedule"
          className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
        >
          Book a Class <ArrowRight size={20} />
        </Link>
        <Link
          to="/classes"
          className="bg-white text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
        >
          Explore Classes
        </Link>
        </div>
      </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-gray-900">What Makes Us Special</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto italic">
          Beyond Body is more than a fitness studio - it is a welcoming community dedicated to helping you thrive.
        </p>
        </div>

        {/* Wrapper for the three features */}
        <div className='text-center p-6 rounded-xl shadow-lg bg-green-500 hover:shadow-xl transition-shadow duration-300'>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="text-emerald-700" size={32} />
          </div>
          <h3 className="text-xl mb-2">Diverse Class Offerings</h3>
          <p className="text-gray-600 italic">
          From aerial silks to mat yoga, we offer a variety of classes to match your mood and fitness goals.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="text-emerald-700" size={32} />
          </div>
          <h3 className="text-xl mb-2">Inclusive & Welcoming</h3>
          <p className="text-gray-600 italic">
          We believe fitness is for everyone. Our wheelchair-accessible studio ensures all can participate.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Award className="text-emerald-700" size={32} />
          </div>
          <h3 className="text-xl mb-2">Expert Instructors</h3>
          <p className="text-gray-600 italic">
          Our certified instructors bring passion and expertise to every class, supporting you every step of the way.
          </p>
        </div>
        </div>
        </div>
        </div>
      </section>

      {/* Class Highlights */}
      <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-gray-900">Our Classes</h2>
        <p className="text-xl text-gray-600 italic">
          Discover The Perfect Class To Match Your Fitness Journey.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classHighlights.map((classType) => (
          <div key={classType.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="h-48 overflow-hidden">
            <ImageWithFallback
            src={classType.image}
            alt={classType.name}
            className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl mb-2">{classType.name}</h3>
            <p className="text-gray-600 mb-4">{classType.description}</p>
            <Link
            to="/classes"
            className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
            Learn More <ArrowRight size={16} />
            </Link>
          </div>
          </div>
        ))}
        </div>

        <div className="text-center mt-12">
        <Link
          to="/classes"
          className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
        >
          View All Classes <ArrowRight size={20} />
        </Link>
        </div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl mb-4 text-gray-900">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-emerald-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
          <p className="text-emerald-700">- {testimonial.name}</p>
          </div>
        ))}
        </div>
      </div>
      </section>

      {/* Amenities & Access */}
      <section className="py-16 px-4 bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-4xl mb-4">Accessible & Convenient</h2>
        <p className="text-xl text-emerald-50 italic">
          We've Made It Easy For Everyone To Join Us
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Accessibility size={32} />
          </div>
          <h3 className="text-xl mb-2">Wheelchair Accessible</h3>
          <p className="text-emerald-100 italic">Entrance, Parking & Facilities</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin size={32} />
          </div>
          <h3 className="text-xl mb-2">Easy to Find</h3>
          <p className="text-emerald-100 italic">Kitisuru Road, Kivulini House</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard size={32} />
          </div>
          <h3 className="text-xl mb-2">Card Payments</h3>
          <p className="text-emerald-100 italic">Credit & Debit Cards Accepted</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Smartphone size={32} />
          </div>
          <h3 className="text-xl mb-2">Mobile Payments</h3>
          <p className="text-emerald-100 italic">NFC & Mobile Payment Options</p>
        </div>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl mb-8 text-emerald-50">
        Join Our Welcoming Community & Discover What Your Body Can Achieve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/schedule"
          className="bg-white text-emerald-700 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center justify-center gap-2"
        >
          Book Your First Class <ArrowRight size={20} />
        </Link>
        <Link
          to="/contact"
          className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center"
        >
          Contact Us
        </Link>
        </div>
      </div>
      </section>
    </div>
  );
}
