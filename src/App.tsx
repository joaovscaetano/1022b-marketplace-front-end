import { useEffect, useState } from 'react'
import './App.css'

function App() {
useEffect(()=>{
  fetch("https://one022b-marketplace-ltd9.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(data=>console.log(data))
  console.log("Executei o useEffect")
  
},[])
  return (
    <>
    </>
  )
}

export default App