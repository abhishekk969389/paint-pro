import AboutSection from "./components/homelayout/about";
import HeroBanner from "./components/homelayout/banner";
import BlogSection from "./components/homelayout/blog";
import GallerySection from "./components/homelayout/gallery";
import ServicesSection from "./components/homelayout/services";
import HowItWorksSection from "./components/homelayout/works";

export default function Home() {
  return (
    <main>
      <HeroBanner/>
      <AboutSection/>
      <ServicesSection/>
      <HowItWorksSection/>
      <GallerySection/>
      <BlogSection/>
    </main>
  );
}
