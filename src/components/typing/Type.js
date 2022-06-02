import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FullStack Developer",
          "Software Developer",
          "MERN Stack Developer",
          "Front End Web Developer",
          "Back End Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;