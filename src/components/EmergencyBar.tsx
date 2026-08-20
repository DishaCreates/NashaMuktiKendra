import { motion } from 'framer-motion';
import { Phone, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

function EmergencyBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2"
    >
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="hidden sm:inline">24×7 Emergency Helpline:</span>
          <span className="sm:hidden">Emergency:</span>
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-semibold flex items-center gap-1 hover:text-green-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <span className="hidden md:inline text-white/80">| Free Consultation Available</span>
        </div>
      </div>
    </motion.div>
  );
}

export default EmergencyBar;
