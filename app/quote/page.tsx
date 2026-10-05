import Subbanner from "../components/homelayout/subbanner";
import QuoteSection from "../components/layout/quote/quotesec";

export default function QuotePage() {
    return (
        <main>
            <Subbanner pageKey="quote" />
            <QuoteSection/>
        </main>
    );
}
