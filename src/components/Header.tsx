import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Treatments',
    href: '/treatments',
    children: [
      { name: 'Alcohol Addiction', href: '/treatments/alcohol-addiction' },
      { name: 'Drug Addiction', href: '/treatments/drug-addiction' },
      { name: 'Smoking & Tobacco', href: '/treatments/smoking-tobacco' },
      { name: 'Ganja & Charas', href: '/treatments/ganja-charas' },
      { name: 'Opium (Afeem)', href: '/treatments/opium-afeem' },
    ],
  },
  {
    name: 'Programs',
    href: '/programs',
    children: [
      { name: 'Family Counseling', href: '/programs/family-counseling' },
      { name: 'Detoxification', href: '/programs/detoxification' },
      { name: 'Residential Rehab', href: '/programs/residential-rehabilitation' },
      { name: 'Outpatient Treatment', href: '/programs/outpatient-treatment' },
    ],
  },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-md py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md overflow-hidden">
              <img src="/ChatGPT_Image_Aug_20,_2026,_09_29_36_PM.png" alt="Shree Ram Nasha Mukti Kendra logo" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-bold text-lg text-gray-900 leading-tight">
                Shree Ram
              </h1>
              <p className="text-xs text-primary-500 font-medium">Nasha Mukti Kendra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.href
                              ? 'text-primary-500 bg-primary-50'
                              : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-primary text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-1 border-t border-gray-100 mt-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div
                      className="flex items-center justify-between"
                      onClick={() => {
                        if (item.children) {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        }
                      }}
                    >
                      <Link
                        to={item.children ? '#' : item.href}
                        onClick={(e) => item.children && e.preventDefault()}
                        className={`flex-1 block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          className="p-2 mr-2"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.children && activeDropdown === item.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              location.pathname === child.href
                                ? 'text-primary-500 bg-primary-50'
                                : 'text-gray-600 hover:text-primary-500 hover:bg-gray-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="btn-primary w-full text-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call {siteConfig.phone}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
