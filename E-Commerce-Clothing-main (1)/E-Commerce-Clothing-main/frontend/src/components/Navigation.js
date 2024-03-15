import React from 'react'
import 'tachyons';
import './nav.css'
import { Link } from "react-router-dom";
import cart from "./cart.png"
import { authState, searchState, cartState } from "../states/atoms"
import { useRecoilState, useRecoilValue } from "recoil"
import putNotification from "./Notification"

const Navigation = () => {
    const [authNed, setisauth] = useRecoilState(authState)
    const [search, setSearch] = useRecoilState(searchState)
    const [item, _] = useRecoilState(cartState)

    const getValue = () =>{
        if(item.length===0){
            return 0
        }
        let len = item.map(d => d?.quantity || 0).reduce((a,b) => a+b, 0)
        return len
    }
    const signout = async () => {
        localStorage.removeItem("token");
        setisauth(false)
        putNotification("Successful", "You have been successfully logged out!!")
    }

    return (
        <div className="navbar navbar-expand-lg navbar-dark" style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontSize: "20px",backgroundColor: "black" }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link style={{ fontSize: "20px"}} to='/' ><p className="logo" ><img src="images/logo-whi.png" width="150px" /></p></Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link style={{ rextDecoration: 'none' }} to='/store' > <p className="nav-link dim">Home<span className="sr-only">(current)</span> </p></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ textDecoration: 'none' }} to='/newarrivals' > <p className="nav-link">New Arrivals</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ textDecoration: 'none' }} to='/discount' > <p className="nav-link">Cheap Store</p></Link>
                    </li>
                    <li className="nav-item">
                        <Link style={{ textDecoration: 'none' }} to='/orders' > <p className="nav-link">Past Orders</p></Link>
                    </li>

                </ul>
                <div className="form-inline my-2 my-lg-0 pa0">
                           
                    {!authNed ?
                        <div>
                            <a className='btn-SignIn' href="/login">Sign In</a>
                            <a class="btn-SignUp" href="/register">Sign Up</a>
                        </div> :
                        <button class="ant-btn ant-btn-danger ant-btn-lg" onClick={signout}>Sign Out</button>
                    }
                    <Link style={{ textDecoration:"none", position: "relative", textAlign: "center" }} to="/checkout">
                        <img src={cart} height="40" />
                        <h4 style={{ position: "absolute", top: "10px", left: "14px" }}>{getValue()}</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
