/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../ServiceData/ServiceData";
import { motion } from "motion/react";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services[serviceId];

  if (!service)
    return (
      <h1 className="text-gray-700 dark:text-white">
        Service Not Found
      </h1>
    );

  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-lg opacity-70 mb-6">
            {service.subtitle}
          </p>
          <p className="mb-6">{service.description}</p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <img
            src={service.image}
            className="rounded-2xl w-full"
            alt=""
          />
        </div>
      </motion.div>

      {/* FEATURES */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">
          What You Get
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((item, index) => (
            <div
              key={index}
              className="p-5 border rounded-xl hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 PACKAGES (only if exist) */}
      {service.packages && (
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">
            Packages
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {pkg.name}
                </h3>

                <p className="text-primary font-bold mb-3">
                  {pkg.price}
                </p>

                <ul className="text-sm opacity-70 space-y-1">
                  {pkg.details.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 FOLLOWERS (only if exist) */}
      {service.followers && (
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">
            USA Followers Packages
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.followers.map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-primary font-bold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to grow your business?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;