import React, { useEffect } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import { TailorTripFormData } from "./index";
import countries from "@/utils/countries.json";
import {
  Leaf,
  Cross,
  WaveTriangle,
  Car,
  Boat,
  Compass,
  FinnTheHuman,
  CrossSelected,
  CarSelected,
  WaveTriangleSelected,
  BoatSelected,
  CompassSelected,
  FinnTheHumanSelected,
  LeafSelected,
} from "./style";
import Input from "./Input";

export default function Step2({
  control,
  setValue,
}: {
  setValue: UseFormSetValue<TailorTripFormData>;
  control: Control<any>;
}) {
  const CategoriesOptions = [
    { name: "Historic Sites", icon: <Leaf />, iconSelected: <LeafSelected /> },
    {
      name: "Religious Sites",
      icon: <Cross />,
      iconSelected: <CrossSelected />,
    },
    {
      name: "Beach",
      icon: <WaveTriangle />,
      iconSelected: <WaveTriangleSelected />,
    },
    { name: "Desert Safaris", icon: <Car />, iconSelected: <CarSelected /> },
    { name: "Cruises", icon: <Boat />, iconSelected: <BoatSelected /> },
    {
      name: "Outdoor Activities",
      icon: <Compass />,
      iconSelected: <CompassSelected />,
    },
    {
      name: "Wellness Activities",
      icon: <FinnTheHuman />,
      iconSelected: <FinnTheHumanSelected />,
    },
  ];
  const [mobileNumber] = React.useState({
    mobileCode: "+1",
    mobileNumber: "",
  });

  useEffect(() => {
    setValue(
      "phone",
      mobileNumber["mobileCode"] + mobileNumber["mobileNumber"],
      {
        shouldValidate: true,
      }
    );
  }, [mobileNumber, setValue]);

  return (
    <div className="grid lg:grid-cols-2 font-satoshi grid-cols-1 gap-[18px] md:px-3 px-5 lg:px-12">
      <Input name="name" label="Name*" type="text" control={control} />
      <Input name="email" label="Email*" type="text" control={control} />
      <Input
        control={control}
        name="nationality"
        label="Nationality*"
        options={countries.map((c) => ({ value: c.name, label: c.name }))}
        type="select"
        placeholder="Select your Nationality"
        className="h-[38px]"
      />
      <div className="flex  font-medium text-base text-black flex-col gap-2">
        <label htmlFor="mobileNumber">Mobile</label>
        <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-3">
          <Input
            name="mobileCode"
            rules={{ required: true }}
            control={control}
            type="select"
            options={countries.map((c) => ({
              value: c.dial_code,
              label: `${c.name} (${c.dial_code})`,
            }))}
          />
          <Input
            name="mobileNumber"
            rules={{ required: true }}
            control={control}
            type="number"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-base text-black">Number of People*</p>
        <div className="grid grid-cols-2 gap-3">
          <Input
            name="numberOfAdults"
            placeholder="Adults"
            type="buttonNumber"
            control={control}
          />
          <Input
            name="numberOfChildrens"
            control={control}
            placeholder="Children"
            type="buttonNumber"
          />
        </div>
      </div>
      <Input
        control={control}
        label={
          <p className="flex gap-[6px] items-center">
            Your Budget
            <span className="font-normal text-xs text-gray">
              (Excluding international flights)
            </span>
          </p>
        }
        name="budget"
        type="select"
        options={[
          { value: "less than $1000", label: "less than $1000" },
          { value: "$1000-$2000", label: "$1000-$2000" },
          { value: "$2000-$3000", label: "$2000-$3000" },
          { value: "more than $3000", label: "more than $3000" },
        ]}
        className="h-[38px]"
      />
      <div className="col-span-full">
        <Input
          control={control}
          name="categories"
          type="boxSelection"
          options={CategoriesOptions}
          label={"Select Categories"}
        />
      </div>
      <div className="col-span-full">
        <Input
          control={control}
          type="textarea"
          label="More Information"
          name="moreInfo"
        />
      </div>
    </div>
  );
}
