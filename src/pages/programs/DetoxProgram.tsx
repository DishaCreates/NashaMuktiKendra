import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Shield,
  Activity,
  Heart,
  Clock,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Medical Assessment", description: "Comprehensive health evaluation to determine the safest detox approach." },
  { title: "24×7 Medical Supervision", description: "Round-the-clock monitoring by qualified medical professionals." },
  { title: "Medication Management", description: "Appropriate medications to ease withdrawal symptoms safely." },
  { title: "Comfort Care", description: "Focus on patient comfort throughout the detox process." },
  { title: "Nutritional Support", description: "Proper nutrition to help the body recover during detox." },
  { title: "Transition Planning", description: "Seamless transition to rehabilitation after detox completion." },
];

const substances = [
  "Alcohol",
  "Opioids (Heroin, Opium)",
  "Cannabis (Ganja, Charas)",
  "Benzodiazepines",
  "Prescription Drugs",
  "Stimulants",
];

function DetoxProgram() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about the detoxification program at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4226178/pexels-photo-4226178.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
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
              <span>Detoxification</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Medical Detoxification Program
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Safe, medically supervised detoxification for all substances with
              compassionate care and comfort throughout the withdrawal process.
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
                First Step to Recovery
              </span>
              <h2 className="section-title mt-2 mb-6">
                Safe Medical Detoxification
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Detoxification is the first critical step in addiction treatment. It involves
                clearing the body of substances while managing withdrawal symptoms. Our
                medically supervised detox ensures safety and comfort.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Attempting to detox alone can be dangerous and often leads to relapse.
                Our medical team provides 24×7 supervision with medication support
                to make the process as comfortable as possible.
              </p>
              <div className="bg-primary-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">We Detox:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {substances.map((substance) => (
                    <div key={substance} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{substance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/4047038/pexels-photo-4047038.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical detox"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Detox Program</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-500" />
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
              Start Detox Safely Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Don't detox alone. Our medical team is ready to help you safely begin
              your recovery journey.
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

export default DetoxProgram;
