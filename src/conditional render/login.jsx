import { useState } from "react"

const Login = () => {
    const [isAuthenticate,isAuthenticatefun] = useState(false);

    return(
        <>
        {isAuthenticate ? 
            (<h1>Succesfully logedin</h1>)
        :
            (<button onClick={()=> isAuthenticatefun(true)}>Log in</button>)
}
        </>
    )
}
export default Login;