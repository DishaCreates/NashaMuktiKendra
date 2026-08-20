import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Clock,
  Heart,
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Facilities', href: '/facilities' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

const treatmentLinks = [
  { name: 'Alcohol Addiction', href: '/treatments/alcohol-addiction' },
  { name: 'Drug Addiction', href: '/treatments/drug-addiction' },
  { name: 'Smoking & Tobacco', href: '/treatments/smoking-tobacco' },
  { name: 'Ganja & Charas', href: '/treatments/ganja-charas' },
  { name: 'Opium (Afeem)', href: '/treatments/opium-afeem' },
];

const programLinks = [
  { name: 'Detoxification', href: '/programs/detoxification' },
  { name: 'Family Counseling', href: '/programs/family-counseling' },
  { name: 'Residential Rehab', href: '/programs/residential-rehabilitation' },
  { name: 'Outpatient Treatment', href: '/programs/outpatient-treatment' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
  { name: 'Sitemap', href: '/sitemap' },
  { name: 'FAQ', href: '/faq' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden">
                <img src="/favicon.svg" alt="Shree Ram Nasha Mukti Kendra logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white">
                  Shree Ram
                </h3>
                <p className="text-xs text-primary-400">Nasha Mukti Kendra, Akbarpur</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Best drug and alcohol rehabilitation centre in Akbarpur, Uttar Pradesh.
              Professional addiction treatment with compassionate care since 2009.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments & Programs */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {treatmentLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-500 text-sm hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Akbarpur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
