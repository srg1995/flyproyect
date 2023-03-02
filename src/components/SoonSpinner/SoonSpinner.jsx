import React from "react";
import Subtitle from "../Title/Subtitle";
import Spinner from "./soonSpinner.module.css";
export default function SoonSpinner() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen">
      <div class={Spinner.spinner}></div>
      <Subtitle text="PROXIMAMENTE" />
    </div>
  );
}
