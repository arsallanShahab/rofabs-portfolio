"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown, DropdownContent, DropdownItem } from "./dropdown";
import FlexContainer from "./flex-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type Props = {};

const Navbar = (props: Props) => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

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
      className="fixed top-0 z-[800] h-20 w-full bg-transparent px-5 backdrop-blur-md transition-all duration-200 ease-in-out md:px-10"
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
                href="/hotel"
                description="Manage all aspects of hotel operations, from bookings to guest services."
              >
                Hotel
              </DropdownItem>
              <DropdownItem
                href="/hostel-pg"
                description="Streamline management of hostels and PGs, focusing on occupancy and tenant satisfaction."
              >
                Hostel & PG
              </DropdownItem>
              <DropdownItem
                href="/service-apartments"
                description="Optimize the management of serviced apartments, ensuring guest comfort and convenience."
              >
                Service Apartments
              </DropdownItem>
              <DropdownItem
                href="/resorts"
                description="Enhance resort operations, providing a seamless guest experience from check-in to check-out."
              >
                Resorts
              </DropdownItem>
              <DropdownItem
                href="/restaurants-and-cafes"
                description="Manage daily operations, menu, and customer service for restaurants and cafes."
              >
                Restaurants & Cafes
              </DropdownItem>
              <DropdownItem
                href="/corporate"
                description="Tailor property management solutions to meet the needs of corporate environments."
              >
                Corporate Modules
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
          <Link
            href="/#pricing"
            className="px-2 py-4 text-sm font-medium text-zinc-800 transition-all duration-200 ease-in-out hover:text-black"
          >
            Pricing
          </Link>
          <Dropdown title="Solutions">
            <DropdownContent size="lg">
              <DropdownItem
                href="/property-management"
                description={
                  "Efficiently manage all aspects of property operations, from bookings to maintenance."
                }
              >
                Property Management
              </DropdownItem>
              <DropdownItem
                href="/material-management"
                description={
                  "Streamline inventory and supply chain processes to ensure seamless operations."
                }
              >
                Material Management
              </DropdownItem>
              <DropdownItem
                href="/employee-management"
                description={
                  "Oversee staff scheduling, performance, and payroll with ease."
                }
              >
                Employee Management
              </DropdownItem>
              <DropdownItem
                href="/banquet-management"
                description={
                  "Coordinate and manage events, from planning to execution, ensuring client satisfaction."
                }
              >
                Banquet Management
              </DropdownItem>
              <DropdownItem
                href="/payroll-management"
                description={
                  "Automate payroll processing, ensuring timely and accurate employee compensation."
                }
              >
                Payroll Management
              </DropdownItem>
              <DropdownItem
                href="/restaurant-and-bar"
                description={
                  "Optimize restaurant and bar operations, including menu management and billing."
                }
              >
                Restraunt & Bar
              </DropdownItem>
              <DropdownItem
                href="/house-keeping"
                description={
                  "Maintain cleanliness and organization across your property with efficient housekeeping tools."
                }
              >
                Housekeeping
              </DropdownItem>
              <DropdownItem
                href="/laundry"
                description="Ensure timely and efficient laundry services for guest satisfaction."
              >
                Laundry
              </DropdownItem>
              <DropdownItem
                href="/kitchen"
                description="kitchen operations, inventory, and menu planning for smooth service."
              >
                Kitchen
              </DropdownItem>
              <DropdownItem
                href="/marketing"
                description="Boost visibility and attract more guests with tailored marketing strategies."
              >
                Marketing
              </DropdownItem>
            </DropdownContent>
          </Dropdown>
        </FlexContainer>
      </FlexContainer>

      <FlexContainer alignItems="center">
        <FlexContainer
          variant="row-start"
          gap="xs"
          alignItems="center"
          className="hidden rounded-3xl border px-1.5 py-1 md:flex"
        >
          <Link
            href="/"
            className="px-2 py-2 text-sm font-medium text-black transition-all duration-200 ease-in-out hover:text-black"
          >
            Sign In
          </Link>
          <Link
            href="/book-demo"
            className="rounded-3xl bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-blue-600/80"
          >
            Book Demo
          </Link>
        </FlexContainer>
        <Sheet open={show} onOpenChange={setShow}>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"secondary"}>
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="z-[900] w-[90vw]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <FlexContainer variant="column-start" gap="none">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Business Type</AccordionTrigger>
                  <AccordionContent>
                    <FlexContainer variant="column-start" gap="lg">
                      <Link href="/hotel">Hotel</Link>
                      <Link href="/hostel-pg">Hostel & PG</Link>
                      <Link href="/service-apartments">Service Apartments</Link>
                      <Link href="/resorts">Resorts</Link>
                      <Link href="/restaurants-and-cafes">
                        Restaurants & Cafes
                      </Link>
                      <Link href="/corporate">Corporate Modules</Link>
                    </FlexContainer>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <FlexContainer variant="column-start" gap="lg">
                      <Link href="/property-management">
                        Property Management
                      </Link>
                      <Link href="/material-management">
                        Material Management
                      </Link>
                      <Link href="/employee-management">
                        Employee Management
                      </Link>
                      <Link href="/banquet-management">Banquet Management</Link>
                      <Link href="/payroll-management">Payroll Management</Link>
                      <Link href="/restaurant-and-bar">Restraunt & Bar</Link>
                      <Link href="/house-keeping">Housekeeping</Link>
                      <Link href="/laundry">Laundry</Link>
                      <Link href="/kitchen">Kitchen</Link>
                      <Link href="/marketing">Marketing</Link>
                    </FlexContainer>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/#pricing" className="py-4 text-sm font-medium">
                Pricing
              </Link>
              <Link
                href="/book-demo"
                className="mt-3 rounded-xl bg-black px-4 py-4 text-center text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-blue-600/80"
              >
                Book Demo
              </Link>
              <Link
                href="/"
                className="px-2 py-4 text-center text-sm font-medium text-black transition-all duration-200 ease-in-out hover:text-black"
              >
                Sign In
              </Link>
            </FlexContainer>
          </SheetContent>
        </Sheet>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Navbar;
