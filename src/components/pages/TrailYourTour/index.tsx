"use client";

import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import FAQSection from "@/components/sections/faq";
import { useCallback, useState } from "react";
import Steps from "./Steps";
const SelectDestinationSection = dynamic(() => import("./SelectDestiSection"));
const Step1 = dynamic(() => import("./Step1"));
const Step2 = dynamic(() => import("./Step2"));
import { useForm } from "react-hook-form";
import { useZodValidationResolver, validationSchema } from "./schema";
import { faqSectionData } from "../DynamicDestinations/data";
// import { bannerText } from "../DynamicDestinations";

export type TailorTripFormData = {
  selectedDestination: string[];
  duration: string;
  name: string;
  email: string;
  nationality: string;
  phone: string;
  numberOfAdults: string;
  numberOfChildrens: string;
  budget: string;
  categories: string[];
  moreInfo: string;
};

const TailorYourTour = ({ language, pageData }) => {
  const { layout } = pageData || {};

  const [loading] = useState(false);
  const resolver = useZodValidationResolver(validationSchema);
  const [selectedDestination, setSelectedDestination] = useState<string[]>([]);

  const handleSelectDestination = (value: string) => {
    const currentSelectedDestinations = getValues("selectedDestination");
    let updatedSelectedDestinations = [...currentSelectedDestinations];

    if (currentSelectedDestinations.includes(value)) {
      updatedSelectedDestinations = currentSelectedDestinations.filter(item => item !== value);
    } else {
      updatedSelectedDestinations.push(value);
    }

    setValue("selectedDestination", updatedSelectedDestinations, {
      shouldValidate: true,
    });
    setSelectedDestination(updatedSelectedDestinations);
  }

  const {
    control,
    handleSubmit,
    // formState: { errors },
    setValue,
    getValues,
  } = useForm<TailorTripFormData>({
    defaultValues: {
      categories: [],
      numberOfAdults: "0",
      numberOfChildrens: "0",
      selectedDestination: [],
    },
    resolver: resolver,
  });

  return (
    <Layout
      locale={language}
      globals={layout}
      promo_banner={layout?.navbar?.info_banner}
      breadcrumbs={[
        {
          label: "Tailor your tour",
          value: `/${language}/tailor_your_tour`,
        },
      ]}
    >
      <hr className="bg-gray border-b-2 md:hidden" />
      <div
        className="md:hidden absolute top-[135px] left-0 border-b-[#3FA9F5] border-b-2"
        style={{ width: "117px" }}
      ></div>
      <div className="flex mt-10 flex-col">
        <Steps
          loading={loading}
          disableNext={getValues("duration") == ""}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >

          <SelectDestinationSection
            selectedDestination={selectedDestination}
            setSelectedDestination={handleSelectDestination}
          />
          <Step1
            onChange={useCallback(
              (value) => {
                setValue("duration", value, { shouldValidate: true });
              },
              [setValue]
            )}
          />
          <Step2 control={control} setValue={setValue} />
        </Steps>

        <FAQSection data={faqSectionData} locale={language} />
      </div>
    </Layout>
  );
};

export default TailorYourTour;