import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type PropsType = {
    title: string
    callback: (title: string) => void
}

const EditableSpan = (props: PropsType) => {

    const [toggleIbput, setToggleIbput] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [error, setError] = useState<null | 'Field is required...'>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onBlurHandler = () =>{
        if(title.trim() !== '') {
            props.callback(title)
            setToggleIbput(false)
        }else {
            setError("Field is required...")
        }
    }
    const onDoubleClickHandler =()=>{
        setToggleIbput(true)
    }

    const onKeyPressHandler =(e: KeyboardEvent<HTMLDivElement>)=>{
        if(e.key === 'Enter'){
            onBlurHandler()
        }
    }

    return (
        <span>
            {toggleIbput ? <TextField error={!!error} helperText={error} onKeyPress={onKeyPressHandler} autoFocus value={title} onBlur={onBlurHandler} size={"small"} onChange={onChangeHandler} id="outlined-basic" label="Title by new task..." variant="standard" /> :
                <span onDoubleClick={onDoubleClickHandler}>{title}</span>}
        </span>
    );
};

export default EditableSpan;