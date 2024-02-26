import React from "react";
import Shekhar from "../assets/shekhar.png";

const Analytics = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-600 text-center md:text-left mb-8 py-8">
            My Achievement
          </h1>
          <p className="max-w-md mx-auto mb-8 text-gray-700 text-lg leading-relaxed">
            Gain insights into digital marketing strategies and tools through
            practical experience in a virtual internship at IIDE. The one-month
            virtual internship at IIDE provided hands-on experience in digital
            marketing, covering SEO, SEM, social media, content marketing, and
            analytics. Through real-world projects and collaboration, I gained
            insights into industry trends, enhanced problem-solving and
            communication skills, and learned to adapt to new technologies. The
            supportive environment fostered creativity and continuous learning,
            preparing me for future success in digital marketing.
          </p>

          <div className="max-w-md mx-auto md:max-w-none">
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        </div>
        <div className="md:w-1/2 md:flex justify-end">
          <img
            src={Shekhar}
            alt="Shekhar"
            className="shadow-lg w-full h-auto md:w-auto md:h-auto md:rounded-md md:shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
