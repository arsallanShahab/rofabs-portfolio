import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = (props: Props) => {
  return (
    <div className={cn("px-5 py-20 md:px-10", props.className)}>
      {props.children}
    </div>
  );
};

export default Wrapper;
