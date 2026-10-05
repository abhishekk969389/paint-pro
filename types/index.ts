export interface ImageType {
  src: string;
  alt: string;
}

export interface BannerFeature {
  icon: string;
  text: string;
}

export interface BannerStats {
  value: string;
  labelLines: string[];
}

export interface BannerData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  features: BannerFeature[];
  floatingCard: {
    subtitle: string;
    titleLines: string[];
    titleHighlight: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  heroImage: ImageType;
  stats: BannerStats[];
}

export interface AboutFeature {
  icon: string;
  title: string;
  text: string;
}

export interface AboutData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  points: string[];
  buttonText: string;
  buttonLink: string;
  images: {
    painter: ImageType;
    house: ImageType;
  };
  features: AboutFeature[];
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

export interface ServicesData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  buttonText: string;
  buttonLink: string;
  list: ServiceItem[];
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

export interface WorksData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  steps: WorkStep[];
  tones: Record<string, { fill: string; ring: string; badge: string }>;
}

export interface GalleryProject {
  src: string;
  alt: string;
}

export interface GalleryData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  buttonText: string;
  buttonLink: string;
  projects: GalleryProject[];
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

export interface BlogData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  buttonText: string;
  buttonLink: string;
  posts: BlogPost[];
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

export interface FooterData {
  brandName: string[];
  brandSubtitle: string;
  description: string;
  bgImage: string;
  contacts: FooterContact[];
  quickLinks: FooterLink[];
  services: string[];
  posts: FooterPost[];
  copyright: string;
  socials: FooterSocial[];
}

export interface TopbarLink {
  platform: 'facebook' | 'instagram' | 'youtube' | 'linkedin';
  url: string;
}

export interface TopbarData {
  welcomeMessage: string;
  timing: string;
  socialLinks: TopbarLink[];
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

export interface AboutSecData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: AboutSecFeature[];
  skills: AboutSecSkill[];
  floatingCard: {
    icon: string;
    subtitle: string;
    titleLines: string[];
    titleHighlight: string;
  };
}

export interface ServiceSecCard {
  icon: string;
  title: string;
  text: string;
  image: string;
  link: string;
}

export interface ServiceSecData {
  badgeText: string;
  headline: {
    lines: string[];
    highlight: string;
  };
  description: string;
  cards: ServiceSecCard[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  img: string;
}

export interface TestimonialData {
  badgeText: string;
  headline: {
    text: string;
    highlight: string;
  };
  description: string;
  testimonials: TestimonialItem[];
}

export interface QuotePageSecData {
  badgeText: string;
  headline: {
    text1: string;
    highlight: string;
    text2: string;
  };
  description: string;
  features: {
    icon: string;
    title: string;
    text: string;
  }[];
  services: string[];
  form: {
    title1: string;
    titleHighlight: string;
    subtitle: string;
    buttonText: string;
    securityText: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  card: {
    title1: string;
    highlight: string;
    text: string;
    promoServices: {
      icon: string;
      a: string;
      b: string;
    }[];
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSecData {
  badgeText: string;
  headline: {
    text1: string;
    highlight: string;
  };
  description: string;
  image: {
    src: string;
    alt: string;
  };
  faqs: FaqItem[];
}

export interface ContactInfoCard {
  icon: string;
  title: string;
  textLines: string[];
  active: boolean;
}

export interface ContactFormSecData {
  badgeText: string;
  headline: {
    text1: string;
    text2: string;
    highlight: string;
  };
  form: {
    fields: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    buttonText: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface ContactSecData {
  info: {
    title: string;
    cards: ContactInfoCard[];
  };
  formSec: ContactFormSecData;
}

export interface ServiceSidebarData {
  allServicesTitle: string;
  servicesList: {
    slug: string;
    name: string;
    image: string;
  }[];
  downloadTitle: string;
  downloads: {
    name: string;
    icon: string;
    link: string;
  }[];
}

export interface ServiceDetailData {
  slug: string;
  title: { text1: string; highlight: string; };
  subtitle: string;
  content: string[];
  mainImage: string;
  features: {
    title: { text1: string; highlight: string; };
    description: string;
    list: string[];
    image: string;
  };
  process: {
    title: { text1: string; highlight: string; };
    description: string;
    steps: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
}

export interface BlogSidebarData {
  latestPostsTitle: string;
  latestPosts: {
    title: string;
    date: string;
    image: string;
    slug: string;
  }[];
  categoriesTitle: string;
  categories: {
    name: string;
    count: string;
  }[];
}

export interface BlogDetailData {
  slug: string;
  mainImage: string;
  tag: string;
  date: string;
  author: string;
  title: string;
  content1: string;
  subtitle: string;
  content2: string;
}

export interface PaintData {
  banner: BannerData;
  about: AboutData;
  services: ServicesData;
  works: WorksData;
  gallery: GalleryData;
  blog: BlogData;
  footer: FooterData;
  topbar: TopbarData;
  subbanners: Record<string, SubbannerItem>;
  aboutsec: AboutSecData;
  servicesec: ServiceSecData;
  quotesection: QuoteSecData;
  testimonial: TestimonialData;
  quotePageSec: QuotePageSecData;
  faqSec: FaqSecData;
  contactSec: ContactSecData;
  serviceSidebar: ServiceSidebarData;
  serviceDetails: Record<string, ServiceDetailData>;
  blogSidebar: BlogSidebarData;
  blogDetails: Record<string, BlogDetailData>;
  navbar: NavbarData;
}

export interface NavLink {
  label: string;
  url: string;
  hasDropdown: boolean;
  active?: boolean;
}

export interface ContactButton {
  phone: string;
  url: string;
}

export interface NavbarData {
  logo: {
    alt: string;
  };
  links: NavLink[];
  contactButton: ContactButton;
}

export interface QuoteSecData {
  bgImage: string;
  badgeText: string;
  headline: {
    line1: string;
    highlight: string;
    line2: string;
  };
  button: {
    text: string;
    link: string;
  };
}

