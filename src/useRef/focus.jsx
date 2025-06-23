import React,{useRef} from "react";

function Focus() {
    const inputFocus = useRef();
    const Foc = () => {
       inputFocus.current.value="hello"; 
    }
    return(
        <>
        <input type="text" ref={inputFocus} />
        <button onClick={Foc}>Focus input</button>
        </>
    )
}
export default Focus;