// import React, { useState } from 'react';

// function Counter () {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2 style={{textAlign:'center',paddingTop:'6rem'}}>  NumberCount: {count}</h2>
//       <button style={{marginLeft:'38rem',marginTop:'2rem',}} onClick={increment}>Increment</button>
//       <button style={{marginLeft:'2rem'}} onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

// import React from "react";
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(1);

  const Increment = () => {
    
      setCount(count + 1);
    console.log(count);
  };

  const Decrement = () => {
    setCount(count - 1);
  console.log(count);
};
const Square = () => {
  setCount(count*count);
console.log(count);
};

  return (
    <>
      <center>
        <h1>Counter</h1>
        <h2>Number==={count}</h2>
        <button onClick={() => Increment()}>Increment</button>
        <button onClick={()=> Decrement()}>Decrement</button>
        <button onClick={()=> Square()}>Square</button>
      </center>
    </>
  );
}
export default Counter;