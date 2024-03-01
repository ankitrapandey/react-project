import React, { useState, useEffect } from "react";
import Result from "./Result";

const Fech = () => {
    const [url, seturl] = useState();
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json));
    }, [url]);

    return (
        <>
            <button onClick={() => seturl('https://jsonplaceholder.typicode.com/users')}>Showuserdata</button>
            <button onClick={() => seturl('https://jsonplaceholder.typicode.com/posts')}>ShowPostdata</button>

            {data && <Result data={data} />}
        </>
    )
}
export default Fech;


