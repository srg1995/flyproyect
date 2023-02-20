import React from "react";
export default function Fly({ type }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-2 w-96 flex flex-col justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700 text-center">
          {type.name}
        </div>
        <img
          className="w-60 h-60 rounded-full mx-auto my-6"
          src={type.image}
          alt="Sunset in the mountains"
        />
        <p className="text-gray-700 text-base">{type.description}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {type.hashtag?.map((hashtag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{hashtag}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
