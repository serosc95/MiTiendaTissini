import React from 'react'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
import '../css/default.css'
import '../css/style.css'
import '../css/fontello.css'

export default function Home(props){
    
    const handleLogout=()=>{
        props.acceder(false);
    }

    return(
        <div className="home">
            <header>
                <h1>Ferchitos Store Tissini App</h1>
                <div>
                    <span className="icon-logout" onClick={handleLogout}></span>
                </div>
            </header>
            <section>
                <div>
                    <figure>
                        <img src={banner1} alt="main banner" width="100%"/>
                    </figure>
                    <figure>
                        <img src={banner2} alt="main banner" width="100%"/>
                    </figure>
                    <figure>
                        <img src={banner3} alt="main banner" width="100%"/>
                    </figure>
                    <figure>
                        <img src={banner4} alt="main banner" width="100%"/>
                    </figure>
                    <div className="banner1"><div></div></div>
                    <div>
                        <h3>VER CATALOGO DIGITAL!</h3>
                        <span className="icon-book-open"></span>
                    </div>
                </div>
            </section>
            <footer>
                <div>
                    <div><span className="icon-home-outline"></span><h4>Categorias</h4></div>
                    <div><span className="icon-tags"></span><h4>Catalogo</h4></div>
                    <div><span className="icon-basket"></span><h4>Carrito</h4></div>
                </div>
            </footer>
        </div>
    )
}