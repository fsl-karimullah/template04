import React from 'react';
import { MdLightbulb, MdHome, MdPark } from 'react-icons/md';

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <div className="mb-12 flex items-center">
        {/* Garis di sebelah kiri */}
        <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
        <h2 className="text-3xl font-bold">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="flex flex-col items-center text-center">
          <MdLightbulb className="w-12 h-12 mb-4 text-gray-700" />
          <h3 className="text-xl font-semibold mb-2">Lighting Design</h3>
          <p className="text-gray-600">
            Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center text-center">
          <MdHome className="w-12 h-12 mb-4 text-gray-700" />
          <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
          <p className="text-gray-600">
            From concept to completion, we oversee every detail to bring your vision to life efficiently.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center text-center">
          <MdPark className="w-12 h-12 mb-4 text-gray-700" />
          <h3 className="text-xl font-semibold mb-2">Outdoor Design</h3>
          <p className="text-gray-600">
            Celebrate the changing seasons with our seasonal outdoor decor services.
          </p>
        </div>
      </div>
    </section>
  );
}
