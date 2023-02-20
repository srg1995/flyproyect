import FlyList from "../components/Fly/FlyList";
import Title from "../components/Title/Title";

import { Link } from "react-router-dom";
import { FliesContextProvider } from "../context/FliesContext";

export default function FlyPage() {
  return (
    <>
      <FliesContextProvider>
        <Link className="m-16" to="/">
          Home
        </Link>
        <Title text="FlyProyect" />
        <FlyList />
      </FliesContextProvider>
    </>
  );
}
