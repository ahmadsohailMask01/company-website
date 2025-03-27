
import Image from "next/image";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import Industries from "../Industries/Industries";
import FAQs from "../FAQs/FAQs";
import ScrollToTopButton from "../ScrollToTopButton";
import Testimonials from "../Testimonials/Testimonials";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <Services />
      <Industries/>
      <Testimonials/>
      <FAQs/>
      <ScrollToTopButton/>
    </>
  );
}
