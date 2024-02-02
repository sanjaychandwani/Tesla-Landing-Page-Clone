import React from 'react'
import Section from './Components/Section'
import Header from  './Components/Header'
import './App.css' 


function App() {


  return (
    <>
    
      <Header/>




      <Section
        title="Model S"
        desc="The epitome of electric sedans, combining performance, efficiency, and innovation in a sleek design."
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        ico={true}
        isVideo={true} // Keep isVideo prop here for the first section
        color = "white"
      />

      <Section
        title="Model Y"
        desc=" An eco-friendly crossover with advanced technology for a sustainable and thrilling driving experience."
        bgImg="model-y.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />

      <Section
        title="Model 3"
        desc= "The epitome of electric luxury and performance."
        bgImg="model-x.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />

      <Section
        title="Model X"
        desc="A futuristic SUV redefining luxury and performance, showcasing Tesla's latest advancements in electric vehicle technology."
        bgImg="model-X.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />

      <Section 
      
        desc="All New Electric Pickup Truck - Cyber Truck | "
        bgImg="cybertruck.avif"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
        color= "white"
      />

      <Section
        title="Solar Roof"
        desc="Produce Clean Energy from your roof"
        bgImg="solar-roof.jpg"
        leftbtn="Custom Order"
        rightbtn="Existing Inventory"
      />

      <Section
        title="Accessories"
        bgImg="accessories.jpg"
        leftbtn="Order Now"
        blackbg={true}
      /> 

    </>
  )
}

export default App