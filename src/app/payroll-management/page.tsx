import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="2xl">
        <Heading>Payroll Management</Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-3xl text-white">
              Salary Management
            </h2>
            <p className="text-xl text-white/75">
              Basic salary computation, including TA (Travel Allowance), DA
              (Dearness Allowance), and HRA (House Rent Allowance).
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-3xl text-white">
              Advance Pay Management
            </h2>
            <p className="text-xl text-white/75">
              Allow employees to request advance payments. Automatically deduct
              advance payments from future salaries.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-3xl text-white">
              Basic deductions and role based access
            </h2>
            <p className="text-xl text-white/75">
              Deduct taxes, provident fund, and other deductions from salaries.
              Define roles and permissions for different users.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-3xl text-white">Taxations</h2>
            <p className="text-xl text-white/75">
              Automatically calculate and deduct taxes from salaries.
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
