import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8 md:p-10 lg:p-12 w-full max-w-xl">
          <div className="mb-6">
            <p className="text-lg text-gray-700">
              Hi there! 👋 I'm Shekhar Lamichhane Magar, a passionate tech
              enthusiast with a love for problem-solving and innovation. With a
              Bachelor's (Hons) degree in Computer and Data Science, I'm on a
              mission to leverage cutting-edge technologies to create impactful
              solutions that make a difference.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-lg text-gray-700">
              Currently, I am working as an intern at Voyager Company, located
              in Sankhamul, Lalitpur. Here, I'm gaining valuable experience in
              various aspects of software development and data analysis.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700">
              In my free time, I enjoy exploring new technologies, participating
              in coding challenges, and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
