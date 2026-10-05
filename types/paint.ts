export interface ImageType {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  url: string;
  hasDropdown: boolean;
  active?: boolean;
}

export interface BannerFeature {
  icon: string;
  text: string;
}

export interface BannerStats {
  value: string;
  labelLines: string[];
}

export interface AboutFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  text: string;
  points: string[];
  image: ImageType;
  cardBg: string;
  iconBg: string;
  bar: string;
}

export interface WorkStep {
  no: string;
  title: string;
  text: string;
  icon: string;
  secondaryIcon?: string;
  secondaryText?: string;
  tone: "orange" | "blue";
}

export interface GalleryProject {
  src: string;
  alt: string;
}

export interface BlogPost {
  day: string;
  month: string;
  year: string;
  tag: string;
  tagStyle: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
}

export interface FooterContact {
  icon: string;
  label: string;
  value: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterPost {
  title: string;
  date: string;
  img: string;
  href: string;
}

export interface FooterSocial {
  icon: string;
  label: string;
  href: string;
}

export interface TopbarLink {
  platform: 'facebook' | 'instagram' | 'youtube' | 'linkedin';
  url: string;
}

export interface SubbannerBreadcrumb {
  label: string;
  href: string;
}

export interface SubbannerItem {
  title: string;
  bgImage: string;
  breadcrumbs: SubbannerBreadcrumb[];
}

export interface AboutSecFeature {
  icon: string;
  title: string;
  text: string;
  tone: "orange" | "blue";
}

export interface AboutSecSkill {
  name: string;
  percentage: number;
}

export interface ServiceSecCard {
  icon: string;
  title: string;
  text: string;
  image: string;
  link: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  img: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactInfoCard {
  icon: string;
  title: string;
  textLines: string[];
  active: boolean;
}

export interface ContactButton {
  phone: string;
  url: string;
}
