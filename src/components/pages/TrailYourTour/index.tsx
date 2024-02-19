"use client";

import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import FAQSection from "@/components/sections/faq";
import { data } from "../HomePage/data";
import { useState } from "react";
import Steps from "./Steps";
const SelectDestinationSection = dynamic(() => import("./SelectDestiSection"));
const Step1 = dynamic(() => import("./Step1"));
const Step2 = dynamic(() => import("./Step2"));
import { useForm } from "react-hook-form";
import { useZodValidationResolver, validationSchema } from "./schema";

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

const TailorYourTour = () => {
  const [loading] = useState(false);
  const resolver = useZodValidationResolver(validationSchema);
  const [selectedDestination, setSelectedDestination] = useState<string[]>([]);

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

  // console.log(getValues(), 'getValues')
  return (
    <Layout locale="en" breadcrumbs={[]}>
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
            setSelectedDestination={(value: string) => {
              const currentSelectedDestinations = getValues(
                "selectedDestination"
              );
              if (!currentSelectedDestinations.includes(value)) {
                const updatedSelectedDestinations = [
                  ...currentSelectedDestinations,
                  value,
                ];
                setValue("selectedDestination", updatedSelectedDestinations, {
                  shouldValidate: true,
                });
                setSelectedDestination(updatedSelectedDestinations);
              }
              console.log(value, "getValues", getValues("selectedDestination"));
            }}
          />
          <Step1
            onChange={(value) => {
              setValue("duration", value, { shouldValidate: true });
            }}
          />
          <Step2 control={control} setValue={setValue} />
        </Steps>

        <FAQSection data={data} locale={""} />
      </div>
    </Layout>
  );
};

export default TailorYourTour;
