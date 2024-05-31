import { Control } from "react-hook-form";

import countries from "../../../utils/countries.json";
import Input from "../TrailYourTour/Input";
export interface IContactInfo {
  titlePrefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  nationality: string;
  email: string;
  mobileCode: string;
  mobileNumber: string;
  address: string;
  town: string;
  state: string;
  country: string;
  adultPassenger: {
    titlePrefix: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    email: string;
  }[];
}
export default function Page2({
  control,
  adultsNumber,
  addPassenger,
  removePassenger,
}: {
  control: Control<any>;
  adultsNumber: number;
  addPassenger?: () => void;
  removePassenger?: () => void;
}) {
  return (
    <div className="md:p-10 md:rounded-2xl overflow-hidden md:border md:border-darkblue/10 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="md:text-[24px] md:leading-[34px] text-[20px] leading-8 text-darkblue font-bold">
          1. Primary Passenger Details
        </p>
        <p className="md:text-base text-gray md:font-medium text-[14px] leading-6">
          Have you reviewed the details in the booking summary? If something
          isn&lsquo;t correct, you can adjust your details in the previous
          steps.
        </p>
      </div>
      <div className="flex flex-col gap-[18px] max-w-[390px]">
        <div className="flex flex-col gap-2">
          <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
            Full Name
          </p>
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <Input
              name="titlePrefix"
              control={control}
              placeholder="Prefix"
              type="select"
              options={[
                { label: "Mr", value: "Mr" },
                { label: "Ms", value: "Ms" },
                { label: "Dr", value: "Dr" },
              ]}
              rules={{ required: true }}
            />
            <Input
              rules={{ required: true }}
              name="firstName"
              control={control}
              placeholder="First Name"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            name="middleName"
            control={control}
            placeholder="Middle Name"
            type="text"
          />
          <Input
            rules={{ required: true }}
            name="lastName"
            control={control}
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
            Date of Birth
          </p>
          <Input
            name="dob"
            control={control}
            placeholder="Date"
            type="date"
            rules={{ required: true }}
          />
          <div className="flex flex-col gap-2">
            <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
              Nationality
            </p>
            <Input
              name="nationality"
              control={control}
              placeholder=" "
              rules={{ required: true }}
              type="select"
              options={countries.map((c) => ({ value: c.name, label: c.name }))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
              Email
            </p>
            <Input
              rules={{ required: true }}
              name="email"
              control={control}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
              Mobile
            </p>
            <div className="grid grid-cols-[120px_1fr] gap-3">
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
            <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
              Address
            </p>
            <Input
              rules={{ required: true }}
              name="address"
              control={control}
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
                Town
              </p>
              <Input name="town" control={control} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
                State
              </p>
              <Input
                rules={{ required: true }}
                name="state"
                control={control}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
              Country
            </p>
            <Input
              rules={{ required: true }}
              name="country"
              control={control}
              type="select"
              placeholder=" "
              options={countries.map((c) => ({
                label: c.name,
                value: c.name,
              }))}
            />
          </div>
        </div>
      </div>
      {Array.from(Array(adultsNumber - 1).keys()).map((i) => (
        <div key={i}>
          <div className="mb-2 flex w-full justify-between items-end">
            <p className="md:text-[24px] md:leading-[34px] text-[20px] leading-8 text-darkblue font-bold">
              {i + 2}. Adult Passenger Details
            </p>
            {removePassenger && (
              <button
                onClick={removePassenger}
                className="font-bold text-base text-primary self-start mt-auto"
              >
                Remove
              </button>
            )}
          </div>
          <div className="flex flex-col gap-[18px] max-w-[390px]">
            <div className="flex flex-col gap-2">
              <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
                Full Name
              </p>
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <Input
                  name={`adultPassenger.${i}.titlePrefix`}
                  rules={{ required: true }}
                  control={control}
                  placeholder="Prefix"
                  type="select"
                  options={[
                    { label: "Mr", value: "Mr" },
                    { label: "Ms", value: "Ms" },
                    { label: "Dr", value: "Dr" },
                  ]}
                />
                <Input
                  name={`adultPassenger.${i}.firstName`}
                  rules={{ required: true }}
                  control={control}
                  placeholder="First Name"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                name={`adultPassenger.${i}.middleName`}
                control={control}
                placeholder="Middle Name"
                type="text"
              />
              <Input
                name={`adultPassenger.${i}.lastName`}
                rules={{ required: true }}
                control={control}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
                Date of Birth
              </p>
              <Input
                name={`adultPassenger.${i}.dob`}
                rules={{ required: true }}
                control={control}
                placeholder="Date"
                type="date"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-base text-[12px] leading-5 font-bold text-darkblue">
                Email
              </p>
              <Input
                rules={{ required: true }}
                name={`adultPassenger.${i}.email`}
                control={control}
                type="text"
              />
            </div>
          </div>
        </div>
      ))}
      {addPassenger && (
        <button
          onClick={addPassenger}
          className="md:text-base text-[12px] leading-5 font-bold text-base text-primary self-start"
        >
          Add Passenger
        </button>
      )}
    </div>
  );
}