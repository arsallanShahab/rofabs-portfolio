import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="3xl">
        <Heading>Hostel & PG</Heading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-gradient-to-tr from-orange-300 to-pink-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Booking Engine
            </h2>
            <p className="text-2xl text-white/75">
              Booking engine integration for your hostel
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-cyan-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Room & Bed Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage rooms and beds for your hostel
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-yellow-300 to-green-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Complaint Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage complaints and requests from your hostel residents
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-purple-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              House Keeping
            </h2>
            <p className="text-2xl text-white/75">
              Manage house keeping staff and tasks for your hostel
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-sky-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Automated Rent Collection
            </h2>
            <p className="text-2xl text-white/75">
              Automated rent collection for your hostel rooms
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-zinc-300 to-lime-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Payment Gateway Integration
            </h2>
            <p className="text-2xl text-white/75">
              Payment gateway integration for easy payments and transactions
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-green-300 to-indigo-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Biometric Integration
            </h2>
            <p className="text-2xl text-white/75">
              Biometric integration for easy check-ins and check-outs
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-tr from-pink-300 to-amber-600 p-7 md:p-10">
            <h2 className="font-giest-sans text-4xl text-white">
              Inventory Management
            </h2>
            <p className="text-2xl text-white/75">
              Manage inventory for your hostel
            </p>
          </div>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
