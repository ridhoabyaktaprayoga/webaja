"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background Image */}
      <Image
        src="/img/hero.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />

      {/* Hero Content */}
      <div className="flex items-center px-4 py-48 mx-auto max-w-screen-xl lg:px-8">
        <div className="max-w-xl">
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-white mobile:text-4xl md:text-5xl">
            Instant collaboration for remote teams
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-white max-w-lg mobile:text-sm md:text-lg font-light">
            All-in-one place for your remote team to chat, collaborate, and
            track project progress.
          </p>

          {/* Input and Button */}
          <div className="mt-8 flex gap-4 items-center">
            {/* Input without Icon */}
            <Input
              label="Email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1"
            />

            {/* Call-to-action Button */}
            <Button label="Get Early Access" className="flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
