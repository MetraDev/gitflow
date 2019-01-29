import React from 'react';
import {Component} from 'react';
import './login.scss'


class Login extends Component{

constructor() {
    super();
    this.state = {
        url: '/',


    }
}




render() {

    return (
        <div className={"App"}>
            <nav className={" colores card-header mb-4"}>
                <h1 className={"text-dark"}>Proyecto</h1>
                <div className={"col-md-4"}>
                <span className={"badge badge badge-light ml-0"}>
                </span>
                </div>
            </nav>
            <div>
               //codigo Componente

            </div>
           <footer className={"footer"}>
                <p className={"ml-5"}>(XD) 2019 Robert Enterprise, All rights reserved</p>
           </footer>

        </div>)
}
}

export default Login;