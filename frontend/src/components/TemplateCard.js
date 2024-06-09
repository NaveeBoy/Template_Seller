import React from "react";
import { FaHeart, FaRegEye, FaShoppingCart, FaTag } from "react-icons/fa";

function TemplateCard({ template }) {
  return (
    <div
      className=" shadow-md rounded-lg overflow-hidden"
      style={{ background: "#DDDDDD" }}
    >
      <img
        src={template.thumbnail}
        alt={template.title}
        className="w-full h-48 p-1"
        style={{ borderRadius: "10px" }}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{template.title}</h2>
        <p className="text-gray-600 mb-4">{template.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-green-600">
            <FaTag className="inline mr-1" />${template.price}
          </span>
          <div className="flex space-x-2">
            <button className="btn btn-secondary text-sm">
              <FaHeart className="mr-1" /> Favorite
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-secondary text-sm">
              <FaShoppingCart className="mr-1" /> Favorite
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center px-4 py-2"
            style={{ minWidth: "90px", borderRadius: "10px", height: "40px" }}
          >
            <FaRegEye />
            &nbsp; Live Demo
          </a>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center">
            <FaShoppingCart className="mr-2" /> Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
