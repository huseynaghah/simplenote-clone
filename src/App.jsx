import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { PageRoutes } from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <PageRoutes/>
  )
}

export default App
