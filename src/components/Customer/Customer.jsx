import React, { useState } from 'react';
import living4 from "../../assets/living4.jpg";

const testimonials = [
  {
    quote: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    author: "Sophie Carter",
    location: "New York, USA"
  },
  {
    quote: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    author: "James Bennett",
    location: "Toronto, Canada"
  },
];

export default function Customer() {
  const [email, setEmail] = useState('');

  return (
    <section id="contact" className="container mx-auto px-4 py-4">
      <div className="mb-16 flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
          <img
            src={living4}
            alt="Interior hallway"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:w-1/2">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say About Us</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black text-white p-6 rounded-lg w-full"
              >
                <p className="text-3xl mb-4">"</p>
                <p className="text-sm mb-4">{testimonial.quote}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter for Design Insights</h2>
        <p className="text-gray-600 mb-6">
          Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-black mb-4 sm:mb-0"
          />
          <button
            type="button"
            className="bg-black text-white px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-gray-800 transition-colors"
            onClick={() => console.log(`You entered: ${email}`)}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
