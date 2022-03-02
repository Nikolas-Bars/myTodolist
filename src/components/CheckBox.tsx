import React, {ChangeEvent} from "react";

type CheckBoxType = {
    checked: boolean
    callback: (e: ChangeEvent<HTMLInputElement>)=>void
}

const CheckBox =(props: CheckBoxType)=>{
    return (
        <input type={'checkbox'} onChange={props.callback} checked={props.checked}/>
    )
}

export default CheckBox

