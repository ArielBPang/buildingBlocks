import SubContent from "./SubContent";
import Advertisement from "./Advertisement";
import React, { Component } from "react";

class MainContent extends Component{
    render() {
        return (
        <div style={ mainStyle}>
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
        </div>

        )
    }
}

const mainStyle ={
    display: 'inline-block',
    padding:'10px',
    width: '76.5vw',
    height: '450px',
    margin: "2vh 0vw 0vh 17vw",
    border: "1px solid black",
    background: "#e06666"
}

export default MainContent;