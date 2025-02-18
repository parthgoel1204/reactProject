// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from "./Card"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card username="Tanjiro"/>
      <Card username="Demon Slayer"/>
    </>
  )
}

export default App
