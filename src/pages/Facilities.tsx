import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Bed,
  Stethoscope,
  Activity,
  Brain,
  Trees,
  Utensils,
  MessageCircleHeart,
  Gamepad2,
  Dumbbell,
  Shield,
} from 'lucide-react';
import { siteConfig, facilities } from '../data/siteData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bed: Bed,
  Stethoscope: Stethoscope,
  Activity: Activity,
  Brain: Brain,
  Trees: Trees,
  Utensils: Utensils,
  'MessageCircle': MessageCircleHeart,
  Gamepad2: Gamepad2,
  Dumbbell: Dumbbell,
  Shield: Shield,
};

function Facilities() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about the facilities at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <span>Facilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Our Facilities
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              World-class facilities designed for comfort, healing, and recovery.
              Experience a supportive environment that promotes lasting change.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="btn-white"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                Schedule a Visit
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Centre
            </span>
            <h2 className="section-title mt-2 mb-6">
              A Healing Environment
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our rehabilitation centre in Akbarpur is designed to provide a peaceful,
              comfortable, and therapeutic environment for recovery. Every aspect of
              our facility supports the healing process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = iconMap[facility.icon] || Bed;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">See Our Centre</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg", alt: "Private Room" },
              { src: "https://images.pexels.com/photos/3817495/pexels-photo-3817495.jpeg", alt: "Yoga Hall" },
              { src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg", alt: "Garden Area" },
              { src: "https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg", alt: "Counseling Room" },
              { src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", alt: "Dining Area" },
              { src: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg", alt: "Meditation Center" },
            ].map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
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
              Visit Our Centre Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Schedule a visit to see our facilities and meet our team. We welcome
              families and individuals to tour our centre.
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

export default Facilities;
