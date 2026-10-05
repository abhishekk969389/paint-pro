import Subbanner from '@/app/components/ui/subbanner';
import QuoteSection from '@/app/components/layout/quote/quotesec';

export default function QuotePage() {
    return (
        <main>
            <Subbanner pageKey="quote" />
            <QuoteSection/>
        </main>
    );
}
