import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { treatments, blogPosts } from '../data/siteData';

function Sitemap() {
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
              <span>Sitemap</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-lg text-white/90">
              Find all pages and content on our website organized in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Main Pages
              </h2>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-600 hover:text-primary-500">Home</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-primary-500">About Us</Link></li>
                <li><Link to="/facilities" className="text-gray-600 hover:text-primary-500">Facilities</Link></li>
                <li><Link to="/gallery" className="text-gray-600 hover:text-primary-500">Gallery</Link></li>
                <li><Link to="/success-stories" className="text-gray-600 hover:text-primary-500">Success Stories</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-primary-500">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-600 hover:text-primary-500">FAQ</Link></li>
              </ul>
            </motion.div>

            {/* Treatments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Treatments
              </h2>
              <ul className="space-y-3">
                <li><Link to="/treatments/alcohol-addiction" className="text-gray-600 hover:text-primary-500">Alcohol Addiction Treatment</Link></li>
                <li><Link to="/treatments/drug-addiction" className="text-gray-600 hover:text-primary-500">Drug Addiction Treatment</Link></li>
                <li><Link to="/treatments/smoking-tobacco" className="text-gray-600 hover:text-primary-500">Smoking & Tobacco De-Addiction</Link></li>
                <li><Link to="/treatments/ganja-charas" className="text-gray-600 hover:text-primary-500">Ganja & Charas Treatment</Link></li>
                <li><Link to="/treatments/opium-afeem" className="text-gray-600 hover:text-primary-500">Opium (Afeem) Treatment</Link></li>
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Programs
              </h2>
              <ul className="space-y-3">
                <li><Link to="/programs/detoxification" className="text-gray-600 hover:text-primary-500">Detoxification Program</Link></li>
                <li><Link to="/programs/residential-rehabilitation" className="text-gray-600 hover:text-primary-500">Residential Rehabilitation</Link></li>
                <li><Link to="/programs/outpatient-treatment" className="text-gray-600 hover:text-primary-500">Outpatient Treatment</Link></li>
                <li><Link to="/programs/family-counseling" className="text-gray-600 hover:text-primary-500">Family Counseling</Link></li>
              </ul>
            </motion.div>

            {/* Blog */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Blog
              </h2>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-gray-600 hover:text-primary-500">All Articles</Link></li>
                {blogPosts.slice(0, 5).map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="text-gray-600 hover:text-primary-500">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Legal
              </h2>
              <ul className="space-y-3">
                <li><Link to="/privacy-policy" className="text-gray-600 hover:text-primary-500">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-gray-600 hover:text-primary-500">Terms & Conditions</Link></li>
                <li><Link to="/sitemap" className="text-gray-600 hover:text-primary-500">Sitemap</Link></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="text-gray-600 space-y-2">
                <p>Phone: +91 9214971903</p>
                <p>Email: nashamuktikendra1903@gmail.com</p>
                <p className="text-sm">
                  Patel Nagar Chauraha, Bakshri Road,<br />
                  Akbarpur, Uttar Pradesh – 224122
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sitemap;
