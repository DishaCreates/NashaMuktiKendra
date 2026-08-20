import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "MedicalOrganization",
            "name": "Shree Ram Nasha Mukti Kendra",
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteConfig.address.street,
              "addressLocality": siteConfig.address.city,
              "addressRegion": siteConfig.address.state,
              "postalCode": siteConfig.address.pincode,
              "addressCountry": "IN"
            }
          }
        })}
      </script>

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
              <span>Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get in touch with us 24×7. We're here to help you or your loved one
              take the first step towards recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Phone className="w-6 h-6 text-primary-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">{siteConfig.phone}</div>
                    <div className="text-sm text-primary-500">Tap to call</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">{siteConfig.phone}</div>
                    <div className="text-sm text-green-600">Tap to chat</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <Mail className="w-6 h-6 text-primary-500 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">{siteConfig.email}</div>
                    <div className="text-sm text-primary-500">Tap to email</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Working Hours</div>
                    <div className="text-gray-600">{siteConfig.workingHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">{siteConfig.address.full}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins font-semibold text-2xl text-gray-900">
              Find Us on Map
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=Patel+Nagar+Chauraha+Bakshri+Road+Akbarpur+Uttar+Pradesh+224122&hl=en&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ram Nasha Mukti Kendra Location"
            />
          </motion.div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=26.4410278,82.5588056"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
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
              Need Immediate Help?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Our helpline is available 24 hours a day, 7 days a week. Call now for
              immediate assistance.
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

export default Contact;
