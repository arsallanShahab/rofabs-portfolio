"use client";

import FlexContainer from "@/components/flex-container";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Form, Formik } from "formik";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Wrapper>
      <FlexContainer variant="column-start" gap="2xl">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <FlexContainer variant="column-start" gap="xl" className="py-5">
            <h3 className="max-w-3xl font-poppins text-4xl font-black tracking-tight text-[#201232] md:text-5xl lg:text-7xl">
              {/* book demo intro text for a property management company */}
              Discover the power of our property management software today
            </h3>
            <p className="max-w-xl text-lg text-zinc-700">
              {/* book demo intro text for a property management company */}
              Get a personalized demo of our property management software and
              see how it can help you manage your property efficiently. Fill out
              the form to get started.
            </p>
          </FlexContainer>
          <FlexContainer variant="row-center" className="py-10">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                company: "",
                phoneNumber: "",
                workEmail: "",
                propertyType: "",
                remarks: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit }) => {
                return (
                  <Form className="w-full max-w-xl rounded-2xl border bg-white p-4 shadow-2xl">
                    <div className="grid gap-3 md:grid-cols-2">
                      {" "}
                      <Input
                        name="firstName"
                        label="First Name"
                        labelPlacement="outside"
                        placeholder="Enter your first name"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                          mainWrapper: "w-full",
                        }}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        name="lastName"
                        label="Last Name"
                        labelPlacement="outside"
                        placeholder="Enter your last name"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                          mainWrapper: "w-full",
                        }}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        name="company"
                        label="Company"
                        labelPlacement="outside"
                        placeholder="Enter your company name"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                        }}
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        name="phoneNumber"
                        label="Phone Number"
                        labelPlacement="outside"
                        placeholder="Enter your phone number"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                        }}
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Input
                        name="workEmail"
                        label="Work Email"
                        labelPlacement="outside"
                        placeholder="Enter your work email"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                        }}
                        value={values.workEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Select
                        name="propertyType"
                        label="Property Type"
                        labelPlacement="outside"
                        placeholder="Select your property type"
                        radius="sm"
                        classNames={{
                          trigger: "border border-zinc-300",
                        }}
                        value={values.propertyType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        items={[
                          { value: "hotel", label: "Hotel" },
                          { value: "lodge", label: "Lodge" },
                          { value: "apartment", label: "Apartment" },
                        ]}
                      >
                        {(item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        )}
                      </Select>
                      <Textarea
                        name="remarks"
                        label="Remarks"
                        labelPlacement="outside"
                        placeholder="Enter your remarks"
                        radius="sm"
                        classNames={{
                          inputWrapper: "border border-zinc-300",
                        }}
                        className="md:col-span-2"
                        value={values.remarks}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="my-2 md:col-span-2">
                        <p className="text-xs text-zinc-500">
                          By submitting this form, you agree to our{" "}
                          <a href="/" className="text-blue-500 hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="/" className="text-blue-500 hover:underline">
                            Terms of Service
                          </a>
                        </p>
                      </div>
                      <Button
                        type="submit"
                        className="btn-primary h-auto rounded-xl bg-blue-500 py-3 hover:bg-blue-600 md:col-span-2"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </FlexContainer>
        </div>
      </FlexContainer>
    </Wrapper>
  );
};

export default Page;
