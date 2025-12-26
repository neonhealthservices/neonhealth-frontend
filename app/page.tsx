import AboutUs from "@/components/layout/about";
import ContactForm from "@/components/layout/contact";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/heroSection";
import CardiologyServices from "@/components/layout/services";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <CardiologyServices/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
