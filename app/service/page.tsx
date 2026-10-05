import Subbanner from "../components/homelayout/subbanner";
import ServiceSec from "../components/layout/service/servicesec";
import QuoteSec from "../components/layout/service/quote";
import TestimonialsSection from "../components/layout/service/testimonial";

export default function ServicePage() {
  return (
    <main>
      <Subbanner pageKey="services" />
      <ServiceSec />
      <QuoteSec />
      <TestimonialsSection/>
    </main>
  );
}
