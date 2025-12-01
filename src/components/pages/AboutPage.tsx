import { Heart, Target, Users, Accessibility, Award, MapPin } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Inclusivity',
    description: 'We believe fitness is for everyone, regardless of age, ability, or fitness level. Our wheelchair-accessible studio and welcoming community ensure all feel at home.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Our certified instructors bring expertise and passion to every class, helping you achieve your wellness goals safely and effectively.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Beyond Body is more than a studio - it is a supportive community where members encourage and inspire each other.',
  },
];

const amenities = [
  {
    icon: Accessibility,
    title: 'Wheelchair Accessible',
    description: 'Our entrance, parking, and facilities are fully accessible to ensure everyone can join us.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Conveniently located at 2 Kitisuru Road in Kivulini House with ample parking.',
  },
  {
    icon: Award,
    title: 'Premium Facilities',
    description: 'Modern, clean studio space with top-quality equipment and amenities.',
  },
];

const instructors = [
  {
    name: 'Sarah Johnson',
    specialty: 'Yoga & Mindfulness',
    bio: 'Certified yoga instructor with 8+ years of experience in Hatha, Vinyasa, and restorative yoga.',
  },
  {
    name: 'Lisa Chen',
    specialty: 'Barre & Ballet',
    bio: 'Former professional dancer specializing in ballet-inspired fitness and barre techniques.',
  },
  {
    name: 'Jordan Williams',
    specialty: 'Aerial Arts',
    bio: 'Aerial silks expert with certifications in circus arts and aerial fitness instruction.',
  },
  {
    name: 'Rachel Omondi',
    specialty: 'Pilates',
    bio: 'Pilates instructor focused on core strength, rehabilitation, and functional movement.',
  },
  {
    name: 'Carlos Martinez',
    specialty: 'Dance Fitness',
    bio: 'Dance choreographer bringing energy and creativity to every dance fitness class.',
  },
  {
    name: 'Emma Davis',
    specialty: 'Yoga Trapeze',
    bio: 'Specialized in inversion therapy and aerial yoga for spinal health and flexibility.',
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">About Beyond Body</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Your Boutique Fitness & Wellness Destination in Nairobi
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: "url('https://images.pexels.com/photos/8692272/pexels-photo-8692272.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center top', backgroundAttachment: 'fixed', opacity: 0.50}} aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center px-4">
          <h2 className="text-4xl mb-6 text-gray-900">Our Story</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Beyond Body Was Founded With A Simple Vision: <br />To Create A Welcoming Space Where Everyone Can Explore Movement, Build Strength, & Discover What Their Body Is Truly Capable Of Achieving.
            </p>
            <p>
              Located In The Heart Of Nairobi At Kitisuru, We Offer A Unique Blend Of Boutique Fitness Classes - From The Grace Of Aerial Silks To The Precision Of Pilates, The Energy Of Dance To The Mindfulness Of Yoga. 
              <br />Our Diverse Offerings Reflect Our Belief That Fitness Should Be Engaging, Accessible, & Tailored To Individual Needs.
            </p>
            <p>
              What Sets Beyond Body Apart Is Our Commitment To Inclusivity. <br /> We Have Designed Our Space To Be Fully Wheelchair Accessible, Ensuring That Fitness Truly Is For Everyone. 
              <br /> Our Instructors Are Not Just Experts In Their Fields - They Are Passionate About Creating A Supportive Environment Where Every Member Feels Valued And Encouraged.
            </p>
            <p>
              Whether You Are A Seasoned Athlete Or Just Beginning Your Wellness Journey, Beyond Body Welcomes You To Move Beyond Your Limits & Discover The Joy Of Mindful Movement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">The Principles That Guide Everything We Do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-emerald-700" size={32} />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities & Accessibility */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Amenities & Accessibility</h2>
            <p className="text-xl text-gray-600">We've Thought of Everything to Make Your Experience Seamless</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div key={amenity.title} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-emerald-700" size={32} />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-4 text-gray-900">Additional Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Wheelchair-Accessible Parking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Wheelchair-Accessible Entrance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Accessible Toilet Facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Credit & Debit Card Payments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>NFC Mobile Payments (M-PESA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Changing Rooms & Lockers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Clean, Modern Facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-1">✓</span>
                <span>Free WiFi</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Meet Our Instructors</h2>
            <p className="text-xl text-gray-600">Passionate Experts Dedicated to Your Wellness Journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-emerald-700" size={48} />
                </div>
                <h3 className="text-xl mb-1 text-center text-gray-900">{instructor.name}</h3>
                <p className="text-emerald-600 text-center mb-3">{instructor.specialty}</p>
                <p className="text-gray-600 text-center text-sm">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Find Us</h2>
            <p className="text-xl text-gray-600">Conveniently Located in Kitisuru, Nairobi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">Location Details</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Address:</strong><br />
                  2 Kitisuru Road (3.2B Kitisuru Road)<br />
                  Kivulini House<br />
                  Nairobi, Kenya
                </p>
                <p>
                  <strong>Plus Code:</strong><br />
                  QQ77+72 Nairobi
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:0780516777" className="text-emerald-600 hover:text-emerald-700">
                    0780 516777
                  </a>
                </p>
                <p>
                  <strong>Parking:</strong><br />
                  Ample Wheelchair-Accessible Parking Available On-Site
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-2" />
                <p>Map Integration</p>
                <p className="text-sm">Plus Code: QQ77+72 Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
