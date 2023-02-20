import React from "react";
export default function Card({type}) {
  console.log("componenteeeeeeeee")
  console.log(type)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">


      <img
        className="w-full"
        src={type.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{type.name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{type.months}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{type.type}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #{type.name}
        </span>
      </div>
    </div>
  );
}


/**
 * 
 * 
 * 
 * 
 Mosca{
  id: number,
  name: string
  type: string
  months: []
  size:[] 
  location: []
  image: string
 }
 */