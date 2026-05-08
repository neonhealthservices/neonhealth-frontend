import AboutUs from "@/components/layout/about";
import ContactForm from "@/components/layout/contact";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/layout/heroSection";
import CardiologyServices from "@/components/layout/services";
import LatestBlogs from "@/components/layout/LatestBlogs";
import Navbar from "@/components/ui/navbar";
import CoreValues from "@/components/layout/coreValues";
import FoundationTeaser from "@/components/layout/foundationTeaser";
import ReviewSection from "@/components/layout/reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <CardiologyServices hideCards={true} header="OUR"/>
      <CoreValues />
      <FoundationTeaser />
      <ReviewSection />
      <LatestBlogs />
      <ContactForm />
      <Footer />
    </div>
  );
}
