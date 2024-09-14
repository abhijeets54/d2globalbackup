import React from 'react';
import { motion } from 'framer-motion';

function Choose() {
  // Animation Variants
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0., // Delay each feature animation
      },
    }),
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromRight}
          transition={{ duration: 1 }}
          className="text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            We are committed to providing you with the best immigration services to help you achieve your dreams of studying, working, or settling abroad.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInUp}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/student.svg" alt="Admission Guidance" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Expert Admission Guidance</h4>
            <p className="text-gray-600">
              With a team of highly trained professionals, we guide you step-by-step through the admission process, making it seamless and stress-free.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInUp}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/career.webp" alt="Best Fit" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Finding the Best Fit</h4>
            <p className="text-gray-600">
              We assess your profile and help you choose the best program or visa option that aligns with your career goals and aspirations.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInUp}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/book.webp" alt="Visa Expertise" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Visa Expertise</h4>
            <p className="text-gray-600">
              With years of experience in immigration law, our team ensures that your visa application is accurate and submitted without any errors.
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInUp}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/customer.webp" alt="Personalized Support" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Personalized Support</h4>
            <p className="text-gray-600">
              Every client is unique, and we offer tailored advice and support to meet your specific needs throughout the immigration process.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInUp}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="flex justify-center mb-6">
              <img src="/success.webp" alt="High Success Rate" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Proven Success Rate</h4>
            <p className="text-gray-600">
              We take pride in our high success rate. Thousands of clients have achieved their dream of studying and settling abroad through our services.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-lg transition hover:bg-blue-700"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Choose;
