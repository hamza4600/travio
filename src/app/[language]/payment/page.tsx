import PaymentPage from "@/components/pages/Payment";
import { mockPageProps } from "@/components/pages/Payment/data";
import React from "react";

const page = () => {
  return (
    <div>
      <PaymentPage
        slug={""}
        data={mockPageProps}
        globals={{
          _type: "globals",
          _id: "",
          banner: undefined,
          navbar: undefined,
          footer: undefined,
        }}
        promo={[]}
        locale={"en"}
        from={0}
        to={0}
      />
    </div>
  );
};

export default page;
