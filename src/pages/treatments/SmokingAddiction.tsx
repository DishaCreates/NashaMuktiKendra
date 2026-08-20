import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Activity,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Nicotine Replacement Therapy", description: "Safe and effective nicotine replacement options to manage withdrawal." },
  { title: "Behavioral Counseling", description: "Identify triggers and develop coping strategies for lasting change." },
  { title: "Stress Management", description: "Learn healthy ways to manage stress without tobacco." },
  { title: "Support Groups", description: "Connect with others on the same journey for mutual support." },
  { title: "Medication Support", description: "FDA-approved medications to reduce cravings when appropriate." },
  { title: "Long-term Follow-up", description: "Continued support to maintain your smoke-free life." },
];

const benefits = [
  { title: "Heart Health", description: "Reduce heart disease risk within weeks" },
  { title: "Lung Function", description: "Improve breathing and reduce infection risk" },
  { title: "Save Money", description: "Save thousands spent on tobacco products" },
  { title: "Family Health", description: "Protect loved ones from second-hand smoke" },
];

function SmokingAddiction() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about smoking and tobacco addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4226/health-smoke-cigarette-smoking.jpg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
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
              <span>Smoking & Tobacco</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Smoking & Tobacco De-Addiction
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Comprehensive program to help you quit smoking, chewing tobacco, and all tobacco
              products permanently with proven methods and ongoing support.
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
                Understanding Tobacco Addiction
              </span>
              <h2 className="section-title mt-2 mb-6">
                Break Free from Tobacco Dependence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Tobacco addiction is one of the most common and harmful addictions worldwide.
                Whether you smoke cigarettes, use chewing tobacco (gutka), or other tobacco
                products, quitting significantly improves your health and quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our tobacco de-addiction program uses proven methods including behavioral
                therapy, nicotine replacement, and medication when appropriate to help you
                quit permanently.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We treat addiction to cigarettes, beedis, chewing tobacco, gutka, khaini,
                and all other tobacco products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Treatment session"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="section-title mt-2 mb-4">Why Quit Tobacco?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
                  <CheckCircle className="w-6 h-6 text-primary-500" />
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
              Start Your Smoke-Free Journey
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Every cigarette you don't smoke is a victory. Let us help you quit tobacco
              for good. Our team is ready to help you 24×7.
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

export default SmokingAddiction;
