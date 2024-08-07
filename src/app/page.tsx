import FlexContainer from "@/components/flex-container";
import Tabs from "@/components/tabs";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Fingerprint,
  QrCode,
  Quote,
  Scan,
  ScanBarcode,
  ShieldCheck,
  Sparkles,
  Star,
  StarHalf,
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
        className="gap-14 bg-purple-50 px-10 pb-40 pt-20"
      >
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center text-5xl font-medium text-black">
            Why Choose Us?
          </h3>
        </FlexContainer>
        <div className="grid grid-cols-3 gap-10">
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
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              Secure Payments
            </h5>
            <p className="text-sm text-zinc-600">
              Our support team is all set to answer any of your queries with the
              software. Our committed and dedicated support team assists you get
              the most out of the software. So, you are never alone.
            </p>
          </FlexContainer>
        </div>
      </FlexContainer>
      <FlexContainer className="-mt-28 p-10">
        <FlexContainer
          variant="column-start"
          className="pc-10 w-full gap-10 rounded-3xl border border-zinc-200 bg-white py-16 shadow-2xl shadow-zinc-200"
        >
          <FlexContainer variant="row-center">
            <h3 className="max-w-xl text-center font-dm-serif-display text-3xl font-medium text-black">
              Trusted By 100+ Property Managers
            </h3>
          </FlexContainer>
          <div className="grid grid-cols-3 gap-5">
            <FlexContainer variant="column-center" className="p-5" gap="md">
              <Image
                src={"/trustpilot.png"}
                width={339}
                height={140}
                className="h-auto w-full max-w-[200px] object-contain"
                alt="trustpilot"
              />
              <FlexContainer variant="row-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index > 3) {
                    return (
                      <div key={index} className="relative">
                        <StarHalf className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <div className="absolute left-3 top-0 h-6 w-1.5 bg-white"></div>
                      </div>
                    );
                  }
                  return (
                    <Star
                      key={index}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  );
                })}
                <span className="text-lg text-zinc-600">4.5 / 5</span>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer variant="column-center" className="p-5">
              <Image
                src={"/g2crowd.png"}
                width={338}
                height={95}
                className="h-auto w-full max-w-[200px] object-contain"
                alt="g2crowd"
              />
              <FlexContainer variant="row-center" className="mt-2.5">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index > 3) {
                    return (
                      <div key={index} className="relative">
                        <StarHalf className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <div className="absolute left-3 top-0 h-6 w-1.5 bg-white"></div>
                      </div>
                    );
                  }
                  return (
                    <Star
                      key={index}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  );
                })}
                <span className="text-lg text-zinc-600">4.5 / 5</span>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer variant="column-center" className="p-5">
              {" "}
              <Image
                src={"/captera.png"}
                width={338}
                height={134}
                className="h-auto w-full max-w-[200px] object-contain"
                alt="captera"
              />{" "}
              <FlexContainer variant="row-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index > 3) {
                    return (
                      <div key={index} className="relative">
                        <StarHalf className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <div className="absolute left-3 top-0 h-6 w-1.5 bg-white"></div>
                      </div>
                    );
                  }
                  return (
                    <Star
                      key={index}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  );
                })}
                <span className="text-lg text-zinc-600">4.5 / 5</span>
              </FlexContainer>
            </FlexContainer>
          </div>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer variant="column-start" className="relative px-10 py-20">
        <FlexContainer variant="row-center">
          <h3 className="max-w-xl text-center text-5xl font-medium text-black">
            What Our Clients Says
          </h3>
        </FlexContainer>
        <Testimonial />
      </FlexContainer>
      <FlexContainer variant="column-start" className="bg-zinc-100 px-10 py-20">
        <div className="grid grid-cols-4 gap-5">
          <FlexContainer variant="column-start">
            <h4 className="font-dm-serif-display text-2xl font-medium text-black">
              Rofabs
            </h4>
            <p className="text-sm text-zinc-600">
              <span className="font-semibold text-black">Address:</span> Plot #
              682, 5th Floor, Babukhan Rasheed Plaza, Rd Number 36, Gachibouli,
              Hyderabad, Telangana 500033
            </p>
          </FlexContainer>
          <FlexContainer variant="column-start" className="md:pl-10">
            <h5 className="text-sm font-semibold text-black">
              Product Features
            </h5>
            <FlexContainer variant="column-start" gap="sm">
              {[
                { label: "Front Desk", href: "/" },
                {
                  label: "Hotel Booking Engine",
                  href: "/",
                },
                {
                  label: "Channel manager",
                  href: "/",
                },
                {
                  label: "Hotel website builder",
                  href: "/",
                },
                {
                  label: "Hotel Payment Processing",
                  href: "/",
                },
                {
                  label: "Guest Engagement",
                  href: "/",
                },
                {
                  label: "Mobile app",
                  href: "/",
                },
                {
                  label: "Insights",
                  href: "/",
                },
                {
                  label: "App Store",
                  href: "/",
                },
                {
                  label: "MetaSearch",
                  href: "/",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-zinc-600"
                >
                  {item.label}
                </Link>
              ))}
            </FlexContainer>
          </FlexContainer>
          <FlexContainer variant="column-start">
            <h5 className="text-sm font-semibold text-black">Business Type</h5>
            <FlexContainer variant="column-start" gap="sm">
              {[
                { label: "Hotel management software", href: "/" },
                {
                  label: "Motel management software",
                  href: "/",
                },
                {
                  label: "Bed & Breakfast software",
                  href: "/",
                },
                {
                  label: "Guest house software",
                  href: "/",
                },
                {
                  label: "Hotel reservation software",
                  href: "/",
                },
                {
                  label: "Property management system",
                  href: "/",
                },
                {
                  label: "Best Hotel PMS",
                  href: "/",
                },
                {
                  label: "Lodge management software",
                  href: "/",
                },
                {
                  label: "Apartment management software",
                  href: "/",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-zinc-600"
                >
                  {item.label}
                </Link>
              ))}
            </FlexContainer>
          </FlexContainer>
          <FlexContainer variant="column-start">
            <h5 className="text-sm font-semibold text-black">Company</h5>
            <FlexContainer variant="column-start" gap="sm">
              {[
                { label: "About Us", href: "/" },
                {
                  label: "Careers",
                  href: "/",
                },
                {
                  label: "Contact Us",
                  href: "/",
                },
                {
                  label: "Blog",
                  href: "/",
                },

                {
                  label: "Terms & Conditions",
                  href: "/",
                },
                {
                  label: "Privacy Policy",
                  href: "/",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-zinc-600"
                >
                  {item.label}
                </Link>
              ))}
            </FlexContainer>
          </FlexContainer>
        </div>
      </FlexContainer>
      <FlexContainer
        variant="row-between"
        className="border-t border-t-zinc-300 bg-zinc-100 p-10"
      >
        <FlexContainer variant="row-start" gap="sm">
          <p className="text-sm text-zinc-600">
            © 2024 Rofabs. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-all duration-300 ease-in-out hover:text-zinc-900"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-600 transition-all duration-300 ease-in-out hover:text-zinc-900"
          >
            Privacy Policy
          </Link>
        </FlexContainer>
        <p className="text-sm text-zinc-600">Made with ❤️ in Hyderabad</p>
      </FlexContainer>
    </FlexContainer>
  );
}
