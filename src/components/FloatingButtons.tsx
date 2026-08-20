import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

function FloatingButtons() {
  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about addiction treatment at Shree Ram Nasha Mukti Kendra."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${siteConfig.phoneClean}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-green-600 transition-all whatsapp-pulse"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${siteConfig.phone}`}
        className="w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-primary-600 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

export default FloatingButtons;
