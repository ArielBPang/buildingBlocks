import React, { Component } from "react";

class Navigation extends Component{
    render() {
        return (
        <div style={ navStyle}> NAG BICHH.</div>
        )
    }
}

const navStyle ={
    margin: '2vh 0vw',
    height: '450px',
    width: '16vw',
    display: 'block',
    border: "1px dotted black",
    background: "#6fa8dc",
    position: 'absolute'
}

export default Navigation;