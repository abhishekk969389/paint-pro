import Subbanner from '@/app/components/ui/subbanner';
import BlogSection from "@/app/components/homelayout/blog";

export default function BlogPage() {
  return (
    <main>
      <Subbanner pageKey="blog" />
   
        <BlogSection hideButton={true} maxPosts={6} />
      
    </main>
  );
}
