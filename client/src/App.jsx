import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigation'
import { Fragment } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
     <Navigation/>
    </Fragment>
  )
}

export default App
