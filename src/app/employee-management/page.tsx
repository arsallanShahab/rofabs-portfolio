import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="5xl">
        <Heading>
          Employee <span className="block">Management</span>
        </Heading>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-mono text-3xl text-white">
              hassle free onboarding
            </h2>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-mono text-3xl text-white">
              leave & attendance
            </h2>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-mono text-3xl text-white">
              hands free payroll
            </h2>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-mono text-3xl text-white">
              easy to use task trackers
            </h2>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
