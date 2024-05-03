"use client";
import Layout from "@/components/layout";

import Slicer from "../../../../sanity/slicer";
import { DestinationSectionsMap } from "@/components/sections";
import FilterTour from "./FilterTour";

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
      <FilterTour />
    </Layout>
  );
};

export default DynamicDestionations;
