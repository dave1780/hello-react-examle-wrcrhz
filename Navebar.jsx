import React from "react"
import Home from "./Components/Home"
import Menu from "./Components/Menu"
import About from "./Components/About"

const NaveBar=()=>{
  return(
   <>
   <nav class="nav">
     <li><a href="./Components/Home">Home</a>
     <a href="/Menu ">Menu</a>
     <a href= "/About">About</a></li>
   </nav>
   </>
  )
}
export default NaveBar;