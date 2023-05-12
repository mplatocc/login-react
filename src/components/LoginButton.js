import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return(
       <div>
       <h1>Universidad Mariano Gálvez de Guatemala</h1>
       <h2>Maestría en Seguridad Informática</h2>
       <button 
       onClick={()=> loginWithRedirect()}>Login</button>
       </div>
       
    )
}

export default LoginButton