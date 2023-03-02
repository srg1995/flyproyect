import { useContext, useRef } from "react";
import { FliesContextProvider } from "../context/FliesContext";
import getFlies from "../services/getFlies";

export default function useFilters() {
  const { flies, setFlies } = useContext(FliesContextProvider);

  const formFilters = useRef();

  const handleFilterType = (e) => {
    let type = flies?.filter((element) => element.type === e.target.value);
    e.target.disabled = true;
    setFlies(type);
  };
  const handleFilterMonth = (e) => {
    let month = flies?.filter((element) =>
      element.months.some((month) => month === e.target.value)
    );
    e.target.disabled = true;
    setFlies(month);
  };
  const handleFilterSize = (e) => {
    let size = flies?.filter((element) =>
      element.size.some((size) => size === e.target.value)
    );
    setFlies(size);
    e.target.disabled = true;
  };

  const handlerClean = (e) => {
    e.preventDefault();

    formFilters.current.reset();
    formFilters.current.disabled = false;
    formFilters.current.elements[0].disabled = false;

    for (let index = 0; index < formFilters.current.elements.length; index++) {
      formFilters.current.elements[index].disabled = false;
    }
    setFlies(getFlies());
  };

  return {
    flies,
    handleFilterMonth,
    handleFilterSize,
    handleFilterType,
    handlerClean,
  };
}
