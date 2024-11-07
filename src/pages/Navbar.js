import React from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact'



const Navbar=()=>{
    return(<div>
        <div className="hom"><a className="hom" href="#H">Home</a><a className="hom" href="#A">About</a><a className="hom"  href="#C">Contact</a></div>
<div ><h1 className="dis" id="H"><Home/></h1><h1 className="dis" id="A"><About/></h1><h1 className="dis" id="C"><Contact/></h1>
</div>
</div>
    )
}
export default Navbar;