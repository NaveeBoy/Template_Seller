import React from 'react';
import { FaHeart, FaShoppingCart, FaTag } from 'react-icons/fa';

function TemplateCard({ template }) {
  return (
    <div className=" shadow-md rounded-lg overflow-hidden" style={{background:"#DDDDDD"}}>
      <img src={template.thumbnail} alt={template.title} className="w-full h-48 p-1" style={{borderRadius:"10px"}}/>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{template.title}</h2>
        <p className="text-gray-600 mb-4">{template.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-green-600">
            <FaTag className="inline mr-1" />
            ${template.price}
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
        <div className="flex space-x-4">
        <button className="btn btn-success flex-grow" style={{background:"blue",color:"white",height:"50px",borderRadius:"50px" ,width:"100px"}}>
             Live Demo
          </button>
          <button className="btn btn-success flex-grow" style={{background:"green",color:"white",height:"50px",borderRadius:"50px",width:"100px" }}>
             Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;