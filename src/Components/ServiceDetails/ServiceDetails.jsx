/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../ServiceData/ServiceData";
import { motion } from "motion/react";

const SectionWrapper = ({ title, children }) => {
  return (
    <div
      className="
        mt-20 p-6 sm:p-8 rounded-[28px]
        bg-white/5 dark:bg-white/5
        border border-white/15
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(79,70,229,0.12)]
        relative overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services[serviceId];

  if (!service)
    return <h1 className="text-gray-700 dark:text-white">Service Not Found</h1>;

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

          <p className="text-lg opacity-70 mb-6">{service.subtitle}</p>

          {service.description && (
            <p className="mb-6">{service.description}</p>
          )}

          <button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>

        <div className="flex-1">
          <img src={service.image} className="rounded-2xl w-full" alt="" />
        </div>
      </motion.div>

      {/* FEATURES */}
      <SectionWrapper title="What You Get">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((item, index) => (
            <div
              key={index}
              className="
                p-5 rounded-2xl
                bg-white/10
                border border-white/15
                backdrop-blur-xl
                shadow-lg
                transition-all duration-300
                hover:scale-105
                hover:bg-white/20
                hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]
              "
            >
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* PACKAGES */}
      {service.packages && (
        <SectionWrapper title="Engagement Packages">
          <p className="text-lg opacity-70 mb-3">
            All 100% real engagement from real accounts
          </p>

          <p className="mb-8 max-w-3xl opacity-90">
            We provide consistent growth with real engagement including likes,
            comments, reposts and high video views. (20 posts per month)
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="
                  p-6 rounded-2xl
                  bg-white/10
                  border border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>

                <p className="text-primary font-bold mb-3 text-xl">
                  {pkg.price}
                </p>

                <ul className="text-sm opacity-80 space-y-2">
                  {pkg.details.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* USA FOLLOWERS */}
      {service.usaFollowers && (
        <SectionWrapper title="USA Followers Packages">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.usaFollowers.map((item, index) => (
              <div
                key={index}
                className="
                  p-6 rounded-2xl
                  bg-white/10
                  border border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* INTERNATIONAL FOLLOWERS */}
      {service.internationalFollowers && (
        <SectionWrapper title="International Followers Packages">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.internationalFollowers.map((item, index) => (
              <div
                key={index}
                className="
                  p-6 rounded-2xl
                  bg-white/10
                  border border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-primary font-bold text-xl">{item.price}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to grow your business?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="
            bg-primary text-white px-8 py-3 rounded-full
            hover:scale-105 transition duration-300
            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
          "
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;