import {useState,useEffect} from 'react';

function HooktoHandle() {
    const [count,setCount]= useState(0);

    useEffect(() =>{
        document.title=`you entered ${count} time`
            console.log("hai");


    },[count])

    
    return(
        <>
        <button onClick={() =>setCount(prev => prev+1)}>click Me</button>
        </>
    )
};
export default HooktoHandle;