import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Shield,
  ChevronRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { siteConfig, stats, whyChooseUs } from '../data/siteData';

const timeline = [
  { year: "2009", title: "Foundation", description: "Shree Ram Nasha Mukti Kendra was established with a mission to help those struggling with addiction." },
  { year: "2012", title: "Expansion", description: "Expanded facilities to include private rooms and dedicated therapy spaces." },
  { year: "2015", title: "Recognition", description: "Received government certification and recognition for excellence in rehabilitation services." },
  { year: "2018", title: "Community Outreach", description: "Launched community awareness programs and family counseling services." },
  { year: "2021", title: "Modernization", description: "Introduced yoga, meditation, and holistic wellness programs." },
  { year: "2024", title: "5000+ Recoveries", description: "Celebrated 5000+ successful recoveries and 15 years of dedicated service." },
];

const values = [
  { title: "Compassion", description: "We treat every patient with empathy, dignity, and respect.", icon: Heart },
  { title: "Excellence", description: "We strive for the highest standards in addiction treatment.", icon: Award },
  { title: "Trust", description: "We maintain complete confidentiality in all our services.", icon: Shield },
  { title: "Community", description: "We believe in the power of family and community support.", icon: Users },
];

function About() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/266208/pexels-photo-266208.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Our Story of <span className="text-green-300">Hope & Recovery</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              For over 15 years, we've been dedicated to helping individuals and families
              overcome addiction and reclaim their lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-poppins font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-white/90 leading-relaxed">
                To provide comprehensive, compassionate, and evidence-based addiction treatment
                that empowers individuals to overcome substance dependency and lead fulfilling,
                healthy lives. We are committed to supporting every patient's journey to recovery
                with dignity and respect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="font-poppins font-bold text-2xl mb-4">Our Vision</h2>
              <p className="text-white/90 leading-relaxed">
                To be the leading rehabilitation centre in Uttar Pradesh, known for transforming
                lives through innovative treatment approaches, holistic care, and community
                engagement. We envision a society where addiction is understood, treated with
                compassion, and recovery is accessible to all who need it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="section-title mt-2 mb-4">Our Core Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="section-title mt-2 mb-6">How We Started</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Shree Ram Nasha Mukti Kendra was founded in 2009 with a simple yet powerful
                vision: to provide quality addiction treatment that is accessible, affordable,
                and effective.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What began as a small initiative has grown into one of the most trusted
                rehabilitation centres in Akbarpur and surrounding regions. Over the years,
                we have helped thousands of individuals and families affected by addiction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced doctors, certified counselors, and dedicated staff
                work together to create personalized treatment plans that address the
                physical, psychological, and emotional aspects of addiction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Recovery journey"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Milestones
            </span>
            <h2 className="section-title mt-2 mb-4">Our Journey Through The Years</h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-200 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-primary-500 font-poppins font-bold text-2xl mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="hidden md:flex w-4 h-4 bg-primary-500 rounded-full flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-25" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-poppins font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Ready to Begin Your Recovery?</h2>
            <p className="section-subtitle mb-8">
              Let us help you or your loved one take the first step towards a healthier life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
