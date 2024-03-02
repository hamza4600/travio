"use client";
import Layout from "@/components/layout";
import AboutUs from "./AboutUs";
import { aboutCompany, aboutData, aboutReviewData, location } from "./data";
import { bannerText } from "../DynamicDestinations";
import AboutComapny from "./AboutCompany";
import OfficeLocations from "./OfficeLocation";
import ReviewSection from "@/components/sections/reviews/Reviews";

// import TravlerReviews from "@/components/sections/HappyTravelers";

const AboutUsPage = ({ language, pageData }) => {
  const { layout } = pageData || {};

  console.log("pageData: ", pageData);

  return (
    <Layout
      breadcrumbs={[
        {
          value: `/${language}/about-us`,
          label: "About Us",
        },
      ]}
      locale={`${language}`}
      promo_banner={bannerText}
      globals={layout}
    >
      <div className="md:px-20 px-5">
        <AboutUs data={aboutData} locale={language} />
      </div>

      <div className="md:px-20 px-5">
        <AboutComapny
          data={aboutCompany}
          offerData={aboutCompany.offerData}
          locale={language}
        />
      </div>

      {/* <div>
        <TravlerReviews />
      </div> */}

      {/* <div className="md:px-20 px-5"> */}
      <OfficeLocations
        title={location.title}
        data={location.data}
        locale={language}
      />
      {/* </div> */}

      <ReviewSection data={aboutReviewData} locale={language} />
    </Layout>
  );
};

export default AboutUsPage;
