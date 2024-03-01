import { createContext } from 'react';
import './App.css';
import Child3 from './Child3'

// import Child1 from "./Child1";

const data=createContext()
const App = () => {
  const a=[
    {
      name:"ankit",
      age:"20",
      place:"rewa"
    }
  ]

  return (
    <>
      <data.Provider value={a}>
        <Child3 />
      </data.Provider>
     
    </>
  );
}
export default App;
export { data }

