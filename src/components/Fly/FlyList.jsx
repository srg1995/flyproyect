import React from "react";
import Fly from "./Fly";
import useFlies from "../../hooks/useFlies";
import Filter from "./Filter";
import Styles from "./flyList.module.css";
export default function FlyList() {
  const { flies } = useFlies();

  return (
    <>
      <Filter flies={flies} />
      <div className={Styles.fliesContainer}>
        {flies?.map((fly) => {
          return <Fly key={fly.id} type={fly} />;
        })}
      </div>
    </>
  );
}
