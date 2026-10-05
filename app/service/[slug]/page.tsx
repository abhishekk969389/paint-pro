import Subbanner from "@/app/components/homelayout/subbanner";
import ServiceDetailSection from "@/app/components/layout/servicedetails/servicedetailsec";


export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <Subbanner pageKey="servicedetails" />
      <ServiceDetailSection slug={resolvedParams.slug} />
    </main>
  );
}
