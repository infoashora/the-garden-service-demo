import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import HowItWorks from '@/components/HowItWorks';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Services />
        <OurWork />
        <HowItWorks />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
