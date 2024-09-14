import React from 'react';

function Choose() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-600">
            We are committed to providing you with the best immigration services to help you achieve your dreams of studying, working, or settling abroad.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="/admission.webp" alt="Admission Guidance" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Expert Admission Guidance</h4>
            <p className="text-gray-600">
              With a team of highly trained professionals, we guide you step-by-step through the admission process, making it seamless and stress-free.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="/fit.webp" alt="Best Fit" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Finding the Best Fit</h4>
            <p className="text-gray-600">
              We assess your profile and help you choose the best program or visa option that aligns with your career goals and aspirations.
            </p>
          </div>

          

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="/visa-expertise.webp" alt="Visa Expertise" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Visa Expertise</h4>
            <p className="text-gray-600">
              With years of experience in immigration law, our team ensures that your visa application is accurate and submitted without any errors.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="/support.webp" alt="Personalized Support" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Personalized Support</h4>
            <p className="text-gray-600">
              Every client is unique, and we offer tailored advice and support to meet your specific needs throughout the immigration process.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-6">
              <img src="/success-rate.webp" alt="High Success Rate" className="h-16 w-16" />
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Proven Success Rate</h4>
            <p className="text-gray-600">
              We take pride in our high success rate. Thousands of clients have achieved their dream of studying and settling abroad through our services.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-lg transition hover:bg-blue-700"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default Choose;
