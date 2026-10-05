import Subbanner from '@/app/components/ui/subbanner';
import FaqSection from '@/app/components/layout/faq/faqsec';

export default function FaqPage() {
  return (
    <main>
      <Subbanner pageKey="faq" />
      <FaqSection />
    </main>
  );
}
