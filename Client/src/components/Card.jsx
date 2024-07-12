import React from "react";
import { MdLocationOn } from "react-icons/md";

function Card({ image, category, title, location, description, points }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-sm  p-3 md:p-6">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 md:p-6">
        <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
          {category}
        </span>
        {/* Card  */}
        <div className="flex flex-wrap  items-center justify-between mt-2">
          <h2 className="title text-[#FFC885] text-xl md:text-2xl lg:text-3xl font-semibold">
            {title}
          </h2>
          <div className="flex items-center">
            <MdLocationOn className="text-xs text-[#A2A2A2]" />
            <span className="text-xs text-[#A2A2A2] ml-1">{location}</span>
          </div>
        </div>
        {description && (
          <p className="mt-2 text-[#A2A2A2] text-sm">{description}</p>
        )}
        {points && (
          <ul className="mt-2 text-gray-600 list-disc pl-5">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex flex-row  justify-between space-y-2 md:space-y-0 md:space-x-2 items-center">
          <button className="btn bg-orange-400 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-orange-600">
            View More
          </button>
          <button className="btn bg-orange-400 text-white text-sm px-4 py-2 rounded-lg shadow hover:bg-orange-600">
            Visit Site
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
