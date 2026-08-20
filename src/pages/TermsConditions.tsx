import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function TermsConditions() {
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
              <span>Terms & Conditions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Terms & Conditions
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-500 mb-8">Last Updated: January 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Shree Ram Nasha Mukti Kendra website and services,
              you accept and agree to be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Shree Ram Nasha Mukti Kendra provides addiction treatment services including
              but not limited to:
            </p>
            <ul>
              <li>Medical detoxification programs</li>
              <li>Inpatient and outpatient rehabilitation</li>
              <li>Individual and group counseling</li>
              <li>Family therapy and support</li>
              <li>Aftercare and relapse prevention programs</li>
            </ul>

            <h2>3. Patient Responsibilities</h2>
            <p>Patients and their families agree to:</p>
            <ul>
              <li>Provide accurate and complete medical history</li>
              <li>Follow the treatment program and guidelines</li>
              <li>Respect other patients and staff members</li>
              <li>Adhere to facility rules and regulations</li>
              <li>Inform staff of any concerns or issues promptly</li>
            </ul>

            <h2>4. Treatment Consent</h2>
            <p>
              Before beginning treatment, patients or their legal guardians must provide
              informed consent. This includes understanding the nature of treatment,
              potential risks, expected outcomes, and alternative options.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              We maintain strict confidentiality of all patient information in accordance
              with applicable laws and ethical standards. Patient consent is required for
              any disclosure of treatment information.
            </p>

            <h2>6. Payment and Fees</h2>
            <p>
              Treatment fees are communicated during the admission process. Payment terms
              and any financial arrangements should be clearly understood and agreed upon
              before treatment begins.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              While we strive to provide the highest quality care, Shree Ram Nasha Mukti
              Kendra cannot guarantee specific treatment outcomes. Recovery success
              depends on multiple factors including patient commitment and participation.
            </p>

            <h2>8. Right to Refuse Service</h2>
            <p>
              We reserve the right to refuse or discontinue services if a patient's behavior
              poses a risk to themselves, other patients, or staff, or if they fail to
              comply with treatment guidelines.
            </p>

            <h2>9. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design
              elements, is the property of Shree Ram Nasha Mukti Kendra and is protected
              by copyright laws.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We may modify these Terms and Conditions at any time. Changes will be
              effective immediately upon posting on this page. Continued use of our
              services constitutes acceptance of modified terms.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us:
            </p>
            <ul>
              <li>Phone: +91 9214971903</li>
              <li>Email: nashamuktikendra1903@gmail.com</li>
              <li>Address: Patel Nagar Chauraha, Bakshri Road, Akbarpur, Uttar Pradesh – 224122</li>
            </ul>

            <h2>12. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of India. Any disputes
              arising from these terms shall be subject to the jurisdiction of courts in
              Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsConditions;
