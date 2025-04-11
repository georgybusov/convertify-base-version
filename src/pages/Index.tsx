
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cta from "@/components/Cta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SimpleChat from "@/components/SimpleChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <TrustSection />
        <Services />
        <Process />
        <Cta />
        <ContactForm />
      </main>
      <Footer />
      <SimpleChat />
    </div>
  );
};

export default Index;
