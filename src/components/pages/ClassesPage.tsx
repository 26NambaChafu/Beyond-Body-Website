import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const classes = [
  {
    id: 'aerial',
    name: 'Aerial Silks',
    description: 'Experience The Thrill Of Aerial Fitness With Our Silk Classes. Build Upper Body Strength, Improve Flexibility, And Learn Graceful Movements Suspended In The Air.',
    image: 'https://images.pexels.com/photos/4324042/pexels-photo-4324042.jpeg',
    duration: '60 minutes',
    level: 'All levels',
    benefits: [
      'Build Upper Body & Core Strength',
      'Improve Flexibility & Balance',
      'Low-impact Full Body Workout',
      'Boost Confidence And Body Awareness',
    ],
  },
  {
    id: 'barre',
    name: 'Barre',
    description: 'Ballet-inspired Workouts Combining Elements Of Pilates, Dance, & Functional Training. Tone & Sculpt Your Entire Body With Small, Controlled Movements.',
    image: 'https://images.pexels.com/photos/6539870/pexels-photo-6539870.jpeg',
    duration: '55 minutes',
    level: 'All levels',
    benefits: [
      'Sculpt & Tone Muscles',
      'Improve Posture & Alignment',
      'Increase Flexibility',
      'Low-impact, Joint-Friendly Workout',
    ],
  },
  {
    id: 'dance',
    name: 'Dance Fitness',
    description: 'Get Your Heart Pumping With High-Energy Dance Classes. From Hip-Hop To Contemporary, Express Yourself While Burning Calories & Having Fun.',
    image: 'https://images.pexels.com/photos/8957646/pexels-photo-8957646.jpeg',
    duration: '50 minutes',
    level: 'Beginner to Intermediate',
    benefits: [
      'Cardiovascular Endurance',
      'Full-Body Coordination',
      'Stress Relief Through Movement',
      'Fun & Energizing Workout',
    ],
  },
  {
    id: 'interval',
    name: 'Interval Training',
    description: 'High-Intensity Interval Training Designed to Maximize Calorie Burn & Build Strength. Short Bursts of Intense Exercise Followed by Recovery Periods.',
    image: 'https://images.pexels.com/photos/4804337/pexels-photo-4804337.jpeg',
    duration: '45 minutes',
    level: 'Intermediate to Advanced',
    benefits: [
      'Burn Maximum Calories',
      'Boost Metabolism',
      'Build Lean Muscle',
      'Improve Cardiovascular Fitness',
    ],
  },
  {
    id: 'yoga-trapeze',
    name: 'Yoga Trapeze',
    description: 'Inverted Yoga Practice Using A Hammock-Style Trapeze. Decompress Your Spine, Deepen Stretches, & Experience The Benefits Of Inversion Therapy.',
    image: 'https://images.pexels.com/photos/6582985/pexels-photo-6582985.jpeg',
    duration: '60 minutes',
    level: 'All levels',
    benefits: [
      'Spinal Decompression',
      'Deep Stretching',
      'Core Strengthening',
      'Stress Relief & Relaxation',
    ],
  },
  {
    id: 'mat-yoga',
    name: 'Mat Yoga',
    description: 'Traditional Yoga Practice On The Mat. From Gentle Hatha To Flowing Vinyasa, Find Your Perfect Balance Of Strength, Flexibility, & Mindfulness.',
    image: 'https://images.pexels.com/photos/8436605/pexels-photo-8436605.jpeg',
    duration: '60 minutes',
    level: 'All levels',
    benefits: [
      'Improve Flexibility',
      'Build Strength & Balance',
      'Reduce Stress & Anxiety',
      'Enhance Mind-Body Connection',
    ],
  },
  {
    id: 'pilates',
    name: 'Pilates',
    description: 'Core-Focused Workouts That Emphasize Controlled Movements & Proper Breathing. Build A Strong Foundation & Improve Overall Body Awareness.',
    image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg',
    duration: '55 minutes',
    level: 'All levels',
    benefits: [
      'Strengthen Core Muscles',
      'Improve Posture',
      'Increase Flexibility',
      'Prevent Injuries',
    ],
  },
];

export function ClassesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Our Classes</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto italic">
            Explore Our Diverse Range Of Fitness & Wellness Classes. From Aerial To Yoga, We Have Something For Everyone.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {classes.map((classItem, index) => (
            <div
              key={classItem.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                  <ImageWithFallback
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl mb-4 text-gray-900">{classItem.name}</h2>
                
                {/* Class Info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={20} />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Target size={20} />
                    <span>{classItem.level}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{classItem.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-xl mb-3 text-gray-900">Benefits:</h3>
                  <ul className="space-y-2">
                    {classItem.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <ArrowRight size={20} className="text-emerald-600 flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/schedule"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  Book This Class <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4 text-gray-900">Not Sure Which Class to Try?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact Us For Personalized Recommendations Or Book A Trial Class To Experience Beyond Body For Yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
            <Link
              to="/schedule"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
