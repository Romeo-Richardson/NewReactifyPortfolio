import React from "react";
import Gallery from "@/components/gallery/Gallery";

const About: React.FC = () => {
  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center">
        <h2 className="text-[2rem] tracking-[-3%] uppercase">
          Whether you’re a startup building a SaaS platform or launching a
          custom web or mobile app, we’re here to bring your ideas to life.{" "}
          <br /> <br /> Reimagine customer engagement with AI-powered chat
          solutions. We design intelligent tools to help businesses adapt and
          grow in a fast-changing world.
        </h2>
      </section>{" "}
      <Gallery />
    </>
  );
};

export default About;
