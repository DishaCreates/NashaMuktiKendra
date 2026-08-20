import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-500 mb-8">Last Updated: January 2024</p>

            <h2>1. Introduction</h2>
            <p>
              Shree Ram Nasha Mukti Kendra respects your privacy and is committed to protecting
              the personal information you share with us. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our website or use
              our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address, and other contact details you provide through forms or direct communication.</li>
              <li><strong>Medical Information:</strong> Health-related information necessary for providing addiction treatment services.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our rehabilitation services</li>
              <li>Communicate with you about treatment and inquiries</li>
              <li>Send relevant updates and information about our programs</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>4. Patient Confidentiality</h2>
            <p>
              At Shree Ram Nasha Mukti Kendra, patient confidentiality is our top priority. All
              medical and personal information shared by patients is kept strictly confidential
              and is only accessed by authorized personnel directly involved in your care.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information from unauthorized access, alteration, or disclosure. This
              includes secure storage systems and restricted access protocols.
            </p>

            <h2>6. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share information only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>When required by law or legal process</li>
              <li>With healthcare providers involved in your treatment</li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose
              to disable cookies through your browser settings, but this may affect certain
              features of our website.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your personal
              information, please contact us:
            </p>
            <ul>
              <li>Phone: +91 9214971903</li>
              <li>Email: nashamuktikendra1903@gmail.com</li>
              <li>Address: Patel Nagar Chauraha, Bakshri Road, Akbarpur, Uttar Pradesh – 224122</li>
            </ul>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by posting the new policy on this page and updating the
              "Last Updated" date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
