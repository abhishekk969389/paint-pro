import Subbanner from "../components/homelayout/subbanner";
import GallerySection from "../components/homelayout/gallery";

export default function GalleryPage() {
  return (
    <main>
      <Subbanner pageKey="gallery" />
      <GallerySection showAll />
    </main>
  );
}
