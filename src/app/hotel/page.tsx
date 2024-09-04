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
          Hotel <span className="block">Management</span>
        </Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Property Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage your hotel properties with ease
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Material Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage materials for your hotel properties
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Employee Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage employees for your hotel properties and departments
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-sky-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Banquet Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage banquet halls and events for your hotel properties
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-green-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Payroll Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage payroll for your employees with ease
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-zinc-300 to-lime-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Restaurant & Bar Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage restaurant and bar for your hotel properties
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              House Keeping Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage house keeping staff and tasks for your hotel properties
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-amber-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Laundry Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage laundry services for your hotel properties
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
