import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="h-[calc(100vh-44px)] w-full flex flex-col justify-between py-4">
      <h1 className="text-[2rem] tracking-[-3%] uppercase font-semibold">
        Whether you’re a startup building a SaaS platform or launching a custom
        web or mobile app, we’re here to bring your ideas to life. From strategy
        to development, we create scalable solutions that set you apart. <br />{" "}
        <br /> Reimagine customer engagement with AI-powered chat solutions. We
        design intelligent tools to help businesses adapt and grow in a
        fast-changing world.
      </h1>
      <div className="flex justify-end relative">
        <div className="grid grid-cols-4 p-2 gap-2">
          <Image
            src="/mar-art.png"
            alt="Software Development"
            width={125}
            height={125}
            style={{ objectFit: "cover" }}
          />

          <Image
            src="/miko.png"
            alt="Software Development"
            width={125}
            height={125}
            style={{ objectFit: "cover" }}
          />

          <Image
            src="/noss2.png"
            alt="Software Development"
            width={125}
            height={125}
            style={{ objectFit: "cover" }}
          />

          <Image
            src="/miko1.png"
            alt="Software Development"
            width={125}
            height={125}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
