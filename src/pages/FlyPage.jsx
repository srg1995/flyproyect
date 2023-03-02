import FlyList from "../components/Fly/FlyList";
import { FliesContextProvider } from "../context/FliesContext";

export default function FlyPage() {
  return (
    <>
      <FliesContextProvider>
        <FlyList />
      </FliesContextProvider>
    </>
  );
}
