// import Ankit from "./Ankit";

// const Ankit1=(prop)=>{
// let objaa={
//     name:"ankit",
//     age:"20",
//     add:"nirala nagar"
// };

// return(
//     <>
//     <Ankit na={objaa}/>

//     <li>Ankit</li>
//     <li>Aman</li>
//     <li>suryanshu</li>
//     <li>Kishan</li>
//     <li>ravnnesh</li>
    
//     </>
// );
// };

// export default Ankit1;

// import React from "react";
//  export const Ankit1=()=>{
//     const A=()=>{
//     if(box.document.getElementById==="green"){
//       box.document.getElementById("box").style.BackGroundColor="black"
     
//     }
//     else{
//         box.document.getElementById("box").style.BackGroundColor="green"
      
//     }
// }
//     return(
//         <>
//         <h1>DARK MODE</h1>
//         <div id="box" style={{color:"black",width:"100%",height:"100%"}}></div>
        
//         <button onClick={A()}> click me!</button>
//         </>
//     )
// }
import React from "react";

 const Toggle = () => {
  const A = () => {
    const box = document.getElementById("box");
    if (box.style.backgroundColor === "green") {
      box.style.backgroundColor = "black";
     
    }
    
     else {
      box.style.backgroundColor = "green";
  
    }
  };

  return (
    <>
      <h1>Hello Ankit!</h1>
      <div id="box" style={{ width: 100, height: 100 }}></div>
      <button onClick={A}>Click me!</button>
    </>
  );
}
export default Toggle;
