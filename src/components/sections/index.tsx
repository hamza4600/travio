import { ComponentClass, FunctionComponent } from "react";
import dynamic from "next/dynamic";

import {
  SanityBlogPageSectionNames,
  SanityDestinationSectionNames,
  SanitySectionNames,
  // SanityTourPageSectionNames,
  SanityTourSectionNames,
} from "../../../sanity/lib/types";

const FeatureTourSection = dynamic(() => import("./featureTour/FeatureTour"));
const ContactSection = dynamic(
  () => import("../pages/DynamicDestinations/ContactSection")
);

const ReviewRatingSections = dynamic(
  () => import("@/components/sections/reviews/Reviews")
);

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
const AllBlogsSection = dynamic(
  () => import("@/components/pages/AllBlogs-Page/FeatureBlogs"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const HeroSection = dynamic(
  () => import("@/components/pages/HomePage/HeroSection")
);

const HeroSectionTours = dynamic(
  () => import("@/components/pages/DynamicDestinations/HeroSection")
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
  () => import("@/components/pages/HomePage/FeatureSection")
);

// const FlexibleThings = dynamic(() => import("./FlexibleThings/FlexibleThings"));

const Testimonials = dynamic(
  () => import("@/components/sections/HappyTravelers")
);

const DestinationsSection = dynamic(
  () => import("@/components/pages/HomePage/Destination")
);
const IndexSection = dynamic(() => import("../pages/HomePage/OtherTours"));
// import GetEarlyNews from "./form/Form";
const TopThingsToDo = dynamic(
  () => import("@/components/pages/DynamicDestinations/TopThings")
);

const CountryFacts = dynamic(
  () => import("@/components/pages/DynamicDestinations/CountryFacts")
);

const TravelInformation = dynamic(
  () => import("@/components/pages/DynamicTourPage/TraveInformation")
);

const ItinerarySection = dynamic(
  () => import("@/components/pages/DynamicTourPage/ItinarySection")
);

const SummarySection = dynamic(
  () => import("@/components/pages/DynamicTourPage/SummarySection")
);

// const ExcludedInTour = dynamic(() => import("./ExcludedInTour"));

const MemorableExperiencesSection = dynamic(
  () => import("@/components/pages/DynamicTourPage/MemoriableExperince")
);

const FlexibleThingsForTour = dynamic(
  () => import("@/components/sections/FlexibleThings/ForTourSection")
);

const PriceList = dynamic(
  () => import("@/components/pages/DynamicTourPage/PriceList")
);

const WhatsIncludedSection = dynamic(
  () => import("@/components/pages/DynamicTourPage/InccludedInTour")
);

const AccommdationTypesSection = dynamic(
  () => import("@/components/pages/DynamicTourPage/Accomdations")
);

const TourGallerySection = dynamic(
  () => import("../molecules/TourGallery/TourGallerySection")
);

FeatureTourSection;

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
  // newsletter_section: NewsletterSection,
  destinations_section: DestinationsSection,
  faq_section: FAQSection,
  deals_section: DealsSection,
  testimonial_section: Testimonials,
  featured_blogs_section: BlogSection,
  gallery_section: GallerySection,
  // content_section: ContentSection,
  reviews_section: ReviewRatingSections,
  // office_locations_section: OfficeLocationSection,
  index_section: IndexSection,
  // image_header_section: ImageHeaderSection,
};

export const DestinationSectionsMap: {
  [name in SanityDestinationSectionNames]?:
    | FunctionComponent<any>
    | ComponentClass<any, any>;
} = {
  image_header_section: HeroSectionTours,
  reviews_section: ReviewRatingSections,
  faq_section: FAQSection,
  // all_blogs_section: BlogSection,
  featured_blogs_section: BlogSection,
  featured_tours_section: FeatureTourSection,
  at_glance_section: CountryFacts,
  // tour_selection_section: BestToursSection,
  top_things_section: TopThingsToDo,
  contact_agent_section: ContactSection,
};

export const TourSectionsMap: {
  [name in SanityTourSectionNames]?:
    | FunctionComponent<any>
    | ComponentClass<any, any>;
} = {
  itinerary_section: ItinerarySection,
  content_section: SummarySection,
  memorable_experiences_section: MemorableExperiencesSection,
  gallery_section: TourGallerySection,
  whats_included_section: WhatsIncludedSection,
  pricing_section: PriceList,
  accommodation_types_section: AccommdationTypesSection,
  feature_section: FlexibleThingsForTour,
  featured_tours_section: FeatureTourSection,
  travel_info_section: TravelInformation,
  reviews_section: ReviewRatingSections,
  faq_section: FAQSection,
};
