import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { siteConfig, faqs } from '../data/siteData';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const whatsappMessage = encodeURIComponent(
    "Hello! I have a question about addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* JSON-LD Schema for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Find answers to common questions about our addiction treatment
              programs, facilities, and recovery process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronRight
                      className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">Still Have Questions?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Our team is available 24×7 to answer any questions you have about
              our treatment programs and how we can help you or your loved one.
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

export default FAQ;
