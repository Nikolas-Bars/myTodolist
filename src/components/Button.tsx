import React from "react";
import {FilterType} from "../App";

type ButtonPropsType = {
    title: string
    callback: ()=>void
    filter?: FilterType
}



const Button =(props: ButtonPropsType)=>{
    return (

        <button onClick={props.callback}>{props.title}</button>

    )
}


export default Button

