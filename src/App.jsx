import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { PageRoutes } from './routes'


function App() {
  

  const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches

  const lightTheme = {
    backgroundColor: "white",
    color: "#2c3338"
  }

  const darkTheme = {
    backgroundColor: "#1f2123",
    color: "#fff"
  }



  return (
    <div style={isDark ? darkTheme : lightTheme}><PageRoutes/></div>
    // <PageRoutes/>

  )
}

export default App
