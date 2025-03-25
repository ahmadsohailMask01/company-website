
import Image from "next/image";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <>
      <HeroSection />
      <Services />
    </>
  );
}
