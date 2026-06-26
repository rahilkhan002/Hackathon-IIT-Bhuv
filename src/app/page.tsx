import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import Pricing from '@/components/pricing/Pricing';
import SocialProof from '@/components/social-proof/SocialProof';

/**
 * Home Page — Composes all sections in semantic order.
 *
 * Structure:
 *   <header> → navigation
 *   <main>
 *     <section> → hero
 *     <section> → features
 *     <section> → pricing
 *     <section> → testimonials
 *   </main>
 *   <footer>
 *
 * No div soup. Semantic HTML throughout.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
