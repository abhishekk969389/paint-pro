import Subbanner from '@/app/components/ui/subbanner';
import ServiceDetailSection from "@/app/components/layout/servicedetails/servicedetailsec";
import { getServiceBySlug, getServiceSlugs } from '@/data/index';

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const detail = getServiceBySlug(resolvedParams.slug);
  if (!detail) return {};
  return {
    title: detail.title.text1,
    description: detail.subtitle
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = getServiceBySlug(resolvedParams.slug) || getServiceBySlug('interior-painting');
  return (
    <main>
      <Subbanner pageKey="servicedetails" />
      <ServiceDetailSection data={data} />
    </main>
  );
}
