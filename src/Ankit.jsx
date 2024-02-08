
// const Ankit = () => {

//     const B = () => {
//         return (
//             <>
//                 <h1>Hello js</h1>
//             </>
//         );
//     }
//     const C = () => {
//         return (
//             <>
//                 <h1>Hello HTML</h1>

//             </>
//         );
//     }
//     const D = () => {
//         return (
//             <>
//                 <h1>Hello king john</h1>

//             </>
//         );
//     }
//     return (
//         <>
//             <h1>Hello js</h1>
//             <h1>HEllo react.js</h1>
//             <B/> 
//             <C/>
//             <D/>

//         </>
//     );

// }
// export default Ankit;


// const Ankit=()=>{
//     const add=(a,b)=>{
//         console.log("add value is",a,b)
//     }
//     return(
//         <>
//         <button onClick={()=>add(10,20)}> show result</button>
//         </>
//     );
// }
// export default Ankit;
// const Ankit = () => {
//     const name=(name,age)=>{
//         console.log("value of a and b",name,age)
//     }
//     return (
//         <>
//             <button onMouseOver={()=>name("Ankit","20")}> over button</button>
//         </>
//     );
// }
// export default Ankit;
// import Ankit1 from "./Ankit1";
// import React from "react";
// const Ankit=()=>{
// const keypress=()=>{
//     let a=document.getElementById("key");
//     a.style.backgroundColor="orange"
// }
// const keypress1=()=>{
//     let b=document.getElementById("key");
//     b.style.backgroundColor="red"
// }
// return(
//     <>
//    <h1 style={{color:"yellow"}} ></h1> 
//    <form action="">
//     <input  type="text" id="key" onKeyDown={keypress} onKeyUp={keypress1} />
   
//     </form>
    
//     </>
// )
// }
// export default Ankit;
  

// import React,{useState} from "react";

// export default function Counter() {
//     let [data, setData] = useState(0);
//     function Increase(){
//         setData(data + 1);
//     };
//     const Decrease=()=>{
//         setData(data - 1);
//     }
//     return (
//         <div>
//             <h1 id="count">{data}</h1>
//             <button onClick={Decrease}>Decrease counter</button>
//             <button onClick={Increase}>Increase counter</button>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import './App.css'; // Import your CSS file

// const Ankit = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const DarkMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <button  onClick={DarkMode}>
//         {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//       </button>
      
//     </div>
//   );
// };

// export default Ankit;


import React, { useState } from "react";

function Ankit() {
    const [data,setData]=useState([])
  const getuser = () => {
    // console.log("aman singh");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  };
  const getpost = () => {
    console.log("dr.done");
  };
  return (
    <div>
      <button onClick={() => getuser()}>Get User </button>
      <button onClick={() => getpost()}>Get Post</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        {data &&
          data.map((user) => (
            <tr style={{listStyle:"none",color:"blue"}} >
              <td >Name: {user.name}</td>
             <td> Age:{user.age},</td>
             <td> Email:{user.email}</td>
            </tr>
          ))}

      </table>
     
    </div>
  );
}
export default Ankit;