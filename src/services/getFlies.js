import { FliesAdapter } from "../adapters/Fly";
import fliesData from "../assets/mocks/flies.json"

export default function getFlies() {
  const flies = FliesAdapter(fliesData.flies)

  return flies;
}