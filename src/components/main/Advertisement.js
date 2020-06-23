import React, { Component } from "react";

class Advertisement extends Component{
    render() {
        return (
        <div style={ adStyle}> Ad.</div>
        )
    }
}

const adStyle ={
    border: "1px dotted black",
    background: "#b4a7d6",
    margin: '20px 10px',
    height: '100px',
}

export default Advertisement;