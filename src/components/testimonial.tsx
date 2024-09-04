"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import FlexContainer from "./flex-container";

type Props = {};

const Testimonial = (props: Props) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <FlexContainer variant="column-center">
      <div
        onClick={() => {
          if (activeIndex === 0) {
            setActiveIndex(2);
          } else {
            setActiveIndex(activeIndex - 1);
          }
        }}
        className="absolute left-5 top-1/3 cursor-pointer rounded-3xl bg-zinc-900 p-5 transition-all duration-200 ease-in-out hover:bg-zinc-800 active:scale-90 md:left-10 md:top-1/2"
      >
        <ArrowLeft className="h-4 w-4 text-white" />
      </div>
      <div
        onClick={() => {
          if (activeIndex === 2) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
        }}
        className="absolute right-5 top-1/3 cursor-pointer rounded-3xl bg-zinc-900 p-5 transition-all duration-200 ease-in-out hover:bg-zinc-800 active:scale-90 md:right-10 md:top-1/2"
      >
        <ArrowRight className="h-4 w-4 text-white" />
      </div>
      {activeIndex === 0 && (
        <FlexContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          variant="column-center"
          className="p-0 md:p-10"
          gap="xl"
        >
          <Image
            src={"/testimonal-one.png"}
            width={700}
            height={700}
            className="h-auto w-28 object-contain"
            alt="testimonial"
          />
          <FlexContainer variant="column-center" gap="none">
            <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
              Ichigo Kurosaki
            </h3>
            <p className="max-w-2xl text-center text-lg text-zinc-600">
              Sydney, Australia
            </p>
          </FlexContainer>
          <p className="relative max-w-4xl text-center font-rubik text-base font-medium leading-normal text-zinc-800 md:text-2xl">
            &quot;It’s so easy to use! And it pulls all the information into one
            place and I can access it from anywhere. Brilliant really. Very
            helpful support staff too. We felt the product on offer was better
            than the others. It was clearer to read and easier to use.&quot;
            <Quote className="absolute -top-16 left-0 h-10 w-10 rotate-180 text-purple-200 md:-left-20 md:h-16 md:w-16" />
            <Quote className="absolute -bottom-5 right-0 h-10 w-10 text-purple-200 md:-right-20 md:h-16 md:w-16" />
          </p>
        </FlexContainer>
      )}
      {activeIndex === 1 && (
        <FlexContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, damping: 14 }}
          variant="column-center"
          className="md:p-10"
          gap="xl"
        >
          <Image
            src={"/testimonal-two.png"}
            width={700}
            height={700}
            className="h-auto w-28 object-contain"
            alt="testimonial"
          />
          <FlexContainer variant="column-center" gap="none">
            <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
              Rukia Kuchiki
            </h3>
            <p className="max-w-2xl text-center text-lg text-zinc-600">
              Tokyo, Japan
            </p>
          </FlexContainer>
          <p className="relative max-w-4xl text-center font-rubik text-base font-semibold text-zinc-800 md:text-2xl">
            &quot;It’s so easy to use! And it pulls all the information into one
            place and I can access it from anywhere. Brilliant really. Very
            helpful support staff too. We felt the product on offer was better
            than the others. It was clearer to read and easier to use.&quot;
            <Quote className="absolute -top-16 left-0 h-10 w-10 rotate-180 text-purple-200 md:-left-20 md:h-16 md:w-16" />
            <Quote className="absolute -bottom-5 right-0 h-10 w-10 text-purple-200 md:-right-20 md:h-16 md:w-16" />
          </p>
        </FlexContainer>
      )}
      {activeIndex === 2 && (
        <FlexContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, damping: 14 }}
          variant="column-center"
          className="md:p-10"
          gap="xl"
        >
          <Image
            src={"/testimonal-three.png"}
            width={700}
            height={700}
            className="h-auto w-28 object-contain"
            alt="testimonial"
          />
          <FlexContainer variant="column-center" gap="none">
            <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
              Uryu Ishida
            </h3>
            <p className="max-w-2xl text-center text-lg text-zinc-600">
              Berlin, Germany
            </p>
          </FlexContainer>
          <p className="relative max-w-4xl text-center font-rubik text-base font-semibold text-zinc-800 md:text-2xl">
            &quot;It’s so easy to use! And it pulls all the information into one
            place and I can access it from anywhere. Brilliant really. Very
            helpful support staff too. We felt the product on offer was better
            than the others. It was clearer to read and easier to use.&quot;
            <Quote className="absolute -top-16 left-0 h-10 w-10 rotate-180 text-purple-200 md:-left-20 md:h-16 md:w-16" />
            <Quote className="absolute -bottom-5 right-0 h-10 w-10 text-purple-200 md:-right-20 md:h-16 md:w-16" />
          </p>
        </FlexContainer>
      )}
    </FlexContainer>
  );
};

export default Testimonial;
