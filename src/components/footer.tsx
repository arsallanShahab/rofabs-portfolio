import Link from "next/link";
import React, { Fragment } from "react";
import FlexContainer from "./flex-container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Fragment>
      <FlexContainer
        variant="column-start"
        className="relative bg-zinc-100 px-10 py-20"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
        wrap="wrap"
        gap="xl"
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
        <p className="text-sm text-zinc-600">
          Made with ❤️ by Vijetha&apos;s Software
        </p>
      </FlexContainer>
    </Fragment>
  );
};

export default Footer;
