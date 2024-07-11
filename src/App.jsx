
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Headers from './components/Headers';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className=''>
      <Headers></Headers>
      <h1 className='text-6xl font-bold text-purple-500 text-center my-4'>Coffee Shop</h1>

      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard coffees={coffees} key={coffee._id} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
