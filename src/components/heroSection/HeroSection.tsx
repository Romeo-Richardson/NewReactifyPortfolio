import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="h-[calc(100vh-44px)] w-full flex flex-col justify-between py-4">
      <div className="flex justify-end relative h-full">
        <div className="grid md:grid-cols-4 p-2 gap-2">
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
      <h1 className="text-[3rem] tracking-[-2%] uppercase leading-[3.5rem]">
        Whether you’re a startup building a SaaS platform or <br /> launching a
        custom web or mobile app.
      </h1>
    </section>
  );
};

export default HeroSection;
