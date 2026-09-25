
// import { useState } from "react"
// import { useEffect } from "react"
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

// function App(){

//   const[ count , setCount] = useState(5)

// function handleClick(){

//   //setmessage("Welcome to my Collge")
//     setCount(count + 1)
// }

// return(
//   <div>
//     <button onClick={handleClick}>
//         click me
//     </button>

//     <p>{count}</p>
//   </div>
// )
// }
// export default App 

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


//⭐useState



// function App(){

//   const [count , setCount] = useState(5)

//   function handleclicked(){

//     setCount(count-1)
    
//   }

//   function handleclicked1(){

//     setCount(count+1)
//   }

//   return(

//     <div>
//       <button onClick={handleclicked}>-</button>
//       <button onClick={handleclicked1}>+</button>

//       <p>{count}</p>
//     </div>
    
//   )

// }
// import { useState } from "react"

//ternary operator
// function App(){

//   const isLoggedIn = false

//   return(
//    <div>
//     {isLoggedIn ? <h2>Welcome User!</h2> : <h2>Please Login.</h2>}
//    </div>
//   )
// }

//⭐logical AND &&& rendering 

// function App(){

//   const isAdmin = false 

//   return(
//     <div>
//       {isAdmin && <p>Admin Panel</p>}
//     </div>
//   )
// }

// function App(){

//   const isOnline = true

// return(
//   <div>
//     {isOnline ? <h2>User is Online</h2> : <h2>user is offline</h2>}
//   </div>
// )
// }

//Lists And Keys
// function App(){

//   const fruits = ["Apple " , "Banana" , "Mango"]

//   return(
//     <div>
//       {fruits.map((fruit) => (
//         <h2 key={fruit}>{fruit}</h2>
//       ))}
//     </div>
//   )
// }

// ⭐List and Key complete

// function App(){

//   const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 800 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ]

// return(
//   <div>
//     {products.map((product)=>(
//       <h2 key={product.id}>
//       name: {product.name} <br />
//       price : {product.price}
//       </h2>
//     ))}
//   </div>
  
// )
// }

//⭐Forms part 1 - reading

// import { useState } from "react"

// function App(){

//   const [name, setName] = useState("")

//   return(
//     <div>
//       <input type="text" 
//       value={name}
//       onChange={(event)=>{
//         setName(event.target.value)
//       }}
//       />
//       <button>submit</button>
//       <p>{name}</p>
//     </div>
//   )
// }

//⭐form part 2 - Handling Submit

// import { useState } from "react"

// function App(){

//   const[name, setName] = useState("")

//   function handleSubmit(event){

//     event.preventDefault()
//     console.log(name);
    
//   }

//   return(
    // <div>
    //   <input type="text" 
    //   value={name} 
    //   onChange={(event) =>{
    //     setName(event.target.value)
    //   }} 
    //   />
    // <button onSubmit={handleSubmit}>Submit</button>
    // <p>{name}</p> 
    // </div>



//     <form onSubmit={handleSubmit}>

//       <input type="text" 
//       value={name} 
//       onChange={(event) =>{
//         setName(event.target.value)
//       }} />

//       <button type="submit">submit</button>

//       <p>{name}</p>
//     </form>
    
//   )
// }

//⭐Forms — Part 3: Show Submit Result

// import { useState } from "react"

// function App(){

//   const [name , setName] = useState("")
//   const [message , setMessage] = useState("")

//   function handleSubmit(event){

//     event.preventDefault()
//     setMessage( `hello ${name}`)
//   }
//     return(

//       <form onSubmit={handleSubmit}>

//         <input type="text" 
//         value={name}
//         onChange={(event) =>{
//          setName(event.target.value)
//         }}
//         />

//         <button type="submit">sumit</button>
//         <p>{message}</p>
//       </form>
//     )
//   }

//⭐simple login form

// import { useState } from "react"

// function App(){

//   const [username, setUsername] = useState("")
// const [password, setPassword] = useState("")
// const [message, setMessage] = useState("")

// function handleSubmit(event){

//   event.preventDefault()
//   setMessage(`Welcome ${username}`)
// }

// return(

//   <form onSubmit={handleSubmit}>

//   <input type="text" 
//   value={username}
//    onChange={(event)=>{
//     setUsername(event.target.value)
//   }} />
// <br />
//   <input type="password" 
//   value={password}  
//    onChange={(event)=>{
//     setPassword(event.target.value)
//   }} 
//   />
//   <br />
//   <button type="submit">Login</button>

//   <p>{message}</p>
//   </form>
// )
// }

//⭐useEffect - Part 1

// import { useEffect , useState } from "react"


// function App(){

//   const[count, setCount] = useState(0)

//   useEffect(()=> {
//     setCount("Welcome to React")
    
//   },[count])
//   return(

//     <div>
      
//       <button onClick={()=> setCount(count +1)}>+</button>
//        <p>{count}</p>
//     </div>

    
//   )
// }

// import { useEffect , useState } from "react"


// function App(){

//   const[name, setName] = useState("")
//   const[count, setCount] = useState(0)

//   useEffect(()=> {
//     console.log("Welcome to React")
    
//   },[name])
//   return(

//     <div>
      
//       <button onClick={()=> setCount(count +1)}>+</button>
//        <p>{count}</p>
//     </div>

    
//   )
// }

//⭐useEffect when count changed

// import { useState , useEffect } from "react"

// function App(){

//   const [name , setName] = useState("")

//   useEffect(()=>{
//     console.log("Name changed")
//   },[name])

//   return(

//     <div>

//       <input type="text"
//       value={name}
//       onChange={(event)=>{
//         setName(event.target.value)
//       }} />

//       <p>{name}</p>
//     </div>
//   )
// }

//⭐cleanup function  

// import { useState, useEffect } from "react";

// function App(){

//   const [name, setName]= useState("")

// useEffect(() => {
//   const timer = setInterval(() => {
//     setName("Hello");
//   }, 1000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);

// return(

//   <div>
//     <input 
//     value={name}
//     onChange={(event)=>{
//       setName(event.target.value)
//     }} />

//     <p>{name}</p>
//   </div>

// )
// }

//⭐API calls in react

// import { useEffect,useState } from "react"

// function App(){

// const[prodcuts , setProdcts] = useState([])
// const [loading, setLoading] = useState(true)

// useEffect (()=>{

  
 
//   async function getProducts() {

//   const response = await fetch("https://dummyjson.com/products")

//   const data = await response.json()

//   setProdcts(data.products)

//   setLoading(false)
//   }
//   getProducts()

// },[])

// return(
//   <div>
//     {prodcuts.map((prodcut)=>(
//       <h2 key={prodcut.id}>{prodcut.title}</h2>
//     ))}
//   </div>
// )
// }

//⭐ Next: Loading State

// import { useEffect,useState } from "react"

// function App(){

// const[prodcuts , setProdcts] = useState([])
// const [loading, setLoading] = useState(true)
// const [error , setError] = useState("")

// useEffect (()=>{

 
//   async function getProducts() {

//   const response = await fetch("https://dummyjson.com/products")

//   const data = await response.json()

//   setProdcts(data.products)

//   setLoading(false)

//   } 
  
//   getProducts()
//   }
// },[])

// return(
//   <div>
//     { loading ?(
//       <h2>loading products....</h2>
//     ) : (
//     prodcuts.map((prodcut)=>(
//       <h2 key={prodcut.id}>{prodcut.title}</h2>
//     ))
// )}
//   </div>
// )

// ⭐ Error Handling
// import { useEffect,useState } from "react"

// function App(){

// const[prodcuts , setProdcts] = useState([])
// const [loading, setLoading] = useState(true)
// const [error , setError] = useState("")

// useEffect (()=>{


 
//   async function getProducts() {

//   try{

//   const response = await fetch("https://dummyjson.com/products")

//   const data = await response.json()

//   setProdcts(data.products)

//   setLoading(false)

//   } catch(error){

//     setError("Failed to load products")

//     setLoading(false)
//   }

//   }
//   getProducts()
// },[])

// return(
//   <div>
//     {error ?(
//       <h2>{error}</h2>
//     ) : loading ?(
//       <h2>loading products....</h2>
//     ) : (
//     prodcuts.map((prodcut)=>(
//       <h2 key={prodcut.id}>{prodcut.title} <br />
//       <p><p>Price : {prodcut.price}</p></p>
//       </h2> 
      
//     ))
// )}
//   </div>
// )
// }

//componet : Design and Structure

import productCard from "./ProductCard"
import ProductCard from "./ProductCard"

function App(){

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 3000 },
  { id: 3, name: "Keyboard", price: 1500 }
]

  return(
    <div>
      <h1>my shop</h1>

      {products.map((product) =>(
        <ProductCard 
        key={product.id}
        name={product.name}
        price = {product.price}
         />
      ))}
      

    </div>
  )
}
export default App