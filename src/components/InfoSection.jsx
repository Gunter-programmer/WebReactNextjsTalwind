import React from "react";

const InfoSection = ({ title, description, image, onExpand }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <button
        className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md w-full transition-all duration-300"
        onClick={onExpand}
      >
        Подробнее <span className="ml-2">&rarr;</span>
      </button>
    </div>
  );
};

export default InfoSection;
