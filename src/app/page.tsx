"use client";

import FlexContainer from "@/components/flex-container";
import PricingTable from "@/components/pricing-table";
import Tabs from "@/components/tabs";
import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  ArrowRight,
  ChevronRight,
  Fingerprint,
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
import { MutableRefObject, useEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const gridRef = useRef();
  const introRef = useRef();
  const wrapperRef = useRef();

  useGSAP(
    () => {
      // smooth scroll
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const introText = new SplitType("#intro_text", {
        charClass: "intro-char",
      });

      gsap.fromTo(
        introText.chars,
        {
          y: "100%",
          opacity: 0,
          scale: 0.9,
        },
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.02,
          ease: "power4.out",
        },
      );

      // trusted by
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#trusted_by",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tl.from("#trusted_by", {
        y: 50,
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      tl.from("#trusted_by_image", {
        x: 0,
        scale: 0.85,
        opacity: 0,
        duration: 3,
        ease: "power4.out",
      });

      // intro text animation
    },
    { scope: wrapperRef.current },
  );

  useEffect(() => {
    const grid = gridRef.current as unknown as HTMLDivElement;
    const gridCols = 12;
    const gridRows = 10;

    const createGrid = () => {
      for (let i = 0; i < gridCols * gridRows; i++) {
        const div = document.createElement("div") as HTMLDivElement;
        div.classList.add("w-full", "h-full", "hover-grid-item");
        // div.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.1)`;
        div.style.borderRight = "1px solid rgba(0, 0, 0, 0.065)";
        div.style.borderBottom = "1px solid rgba(0, 0, 0, 0.065)";
        div.style.gridColumn = `${(i % gridCols) + 1} / span 1`;
        div.style.gridRow = `${Math.floor(i / gridCols) + 1} / span 1`;

        grid.appendChild(div);
      }
    };

    //animate grid items randomly withouth hover
    const animateGrid = () => {
      const gridItems = document.querySelectorAll(".hover-grid-item");
      gridItems.forEach((item) => {
        gsap.to(item, {
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    };

    if (grid) {
      createGrid();
      // animateGrid();
    }
  }, [gridRef]);

  return (
    <FlexContainer
      ref={wrapperRef as unknown as MutableRefObject<HTMLDivElement>}
      variant="column-start"
      gap="none"
      className="relative"
    >
      <main className="relative grid min-h-screen grid-cols-2 overflow-hidden px-5 md:px-10 lg:grid-cols-3">
        <FlexContainer
          variant="column-start"
          justifyContent="center"
          className="z-10 col-span-2 py-28 lg:py-20"
          gap="lg"
          ref={introRef as unknown as MutableRefObject<HTMLDivElement>}
        >
          {/* All In One */}
          <span className="font-giest-mono text-xl font-semibold tracking-widest text-blue-600 md:text-3xl">
            ALL IN ONE
          </span>
          <h1
            id="intro_text"
            className="max-w-3xl font-poppins text-5xl font-black tracking-tight text-[#201232] md:text-8xl"
          >
            Property Management Software
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-zinc-600 md:text-xl">
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
              className="mt-4 flex items-center justify-center rounded-3xl bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-200 ease-in-out hover:bg-blue-600/90"
            >
              Book a Demo
            </Link>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer variant="row-center" className="col-span-2">
          <Image
            src={"/hero-main.png"}
            width={700}
            height={700}
            alt="hero"
            className="relative right-0 top-1/2 z-50 h-full w-full max-w-xl -translate-y-1/2 transform object-contain lg:absolute"
          />
        </FlexContainer>
        <Image
          src={"/bg-blur.png"}
          width={700}
          height={700}
          alt="bg-blur"
          className="absolute right-0 top-1/2 z-0 h-auto w-1/2 -translate-y-1/2 transform"
        />
      </main>
      <FlexContainer
        variant="column-start"
        className="relative overflow-hidden px-10 py-20"
      >
        <h3
          id="trusted_by"
          className="text-center font-work-sans text-4xl text-black"
        >
          Trusted By Over{" "}
          <span className="block text-5xl font-semibold">
            100+ Property Managers
          </span>
        </h3>
        <Image
          id="trusted_by_image"
          src={"/brand-grid.png"}
          width={2400}
          height={291}
          alt="trusted-by"
          className="mt-10 h-auto w-full select-none object-contain"
        />
      </FlexContainer>
      <FlexContainer variant="column-start" className="relative px-10 py-20">
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
      <FlexContainer className="relative px-5 py-10 md:px-10">
        <FlexContainer
          variant="column-start"
          className="radial_purple_light w-full gap-16 rounded-2xl border px-10 py-20"
        >
          <FlexContainer variant="row-center">
            <h3 className="max-w-2xl text-center text-3xl font-medium text-black">
              Back Office Admin Features
            </h3>
          </FlexContainer>
          <div className="grid gap-12 md:grid-cols-5">
            <div className="col-span-full flex items-center justify-end md:col-span-2">
              <Image
                src={"/booking.png"}
                width={918}
                height={632}
                className="h-auto w-full max-w-md object-contain"
                alt="booking"
              />
            </div>
            <div className="col-span-full grid grid-cols-2 gap-5 md:col-span-3">
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
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <Scan className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    business developmemt moudles
                  </h5>
                </FlexContainer>
              </FlexContainer>
              <FlexContainer variant="column-start" className="gap-14">
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <Zap className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    OTA Integration
                  </h5>
                </FlexContainer>
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <ScanBarcode className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    Rate Plan Management
                  </h5>
                </FlexContainer>
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <Wallet className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    Room Management
                  </h5>
                </FlexContainer>
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <Scan className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    Swiggy & Zomato Integration
                  </h5>
                </FlexContainer>
                <FlexContainer variant="row-start" gap="lg" alignItems="center">
                  <Scan className="h-6 w-5 text-purple-600" />
                  <h5 className="text-base font-medium text-zinc-600">
                    AI Integration
                  </h5>
                </FlexContainer>
              </FlexContainer>
            </div>
          </div>
        </FlexContainer>
      </FlexContainer>
      <div className="relative grid gap-5 p-10 md:grid-cols-2">
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
            Rofabs Procurement & Purchase module manages Indents from
            departments, Kitchen requisitions, Purchase order, Vendor Analysis,
            Material Receipts & Purchases.
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
          <h3 className="text-center font-dm-serif-display text-3xl font-medium text-black">
            Material Management Module
          </h3>

          <p className="mt-4 max-w-md text-center text-base text-zinc-600">
            The Hotel Software Material Management module manages multi vendors,
            material inventory, purchase orders, utilisation history and
            reports. Waste management module to save unwanted costs.
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
      <FlexContainer
        variant="column-start"
        className="relative gap-12 px-10 py-10"
      >
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center font-dm-serif-display text-5xl font-medium text-black">
            Manage your Hotel Operations with Ease with Rofabs
          </h3>
        </FlexContainer>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Link href={"/material-management"}>
            <FlexContainer
              variant="column-start"
              className="rounded-xl border bg-white p-4 shadow-xl"
            >
              <Image
                src={"https://picsum.photos/id/237/500/500"}
                width={500}
                height={500}
                alt="image"
                className="h-auto max-h-[200px] w-full rounded-xl object-cover"
              />
              <h5 className="font-dm-serif-display text-xl font-medium text-black">
                Material Management Module
              </h5>
              <p className="text-zinc-600">
                The Hotel Software Material Management module manages Stock
                transfers, Stock adjustments, Stock Valuation, Stock Reports,
                Stock Ledger
              </p>
              <FlexContainer variant="row-end">
                <Button variant="ghost" className="rounded-3xl">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Button>
              </FlexContainer>
            </FlexContainer>
          </Link>
          <FlexContainer
            variant="column-start"
            className="rounded-xl border bg-white p-4 shadow-xl"
          >
            <Image
              src={"https://picsum.photos/id/399/500/500"}
              width={500}
              height={500}
              alt="image"
              className="h-auto max-h-[200px] w-full rounded-xl object-cover"
            />
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              KSR (Kitchen Service Request) Module
            </h5>
            <p className="text-zinc-600">
              The Hotel Software KSR module manages Kitchen requisitions, Food
              orders, Food delivery, Kitchen billing & KOT
            </p>
          </FlexContainer>
          <FlexContainer
            variant="column-start"
            className="rounded-xl border bg-white p-4 shadow-xl"
          >
            <Image
              src={"https://picsum.photos/id/390/500/500"}
              width={500}
              height={500}
              alt="image"
              className="h-auto max-h-[200px] w-full rounded-xl object-cover"
            />
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              Employee Management Module
            </h5>
            <p className="text-zinc-600">
              The Hotel Software Employee Management module manages Employee
              details, Employee attendance, Employee salary, Employee reports
            </p>
          </FlexContainer>
          <FlexContainer
            variant="column-start"
            className="rounded-xl border bg-white p-4 shadow-xl"
          >
            <Image
              src={"https://picsum.photos/id/380/500/500"}
              width={500}
              height={500}
              alt="image"
              className="h-auto max-h-[200px] w-full rounded-xl object-cover"
            />
            <h5 className="font-dm-serif-display text-xl font-medium text-black">
              Banquet Management Module
            </h5>
            <p className="text-zinc-600">
              The Hotel Software Banquet Management module manages Banquet
              bookings, Banquet billing, Banquet reports, Banquet occupancy
            </p>
          </FlexContainer>
        </div>
      </FlexContainer>
      <FlexContainer variant="column-start" className="gap-11 px-10 py-20">
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center font-dm-serif-display text-5xl font-medium text-black">
            {/* Managing and Serving different type of properties{" "} */}
            Features to Look for in a Property Management Software
          </h3>
        </FlexContainer>
        <Tabs />
      </FlexContainer>
      <FlexContainer
        variant="column-start"
        className="relative gap-14 bg-purple-50 px-10 pb-40 pt-20"
      >
        <FlexContainer variant="row-center">
          <h3 className="max-w-2xl text-center text-5xl font-medium text-black">
            Why Choose Us?
          </h3>
        </FlexContainer>
        <div className="grid gap-10 md:grid-cols-3">
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
      <FlexContainer className="relative -mt-28 p-5 md:p-10">
        <FlexContainer
          variant="column-start"
          className="w-full gap-10 rounded-3xl border border-zinc-200 bg-white px-10 py-16 shadow-2xl shadow-zinc-200"
        >
          <FlexContainer variant="row-center">
            <h3 className="max-w-xl text-center font-dm-serif-display text-3xl font-medium text-black">
              Trusted By 100+ Property Managers
            </h3>
          </FlexContainer>
          <div className="grid gap-5 md:grid-cols-3">
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
      <FlexContainer
        variant="column-start"
        className="relative px-10 py-20"
        gap="3xl"
        id="pricing"
      >
        <FlexContainer variant="row-center">
          <h3 className="max-w-xl text-center text-5xl font-medium text-black">
            Our Pricing
          </h3>
        </FlexContainer>
        <FlexContainer variant="row-center" gap="xl" className="mb-10">
          <Button
            variant="default"
            className="rounded-3xl bg-indigo-600 hover:bg-indigo-700"
          >
            Yearly (-20%)
          </Button>
          <Button variant="ghost" className="rounded-3xl">
            Monthly
          </Button>
        </FlexContainer>
        <PricingTable />
      </FlexContainer>
    </FlexContainer>
  );
}
