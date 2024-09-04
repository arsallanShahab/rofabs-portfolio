import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Dropdown = (props: Props) => {
  return (
    <div className="group relative">
      <div
        className={cn(
          "flex cursor-pointer select-none items-center justify-center gap-2 rounded-lg border border-transparent px-2 py-4 font-medium transition-all duration-200",
          props?.className,
        )}
      >
        <span className="text-sm text-zinc-800 transition-all duration-200 ease-in-out group-hover:text-black">
          {props?.title}
        </span>{" "}
        <ChevronDown className="h-3.5 w-3.5 stroke-[3px]" />
      </div>
      {props.children}
    </div>
  );
};

type DropdownContentProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const DropdownContent = (props: DropdownContentProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-[90%] z-[850] flex w-[280px] origin-top -translate-y-1 scale-90 flex-col rounded-xl border bg-white p-3 opacity-0 shadow-xl transition-all duration-300 ease-in-out *:w-full group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
        props.size === "sm" && "w-[200px]",
        props.size === "md" && "w-[280px]",
        props.size === "lg" && "grid w-[540px] grid-cols-2",
      )}
    >
      {props.children}
    </div>
  );
};

const DropdownItem = (props: {
  children: React.ReactNode;
  href: string;
  description: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.href}
      className={cn(
        "group/link block rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150 ease-in-out hover:bg-purple-600 hover:text-white",
        props.className,
      )}
    >
      {props.children}
      <span className="mt-0.5 block text-xs font-normal text-gray-600 group-hover/link:text-white/75 dark:text-gray-400">
        {props.description}
      </span>
    </Link>
  );
};

export { Dropdown, DropdownContent, DropdownItem };
