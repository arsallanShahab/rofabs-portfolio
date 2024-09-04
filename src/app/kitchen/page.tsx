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
          Kitchen <span className="block">Management</span>
        </Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Kitchen Items
            </h2>
            <p className="text-2xl text-white/75">
              Add kitchen items to inventory
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">Utilization</h2>
            <p className="text-2xl text-white/75">
              Create utilization for kitchen items
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Utilization list
            </h2>
            <p className="text-2xl text-white/75">
              View utilization list for kitchen items and manage them
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">Reports</h2>
            <p className="text-2xl text-white/75">
              View reports for kitchen items
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
