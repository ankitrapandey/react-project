import React from "react";

const Result = (props) => {
    console.log("data component", Object.keys(props.data[0]));
    return (
        <>
            <table className="tabel">
                <thead>
                    <tr>
                        {Object.keys(props.data[0]).map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((data) => (
                        <tr>
                            {Object.keys(data).map((key) => (
                                typeof data[key] === 'object' ?
                                    <td>
                                            <select>
                                                
                                                {Object.entries(data[key]).map(([x, y]) => (
                                                    <option>{x}==={typeof (y)==='object'?"ankit":y}</option>

                                                ))}

                                            
                                            </select>
                                                    
                                    </td>
                                    :
                                    <td>{data[key]}</td>
                            ))}
                        </tr>

                    ))}
                </tbody>
            </table>
        </>

    )
}
export default Result;



