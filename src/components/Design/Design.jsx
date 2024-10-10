import React, { useState } from 'react';
import { MdAdd, MdRemove, MdPlayArrow, MdBrush, MdCheckCircle } from 'react-icons/md';
import living3 from "../../assets/living3.jpg";
import living4 from "../../assets/living4.jpg";

const ExpandableSection = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-lg font-medium">{title}</span>
        {isExpanded ? <MdRemove size={24} /> : <MdAdd size={24} />}
      </button>
      {isExpanded && (
        <div className="mt-2 text-gray-600">
          This is the expanded content for {title}. Add your specific details here.
        </div>
      )}
    </div>
  );
};

const Step = ({ icon: Icon, title, description }) => (
  <div className="flex items-start mb-6">
    <div className="bg-black rounded-full p-2 mr-4">
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Design() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={living3}
            alt="Elegant living room interior"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Designing Your Dream With Brilliance</h2>
          <p className="text-gray-600 mb-6">
            Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience.
          </p>
          <ExpandableSection title="Living Room Interior Design" />
          <ExpandableSection title="Commercial Office Room Interior Design" />
          <button className="bg-black text-white px-6 py-3 mt-6 rounded hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-8 mt-16">Designing Your Dream in Three Simple Steps</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <Step
            icon={MdPlayArrow}
            title="Start Project"
            description="Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience."
          />
          <Step
            icon={MdBrush}
            title="Craft"
            description="Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space."
          />
          <Step
            icon={MdCheckCircle}
            title="Execute"
            description="Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space."
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={living4}
            alt="Modern living room interior"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
