import React from "react";
import { motion } from "framer-motion";
import QuickNumbers from "../components/QuickNumbers";
import QuickEnquiry from "../components/ContactUs/QuickEnquiry";
import Register from "../components/Register";

const WorkVisa = () => {
  return (
    <>
      <QuickEnquiry />
      <div className="bg-white">
        {/* Header Section */}
        <header className="py-8 text-left px-6">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Work Visa Consultancy - Your Gateway to a Global Career
          </motion.h1>
        </header>

        {/* Introduction Section */}
        <section className="max-w-6xl mx-auto py-12 px-6 flex flex-col lg:flex-row items-start gap-8">
          <motion.img
            src="workvisa.webp"
            alt="Work Visa"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.p
            className="text-lg lg:w-1/2 text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            If you are a skilled professional looking to explore international
            job opportunities, acquiring a work visa is your first step. It grants
            you legal entry into a foreign country to work and build a flourishing
            career.
          </motion.p>
        </section>

        <QuickNumbers />

        {/* Why Obtain a Work Visa Section */}
        <section className="bg-white py-12 px-6">
          <motion.h2
            className="text-3xl font-bold text-left mb-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Why Obtain a Work Visa?
          </motion.h2>
          <motion.ul
            className="list-disc space-y-4 max-w-4xl mx-auto text-lg text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <li>Secure your right to work in a foreign country</li>
            <li>Expand your professional horizon and career opportunities</li>
            <li>Experience international mobility and cultural diversity</li>
            <li>Provide a better future for you and your family</li>
            <li>Earn in a foreign currency and enjoy high standards of living</li>
          </motion.ul>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="max-w-6xl mx-auto py-12 px-6 bg-white">
          <motion.h2
            className="text-3xl font-bold text-left mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Eligibility Criteria for Work Visa
          </motion.h2>
          <motion.p
            className="text-lg text-left mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            To successfully obtain a work visa, ensure you meet the following
            criteria:
          </motion.p>
          <motion.ul
            className="list-disc space-y-4 max-w-4xl mx-auto text-lg text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <li>Proficiency in English or the country's official language</li>
            <li>Your profession must be listed in the Skilled Occupation List (SOL)</li>
            <li>A skills assessment from a recognized authority</li>
            <li>Meet the health and character requirements</li>
          </motion.ul>
        </section>

        {/* Work Visa Services for Different Countries */}
        <section className="max-w-6xl mx-auto py-12 px-6 bg-white">
          <motion.h2
            className="text-3xl font-bold text-left mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Work Visa Services for Different Countries
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Canada</h3>
              <p>
                Launch your career in one of the world's most thriving economies.
                We assist with all aspects of obtaining your Canadian work visa,
                including document preparation and job search assistance.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Australia</h3>
              <p>
                Australia's booming industries await skilled professionals like
                you. Let us guide you through the work visa process and make your
                dream a reality.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">UK</h3>
              <p>
                The United Kingdom offers vast opportunities for skilled workers.
                We provide end-to-end services to help you secure your UK work
                visa.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Europe</h3>
              <p>
                Europe is known for its high quality of life and diverse career
                opportunities. Our consultants will help you navigate the work
                visa process for various European nations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Get in Touch Section */}
        <section className="bg-blue-950 text-yellow-400  py-12 px-6 text-left">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Ready to embark on your international career journey? Contact D2 Global Immigration today, and let our expert consultants guide you through the entire work visa process.
          </motion.p>
          <Register />
        </section>
      </div>
    </>
  );
};

export default WorkVisa;
