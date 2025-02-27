import React, { useState } from "react";

interface DataProps {
  firstName: string;
  lastName: string;
}

const Testy: React.FC = () => {
  const [formData, setFormData] = useState<DataProps>({
    firstName: "",
    lastName: "",
  });
  const [entries, setEntries] = useState<DataProps[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const removeEntry = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">Task 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.firstName}
          name="firstName"
          placeholder="first Name"
          onChange={handleChange}
        />
        <input
          value={formData.lastName}
          name="lastName"
          placeholder="last Name"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {entries.map((entry, index) => (
        <div key={index}>
          <p>{entry.firstName}x</p>
          <p>{entry.lastName}</p>
          <button className="px-4 py-2" onClick={() => removeEntry(index)}>
            X
          </button>
        </div>
      ))}
    </section>
  );
};

export default Testy;
