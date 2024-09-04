import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="2xl">
        <Heading>
          Corporate <span className="block">Module</span>
        </Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Corporate Marketing Module
            </h2>
            <p className="text-2xl text-white/75">
              Manage marketing campaigns for your corporate clients
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              B2B Agreement Generator
            </h2>
            <p className="text-2xl text-white/75">
              Generate B2B agreements for your corporate clients
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Corporate Dashboard
            </h2>
            <p className="text-2xl text-white/75">
              View corporate dashboard for your corporate clients and their
              properties
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Bill To Company
            </h2>
            <p className="text-2xl text-white/75">
              Manage bill to company for your corporate clients
            </p>
          </div>
          <div className="col-span-2 rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Corporate CRM
            </h2>
            <p className="text-2xl text-white/75">
              Manage CRM for your corporate clients and their properties
            </p>
          </div>
          <div className="col-span-2 rounded-3xl bg-gradient-to-tr from-pink-300 to-amber-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Event Tracking Module
            </h2>
            <p className="text-2xl text-white/75">
              Track events for your corporate clients and their properties
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
