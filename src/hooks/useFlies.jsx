import { useEffect, useContext, useState } from "react";
import FliesContext from "../context/FliesContext";

export default function useFlies() {
  const [loading, setLoading] = useState(true);
  //const [flies, setFlies] = useState(true);
  const [flies] = useContext(FliesContext);

  useEffect(() => {
    
    setLoading(false);
  }, [flies, loading]);

  return { flies, loading };
}
