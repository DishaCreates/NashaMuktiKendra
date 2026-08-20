import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AlcoholAddiction from './pages/treatments/AlcoholAddiction';
import DrugAddiction from './pages/treatments/DrugAddiction';
import SmokingAddiction from './pages/treatments/SmokingAddiction';
import GanjaCharas from './pages/treatments/GanjaCharas';
import OpiumAddiction from './pages/treatments/OpiumAddiction';
import FamilyCounseling from './pages/programs/FamilyCounseling';
import DetoxProgram from './pages/programs/DetoxProgram';
import ResidentialRehab from './pages/programs/ResidentialRehab';
import OutpatientTreatment from './pages/programs/OutpatientTreatment';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import SuccessStories from './pages/SuccessStories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Sitemap from './pages/Sitemap';

function App() {
  useEffect(() => {
    // Update page title and meta on route change
    document.body.classList.add('loaded');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="treatments">
            <Route path="alcohol-addiction" element={<AlcoholAddiction />} />
            <Route path="drug-addiction" element={<DrugAddiction />} />
            <Route path="smoking-tobacco" element={<SmokingAddiction />} />
            <Route path="ganja-charas" element={<GanjaCharas />} />
            <Route path="opium-afeem" element={<OpiumAddiction />} />
          </Route>
          <Route path="programs">
            <Route path="family-counseling" element={<FamilyCounseling />} />
            <Route path="detoxification" element={<DetoxProgram />} />
            <Route path="residential-rehabilitation" element={<ResidentialRehab />} />
            <Route path="outpatient-treatment" element={<OutpatientTreatment />} />
          </Route>
          <Route path="facilities" element={<Facilities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
