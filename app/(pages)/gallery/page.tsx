import Subbanner from '@/app/components/ui/subbanner';
import GallerySection from '@/app/components/homelayout/gallery';

export default function GalleryPage() {
  return (
    <main>
      <Subbanner pageKey="gallery" />
      <GallerySection showAll />
    </main>
  );
}
