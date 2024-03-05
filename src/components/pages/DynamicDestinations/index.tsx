"use client";
import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { DestinationSectionsMap } from "@/components/sections";
import ContactSection from "./ContactSection";

export const bannerText = {
  text: "More summer for less. Save up to 20% off selected trips*.",
  link: {
    text: "Book now",
  },
};

const DynamicDestionations = ({ language, pageData }) => {
  const { layout, data } = pageData;
  console.log(data, "555555");

  return (
    <Layout
      locale={`${language}`}
      promo_banner={layout.navbar.info_banner}
      globals={layout}
      breadcrumbs={[
        {
          label: "Destinations",
          value: "/",
        },
        {
          label: "Egypt",
          value: "/egypt",
        },
      ]}
    >
      <Slicer
        locale={language}
        sections={data.sections}
        components={DestinationSectionsMap}
      />
      <ContactSection data={data.sections[5]} locale={language} />
    </Layout>
  );
};

export default DynamicDestionations;
