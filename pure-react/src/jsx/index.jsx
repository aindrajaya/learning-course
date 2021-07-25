import React from "react" //this one line code was function to call React library so you can use the JSX

function JSX(){
  return(
    <div>
      {/* This one is called JSX */}
      {/**
       * In this JSX if you want to make a comment, just wrap it with curly brackets {}, and then type an usual comment syntax with javascript inside it.
       * So if you want to call JavaScript inside this JSX don't forget to wrap it with curly brackets {}. 
      */}
      {/* Ex: console.log() ==>  */}
      {console.log("this is javascript inside JSX")}

      <h1>Helloooo from JSX!!!</h1> {/** The h1 element isn't a HTML element, it just JavaScript code that make similar with HTML Tag element*/}
    </div>
  )
}

export default JSX