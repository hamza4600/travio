"use client";
import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { DestinationSectionsMap } from "@/components/sections";

export const bannerText = {
  text: "More summer for less. Save up to 20% off selected trips*.",
  link: {
    text: "Book now",
  },
};

const DynamicDestionations = ({ language, pageData }) => {
  const { layout, data } = pageData;
  console.log(data, "555555",);

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
    </Layout>
  );
};

export default DynamicDestionations;
