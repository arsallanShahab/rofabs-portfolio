import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="2xl">
        <Heading>Restaurant and Cafes Management</Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Table & Guests Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage tables and guests for your restaurant and cafes
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              QR Based Menu
            </h2>
            <p className="text-2xl text-white/75">
              Generate QR codes for easy menu access
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Zomato & Swiggy Integration
            </h2>
            <p className="text-2xl text-white/75">
              Integrate with Zomato and Swiggy for easy online ordering
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Thermal Printer
            </h2>
            <p className="text-2xl text-white/75">
              Connect thermal printers for easy bill printing
            </p>
          </div>
          <div className="col-span-2 rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Sales & Tax Reports
            </h2>
            <p className="text-2xl text-white/75">
              View sales and tax reports for your restaurant and cafes
            </p>
          </div>
          <div className="col-span-2 rounded-3xl bg-gradient-to-tr from-pink-300 to-amber-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Employee Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage employees for your restaurant and cafes
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
