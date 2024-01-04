import { useEffect, useState } from 'react'
import './App.css'
import { Fragment } from 'react'

function App() {

 const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((obj) => setData(obj))
  }, [])

  return (
    <Fragment>
      <h1> name :{data.name}</h1>
      <h2>{data.email}</h2>
    </Fragment>
  )
}

export default App
