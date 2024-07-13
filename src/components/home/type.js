import React from "react";
import Typewriter from "typewriter-effect";

const strings = [
  "Floto",
  "ItsLazi",
  "Unlazy",
  "Lazine"
];

const options = {
  strings,
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
};

const Type = () => {
  return <Typewriter options={options} />;
};

export default Type;
