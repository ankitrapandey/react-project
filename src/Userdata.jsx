import React, { useState } from "react";
const Userdata = () => {
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);

    const getuser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json));
    }
    const getpost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPost(json));
    }
    return (
        <>
            <button style={{ margin: "1rem" }} onClick={getuser}>getuserdata</button>
            <button onClick={getpost}>getpostdata</button>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userid</th>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">body</th>
                    </tr>
                </thead>
                <tbody>
                    {post && post.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.userid}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    )

}
export default Userdata;