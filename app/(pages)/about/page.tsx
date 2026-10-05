import AboutSection from '@/app/components/homelayout/about';
import Subbanner from '@/app/components/ui/subbanner';
import HowItWorksSection from '@/app/components/homelayout/works';
import AboutSec from '@/app/components/layout/about/aboutsec';

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
