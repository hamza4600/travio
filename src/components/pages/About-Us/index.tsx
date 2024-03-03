"use client";
import Layout from "@/components/layout";
import AboutUs from "./AboutUs";
import {
  // aboutCompany,
  aboutData,
  aboutReviewData,
} from "./data";
// import { bannerText } from "../DynamicDestinations";
import AboutComapny from "./AboutCompany";
import OfficeLocations from "./OfficeLocation";
import ReviewSection from "@/components/sections/reviews/Reviews";

// import TravlerReviews from "@/components/sections/HappyTravelers";

const AboutUsPage = ({ language, pageData }) => {
  const { layout } = pageData || {};

  console.log("pageData: ", pageData);

  const { pageData: SECTIONS_DATA } = pageData || {};

  const { sections: SECTIONS } = SECTIONS_DATA || {};

  console.log("SECTIONS_DATA: ", SECTIONS_DATA);

  const {
    [0]: ABOUT_US,
    [1]: ABOUT_COMPANY,
    // [2]: ,
    [3]: LOCATIONS,
  } = SECTIONS || {};

  console.log("ABout us: ", ABOUT_US);

  console.log("ABout company: ", ABOUT_COMPANY);

  return (
    <Layout
      breadcrumbs={[
        {
          value: `/${language}/about-us`,
          label: "About Us",
        },
      ]}
      locale={`${language}`}
      promo_banner={layout.navbar.info_banner}
      globals={layout}
    >
      <div className="md:px-20 px-5">
        <AboutUs data={aboutData} locale={language} />
      </div>

      <div className="md:px-20 px-5">
        <AboutComapny
          data={ABOUT_COMPANY}
          // offerData={ABOUT_COMPANY.offerData}
          locale={language}
        />
      </div>

      {/* <div>
        <TravlerReviews />
      </div> */}

      {/* <div className="md:px-20 px-5"> */}
      <OfficeLocations
        title={LOCATIONS?.title[language]}
        data={LOCATIONS.locations}
        locale={language}
      />
      {/* </div> */}

      <ReviewSection data={aboutReviewData} locale={language} />
    </Layout>
  );
};

export default AboutUsPage;
