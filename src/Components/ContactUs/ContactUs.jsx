/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../Title/Title";
import assets from "../../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactUs = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "35c55bc9-95e3-48ac-b01a-c45ffb63454b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank You For Your Submission !!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: false }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach Out To Us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* NAME */}
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* WHATSAPP NUMBER */}

<div className="md:col-span-2">
  <p
    className="
      mb-2
      text-sm
      font-medium
      text-gray-800
      dark:text-gray-200
    "
  >
    WhatsApp Number
  </p>

  <div
    className="
      flex
      items-center
      w-full
      h-11.75

      rounded-lg
      border

      border-gray-300
      dark:border-gray-600

      bg-white
      dark:bg-gray-900

      focus-within:border-[#4F46E6]
      dark:focus-within:border-[#716BF0]

      focus-within:ring-1
      focus-within:ring-[#4F46E6]/20

      transition-all
      duration-300

      overflow-hidden
    "
  >
    {/* WHATSAPP ICON */}

    <div
      className="
        flex
        items-center
        justify-center
        h-full
        pl-4
        pr-3

        bg-gray-50
        dark:bg-gray-800/60

        shrink-0
      "
    >
      <img
        src={assets.whatsapp_icon1}
        alt="WhatsApp"
        className="
          w-5
          h-5
          object-contain
        "
      />
    </div>

    {/* COUNTRY CODE */}

    <div
      className="
        relative
        flex
        items-center
        h-full

        border-r
        border-gray-200
        dark:border-gray-600

        bg-gray-50
        dark:bg-gray-800/60

        shrink-0
      "
    >
      <select
        name="countryCode"
        defaultValue="+91"
        required
        className="
          h-full
          w-26.25

          pl-3
          pr-7

          appearance-none

          outline-none
          border-none

          bg-transparent

          text-sm
          font-medium

          text-gray-700
          dark:text-gray-200

          cursor-pointer
        "
      >
        <option className="bg-white text-gray-800" value="+91">
          🇮🇳 +91
        </option>

        <option className="bg-white text-gray-800" value="+1">
          🇺🇸 +1
        </option>

        <option className="bg-white text-gray-800" value="+1">
          🇨🇦 +1
        </option>

        <option className="bg-white text-gray-800" value="+44">
          🇬🇧 +44
        </option>

        <option className="bg-white text-gray-800" value="+971">
          🇦🇪 +971
        </option>

        <option className="bg-white text-gray-800" value="+966">
          🇸🇦 +966
        </option>

        <option className="bg-white text-gray-800" value="+974">
          🇶🇦 +974
        </option>

        <option className="bg-white text-gray-800" value="+965">
          🇰🇼 +965
        </option>

        <option className="bg-white text-gray-800" value="+968">
          🇴🇲 +968
        </option>

        <option className="bg-white text-gray-800" value="+973">
          🇧🇭 +973
        </option>

        <option className="bg-white text-gray-800" value="+61">
          🇦🇺 +61
        </option>

        <option className="bg-white text-gray-800" value="+64">
          🇳🇿 +64
        </option>

        <option className="bg-white text-gray-800" value="+65">
          🇸🇬 +65
        </option>

        <option className="bg-white text-gray-800" value="+60">
          🇲🇾 +60
        </option>

        <option className="bg-white text-gray-800" value="+49">
          🇩🇪 +49
        </option>

        <option className="bg-white text-gray-800" value="+33">
          🇫🇷 +33
        </option>

        <option className="bg-white text-gray-800" value="+39">
          🇮🇹 +39
        </option>

        <option className="bg-white text-gray-800" value="+34">
          🇪🇸 +34
        </option>

        <option className="bg-white text-gray-800" value="+31">
          🇳🇱 +31
        </option>

        <option className="bg-white text-gray-800" value="+32">
          🇧🇪 +32
        </option>

        <option className="bg-white text-gray-800" value="+41">
          🇨🇭 +41
        </option>

        <option className="bg-white text-gray-800" value="+43">
          🇦🇹 +43
        </option>

        <option className="bg-white text-gray-800" value="+46">
          🇸🇪 +46
        </option>

        <option className="bg-white text-gray-800" value="+47">
          🇳🇴 +47
        </option>

        <option className="bg-white text-gray-800" value="+45">
          🇩🇰 +45
        </option>

        <option className="bg-white text-gray-800" value="+358">
          🇫🇮 +358
        </option>

        <option className="bg-white text-gray-800" value="+353">
          🇮🇪 +353
        </option>

        <option className="bg-white text-gray-800" value="+351">
          🇵🇹 +351
        </option>

        <option className="bg-white text-gray-800" value="+48">
          🇵🇱 +48
        </option>

        <option className="bg-white text-gray-800" value="+81">
          🇯🇵 +81
        </option>

        <option className="bg-white text-gray-800" value="+82">
          🇰🇷 +82
        </option>

        <option className="bg-white text-gray-800" value="+86">
          🇨🇳 +86
        </option>

        <option className="bg-white text-gray-800" value="+852">
          🇭🇰 +852
        </option>

        <option className="bg-white text-gray-800" value="+886">
          🇹🇼 +886
        </option>

        <option className="bg-white text-gray-800" value="+66">
          🇹🇭 +66
        </option>

        <option className="bg-white text-gray-800" value="+84">
          🇻🇳 +84
        </option>

        <option className="bg-white text-gray-800" value="+62">
          🇮🇩 +62
        </option>

        <option className="bg-white text-gray-800" value="+63">
          🇵🇭 +63
        </option>

        <option className="bg-white text-gray-800" value="+92">
          🇵🇰 +92
        </option>

        <option className="bg-white text-gray-800" value="+880">
          🇧🇩 +880
        </option>

        <option className="bg-white text-gray-800" value="+977">
          🇳🇵 +977
        </option>

        <option className="bg-white text-gray-800" value="+94">
          🇱🇰 +94
        </option>

        <option className="bg-white text-gray-800" value="+975">
          🇧🇹 +975
        </option>

        <option className="bg-white text-gray-800" value="+960">
          🇲🇻 +960
        </option>

        <option className="bg-white text-gray-800" value="+27">
          🇿🇦 +27
        </option>

        <option className="bg-white text-gray-800" value="+234">
          🇳🇬 +234
        </option>

        <option className="bg-white text-gray-800" value="+254">
          🇰🇪 +254
        </option>

        <option className="bg-white text-gray-800" value="+233">
          🇬🇭 +233
        </option>

        <option className="bg-white text-gray-800" value="+20">
          🇪🇬 +20
        </option>

        <option className="bg-white text-gray-800" value="+212">
          🇲🇦 +212
        </option>

        <option className="bg-white text-gray-800" value="+55">
          🇧🇷 +55
        </option>

        <option className="bg-white text-gray-800" value="+52">
          🇲🇽 +52
        </option>

        <option className="bg-white text-gray-800" value="+54">
          🇦🇷 +54
        </option>

        <option className="bg-white text-gray-800" value="+56">
          🇨🇱 +56
        </option>

        <option className="bg-white text-gray-800" value="+57">
          🇨🇴 +57
        </option>

        <option className="bg-white text-gray-800" value="+51">
          🇵🇪 +51
        </option>

        <option className="bg-white text-gray-800" value="+90">
          🇹🇷 +90
        </option>

        <option className="bg-white text-gray-800" value="+972">
          🇮🇱 +972
        </option>

        <option className="bg-white text-gray-800" value="+962">
          🇯🇴 +962
        </option>

        <option className="bg-white text-gray-800" value="+961">
          🇱🇧 +961
        </option>
      </select>

      {/* CUSTOM ARROW */}

      <span
        className="
          absolute
          right-3
          pointer-events-none

          text-[10px]

          text-gray-500
          dark:text-gray-400
        "
      >
        ▼
      </span>
    </div>

    {/* PHONE NUMBER */}

    <input
      type="tel"
      name="whatsapp"
      placeholder="Enter your WhatsApp number"
      autoComplete="tel"
      required
      className="
        flex-1
        h-full
        min-w-0

        px-4

        text-sm

        outline-none
        border-none

        bg-white
        dark:bg-gray-900

        text-gray-800
        dark:text-gray-100

        placeholder:text-gray-400
        dark:placeholder:text-gray-500
      "
    />
  </div>
</div>

        {/* SERVICE DROPDOWN */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Select Service</p>

          <div className="flex rounded-lg border border-gray-300 dark:border-gray-600">
            <select
              name="service"
              required
              className="w-full p-3 text-sm outline-none bg-transparent dark:bg-gray-900 dark:text-white text-gray-700 rounded-lg"
            >
              <option
                value=""
                className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
              >
                Select a Service
              </option>

              <option
                value="Social Media Marketing"
                className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
              >
                Social Media Growth
              </option>

              <option
                value="Graphic Designing"
                className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
              >
                Graphic Designing
              </option>

              <option
                value="Web Development"
                className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
              >
                SEO Optimization
              </option>

              <option
                value="Advertising"
                className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
              >
                Advertising
              </option>
            </select>
          </div>
        </div>

        {/* MESSAGE */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter Your Message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="group relative overflow-hidden w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer border border-primary transition-all duration-500"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
            Submit
          </span>

          <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
