import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import arduino from "../assets/arduino.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "bg-blue-500" },
    { id: 2, src: css, title: "CSS", style: "bg-pink-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "bg-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "bg-purple-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "bg-cyan-500" },
    { id: 6, src: github, title: "Github", style: "bg-gray-500" },
    { id: 7, src: python, title: "Python", style: "bg-green-500" },
    { id: 8, src: arduino, title: "Arduino", style: "bg-red-500" },
  ];

  // Shuffle the techs array
  const shuffledTechs = [...techs].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-gradient-to-b from-green-600 to-black min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h1 className="text-4xl font-bold border-b-4 border-white pb-4 mb-8">Experience</h1>
        <p className="text-xl mb-8">These are the technologies I've worked with</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shuffledTechs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${style}`}
            >
              <img src={src} alt={title} className="w-16 mb-2 animate-bounce" />
              <p className="text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
