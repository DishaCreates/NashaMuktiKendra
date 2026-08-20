import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig, galleryImages } from '../data/siteData';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'rooms', name: 'Rooms' },
  { id: 'activities', name: 'Activities' },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello! I need information about Shree Ram Nasha Mukti Kendra."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/" className="hover:text-green-300">Home</Link>
              <span>/</span>
              <span>Gallery</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Take a visual tour of our rehabilitation centre. See our facilities,
              accommodations, and healing environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                    <span className="text-white font-medium">{image.alt}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-6">
              Want to Visit Our Centre?
            </h2>
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
                WhatsApp Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
