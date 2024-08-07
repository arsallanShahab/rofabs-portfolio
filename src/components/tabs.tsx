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
    "hotels" | "guest-house" | "vacation-rentals" | "lodges" | "resorts"
  >("hotels");
  return (
    <AnimatePresence>
      <FlexContainer variant="row-center">
        <Button
          variant={activeTab === "hotels" ? "default" : "ghost"}
          className={cn(
            "h-auto rounded-3xl font-medium shadow-none transition-all duration-300 ease-in-out",
            activeTab === "hotels"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("hotels")}
        >
          Hotels
        </Button>
        <Button
          variant={activeTab === "guest-house" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "guest-house"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("guest-house")}
        >
          Guest House
        </Button>
        <Button
          variant={activeTab === "vacation-rentals" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "vacation-rentals"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("vacation-rentals")}
        >
          Vacation Rentals
        </Button>
        <Button
          variant={activeTab === "lodges" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "lodges"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("lodges")}
        >
          Lodges
        </Button>
        <Button
          variant={activeTab === "resorts" ? "default" : "ghost"}
          className={cn(
            "rounded-3xl shadow-none transition-all duration-300 ease-in-out",
            activeTab === "resorts"
              ? "bg-purple-600 px-6 text-white hover:bg-purple-500"
              : "text-black",
          )}
          onClick={() => setActiveTab("resorts")}
        >
          Resorts
        </Button>
      </FlexContainer>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {activeTab === "hotels" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{}}
            variant="column-start"
            gap="3xl"
          >
            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative z-10 rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Property Management
                </h3>
                <p className="text-sm text-zinc-600">
                  Rofabs Property Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Material Management
                </h3>
                <p className="text-sm text-zinc-600">
                  Rofabs Guest House Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>
          </FlexContainer>
        )}
        {activeTab === "guest-house" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative z-10 rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  {/* add a title for guest house */}
                  Guest House Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Property Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Guest House Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Guest House Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>
          </FlexContainer>
        )}
        {activeTab === "vacation-rentals" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative z-10 rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Vacation Rentals Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Property Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Vacation Rentals Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Guest House Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>
          </FlexContainer>
        )}
        {activeTab === "lodges" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative z-10 rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Lodges Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Property Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Lodges Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Guest House Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>
          </FlexContainer>
        )}
        {activeTab === "resorts" && (
          <FlexContainer
            key={activeTab}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            variant="column-start"
            gap="3xl"
          >
            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative z-10 rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Resort Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Property Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>

            <div className="relative">
              <div className="absolute -top-3 left-3 z-20 inline-block rounded-xl bg-purple-600 p-3">
                <Building className="h-5 w-5 text-white" />
              </div>
              <FlexContainer
                variant="column-start"
                className="relative rounded-2xl bg-zinc-100 p-7"
                gap="sm"
              >
                <h3 className="mt-3 text-xl font-medium text-black">
                  Resort Management
                </h3>
                <p className="text-sm text-zinc-600">
                  ROfabs Guest House Management Software is a comprehensive
                  software suite consisting of integrated modules for various
                  aspects of hotel management.
                </p>
              </FlexContainer>
            </div>
          </FlexContainer>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Tabs;
