import { ComponentClass, FunctionComponent } from "react";
import dynamic from "next/dynamic";

import {
  SanityBlogPageSectionNames,
  SanitySectionNames,
} from "../../../sanity/lib/types";

const BlogHeroSection = dynamic(() => import("./BlogHeroSection"), {
  ssr: false,
});
const NewsletterSection = dynamic(() => import("./NewsletterSection"), {
  ssr: false,
});
const InterestSection = dynamic(() => import("./InterestSection"), {
  ssr: false,
});
const FeatureTopBlogSection = dynamic(() => import("./FeatureTopBlogSection"), {
  ssr: false,
});
const BlogSection = dynamic(
  () => import("@/components/sections/blogs/BlogSection"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const AllBlogsSection = dynamic(() => import("./AllBlogsSection"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const HeroSection = dynamic(
  () => import("@/components/pages/HomePage/HeroSection")
);

// const FlexibleThings = dynamic(
//   () => import("@/components/sections/FlexibleThings/FlexibleThings")
// );
const DealsSection = dynamic(
  () => import("@/components/sections/differnetDeals/CardsSection")
);
// const GetEarlyNews = dynamic(() => import("@/components/sections/form/Form"));
const FAQSection = dynamic(() => import("@/components/sections/faq"));
const GallerySection = dynamic(
  () => import("@/components/molecules/TourGallery")
);
const FeatureSection = dynamic(
  () => import("@/components/sections/FlexibleThings/FlexibleThings")
);
const ReviewSection = dynamic(
  () => import("@/components/sections/HappyTravelers")
);

const DestinationsSection = dynamic(
  () => import("@/components/pages/HomePage/Destination")
);
const IndexSection = dynamic(() => import("../pages/HomePage/OtherTours"));
// import GetEarlyNews from "./form/Form";

export const BlogPageSectionsMap: {
  [name in SanityBlogPageSectionNames]?:
    | FunctionComponent<any>
    | ComponentClass<any, any>;
} = {
  image_header_section: BlogHeroSection,
  newsletter_section: NewsletterSection,
  interests_section: InterestSection,
  featured_place_blogs_section: FeatureTopBlogSection,
  featured_blogs_section: BlogSection,
  all_blogs_section: AllBlogsSection,
};

export const SectionMap: {
  [name in SanitySectionNames]?:
    | FunctionComponent<any>
    | ComponentClass<any, any>;
} = {
  hero_section: HeroSection,
  feature_section: FeatureSection,
  newsletter_section: NewsletterSection,
  destinations_section: DestinationsSection,
  faq_section: FAQSection,
  deals_section: DealsSection,
  testimonial_section: ReviewSection,
  featured_blogs_section: BlogSection,
  gallery_section: GallerySection,
  // content_section: ContentSection,
  reviews_section: ReviewSection,
  //   office_locations_section: OfficeLocationSection,
  index_section: IndexSection,

  //   image_header_section: ImageHeaderSection,
};
