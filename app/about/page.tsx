import AboutSection from "../components/homelayout/about";
import Subbanner from "../components/homelayout/subbanner";
import HowItWorksSection from "../components/homelayout/works";
import AboutSec from "../components/layout/about/aboutsec";

export default function AboutPage() {
  return (
    <main>
      <Subbanner pageKey="about" />
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <AboutSection/>
      </div>
      <HowItWorksSection/>
            <AboutSec />
    </main>
  );
}
