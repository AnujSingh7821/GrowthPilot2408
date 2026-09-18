/* eslint-disable no-unused-vars */

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import services from "../ServiceData/ServiceData";
import { motion } from "motion/react";

const SectionWrapper = ({ title, children }) => {
  return (
    <div
      className="
        mt-20
        p-6
        sm:p-8
        rounded-[28px]
        bg-white/5
        dark:bg-white/5
        border
        border-white/15
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(79,70,229,0.12)]
        relative
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-linear-to-br
          from-primary/10
          via-transparent
          to-blue-500/10
          pointer-events-none
        "
      />

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

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-700 dark:text-white">
        <h1 className="text-3xl font-semibold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div
      className="
        px-4
        sm:px-12
        lg:px-24
        xl:px-40
        py-20
        text-gray-700
        dark:text-white
      "
    >
      {/* ================= HERO ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-10
        "
      >
        {/* CONTENT */}

        <div className="flex-1">
          <p
            className="
              text-sm
              uppercase
              tracking-[0.15em]
              text-primary
              font-semibold
              mb-3
            "
          >
            Growth Pilot Service
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              font-bold
              mb-4
            "
          >
            {service.title}
          </h1>

          <p
            className="
              text-lg
              opacity-70
              mb-6
              leading-8
            "
          >
            {service.subtitle}
          </p>

          {service.description && (
            <p
              className="
                mb-7
                leading-7
                text-gray-500
                dark:text-white/65
              "
            >
              {service.description}
            </p>
          )}

          <button
            onClick={() => navigate("/contact")}
            className="
              group
              relative
              overflow-hidden
              bg-primary
              text-white
              border
              border-primary
              px-7
              py-3
              rounded-full
              cursor-pointer
              transition-all
              duration-500
            "
          >
            <span
              className="
                relative
                z-10
                transition-colors
                duration-500
                group-hover:text-primary
              "
            >
              Get Started
            </span>

            <span
              className="
                absolute
                inset-0
                bg-white
                -translate-x-full
                group-hover:translate-x-0
                transition-transform
                duration-500
                ease-out
              "
            />
          </button>
        </div>

        {/* IMAGE */}

        <div className="flex-1">
          <img
            src={service.image}
            className="
              w-full
              rounded-2xl
              object-cover
            "
            alt={service.title}
          />
        </div>
      </motion.div>

      {/* ================= FEATURES ================= */}

      <SectionWrapper title="What You Get">
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {service.features.map((item, index) => (
            <div
              key={index}
              className="
                p-5
                rounded-2xl
                bg-white/10
                border
                border-white/15
                backdrop-blur-xl
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/20
                hover:shadow-[0_0_25px_rgba(79,70,229,0.35)]
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    w-7
                    h-7
                    shrink-0
                    rounded-full
                    bg-primary/10
                    text-primary
                    flex
                    items-center
                    justify-center
                    text-sm
                  "
                >
                  ✓
                </span>

                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ================= PACKAGES ================= */}

      {service.packages && (
        <SectionWrapper title="Engagement Packages">
          <p className="text-lg opacity-70 mb-3">
            Consistent engagement designed to strengthen your social presence.
          </p>

          <p className="mb-8 max-w-3xl opacity-90">
            Choose the package that best suits your social media growth
            requirements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="
                  p-6
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">
                  {pkg.name}
                </h3>

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

      {/* ================= USA FOLLOWERS ================= */}

      {service.usaFollowers && (
        <SectionWrapper title="USA Followers Packages">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.usaFollowers.map((item, index) => (
              <div
                key={index}
                className="
                  p-6
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-primary font-bold text-xl">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ================= INTERNATIONAL ================= */}

      {service.internationalFollowers && (
        <SectionWrapper title="International Followers Packages">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.internationalFollowers.map((item, index) => (
              <div
                key={index}
                className="
                  p-6
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/15
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]
                "
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-primary font-bold text-xl">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ================= CTA ================= */}

      <div className="mt-20 text-center">
        <p
          className="
            text-sm
            uppercase
            tracking-[0.15em]
            text-primary
            font-semibold
            mb-3
          "
        >
          Let's Work Together
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Ready to grow your business?
        </h2>

        <p
          className="
            max-w-xl
            mx-auto
            mb-7
            text-gray-500
            dark:text-white/60
          "
        >
          Tell us your goals and we'll help you choose the right strategy for
          your business.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="
            group
            relative
            overflow-hidden
            bg-primary
            text-white
            border
            border-primary
            px-8
            py-3
            rounded-full
            cursor-pointer
            transition-all
            duration-500
          "
        >
          <span
            className="
              relative
              z-10
              transition-colors
              duration-500
              group-hover:text-primary
            "
          >
            Contact Us
          </span>

          <span
            className="
              absolute
              inset-0
              bg-white
              -translate-x-full
              group-hover:translate-x-0
              transition-transform
              duration-500
              ease-out
            "
          />
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;