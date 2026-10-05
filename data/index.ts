import paintData from "./paint.json";

const sec = paintData.PaintProIndustries.sections;

export interface SectionProps<T> {
  data: T;
}

// Brand
export type PaintBrandData = typeof sec.Brand.variants.PaintBrand1;

// UI & Layout
export type PaintHeaderData = typeof sec.Header.variants.PaintHeader1;
export type PaintTopbarData = typeof sec.Topbar.variants.PaintTopbar1;
export type PaintSubBannersData = typeof sec.SubBanners.variants.PaintSubBanners1;
export type PaintFooterData = typeof sec.Footer.variants.PaintFooter1;

// Home Sections
export type PaintBannerData = typeof sec.Banner.variants.PaintBanner1;
export type PaintAboutSectionData = typeof sec.AboutSection.variants.PaintAboutSection1;
export type PaintServicesData = typeof sec.Services.variants.PaintServices1;
export type PaintHowItWorksData = typeof sec.HowItWorks.variants.PaintHowItWorks1;
export type PaintGalleryData = typeof sec.Gallery.variants.PaintGallery1;
export type PaintBlogData = typeof sec.Blog.variants.PaintBlog1;

// Pages & Detail Sections
export type PaintAboutPageData = typeof sec.AboutPage.variants.PaintAboutPage1;
export type PaintServicesPageData = typeof sec.ServicesPage.variants.PaintServicesPage1;
export type PaintQuoteCtaData = typeof sec.QuoteCta.variants.PaintQuoteCta1;
export type PaintQuotePageData = typeof sec.QuotePage.variants.PaintQuotePage1;
export type PaintTestimonialData = typeof sec.Testimonial.variants.PaintTestimonial1;
export type PaintFaqData = typeof sec.Faq.variants.PaintFaq1;
export type PaintContactPageData = typeof sec.ContactPage.variants.PaintContactPage1;

export type PaintServiceSidebarData = typeof sec.ServiceSidebar.variants.PaintServiceSidebar1;
export type PaintBlogSidebarData = typeof sec.BlogSidebar.variants.PaintBlogSidebar1;

export type PaintServiceDetailsData = typeof sec.ServiceDetails.variants.PaintServiceDetails1;
export type PaintBlogDetailsData = typeof sec.BlogDetails.variants.PaintBlogDetails1;

// Flat Site Object
export const site = {
  brand: sec.Brand.variants.PaintBrand1,
  navbar: sec.Header.variants.PaintHeader1,
  topbar: sec.Topbar.variants.PaintTopbar1,
  subBanners: sec.SubBanners.variants.PaintSubBanners1,
  banner: sec.Banner.variants.PaintBanner1,
  about: sec.AboutSection.variants.PaintAboutSection1,
  aboutSec: sec.AboutPage.variants.PaintAboutPage1,
  ourServices: sec.Services.variants.PaintServices1,
  servicesSec: sec.ServicesPage.variants.PaintServicesPage1,
  howItWorks: sec.HowItWorks.variants.PaintHowItWorks1,
  gallerySec: sec.Gallery.variants.PaintGallery1,
  ourBlogs: sec.Blog.variants.PaintBlog1,
  quoteCta: sec.QuoteCta.variants.PaintQuoteCta1,
  quoteSec: sec.QuotePage.variants.PaintQuotePage1,
  testimonialSec: sec.Testimonial.variants.PaintTestimonial1,
  faqSec: sec.Faq.variants.PaintFaq1,
  contactSec: sec.ContactPage.variants.PaintContactPage1,
  serviceSidebar: sec.ServiceSidebar.variants.PaintServiceSidebar1,
  blogSidebar: sec.BlogSidebar.variants.PaintBlogSidebar1,
  serviceDetailsSec: sec.ServiceDetails.variants.PaintServiceDetails1,
  footer: sec.Footer.variants.PaintFooter1,
};

// Helpers for slugs
function cleanSlug(slug: string) {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export function getServiceBySlug(slug: string) {
  const cleanedTarget = cleanSlug(slug);
  return site.serviceDetailsSec.services.find(
    (s) => cleanSlug(s.slug) === cleanedTarget
  );
}

export function getServiceSlugs() {
  return site.serviceDetailsSec.services.map((s) => cleanSlug(s.slug));
}

export function getBlogDetailBySlug(slug: string) {
  const cleanedTarget = cleanSlug(slug);
  return sec.BlogDetails.variants.PaintBlogDetails1.posts.find(
    (p) => cleanSlug(p.slug) === cleanedTarget
  );
}

export function getBlogDetailSlugs() {
  return sec.BlogDetails.variants.PaintBlogDetails1.posts.map((p) => cleanSlug(p.slug));
}

export default paintData;
