import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
