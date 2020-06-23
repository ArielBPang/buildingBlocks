import React, { Component } from "react";

class Header extends Component{
    render() {
        return (
        <div style={ headerStyle}> This is our HEADER component.</div>
        )
    }
}

const headerStyle ={
    height: '80px',
    border: "1px dotted black",
    background: "#6aa84f"
}

export default Header;