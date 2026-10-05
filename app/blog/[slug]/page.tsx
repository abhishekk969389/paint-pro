import Subbanner from "@/app/components/homelayout/subbanner";
import BlogDetailSection from "@/app/components/layout/blogdetail/blogdetailsec";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <Subbanner pageKey="blogdetail" />
      <BlogDetailSection slug={resolvedParams.slug} />
    </main>
  );
}
