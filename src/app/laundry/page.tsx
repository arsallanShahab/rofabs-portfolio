import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="3xl">
        <Heading>
          Laundry <span className="block">Management</span>
        </Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Configure Price
            </h2>
            <p className="text-2xl text-white/75">
              Configure prices for laundry items and services
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Outward Laundry
            </h2>
            <p className="text-2xl text-white/75">
              Manage outward laundry services for your hotels
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Inward Laundry
            </h2>
            <p className="text-2xl text-white/75">
              Manage inward laundry services for your hotels
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">Reports</h2>
            <p className="text-2xl text-white/75">
              Generate reports for laundry services
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
