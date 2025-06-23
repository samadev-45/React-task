import { useState } from "react";

function Form() {
    const [name,setname] = useState("")
    const [age,setage] = useState("")
    const [submit, submitdata] = useState("false")


    return (
        <>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        <input type="text" value={age} onChange={(e) => setage(e.target.value)} />
        <button onClick={() => submitdata(true)}> Submit</button>
        </>
    )
}

export default Form;