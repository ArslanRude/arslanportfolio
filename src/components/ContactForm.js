import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className=" flex items-center justify-center text-gray-300 z-30">
      <form onSubmit={handleSubmit} className=" p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
            bg-gradient-to-b from-neutral-50 to-neutral-400 py-9">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-transparent border border-stone-600 rounded-lg focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-transparent border border-stone-600 rounded-lg focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="4"
            className="w-full px-4 py-2 bg-transparent border border-stone-600 rounded-lg focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-transparent text-gray-300 py-2 px-4 rounded-lg hover:bg-red-900 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;