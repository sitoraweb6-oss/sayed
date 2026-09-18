import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import SelectedWork from '../components/home/SelectedWork';
import Philosophy from '../components/home/Philosophy';
import BrandsMarquee from '../components/home/BrandsMarquee';
import WhoIWorkWith from '../components/home/WhoIWorkWith';
import ValueProposition from '../components/home/ValueProposition';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sayed Ahmad | WordPress & WooCommerce Developer | Web Development Partner</title>
        <meta name="description" content="Sayed Ahmad helps agencies, businesses, and growing brands build reliable WordPress, WooCommerce, and custom digital solutions focused on real business goals." />
      </Helmet>
      
      <div className="flex flex-col">
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <Philosophy />
        <ValueProposition />
        <WhoIWorkWith />
        <BrandsMarquee />
        <Services />
        <div id="about" className="scroll-mt-20 md:scroll-mt-24" />
        <AboutPreview />
        <FinalCTA />
      </div>
    </>
  );
}
