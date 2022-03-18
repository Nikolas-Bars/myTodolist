import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {Button, ButtonGroup, Checkbox, IconButton, List, ListItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditableSpan from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    changeTask: (title: string, idTask: string, tdid: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {

        props.addTask(title, props.id);

    }


    const changeTask = (title: string, idTask: string) => {
        props.changeTask(title, idTask, props.id)
    }


    const removeTodolist = () => props.removeTodolist(props.id)
    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <div style={{width: 'fit-content', textAlign: 'center'}}>
        <h3> {props.title}
            <IconButton size={'small'} onClick={removeTodolist}><DeleteIcon/></IconButton>
        </h3>
        <div>
            {/*<input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>*/}
            <AddItemForm addItem={addTask}/>

        </div>
        <List>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <div style={{display: 'flex', justifyContent: 'space-between'}} key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox size={'small'} style={{color: 'pink'}} onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan callback={(title) => {
                            changeTask(title, t.id)
                        }} title={t.title}/>

                        <IconButton onClick={onClickHandler}><DeleteIcon style={{color: 'pink'}}/></IconButton>
                    </div>
                })
            }
        </List>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>




                <Button size={'small'} variant={"contained"} color={props.filter === 'all' ? "secondary" : "primary"}
                        onClick={onAllClickHandler}>All
                </Button>


                <Button size={'small'} variant={"contained"} disableElevation color={props.filter === 'active' ? "secondary" : "primary"}
                        onClick={onActiveClickHandler}>Active
                </Button>


                <Button size={'small'} variant={"contained"} disableElevation color={props.filter === 'completed' ? "secondary" : "primary"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>



        </div>
    </div>
}


