import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  CalendarCheck,
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Star,
  ChevronRight,
  Leaf,
  MapPin,
} from 'lucide-react';
import {
  siteConfig,
  stats,
  treatments,
  whyChooseUs,
  recoveryProcess,
  testimonials,
  blogPosts,
  faqs,
} from '../data/siteData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Home() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500" />
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/266208/pexels-photo-266208.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Government Approved Rehabilitation Centre
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-6">
                Your Recovery <span className="text-green-300">Begins Today</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Professional treatment for alcohol, drugs, smoking, tobacco and other addictions
                with compassionate medical care. Start your journey to a healthier life now.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-white text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>
                <motion.a
                  href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </motion.a>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Award, text: "15+ Years Experience" },
                  { icon: Users, text: "5000+ Recoveries" },
                  { icon: Clock, text: "24×7 Care" },
                  { icon: Shield, text: "100% Confidential" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <feature.icon className="w-5 h-5 text-green-300" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                  >
                    <div className="text-4xl font-poppins font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-green-300 font-medium mb-2">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Mobile */}
      <section className="lg:hidden py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md text-center"
              >
                <div className="text-3xl font-poppins font-bold text-primary-500 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
                About Our Centre
              </span>
              <h2 className="section-title mt-2 mb-6">
                Best Nasha Mukti Kendra in Akbarpur
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to <strong>Shree Ram Nasha Mukti Kendra</strong>, a leading drug and
                alcohol rehabilitation centre in Akbarpur, Uttar Pradesh. With over 15 years of
                experience and 5000+ successful recoveries, we provide comprehensive addiction
                treatment programs tailored to individual needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our centre is government-approved and follows evidence-based treatment
                methodologies including medical detoxification, psychological counseling,
                yoga, meditation, and holistic wellness programs. We believe in treating
                the whole person, not just the addiction.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shree Ram Nasha Mukti Kendra"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-poppins font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="section-title mt-2 mb-4">
              Addiction Treatment Services
            </h2>
            <p className="section-subtitle">
              Specialized programs for all types of addictions with personalized treatment plans
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {treatment.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/treatments/${treatment.id === 'alcohol' ? 'alcohol-addiction' : treatment.id === 'drug' ? 'drug-addiction' : treatment.id === 'smoking' ? 'smoking-tobacco' : treatment.id === 'ganja-charas' ? 'ganja-charas' : treatment.id === 'opium' ? 'opium-afeem' : '#'}`}
                    className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mt-2 mb-4">
              Trusted by Thousands of Families
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We provide the highest standard of care with compassion and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
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
              Recovery Process
            </h2>
            <p className="section-subtitle">
              A structured approach to guide you from addiction to lasting recovery
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-8">
              {recoveryProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow ${
                        index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-poppins font-bold">
                          {step.step}
                        </span>
                        <h3 className="font-poppins font-semibold text-xl text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Center Point - Desktop */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-primary-500 text-white items-center justify-center font-poppins font-bold text-lg z-10 shadow-lg">
                    {step.step}
                  </div>

                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="section-title mt-2 mb-4">
              Success Stories
            </h2>
            <p className="section-subtitle">
              Real stories of transformation from our patients and their families
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/success-stories" className="btn-outline">
              View All Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-accent-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Take the first step towards a healthier, happier life. Our team is available
              24×7 to help you begin your journey to recovery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </motion.a>
              <motion.a
                href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              FAQs
            </span>
            <h2 className="section-title mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Get answers to common questions about our treatment programs
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-primary-500 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
                </details>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="btn-outline">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Resources
            </span>
            <h2 className="section-title mt-2 mb-4">
              Latest Articles
            </h2>
            <p className="section-subtitle">
              Helpful information and insights about addiction and recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-primary-500 font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blog" className="btn-outline">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Serving Akbarpur & Nearby Areas
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Conveniently located in Akbarpur, we serve patients from Akbarpur,
                Ayodhya, Sultanpur, Pratapgarh, and surrounding regions.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Akbarpur', 'Ayodhya', 'Sultanpur', 'Pratapgarh', 'Faizabad', 'Ambedkar Nagar'].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-300" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-white">
                <CalendarCheck className="w-5 h-5" />
                Book Free Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="font-poppins font-semibold text-xl mb-6">
                Visit Our Centre
              </h3>
              <address className="not-italic text-white/90 mb-6">
                <p className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  {siteConfig.address.full}
                </p>
                <p className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-green-300" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-green-300 transition-colors">
                    {siteConfig.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-300" />
                  {siteConfig.workingHours}
                </p>
              </address>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-green-300 font-medium hover:text-green-200 transition-colors"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
