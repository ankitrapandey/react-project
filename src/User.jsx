import React, { useState } from "react";

// export const User=()=>{
//     let data="ankit";
//     const A=()=>{
//         let data="aman";
//         alert(data);
//     }
//     return(
//         <>
//        <h1>{data}</h1>
//         {/* <button onClick={A()}>click me!</button> */}
//         {/* <button onClick={A}>click me!</button> */}
//         {/* <button onClick={()=>alert("hey man")}>click me!</button> */}
//         <button onClick={A}>click me!</button>
        

//         </>
//     );
// }

export const User=()=>{
     const [data,setData]=useState("ankit");
     const A=()=>{
        setData("aman");
     }
     console.log('update value');
return(
    <>
    <h1>{data}</h1>
    <button onClick={A}>click me!</button>
    </>

);
}