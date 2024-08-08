"use client";

import Link from "next/link";
import React, { useEffect } from "react";

import { Dropdown, DropdownContent, DropdownItem } from "./dropdown";
import FlexContainer from "./flex-container";

type Props = {};

const Navbar = (props: Props) => {
  const navRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 20 || window.pageYOffset > 20) {
          navRef.current.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
        } else {
          navRef.current.style.backgroundColor = "transparent";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FlexContainer
      ref={navRef}
      variant="row-between"
      alignItems="center"
      className="fixed top-0 z-[800] h-20 w-full bg-transparent px-10 backdrop-blur-md transition-all duration-200 ease-in-out"
    >
      <FlexContainer variant="row-start" gap="2xl" alignItems="center">
        <Link href="/" className="font-silkscreen">
          Rofabs
        </Link>
        <FlexContainer
          variant="row-start"
          alignItems="center"
          gap="sm"
          className="hidden md:flex"
        >
          <Dropdown title="Business Type">
            <DropdownContent size="lg">
              <DropdownItem
                href="/"
                description="A complete solution for your hotel management needs"
              >
                Hotel Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Perfect for managing your hostel operations"
              >
                Motel Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your bed and breakfast with ease"
              >
                Bed & Breakfast Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your guest house operations with ease"
              >
                Guest House Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Hotel Reservation Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Property Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Hotel PMS
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Lodge Management Software
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
                className="col-span-2 p-4"
              >
                Apartment Management Software
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
          <Link
            href="/"
            className="px-2 py-4 text-sm font-medium text-zinc-800 transition-all duration-200 ease-in-out hover:text-black"
          >
            Pricing
          </Link>
          <Dropdown title="Solutions">
            <DropdownContent>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Material Management
              </DropdownItem>
              <DropdownItem
                href="/"
                description="Manage your hotel items and services here"
              >
                Material Management
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        variant="row-start"
        gap="xs"
        alignItems="center"
        className="rounded-3xl border px-1.5 py-1"
      >
        <Link
          href="/"
          className="px-2 py-2 text-sm font-medium text-blue-600 transition-all duration-200 ease-in-out hover:text-black"
        >
          Sign In
        </Link>
        <Link
          href="/"
          className="rounded-3xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-blue-600/80"
        >
          Book a Demo
        </Link>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Navbar;
