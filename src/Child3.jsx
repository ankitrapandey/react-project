import React, { useContext } from "react";
import { data } from "./App";

const Child3 = (b) => {
    const a = useContext(data);

    return (
        <>
            {/* <h1>child3</h1>
            <h1> {Object.entries(c)}</h1> */}


            {a.map((b) => (
                <div>
                    <p>Name: {b.name}</p>
                    <p>Age: {b.age}</p>
                    <p>Place: {b.place}</p>
                </div>
            ))}
          
        </>
    )
}
export default Child3;