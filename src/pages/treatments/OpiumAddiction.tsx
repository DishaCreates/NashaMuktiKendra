import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Syringe,
  Shield,
  Heart,
  Activity,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Opiate Detoxification", description: "Medically supervised safe withdrawal management with comfort care." },
  { title: "Medication-Assisted Treatment", description: "Appropriate medications to manage cravings and withdrawal." },
  { title: "Intensive Therapy", description: "Individual and group therapy addressing addiction's root causes." },
  { title: "Pain Management", description: "Alternative pain management strategies for chronic pain patients." },
  { title: "Recovery Planning", description: "Personalized plans for long-term sobriety success." },
  { title: "Family Support", description: "Counseling and education for family members." },
];

const symptoms = [
  "Powerful drug cravings",
  "Tolerance requiring higher doses",
  "Severe withdrawal symptoms",
  "Neglect of responsibilities",
  "Doctor shopping for prescriptions",
  "Financial and legal problems",
  "Social isolation",
  "Health deterioration",
];

function OpiumAddiction() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about opium/afeem addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4047038/pexels-photo-4047038.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <Link to="/treatments" className="hover:text-green-300">Treatments</Link>
              <span>/</span>
              <span>Opium (Afeem)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Opium (Afeem) Addiction Treatment
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Specialized opiate addiction treatment with medication-assisted recovery
              for opium, afeem, heroin, and prescription opioid dependency.
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
                Understanding Opiate Addiction
              </span>
              <h2 className="section-title mt-2 mb-6">
                Treatment for Opium & Opioid Dependency
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Opium (afeem) and other opioids are highly addictive substances that
                create severe physical and psychological dependency. Without professional
                help, quitting can be extremely difficult and dangerous.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our opiate addiction treatment program provides medication-assisted
                treatment (MAT) combined with comprehensive therapy to help you
                safely overcome dependency and build lasting recovery.
              </p>
              <div className="bg-primary-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3">We Treat:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Opium (Afeem)', 'Heroin (Smack)', 'Prescription Painkillers', 'Injection Drug Use'].map((drug) => (
                    <div key={drug} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      <span className="text-sm">{drug}</span>
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
                src="https://images.pexels.com/photos/4226178/pexels-photo-4226178.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Treatment session"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Warning Signs
            </span>
            <h2 className="section-title mt-2 mb-4">Signs of Opiate Addiction</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md p-5 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{symptom}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Treatment Program</h2>
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
                  <Syringe className="w-6 h-6 text-primary-500" />
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
              Freedom from Opiate Addiction is Possible
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Professional treatment can help you break free from opium, afeem, or
              other opioid dependency. Take the first step today.
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

export default OpiumAddiction;
