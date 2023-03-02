import { useContext } from "react";
import FliesContext from "../context/FliesContext";

export default function useFlies() {
  const { flies, setFlies } = useContext(FliesContext);

  return { flies, setFlies };
}
