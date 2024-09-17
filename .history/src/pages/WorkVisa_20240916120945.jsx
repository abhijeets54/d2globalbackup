import React from "react";
import { motion } from "framer-motion";
import workVisaImage from "../assets/workVisaImage.jpg"; // Add appropriate image for work visa
import "./WorkVisa.css"; // You can style accordingly

const WorkVisa = () => {
  return (
    <div className="work-visa-container">
      <header className="work-visa-header">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Work Visa Consultancy - Your Gateway to a Global Career
        </motion.h1>
      </header>

      <section className="visa-intro">
        <motion.img
          src={workVisaImage}
          alt="Work Visa"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          If you are a skilled professional looking to explore international job
          opportunities, acquiring a work visa is your first step. It grants you
          legal entry into a foreign country to work and build a flourishing
          career.
        </motion.p>
      </section>

      <section className="visa-benefits">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Why Obtain a Work Visa?
        </motion.h2>
        <motion.ul
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

      <section className="visa-eligibility">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Eligibility Criteria for Work Visa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To successfully obtain a work visa, ensure you meet the following
          criteria:
        </motion.p>
        <motion.ul
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

      <section className="visa-countries">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Work Visa Services for Different Countries
        </motion.h2>
        <motion.div
          className="country-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="country-card">
            <h3>Canada</h3>
            <p>
              Launch your career in one of the world's most thriving economies.
              We assist with all aspects of obtaining your Canadian work visa,
              including document preparation and job search assistance.
            </p>
          </div>
          <div className="country-card">
            <h3>Australia</h3>
            <p>
              Australia's booming industries await skilled professionals like
              you. Let us guide you through the work visa process and make your
              dream a reality.
            </p>
          </div>
          <div className="country-card">
            <h3>UK</h3>
            <p>
              The United Kingdom offers vast opportunities for skilled workers.
              We provide end-to-end services to help you secure your UK work
              visa.
            </p>
          </div>
          <div className="country-card">
            <h3>Europe</h3>
            <p>
              Europe is known for its high quality of life and diverse career
              opportunities. Our consultants will help you navigate the work
              visa process for various European nations.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="contact-section">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ready to embark on your international career journey? Contact D2 Global Immigration today and let our expert consultants guide you through the entire work visa process.
        </motion.p>
      </section>
    </div>
  );
};

export default WorkVisa;
