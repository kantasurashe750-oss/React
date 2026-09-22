import { useState } from "react"
import Header from "./Header"
import Footer from "./footer"
// import Student from "./Student"

// function App(){
//   const productName = "wireless"
//   const price = 500
//   const quantity = 2

//   return(
//     <div>
//       <Header /> 
//       <h1>welcome students</h1>
//       <h1>{productName}</h1>
//       <p>price : {price}</p>
//       <p>quantity : {quantity}</p>
//       <p>Total :{price * quantity}</p>
//       <Footer />
//     </div>
   
//   )
// }

// return(

//   <div>
//     <Student name="Om" age={21} branch="AIML" />
//     <Student name="Vedant" age={21} branch="Comps" />
//     <Student name="nishant" age={21} branch="IT" />
//   </div>
// )
// }

function App(){

  const[ count , setCount] = useState(5)

function handleClick(){

  //setmessage("Welcome to my Collge")
    setCount(count + 1)
}

return(
  <div>
    <button onClick={handleClick}>
        click me
    </button>

    <p>{message}</p>
  </div>
)
}
export default App 

// function Header (){

//   return (
//     <h1> My collage website</h1>
//   )
// }

// function Footer(){

//   return(
//     <h1> 2026 my college </h1>
//   )
// }


