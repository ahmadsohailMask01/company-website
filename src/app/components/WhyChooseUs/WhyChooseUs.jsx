import React from "react";
import { FaUsers, FaChartLine, FaRocket, FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold">Why Choose Us</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaUsers, title: "Expert Management" },
            { icon: FaChartLine, title: "Secure Investment" },
            { icon: FaRocket, title: "Instant Trading" },
            { icon: FaSmile, title: "Happy Customers" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="border p-4 rounded-lg shadow-lg">
              <Icon className="text-blue-500 text-3xl mb-2" />
              <h4 className="text-lg font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
