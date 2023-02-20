import  { useContext } from 'react'
import { FliesAdapter } from '../adapters/Fly';
import { FliesContextProvider } from '../context/FliesContext';
import getFlies from '../services/getFlies';

export default function FliesStore() {

  let fliesData
  const [flies, setFlies] = useContext(FliesContextProvider);

  getFlies().then(result => {
    console.log(result)
    fliesData = result
    setFlies(fliesData)
  })
}
