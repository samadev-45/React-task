import { useState } from "react"

const Showname = () => {
    const [inp,setInput] = useState();
    const [name,setName] = useState();
    function handle(){
        setName(inp);
        setInput("")
    } 

    return (
        <>
        {name ? (<h2>Your name:{name}</h2>):null};
        <input type="text" value={inp} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handle}>Show</button>
        </>
    )
}
export default Showname