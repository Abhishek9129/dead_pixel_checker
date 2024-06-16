import { useState } from "react"


function App() {
  const [color,setcolor]=useState("olive");

  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
     <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2"> 
        <div className=" flex flex-wrap justify-center gap-3 sadow-lg bg-white px-6 py-2 rounded-3xl">
          <button className="outline-style: groove outline-width:2 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>{setcolor('red')}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>{setcolor('blue')}}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>{setcolor('green')}}>green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}} onClick={()=>{setcolor('yellow')}}>yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lightblue"}} onClick={()=>{setcolor('lightblue')}}>lightblue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=>{setcolor('orange')}}>orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>{setcolor('olive')}}>olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"grey"}} onClick={()=>{setcolor('grey')}}>grey</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>{setcolor('purple')}}>purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Lavender"}} onClick={()=>{setcolor('Lavender')}}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}} onClick={()=>{setcolor('white')}}>white</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={()=>{setcolor('black')}}>black</button>

        </div>
     </div>
    </div>
      
  
  )
}

export default App
