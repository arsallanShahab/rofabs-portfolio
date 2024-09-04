import React from "react";

type Props = {
  children: React.ReactNode;
};

const Heading = (_props: Props) => {
  return (
    <h3 className="max-w-xl pt-10 text-left text-5xl font-medium text-black">
      {_props.children}
    </h3>
  );
};

export default Heading;
