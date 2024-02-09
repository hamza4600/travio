// import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/atoms/blockContent";
import layout_group from "./schemas/atoms/content/Group";
import content_image from "./schemas/atoms/content/Image";
import content_link_card from "./schemas/atoms/content/LinkCard";
import rich_text from "./schemas/atoms/content/Richtext";
import layout_stack from "./schemas/atoms/content/Stack";
import content_text from "./schemas/atoms/content/Text";
import { form_button, form_input_field } from "./schemas/atoms/Form";
import icon from "./schemas/atoms/Icon";
import link from "./schemas/atoms/Link";
import link_button from "./schemas/atoms/LinkButton";
import locale_number from "./schemas/atoms/locale/LocaleNumber";
import { locale_rich_text } from "./schemas/atoms/locale/LocaleRichtext";
import locale_string from "./schemas/atoms/locale/LocaleString";
import locale_text from "./schemas/atoms/locale/LocaleText";
import meta_data from "./schemas/atoms/MetaData";
import photo from "./schemas/atoms/Photo";
import price from "./schemas/atoms/Price";
import promo_banner from "./schemas/atoms/PromoBanner";
import timeline from "./schemas/atoms/Timeline";
import tour_timeline from "./schemas/atoms/TourTimeline";
import Article from "./schemas/documents/Article";
import blog_page from "./schemas/documents/BlogPage";
import destination_page from "./schemas/documents/DestinationPage";
import Globals, { TourDropdown } from "./schemas/documents/Globals";
import MemorableExperiences from "./schemas/documents/MemorableExperiences";
import Page from "./schemas/documents/Page";
import PromoCode from "./schemas/documents/PromoCode";
import Tag from "./schemas/documents/Tag";
import tailor_your_tour from "./schemas/documents/TailorYourTour";
import ThingsToDo from "./schemas/documents/ThingsToDo";
import tour_page from "./schemas/documents/TourPage";
import travel_guide from "./schemas/documents/TravelGuide";
import travel_wiki, {
    TravelWikiSection as travel_wiki_section,
} from "./schemas/documents/TravelWiki";
import { BlogSectionExports } from "./schemas/sections/Blog";
import content_section from "./schemas/sections/ContentSection";
import deals_section from "./schemas/sections/DealsSection";
import { DestinationSectionExports } from "./schemas/sections/Destination";
import destinations_section from "./schemas/sections/DestinationsSection";
import { faq, faq_section } from "./schemas/sections/FAQSection";
import { feature, feature_section } from "./schemas/sections/FeatureSection";
import gallery_section from "./schemas/sections/GallerySection";
import hero_card_section from "./schemas/sections/HeroCardSection";
import hero_section from "./schemas/sections/HeroSection";
import image_header_section from "./schemas/sections/ImageHeaderSection";
import index_section from "./schemas/sections/IndexSection";
import newsletter_section from "./schemas/sections/NewsletterSection";
import office_locations_section from "./schemas/sections/OfficeLocationsSection";
import reviews_section from "./schemas/sections/ReviewsSection";
import {
    testimonial,
    testimonial_section,
} from "./schemas/sections/TestimonialSection";
import { TourSectionExports } from "./schemas/sections/Tours";

export const schemaTypes= [
        // atoms
        blockContent,
        locale_string,
        locale_number,
        locale_text,
        locale_rich_text,
        form_button,
        form_input_field,
        icon,
        link,
        link_button,
        photo,
        meta_data,
        promo_banner,
        price,
        tour_timeline,
        timeline,
        // content
        content_text,
        content_image,
        layout_group,
        layout_stack,
        content_link_card,
        rich_text,
        // sections
        content_section,
        deals_section,
        destinations_section,
        faq_section,
        faq,
        feature_section,
        feature,
        gallery_section,
        hero_section,
        image_header_section,
        index_section,
        office_locations_section,
        reviews_section,
        testimonial_section,
        testimonial,
        hero_card_section,
        travel_wiki_section,
        // Blog Sections
        ...BlogSectionExports,
        ...TourSectionExports,
        ...DestinationSectionExports,
        // Singletons
        tailor_your_tour,
        // documents
        Article,
        blog_page,
        tour_page,
        Page,
        Tag,
        Globals,
        TourDropdown,
        travel_guide,
        travel_wiki,
        destination_page,
        PromoCode,
        ThingsToDo,
        MemorableExperiences,
        newsletter_section,
    ];
// };
