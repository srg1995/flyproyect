import React from "react";

import Fly from "./Fly";

import useFlies from "../../hooks/useFlies";
import Filter from "./Filter";
import { FliesContextProvider } from "../../context/FliesContext";
import Context from "../../context/staticContext";

export default function FlyList() {
  const { flies, loading } = useFlies();

  return (
    <>
      <Context.Provider value="hola">
        {loading ? (
          <p>cargando</p>
        ) : (
          <>
            <Filter flies={flies} />
            <div className="w-11/12 mx-auto overflow-y-auto">
              <div className="flex justify-center flex-wrap gap-10 overflow-y-auto">
                {flies?.map((fly, index) => {
                  return <Fly key={index} type={fly} />;
                })}
              </div>
            </div>
          </>
        )}
      </Context.Provider>
    </>
  );
}
