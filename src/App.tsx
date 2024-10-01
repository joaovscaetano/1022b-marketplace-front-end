import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState()

  useEffect(() => {
    fetch("https://one022b-marketplace-ltd9.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(data => console.log(data))
  }, [])
  return (
    <>
      {
        console.log(produtos)
      }
    </>
  )
}

export default App