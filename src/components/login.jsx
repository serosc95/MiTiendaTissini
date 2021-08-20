import React, {useRef, useState} from 'react'
import '../css/default.css'
import '../css/style.css'
import logo from '../images/logo.png'

export default function Login(props){

    const [error, setError] = useState(true);
    const refUsuaio = useRef(null);
    const usuario = '7865470213';

    const handleLogin=(event)=>{
        if(event.key === 'Enter'){
            const user = refUsuaio.current.value;
            const access = user === usuario ?  true : false;
            props.acceder(access);
            setError(access);
        }
    }

    return(
        <section className="login">
            <div>
                <figure>
                    <img src={logo} alt="Logo Company" width="40%"/>
                </figure>
                <div className="textInfo">
                    <h3>Ingresa el número de teléfono</h3>
                    <h3>de tu asesora independiente.</h3>
                </div>
                <div className="inputLogin">

                    <input
                        type="text"
                        placeholder="Telefono"
                        onKeyPress={handleLogin}
                        ref={refUsuaio}
                    />
                </div>

                {
                    !error &&
                    <div className="errorLogin">
                        <p>
                            El numero es incorrecto, no esta registrado
                        </p>
                    </div>
                }

            </div>
        </section>
    )
}