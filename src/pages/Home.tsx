import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import SelectedWork from '../components/home/SelectedWork';
import Philosophy from '../components/home/Philosophy';
import BrandLogoMarquee from '../components/home/BrandLogoMarquee';
import WhoIWorkWith from '../components/home/WhoIWorkWith';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sayed Ahmad | Web Developer & Digital Solutions Partner</title>
        <meta name="description" content="Sayed Ahmad is a web developer and founder of Sitora Web, helping businesses build high-performing websites, eCommerce experiences, and custom web solutions." />
        <link rel="canonical" href="https://www.sitora.org/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sayed Ahmad | Web Developer & Digital Solutions Partner" />
        <meta property="og:description" content="Sayed Ahmad is a web developer and founder of Sitora Web, helping businesses build high-performing websites, eCommerce experiences, and custom web solutions." />
        <meta property="og:url" content="https://www.sitora.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.sitora.org/images/founder-story/founder.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sayed Ahmad | Web Developer & Digital Solutions Partner" />
        <meta name="twitter:description" content="Sayed Ahmad is a web developer and founder of Sitora Web, helping businesses build high-performing websites, eCommerce experiences, and custom web solutions." />
        <meta name="twitter:image" content="https://www.sitora.org/images/founder-story/founder.webp" />
      </Helmet>
      
      <div className="flex flex-col">
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <Philosophy />
        <WhoIWorkWith />
        <BrandLogoMarquee />
        <Services />
        <div id="about" className="scroll-mt-20 md:scroll-mt-24" />
        <AboutPreview />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}
