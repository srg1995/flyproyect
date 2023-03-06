import React from "react";
import { Link } from "react-router-dom";
export default function Fly({ type }) {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg dark:bg-lime-50 bg-lime-900 m-2 flex flex-col justify-between">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white dark:text-amber-900 text-center">
          {type.name}
        </div>
        <img
          className="w-50 h-50 rounded-full mx-auto my-6"
          src={type.image}
          alt="Sunset in the mountains"
        />
        <p className=" text-white dark:text-amber-800 text-base">
          {type.description.substr(0, 70)}...
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 mb-3">
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-amber-200 bg-lime-600 rounded-lg hover:bg-amber-400  dark:bg-lime-800 dark:hover:bg-lime-600"
          to={`/flies/${type.id}`}
        >
          Ver mas
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
