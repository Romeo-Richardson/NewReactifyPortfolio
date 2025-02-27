"use client";
import React, { useState } from "react";
import Testy from "@/components/Test";

interface TestProps {
  title: string;
  image: string;
  alt: string;
  firstName: string;
  lastName: string;
}

const Test: React.FC<TestProps> = () => {
  const [formData, setFormData] = useState<TestProps>({
    title: "",
    image: "",
    alt: "",
    firstName: "",
    lastName: "",
  });

  const [entries, setEntries] = useState<TestProps[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      title: "",
      image: "",
      alt: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="h-screen w-full p-8 grid place-items-center">
        <h1 className="text-3xl">Users that made a value</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2">
          <input
            value={formData.title}
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="p-2 border-2 border-black rounded-md"
          />
          <input
            value={formData.image}
            name="image"
            placeholder="image"
            onChange={handleChange}
            className="p-2 border-2 border-black rounded-md"
          />
          <input
            value={formData.alt}
            name="alt"
            placeholder="alt"
            onChange={handleChange}
            className="p-2 border-2 border-black rounded-md"
          />
          <input
            value={formData.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="p-2 border-2 border-black rounded-md"
          />
          <input
            value={formData.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="p-2 border-2 border-black rounded-md"
          />
          <button type="submit">Submit</button>
        </form>

        <div className="flex flex-col">
          {entries.map((entry, index) => (
            <div className="text-bold" key={index}>
              <p>{entry.title}</p>
              <p>{entry.alt} </p>
              <p>{entry.image} </p>
              <p>{entry.firstName} </p>
              <p>{entry.lastName} </p>
            </div>
          ))}
        </div>
      </section>
      <Testy />
    </>
  );
};

export default Test;
