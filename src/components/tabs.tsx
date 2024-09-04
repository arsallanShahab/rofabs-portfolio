"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { Building } from "lucide-react";
import React, { useState } from "react";
import FlexContainer from "./flex-container";
import { Button } from "./ui/button";

type Props = {};

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = useState<
    "checkin-checkout" | "employee" | "inventory" | "kitchen" | "restaurant"
  >("checkin-checkout");
  return (
    <AnimatePresence>
      <FlexContainer variant="row-center" wrap="wrap">
        <Button
          variant={activeTab === "checkin-checkout" ? "default" : "ghost"}
          className={cn(
            "h-auto rounded-3xl font-medium shadow-none transition-all duration-300 ease-in-out",
            activeTab === "checkin-checkout"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("checkin-checkout")}
        >
          Checkin checkout
        </Button>
        <Button
          variant={activeTab === "employee" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "employee"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("employee")}
        >
          Employee management
        </Button>
        <Button
          variant={activeTab === "inventory" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "inventory"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("inventory")}
        >
          Inventory & Vendor management
        </Button>
        <Button
          variant={activeTab === "kitchen" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "kitchen"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("kitchen")}
        >
          Kitchen management:
        </Button>
        <Button
          variant={activeTab === "restaurant" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "restaurant"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("restaurant")}
        >
          Restaurant management
        </Button>
      </FlexContainer>
      <div className="mt-5 grid gap-5 px-0 md:grid-cols-2 md:px-10">
        {activeTab === "checkin-checkout" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{}}
            variant="column-start"
            gap="3xl"
          >
            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Check In and Check Out module:"
              description=" rofabs is integrated with 67 OTA platforms world wide in which some famous OTA's are Bookings.com , Goibibo , Make my trip , Agoda , Airbnb , hostel world .etcUpcoming bookings , currents bookings ,bookings history , property management,room management , Checkin , checkout  , house keeping management "
            />

            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Employee management module:"
              description="This helps the hotel administration to onboard new employees and their database , education , work time , punch in - punch out time records , No. of work hours , leave records , attendance reports , Client calls , leads , follow up reports , weekly , monthly employees performance reports , automated generation of payslips , allowance records , Loan records , travel and leave management , realtime location based punch in for marketing teams , client call records and reviews , project reports ."
            />
          </FlexContainer>
        )}
        {activeTab === "employee" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Employee management module:"
              description="This helps the hotel administration to onboard new employees
                  and their database , education , work time , punch in - punch
                  out time records , No. of work hours , leave records ,
                  attendance reports , Client calls , leads , follow up reports
                  , weekly , monthly employees performance reports , automated
                  generation of payslips , allowance records , Loan records ,
                  travel and leave management , realtime location based punch in
                  for marketing teams , client call records and reviews ,
                  project reports ."
            />
          </FlexContainer>
        )}
        {activeTab === "inventory" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Inventory & Vendor management"
              description=" A record of what equipments,kits and products needed in hotel
                  such as electronic , hygiene will be stored in our database ..
                  what are the price quoted by different vendors to the hotel
                  and detailed analysis will be available ... Hotel
                  administration can compare the prices and choose what exactly
                  they need to procure ."
            />
          </FlexContainer>
        )}
        {activeTab === "kitchen" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Kitchen management:"
              description="Raw material procured , their expiry dates , consumption
                  reports , daily / weekly / Monthly consumption reports ,
                  dedicated AI analyse the products purchase date , expiry date
                  and consumption and give us an accurate suggestion of what
                  quantity of products should be exactly procured for the next
                  month so that there will be no or minimal waste of raw
                  materials.."
            />
          </FlexContainer>
        )}
        {activeTab === "restaurant" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <TabContent
              logo={<Building className="h-5 w-5 text-white" />}
              title="Restaurant management :"
              description="Hotels and resorts can have 1 or more than 1 restaurents Such
                  as poolside restaurant , roof top restaurant , inhouse dining
                  , bar etc... Our software helps the hotel authorities to
                  manage the orders Billings properly . We have a dedicated POS
                  Module Type of sale : whether it is a room sale ( orders from
                  rooms in hotel ), restaurant sale ( orders taken marking the
                  table no ) , online order ( swiggy , Zomato) , Take away"
            />
          </FlexContainer>
        )}
      </div>
    </AnimatePresence>
  );
};

interface TabContentProps {
  logo: React.ReactNode;
  title: string;
  description: string;
}

export const TabContent = ({ logo, title, description }: TabContentProps) => {
  return (
    <div className="relative">
      <FlexContainer
        variant="column-start"
        className="relative rounded-2xl p-3"
        gap="sm"
      >
        {" "}
        <div>
          {" "}
          <div className="z-20 inline-block rounded-xl bg-purple-600 p-3">
            {logo}
          </div>
        </div>
        <h3 className="text-2xl font-medium text-black">{title}</h3>
        <p className="text-base text-zinc-800">{description}</p>
      </FlexContainer>
    </div>
  );
};

export default Tabs;
