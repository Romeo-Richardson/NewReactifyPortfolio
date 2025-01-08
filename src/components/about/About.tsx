import React from "react";
import Gallery from "@/components/gallery/Gallery";

const About: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-between py-4">
      <h2 className="text-2xl tracking-[-3%] uppercase font-semibold">
        Whether you’re a startup building a SaaS platform or launching a custom
        web or mobile app, we’re here to bring your ideas to life. <br /> <br />{" "}
        Reimagine customer engagement with AI-powered chat solutions. We design
        intelligent tools to help businesses adapt and grow in a fast-changing
        world.
      </h2>
      <Gallery />
    </section>
  );
};

export default About;
