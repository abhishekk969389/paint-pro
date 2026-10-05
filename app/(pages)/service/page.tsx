import Subbanner from '@/app/components/ui/subbanner';
import ServiceSec from '@/app/components/layout/service/servicesec';
import QuoteSec from '@/app/components/layout/service/quote';
import TestimonialsSection from '@/app/components/layout/service/testimonial';

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
