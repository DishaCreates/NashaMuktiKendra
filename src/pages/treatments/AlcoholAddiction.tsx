import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Users,
  Heart,
  Shield,
  Clock,
  Star,
} from 'lucide-react';
import { siteConfig } from '../../data/siteData';

const features = [
  { title: "Medical Detoxification", description: "Safe, supervised detox with medication management to ease withdrawal symptoms." },
  { title: "Individual Therapy", description: "One-on-one counseling sessions with experienced addiction specialists." },
  { title: "Group Counseling", description: "Supportive group sessions for shared experiences and peer learning." },
  { title: "Family Support", description: "Family counseling and education to rebuild relationships." },
  { title: "Relapse Prevention", description: "Strategies and tools to maintain long-term sobriety." },
  { title: "Aftercare Program", description: "Continued support and follow-up after treatment completion." },
];

const symptoms = [
  "Unable to control alcohol consumption",
  "Strong cravings for alcohol",
  "Neglecting responsibilities at work or home",
  "Continued drinking despite health problems",
  "Withdrawal symptoms when not drinking",
  "Needing more alcohol to feel effects",
  "Spending significant time obtaining alcohol",
  "Unsuccessful attempts to quit or cut down",
];

const treatmentBenefits = [
  { title: "Physical Recovery", description: "Medical detox helps your body recover safely from alcohol dependency.", icon: Shield },
  { title: "Mental Healing", description: "Therapy addresses underlying causes of addiction.", icon: Heart },
  { title: "Family Restoration", description: "Rebuild relationships damaged by addiction.", icon: Users },
  { title: "Lifelong Support", description: "Aftercare ensures continued recovery.", icon: Clock },
];

const faqItems = [
  { question: "How long does alcohol rehabilitation take?", answer: "Treatment duration varies based on individual needs. Standard programs range from 30-90 days, with extended care options available." },
  { question: "Is detox painful?", answer: "Medical detox under professional supervision significantly reduces discomfort. Our medical team manages withdrawal symptoms with appropriate medications." },
  { question: "Can I visit my family during treatment?", answer: "Yes, we encourage family involvement. Regular visiting hours and family therapy sessions are scheduled throughout treatment." },
  { question: "What happens after treatment?", answer: "We provide comprehensive aftercare support including follow-up sessions, support groups, and relapse prevention strategies." },
];

function AlcoholAddiction() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about alcohol addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": "Alcohol Addiction Treatment",
          "procedureType": "Therapeutic",
          "description": "Comprehensive alcohol de-addiction program with medical detox, counseling, and rehabilitation.",
          "howPerformed": "Medical detoxification followed by individual and group therapy sessions",
          "preparation": "Assessment and evaluation by medical professionals",
          "followup": "Aftercare support and relapse prevention program",
          "mainEntityOfPage": {
            "@type": "MedicalOrganization",
            "name": "Shree Ram Nasha Mukti Kendra"
          }
        })}
      </script>

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3621111/pexels-photo-3621111.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
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
              <span>Alcohol Addiction</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Alcohol Addiction Treatment
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Comprehensive alcohol de-addiction program with medical detoxification,
              counseling, and holistic rehabilitation for lasting recovery.
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
                Understanding Alcohol Addiction
              </span>
              <h2 className="section-title mt-2 mb-6">
                Professional Treatment for Alcohol Dependence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Alcohol addiction, or alcohol use disorder, is a chronic disease that
                affects millions of people in India. It can destroy health, relationships,
                careers, and lives. But recovery is possible with the right treatment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Shree Ram Nasha Mukti Kendra, we provide comprehensive alcohol addiction
                treatment that addresses both the physical and psychological aspects of
                dependency. Our evidence-based approach ensures the best chances for
                successful, long-term recovery.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Doctor"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Dr. Expert Team</div>
                  <div className="text-sm text-gray-500">15+ Years Experience</div>
                </div>
              </div>
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

      {/* Signs & Symptoms */}
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
            <h2 className="section-title mt-2 mb-4">
              Signs of Alcohol Addiction
            </h2>
            <p className="section-subtitle">
              Recognizing these signs early can lead to timely intervention
            </p>
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
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="section-title mt-2 mb-4">
              Comprehensive Treatment Program
            </h2>
            <p className="section-subtitle">
              Evidence-based treatment with holistic care for complete recovery
            </p>
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

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mt-2">
              Why Choose Our Program
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900">{item.question}</h3>
                  <ArrowRight className="w-5 h-5 text-primary-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-600">{item.answer}</div>
              </motion.details>
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
              Start Your Recovery Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Don't let alcohol control your life. Take the first step towards a healthier,
              happier future. Our team is ready to help you 24×7.
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

export default AlcoholAddiction;
