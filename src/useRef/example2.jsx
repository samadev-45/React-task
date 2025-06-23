import { useRef, useState } from "react"

const Rupee = () =>{
    const [one,setValue] =useState(0);
    const [two,setNum] =useState(0);
    const setRef = useRef()

    function Inputone() {
        console.log("hello");
        console.log(setRef.current);   
    }
    function InputTwo() {
        console.log("world");
        console.log(setRef.current);   
    }
    return(
        <>
        <input type="number" ref={setRef} value={one} onChange={(e)=> setValue(e.target.value)} />
        <input type="text" value={two} onChange={(e)=> setNum(e.target.value)} />
        <button onClick={Inputone}>Rupees</button>
        <button onClick={InputTwo}>Dollar</button>
        </>
    )
}
export default Rupee;