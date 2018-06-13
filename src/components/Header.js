import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const logo = require('../img/logo.png');

export default class Header extends Component{

    state = {
        isOpen : false,
    }

    fecharMenu(){
        document.querySelector("#menu-overlay").style.display="none";
    }

    verify(){
        if( document.querySelector("#menu-overlay").style.display==="none" || document.querySelector("#menu-overlay").style.display===""  ){
            document.querySelector("#menu-overlay").style.display="block";
        }else{
            document.querySelector("#menu-overlay").style.display="none";
        }
    }

     render(){
         return(
             <header className="header">
                <div className="container prelative">
                    <Link to="/"><img className="header--logo" src={logo} alt="Cheesecake" prop="Cheesecake" /></Link>
                    
                    <ul className="header--list pull-right ">
                        {/* <li className="header--list-item"> <Link className="politics" to="/news/politics"> Politics </Link> </li>
                        <li className="header--list-item"> <Link className="business" to="/news/business"> Business </Link> </li>
                        <li className="header--list-item"> <Link className="tech" to="/news/tech"> Tech </Link> </li>
                        <li className="header--list-item"> <Link className="science" to="/news/science"> Politics </Link> </li>
                        <li className="header--list-item"> <Link className="sports" to="/news/sports"> Sports </Link> </li> */}
                        <li className="header--list-item"> <Link className="login" to="/login"> Login </Link> </li>
                    </ul>

                    <div className="rotate-center" id="menu-mobile" onClick={this.verify}>&nbsp;</div>
                    <div id="menu-overlay">
                        <ul className="header--list-mobile">
                            {/* <li className="header--list-item"> <Link className="politics" to="/news/politics"> Politics </Link> </li>
                            <li className="header--list-item"> <Link className="business" to="/news/business"> Business </Link> </li>
                            <li className="header--list-item"> <Link className="tech" to="/news/tech"> Tech </Link> </li>
                            <li className="header--list-item"> <Link className="science" to="/news/science"> Politics </Link> </li>
                            <li className="header--list-item"> <Link className="sports" to="/news/sports"> Sports </Link> </li> */}
                            <li onClick={this.fecharMenu} className="header--list-item"> <Link className="login" to="/login"> Login </Link> </li>
                        </ul>
                    </div>

                </div>
             </header>
         )
     }
}

