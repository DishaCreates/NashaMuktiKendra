import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  Users,
  Heart,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Family Therapy Sessions", description: "Structured sessions involving all family members to address addiction's impact on relationships." },
  { title: "Education Programs", description: "Help families understand addiction as a disease and how to support recovery." },
  { title: "Communication Skills", description: "Develop healthy communication patterns for better family relationships." },
  { title: "Boundary Setting", description: "Learn to set healthy boundaries that support recovery without enabling." },
  { title: "Intervention Support", description: "Guidance for families planning an intervention for a loved one." },
  { title: "Support Groups", description: "Connect with other families experiencing similar challenges." },
];

const benefits = [
  { title: "Better Understanding", description: "Family learns about addiction and recovery" },
  { title: "Improved Communication", description: "Heal damaged relationships through therapy" },
  { title: "Unified Support", description: "Create a supportive environment for recovery" },
  { title: "Prevent Relapse", description: "Family support is crucial for long-term success" },
];

function FamilyCounseling() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about family counseling at Shree Ram Nasha Mukti Kendra."
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
              <span>Family Counseling</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Family Counseling Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Supporting families affected by addiction through education, therapy,
              and healing together for stronger, lasting recovery.
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
                Supporting Families
              </span>
              <h2 className="section-title mt-2 mb-6">
                Healing Families Together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Addiction doesn't just affect the individual - it impacts the entire family.
                Family involvement is one of the strongest predictors of successful recovery.
                Our family counseling program helps families heal together.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We provide education about addiction as a disease, teach healthy communication
                skills, help set appropriate boundaries, and support families through every
                step of their loved one's recovery journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family counseling"
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
              Why It Matters
            </span>
            <h2 className="section-title mt-2 mb-4">Benefits of Family Counseling</h2>
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
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
            <h2 className="section-title">Our Family Support Program</h2>
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
                  <Users className="w-6 h-6 text-primary-500" />
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
              Support Your Loved One's Recovery
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Family support makes recovery possible. Learn how you can help your loved one
              overcome addiction.
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

export default FamilyCounseling;
