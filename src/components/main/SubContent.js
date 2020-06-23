import React, { Component } from "react";

class SubConent extends Component{
    render() {
        return (
        <div style={ subStyle}> Sup.</div>
        )
    }
}

const subStyle ={
    display: 'inline-block',
    margin:'10px 10px 10px 10px',
    width: '23vw',
    height: '23vw',
    border: "1px dotted black",
    background: "#ffd966"
}

export default SubConent;