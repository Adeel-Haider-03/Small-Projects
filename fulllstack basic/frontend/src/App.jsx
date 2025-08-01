import { useState,useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  async function getQuotes() {
    try {
      const response=await axios.get("/api/quotes")
      const allQuotes=response.data;
      
      setQuotes(allQuotes)
      console.log(response)
    
    } catch (error) {
      console.log(error);
      
    }
  }

useEffect(()=>{
  getQuotes()
},[])

  return (
    <>
    <h1>Qoutes</h1>
    {quotes && quotes.map((quote,index)=>{
      return <div key={index}>
        <h3>{quote.quote}</h3>
        <h5>{quote.author}</h5>
      </div>
    })}
    </>
  )
}

export default App
