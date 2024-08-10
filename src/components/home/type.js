import React from "react";
import Typewriter from "typewriter-effect";

const strings = [
  "not jobless",
  "mr beast",
  "pathological liar",
  "dog lover",
  "chronic gooner",
  "nonchalant rice-eater"
];

export default function Type() {
  return <Typewriter options={{ strings, autoStart: true, loop: true, deleteSpeed: 50 }} />;
}
