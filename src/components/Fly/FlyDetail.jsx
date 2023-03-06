import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFly } from "../../services/getFlies";
export default function FlyDetail() {
  let { flyid } = useParams();
  const [fly, setFly] = useState({});

  useEffect(() => {
    setFly(getFly(flyid));
    console.log(fly);
  }, []);
  return (
    <>
      <div> Nombre{fly?.name} </div>
      <div> Familia{fly?.type} </div>
      <div>Descripcion {fly?.description} </div>
      <div>
        MESES
        {fly?.months?.map((month, index) => {
          return <p key={index}>-{month}</p>;
        })}
      </div>
      <div>
        TAMAÑOS
        {fly?.size?.map((size, index) => {
          return <p key={index}>-{size}</p>;
        })}
      </div>
      <div> {fly?.location} </div>

      <div>
        <img
          className="w-50 h-50 rounded-full mx-auto my-6"
          src={fly?.image}
          alt="Sunset in the mountains"
        />
      </div>
      <div>
        {fly?.hashtag?.map((hashtag, index) => {
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
      <Link to="/flies">Volver</Link>
    </>
  );
}
