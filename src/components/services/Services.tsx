import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <section className="grid grid-cols-6 w-full pt-16">
        <h2 className="text-2xl tracking-[-3%] uppercase py-4 col-span-1 font-semibold">
          Services
        </h2>
        <div className="flex flex-col space-y-8 max-w-[70%] ml-auto col-span-5">
          <div className="flex flex-col gap-2 ">
            <p className="text-xl tracking-[-3%] uppercase py-4 font-semibold">
              01 - Whether you’re a startup building a SaaS platform or
              launching a custom web or mobile app, we’re here to bring your
              ideas to life. From strategy to development, we create scalable
              solutions that set you apart.Reimagine customer engagement with
              AI-powered chat solutions.
            </p>

            <p className="text-xl tracking-[-3%] uppercase py-4 font-semibold">
              02 - Whether you’re a startup building a SaaS platform or
              launching a custom web or mobile app, we’re here to bring your
              ideas to life. From strategy to development, we create scalable
              solutions that set you apart. Reimagine customer engagement with
              AI-powered chat solutions.
            </p>

            <p className="text-xl tracking-[-3%] uppercase py-4 font-semibold">
              03 - Whether you’re a startup building a SaaS platform or
              launching a custom web or mobile app, we’re here to bring your
              ideas to life. From strategy to development, we create scalable
              solutions that set you apart. Reimagine customer engagement with
              AI-powered chat solutions.
            </p>

            <p className="text-xl tracking-[-3%] uppercase py-4 font-semibold">
              04 - Whether you’re a startup building a SaaS platform or
              launching a custom web or mobile app, we’re here to bring your
              ideas to life. From strategy to development, we create scalable
              solutions that set you apart. Reimagine customer engagement with
              AI-powered chat solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-screen relative overflow-hidden my-16">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="test1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default Services;
