import FlexContainer from "@/components/flex-container";
import Tabs from "@/components/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building,
  Fingerprint,
  QrCode,
  Scan,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <FlexContainer variant="column-start" gap="none">
      <main className="relative grid min-h-screen grid-cols-3 overflow-hidden px-10">
        <FlexContainer
          variant="column-start"
          justifyContent="center"
          className="z-10 col-span-2 py-10"
          gap="lg"
        >
          <h1 className="font-dm-serif-display text-8xl font-bold text-purple-950">
            All In One Property Management Software
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-medium text-zinc-600">
            Streamline all hotel operations with our fully integrated software,
            handling reservations, room operations, housekeeping, guest
            engagement, and banqueting. Boost efficiency and revenue with this
            essential tool for modern hotel management.
          </p>
          <FlexContainer>
            <Link
              href="/"
              className="mt-4 flex items-center justify-center rounded-3xl px-5 py-3 font-medium text-black transition-all duration-200 ease-in-out hover:bg-zinc-200"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="mt-4 flex items-center justify-center rounded-3xl bg-purple-600 px-5 py-3 font-medium text-white transition-all duration-200 ease-in-out hover:bg-purple-600/90"
            >
              Book a Demo
            </Link>
          </FlexContainer>
        </FlexContainer>
        <Image
          src={"/hero-main.png"}
          width={700}
          height={700}
          alt="hero"
          className="absolute right-0 top-1/2 z-50 h-full w-full max-w-xl -translate-y-1/2 transform object-contain"
        />
        <Image
          src={"/bg-blur.png"}
          width={700}
          height={700}
          alt="bg-blur"
          className="absolute right-0 top-1/2 z-0 h-auto w-full -translate-y-1/2 transform"
        />
      </main>
      <FlexContainer variant="column-start" className="px-10 py-20">
        <h3 className="text-center font-work-sans text-4xl text-black">
          Trusted By Over{" "}
          <span className="block text-5xl font-semibold">
            100+ Property Managers
          </span>
        </h3>
        <Image
          src={"/brand-grid.png"}
          width={2400}
          height={291}
          alt="trusted-by"
          className="mt-10 h-auto w-full select-none object-contain"
        />
        <Image
          src={"/brand-center.png"}
          width={2140}
          height={527}
          alt="trusted-by"
          className="mt-10 h-auto w-full select-none object-contain px-10"
        />
      </FlexContainer>
      <FlexContainer variant="column-start" className="px-10 py-20">
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center font-dm-serif-display text-5xl font-medium text-black">
            Essential Features to Seek in Your Property Management Software
          </h3>
        </FlexContainer>
        <FlexContainer variant="row-center">
          <p className="mt-4 max-w-4xl text-center text-xl text-zinc-500">
            A management software a.k.a - a software that streamlines the A-Z of
            hotel operations. It is a set of fully integrated modules that
            handle reservation, room operations, housekeeping, guest engagement,
            banqueting and so.
          </p>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer className="px-10 py-10">
        <FlexContainer
          variant="column-start"
          className="radial_purple_light w-full gap-16 rounded-2xl border px-10 py-20"
        >
          <FlexContainer variant="row-center">
            <h3 className="max-w-2xl text-center text-3xl font-medium text-black">
              Back Office Admin Features
            </h3>
          </FlexContainer>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex items-center justify-end">
              <Image
                src={"/booking.png"}
                width={918}
                height={632}
                className="h-auto w-full max-w-md object-contain"
                alt="booking"
              />
            </div>
            <FlexContainer variant="column-start" className="gap-14">
              <FlexContainer variant="row-start" gap="lg" alignItems="center">
                <Zap className="h-6 w-5 text-purple-600" />
                <h5 className="text-base font-medium text-zinc-600">
                  Property Listing
                </h5>
              </FlexContainer>
              <FlexContainer variant="row-start" gap="lg" alignItems="center">
                <ScanBarcode className="h-6 w-5 text-purple-600" />
                <h5 className="text-base font-medium text-zinc-600">
                  Property customisation
                </h5>
              </FlexContainer>
              <FlexContainer variant="row-start" gap="lg" alignItems="center">
                <Wallet className="h-6 w-5 text-purple-600" />
                <h5 className="text-base font-medium text-zinc-600">
                  Receive payments by card/cash
                </h5>
              </FlexContainer>
              <FlexContainer variant="row-start" gap="lg" alignItems="center">
                <Scan className="h-6 w-5 text-purple-600" />
                <h5 className="text-base font-medium text-zinc-600">
                  QR based bill receipt
                </h5>
              </FlexContainer>
            </FlexContainer>
          </div>
        </FlexContainer>
      </FlexContainer>
      <div className="grid grid-cols-2 gap-5 p-10">
        <FlexContainer
          variant="column-center"
          className="radial_purple_light_2 rounded-xl border px-5 py-10 transition-all duration-200 ease-in-out hover:bg-purple-50"
          gap="sm"
        >
          <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
            House Keeping Module
          </h3>

          <p className="mt-4 max-w-md text-center text-base text-zinc-600">
            The Hotel Software Housekeeping module tracks Dirty/Clean rooms,
            Room Blocking, Lost & Found, Guest requests, Complaints & Clearance,
            Laundry Billing
          </p>
          <Image
            src={"/building.png"}
            width={700}
            height={700}
            alt="building"
            className="mt-10 h-auto w-full max-w-sm select-none object-contain"
          />
        </FlexContainer>
        <FlexContainer
          variant="column-center"
          className="radial_purple_light_2 rounded-xl border px-5 py-10 transition-all duration-200 ease-in-out hover:bg-purple-50"
          gap="sm"
        >
          {" "}
          <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
            Property Procurement Software
          </h3>
          <p className="mt-4 max-w-md text-center text-base text-zinc-600">
            Aatithya Procurement & Purchase module manages Indents from
            departments, Kitchen requisitions, Purchase order, Vendor Analysis,
            Material Receipts & Purchases.
          </p>
          <Image
            src={"/user-with-mobile.png"}
            width={700}
            height={700}
            alt="user-with-mobile"
            className="mt-10 h-auto w-full max-w-sm select-none object-contain"
          />
        </FlexContainer>
      </div>
      <FlexContainer variant="column-start" className="gap-11 px-10 py-20">
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center font-dm-serif-display text-5xl font-medium text-black">
            Managing and Serving different type of properties{" "}
          </h3>
        </FlexContainer>
        <Tabs />
      </FlexContainer>
      <FlexContainer
        variant="column-start"
        className="gap-11 bg-zinc-100 px-10 py-20"
      >
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center text-5xl font-medium text-black">
            Why Choose Us?
          </h3>
        </FlexContainer>
        <div className="grid grid-cols-3 gap-5">
          <FlexContainer
            variant="column-start"
            className="rounded-2xl bg-white p-5"
          >
            <FlexContainer variant="row-start">
              <div className="rounded-2xl bg-purple-100 p-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
            </FlexContainer>
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              Best Customer Support
            </h5>
            <p className="text-sm text-zinc-600">
              Our support team is all set to answer any of your queries with the
              software. Our committed and dedicated support team assists you get
              the most out of the software. So, you are never alone.
            </p>
          </FlexContainer>
          <FlexContainer
            variant="column-start"
            className="rounded-2xl bg-white p-5"
          >
            <FlexContainer variant="row-start">
              <div className="rounded-2xl bg-purple-100 p-3">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
            </FlexContainer>
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              Your Privacy Matters
            </h5>
            <p className="text-sm text-zinc-600">
              Our support team is all set to answer any of your queries with the
              software. Our committed and dedicated support team assists you get
              the most out of the software. So, you are never alone.
            </p>
          </FlexContainer>
          <FlexContainer
            variant="column-start"
            className="rounded-xl bg-white p-5"
          >
            <FlexContainer variant="row-start">
              <div className="rounded-2xl bg-purple-100 p-3">
                <Fingerprint className="h-6 w-6 text-purple-600" />
              </div>
            </FlexContainer>
            <h5 className="text-xl font-medium text-black">Secure Payments</h5>
            <p className="text-sm text-zinc-600">
              Our support team is all set to answer any of your queries with the
              software. Our committed and dedicated support team assists you get
              the most out of the software. So, you are never alone.
            </p>
          </FlexContainer>
        </div>
      </FlexContainer>
    </FlexContainer>
  );
}
