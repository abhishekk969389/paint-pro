import Subbanner from '@/app/components/ui/subbanner';
import BlogDetailSection from "@/app/components/layout/blogdetail/blogdetailsec";
import { getBlogDetailBySlug, getBlogDetailSlugs } from '@/data/index';

export async function generateStaticParams() {
  return getBlogDetailSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const detail = getBlogDetailBySlug(resolvedParams.slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.content1.substring(0, 160) + '...'
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const detail = getBlogDetailBySlug(resolvedParams.slug) || getBlogDetailBySlug('trending-wall-paint-colors');
  return (
    <main>
      <Subbanner pageKey="blogdetail" />
      <BlogDetailSection detail={detail} />
    </main>
  );
}
