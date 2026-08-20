import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Home,
  Calendar,
  Users,
  Heart,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Private Accommodation", description: "Comfortable private or shared rooms with all amenities for a pleasant stay." },
  { title: "Structured Daily Routine", description: "Organized schedule including therapy, activities, and personal time." },
  { title: "24×7 Medical Care", description: "Round-the-clock medical supervision and emergency support." },
  { title: "Daily Therapy Sessions", description: "Individual and group therapy sessions throughout the week." },
  { title: "Yoga & Meditation", description: "Daily yoga and meditation sessions for holistic healing." },
  { title: "Nutritious Meals", description: "Healthy, balanced meals to support physical recovery." },
];

const dailySchedule = [
  { time: "6:00 AM", activity: "Wake up & Morning Yoga" },
  { time: "8:00 AM", activity: "Breakfast" },
  { time: "9:00 AM", activity: "Individual Therapy Session" },
  { time: "11:00 AM", activity: "Group Therapy" },
  { time: "1:00 PM", activity: "Lunch & Rest" },
  { time: "3:00 PM", activity: "Counseling / Activity" },
  { time: "5:00 PM", activity: "Evening Yoga / Meditation" },
  { time: "7:00 PM", activity: "Dinner" },
  { time: "8:00 PM", activity: "Evening Group / Free Time" },
  { time: "10:00 PM", activity: "Lights Out" },
];

function ResidentialRehab() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about the residential rehabilitation program at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <Link to="/programs" className="hover:text-green-300">Programs</Link>
              <span>/</span>
              <span>Residential Rehab</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Residential Rehabilitation Program
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Immersive, structured in-patient treatment with comfortable accommodation,
              24×7 care, and comprehensive therapy for lasting recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="btn-white"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                In-Patient Care
              </span>
              <h2 className="section-title mt-2 mb-6">
                Complete Recovery in a Supportive Environment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our residential rehabilitation program provides immersive treatment
                where patients stay at our facility for the duration of their treatment.
                This allows for focused recovery away from triggers and distractions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a structured daily routine, professional therapy, and holistic
                activities like yoga and meditation, patients develop the skills
                and strength needed for lasting recovery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Residential facility"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Sample Schedule
            </span>
            <h2 className="section-title mt-2 mb-4">A Day in Residential Rehab</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {dailySchedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-6 p-4 ${index !== dailySchedule.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="w-24 text-primary-500 font-semibold">{item.time}</div>
                  <div className="text-gray-700">{item.activity}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What We Offer</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-accent-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
              Begin Your Residential Treatment
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Take a break from your environment and focus entirely on recovery.
              Our residential program is waiting for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="btn-white"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ResidentialRehab;
