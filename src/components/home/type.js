import React from "react";
import Typewriter from "typewriter-effect";

const strings = [
  "Floto",
  "ItsLazi",
  "Unlazy",
  "Lazine"
];

export default function Type() {
  return <Typewriter options={{ strings, autoStart: true, loop: true, deleteSpeed: 50 }} />;
}
