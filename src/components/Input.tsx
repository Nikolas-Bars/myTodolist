import React, {ChangeEvent} from "react";

type InputPropsType = {
    title: string
    callback: (title: string) => void
}

const Input =(props: InputPropsType)=>{



    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>)=>{
        props.callback(e.currentTarget.value)
        console.log(props.title)
    }

    return (
        <input placeholder={'Tap here...'} onChange={onChangeHandler} value={props.title}/>
    )
}


export default Input

