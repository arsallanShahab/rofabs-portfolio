import React, { Fragment, useState } from "react";
import FlexContainer from "./flex-container";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const toggleAnnual = () => setIsAnnual(!isAnnual);

  return (
    <Fragment>
      <FlexContainer variant="column-center" className="">
        <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-screen-xl lg:grid-cols-3">
          <div className="h-full">
            <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
              <div className="mb-5">
                <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
                  Essential
                </div>
                <div className="mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                    20$
                  </span>
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-slate-200"
                    x-text="isAnnual ? '29' : '35'"
                  ></span>
                  <span className="font-medium text-slate-500">/mo</span>
                </div>
                <div className="mb-5 text-sm text-slate-500">
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
                Includes:
              </div>
              <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
              </ul>
            </div>
          </div>
          {/* end */}
          <div className="h-full dark">
            <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
              <div className="absolute right-0 top-0 -mt-4 mr-6">
                <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
                  Most Popular
                </div>
              </div>
              <div className="mb-5">
                <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
                  Perform
                </div>
                <div className="mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                    35$
                  </span>
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-slate-200"
                    x-text="isAnnual ? '49' : '55'"
                  ></span>
                  <span className="font-medium text-slate-500">/mo</span>
                </div>
                <div className="mb-5 text-sm text-slate-500">
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
                Includes:
              </div>
              <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Predefined chunks as necessary</span>
                </li>
              </ul>
            </div>
          </div>
          {/* end pricing table 2 */}
          <div className="h-full">
            <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
              <div className="mb-5">
                <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
                  Enterprise
                </div>
                <div className="mb-2 inline-flex items-baseline">
                  <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                    25$
                  </span>
                  <span
                    className="text-4xl font-bold text-slate-900 dark:text-slate-200"
                    x-text="isAnnual ? '79' : '85'"
                  ></span>
                  <span className="font-medium text-slate-500">/mo</span>
                </div>
                <div className="mb-5 text-sm text-slate-500">
                  There are many variations available, but the majority have
                  suffered.
                </div>
                <a
                  className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
                  href="#0"
                >
                  Purchase Plan
                </a>
              </div>
              <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
                Includes:
              </div>
              <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited placeholder texts</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Excepteur sint occaecat cupidatat</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Officia deserunt mollit anim</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Predefined chunks as necessary</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Free from repetition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FlexContainer>
    </Fragment>
  );
};

export default PricingTable;
