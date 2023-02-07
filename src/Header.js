// import { useState } from "react";
import './styles/header.css';


const Header = ({title}) => {
    // hamburger useState => https://youtu.be/gAGcjlJyKk0
    // const [hamb, setHamb] = useState("display");
    // const [nav, setNav] = useState("displayNone");
    // const [isMenuClicked, setIsMenuClicked] = useState(false);
    // const update = () => {
    //     if(!isMenuClicked){
    //         setHamb("displayNone")
    //         setNav("nav1")
    //     }
    //     else{
    //         setHamb("display");
    //         setNav("displayNone");
    //     }
    //     setIsMenuClicked(!isMenuClicked);
    // }
    return(
        // <header>
        //     <div>
        //         Danielle David Portfolio
        //     </div>
        // </header>
        <header className="App-header">
            <h1> <a href="/">{title? title : "elle0elle"}</a> </h1>
            
            {/* <nav className = {nav} id="navdisplay" >
                <ul className="nav2" >
                    <li><a style = {{color: "black"}} href=" " onClick={update} >&times;</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/bookReviews">Book Reviews</a></li>
                    <li><a href="/aboutMe">About Me</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <button className = {hamb} onClick={update} id="hamburger">&#9776;</button> */}
        </header>
    )
}

export default Header;