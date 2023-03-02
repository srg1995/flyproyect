import React from "react";
export default function Fly({ type }) {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg dark:bg-white bg-lime-50 m-2 flex flex-col justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-amber-900 text-center">
          {type.name}
        </div>
        <img
          className="w-50 h-50 rounded-full mx-auto my-6"
          src={type.image}
          alt="Sunset in the mountains"
        />
        <p className="text-amber-800 text-base">{type.description}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {type.hashtag?.map((hashtag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-lime-600 dark:bg-lime-900 rounded-full px-4 py-2 text-sm font-semibold text-white dark:text-amber-200 mr-2 mb-2"
            >
              #{hashtag}
            </span>
          );
        })}
      </div>
    </div>
  );
}
