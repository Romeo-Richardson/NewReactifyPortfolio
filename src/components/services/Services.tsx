import React from "react";

const Services: React.FC = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-between py-4">
        <h2 className="text-[2rem] tracking-[-3%] uppercase">
          Whether you’re a startup building a SaaS platform or launching a
          custom web or mobile app, we’re here to bring your ideas to life.
          <br /> <br /> Reimagine customer engagement with AI-powered chat
          solutions. We design intelligent tools to help businesses adapt and
          grow in a fast-changing world.
        </h2>
        <div className="w-full flex justify-end gap-8 text-[2rem] tracking-[-3%]">
          <ul className="columns-2 gap-8">
            <h4 className="uppercase">Software Development</h4>
            <li className="m-0 p-0 uppercase">Web Applications</li>
            <li className="m-0 p-0 uppercase">Mobile Applications</li>
            <li className="m-0 p-0 uppercase">Ai Chatss</li>
            <li className="m-0 p-0 uppercase">E-commerce Store</li>
          </ul>
        </div>
      </section>

      <section className="w-full h-screen relative overflow-hidden my-16">
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
      </section>
    </>
  );
};

export default Services;
