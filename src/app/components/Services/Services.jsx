import React from "react";
import { FaLock, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <section className="p-2 mt-[-30] text-center">
        <h3 className="text-3xl font-bold">Our Services</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FaLock, title: "Currency Wallet" },
            { icon: FaShieldAlt, title: "Security Storage" },
            { icon: FaHeadset, title: "Expert Support" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="border p-4 rounded-lg shadow-lg">
              <Icon className="text-blue-500 text-3xl mb-2" />
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-gray-600">Secure and trusted services.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
