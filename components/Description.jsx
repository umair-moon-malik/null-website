"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrambledText from "./ui/ScrambledText/ScrambledText";

const scrambleProps = {
  radius: 100,
  duration: 1.2,
  speed: 0.5,
  scrambleChars: ".:",
};

const Description = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <section className="relative w-fit flex justify-center px-4 md:px-24 py-20 md:rounded-4xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cyber.jpg')] bg-cover bg-center opacity-20 grayscale" />

        <div className="relative z-10 max-w-6xl flex flex-col items-start text-start space-y-8 ">
          <ScrambledText
            {...scrambleProps}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed"
          >
            Security is about perspective. To protect a system, you have to know
            how to dismantle it.
          </ScrambledText>

          <ScrambledText
            {...scrambleProps}
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90"
          >
            At Null VITB, we provide a safe space for dangerous code. We explore
            vulnerabilities not to exploit them, but to understand the logic
            behind the flaw. It's about cultivating the mindset of a breaker to
            become a better builder.
          </ScrambledText>

          <ScrambledText
            {...scrambleProps}
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90"
          >
            We are an open community for students who want to look past the
            surface.
          </ScrambledText>

          <div className="pt-10 w-full flex justify-center">
            <div className="w-full max-w-2xl border border-white/20 rounded-3xl p-6 md:p-10">
              <ScrambledText
                {...scrambleProps}
                className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-center"
              >
                Our playground
              </ScrambledText>

              <table className="w-full border-collapse">
                <tbody className="divide-y divide-current/20">
                  <tr>
                    <td className="py-3 md:py-4 font-mono text-sm sm:text-base md:text-lg lg:text-2xl">
                      <ScrambledText {...scrambleProps}>
                        &gt;_ CTFs &amp; Wargames
                      </ScrambledText>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 md:py-4 font-mono text-sm sm:text-base md:text-lg lg:text-2xl">
                      <ScrambledText {...scrambleProps}>
                        &gt;_ Technical Workshops
                      </ScrambledText>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 md:py-4 font-mono text-sm sm:text-base md:text-lg lg:text-2xl">
                      <ScrambledText {...scrambleProps}>
                        &gt;_ Hackathons
                      </ScrambledText>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 md:py-4 font-mono text-sm sm:text-base md:text-lg lg:text-2xl">
                      <ScrambledText {...scrambleProps}>
                        &gt;_ Security Research
                      </ScrambledText>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <ScrambledText
            {...scrambleProps}
            className="pt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
          >
            We find the cracks before they break.
          </ScrambledText>
        </div>
      </section>
    </motion.div>
  );
};

export default Description;