import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (_props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="7xl">
        {" "}
        <Heading>Material Management</Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Material categories
            </h2>
            <p className="text-2xl text-white/75">
              Add and manage categories for materials
            </p>
          </div>
          {/* <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Items Management
            </h2>
            <p className="text-2xl text-white/75">
              Add maket items which will be used in your hotels
            </p>
          </div> */}
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Vendor Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage vendors and suppliers
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Purchase Order
            </h2>
            <p className="text-2xl text-white/75">
              Create purchase orders for materials and items
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Inventory Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage inventory of materials for your hotels
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
