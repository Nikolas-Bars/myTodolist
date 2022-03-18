import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';


type PropsType = {
    addItem: (title: string)=>void
}


export const AddItemForm: React.FC<PropsType> = (props) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItemHundler =()=>{
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItemHundler();
        }
    }



    return (
        <div>
            <TextField  style={{backgroundColor: 'wheate'}} size={"small"} id="outlined-basic" label="Enter the title" variant="outlined" value={title}
                       error={!!error}
                       helperText={error}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}

            />
            <IconButton size={'small'}  onClick={addItemHundler}><AddCircleIcon style={{color: 'pink'}} /></IconButton>


        </div>
    );
};

