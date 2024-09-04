import FlexContainer from "@/components/flex-container";
import Heading from "@/components/heading";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="2xl">
        <Heading>Property Management</Heading>
        <h5 className="max-w-xl text-2xl text-gray-500">
          OTA Integration with Rofabs
        </h5>
        <div className="grid place-items-center gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-100 px-5 py-10 hover:bg-zinc-200">
            <Image
              src="/booking.com.png"
              width={300}
              height={300}
              alt="booking.com"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-100 px-5 py-10 hover:bg-zinc-200">
            <Image
              src="/airbnb.png"
              width={300}
              height={300}
              alt="booking.com"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-100 px-5 py-10 hover:bg-zinc-200">
            <Image
              src="/agoda.png"
              width={300}
              height={300}
              alt="booking.com"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex w-full items-center justify-center rounded-3xl bg-zinc-100 px-5 py-10 hover:bg-zinc-200">
            <Image
              src="/make-my-trip.png"
              width={300}
              height={300}
              alt="booking.com"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-100 p-10 hover:bg-zinc-200">
            <h3 className="text-2xl text-gray-700">More...</h3>
          </div>
        </div>
        <h3 className="mt-5 max-w-xl font-dm-serif-display text-4xl leading-normal">
          Hassle free check-in and check-out, room & rate plans management, meal
          plans, and more.
        </h3>
        <p className="font-giest-mono text-2xl leading-loose text-zinc-800">
          Manage all aspects of your property with Rofabs. From bookings to
          guest services, we have you covered. Add and manage room types, room
          rates, meal plans, and more. Set up your property in minutes and start
          managing your property with ease. With Rofabs, you can manage your
          property from anywhere, anytime.
        </p>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
