import React, { useState } from "react";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Basic",
    startDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Membership request submitted!");
    console.log(formData);
  };

  return (
    <section id="join" className=" relative flex justify-center items-center py-20 bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>
      <div className=" bg-gray-950 p-8 rounded-xl shadow-lg w-full max-w-lg z-20">
        <h2 className="text-3xl font-bold text-center mb-6">Join Our Gym</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-md  text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-black"
          />

          <select
            name="plan"
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-black"
          >
            <option>Basic</option>
            <option>Pro</option>
            <option>Elite</option>
          </select>

          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Join Now
          </button>

        </form>
      </div>
    </section>
  );
};

export default MembershipForm;