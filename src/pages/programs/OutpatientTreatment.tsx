import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Calendar,
  Clock,
  Users,
  Home,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Flexible Scheduling", description: "Sessions scheduled around your work and family commitments." },
  { title: "Individual Therapy", description: "One-on-one counseling sessions with addiction specialists." },
  { title: "Group Sessions", description: "Support groups and therapy sessions with peers." },
  { title: "Family Involvement", description: "Include family members in the recovery process." },
  { title: "Continued Work/Study", description: "Maintain your job or education while in treatment." },
  { title: "Relapse Prevention", description: "Learn strategies to maintain recovery in daily life." },
];

function OutpatientTreatment() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about the outpatient treatment program at Shree Ram Nasha Mukti Kundra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
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
              <span>Outpatient Treatment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Outpatient Treatment Program
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Flexible treatment while living at home and maintaining work or
              education. Ideal for mild to moderate addiction cases.
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
                Flexible Treatment
              </span>
              <h2 className="section-title mt-2 mb-6">
                Recovery Without Disrupting Your Life
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our outpatient treatment program allows you to receive professional
                addiction treatment while continuing to live at home, maintain
                employment, and fulfil family responsibilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This option is ideal for those with mild to moderate addiction,
                strong family support, and a stable home environment. You attend
                scheduled treatment sessions while applying recovery skills in
                your daily life immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Outpatient therapy"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Is Outpatient Right for You?</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Best For:
                </h3>
                <ul className="space-y-2">
                  {['Mild to moderate addiction', 'Strong family support', 'Stable home environment', 'Motivated for recovery', 'Work/study commitments'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4">
                  Includes:
                </h3>
                <ul className="space-y-2">
                  {['Regular therapy sessions', 'Group meetings', 'Medical monitoring', 'Family counseling', 'Aftercare support'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                  <Calendar className="w-6 h-6 text-primary-500" />
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
              Start Outpatient Treatment Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Recovery doesn't have to disrupt your life. Get professional help while
              maintaining your daily routine.
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

export default OutpatientTreatment;
