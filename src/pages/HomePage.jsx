import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <header className="App-header">
        <nav>
          <ul>
            <li className="bg-white text-green-900 font-bold rounded-full px-8 py-1 my-2 hover:bg-green-200 flex">
              <Link className="w-full text-center" to="/">
                Home
              </Link>
            </li>
            <li className="bg-white text-green-900 font-bold rounded-full px-8 py-1 my-2 hover:bg-green-200 flex">
              <Link className="w-full text-center" to="/flies">
                Moscas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
