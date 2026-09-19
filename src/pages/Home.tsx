import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import SelectedWork from '../components/home/SelectedWork';
import Philosophy from '../components/home/Philosophy';
import BrandLogoMarquee from '../components/home/BrandLogoMarquee';
import WhoIWorkWith from '../components/home/WhoIWorkWith';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sayed Ahmad | WordPress, WooCommerce & Web Development Partner</title>
        <meta name="description" content="Senior WordPress & WooCommerce specialist and web development partner. Building high-performance, conversion-focused websites and digital solutions for growing brands and agencies." />
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
        <FinalCTA />
      </div>
    </>
  );
}
