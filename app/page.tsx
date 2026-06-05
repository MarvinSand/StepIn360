import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LiveTour from "@/components/LiveTour";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LiveTour />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
