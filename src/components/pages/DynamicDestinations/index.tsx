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

  return (
    <Layout
      locale={`${language}`}
      promo_banner={layout?.banner}
      globals={layout}
      breadcrumbs={[
        {
          label: "Destinations",
          value: `${language}`,
        },
        {
          label: `${data.name?.[language]}`,
          value: `${data.slug?.current || "/"}`,
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
