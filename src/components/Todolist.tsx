import React, {ChangeEvent, useState} from "react";
import Input from "./Input";
import {FilterType, tasksType} from "../App";
import Button from "./Button";
import CheckBox from "./CheckBox";
import s from './Todolist.module.css'


type TodolistPropsType = {
    tasks: tasksType[]
    addTask: (todolistID: string, title: string) => void
    removeTask: (todolistID: string, taskID: string) => void
    onChangeFilter: (todolistID: string, value: FilterType) => void
    setTask: any
    filter: FilterType
    setFilter: (filter: FilterType) => void
    onChangeCheckbox: (todolistID:string, taskID: string, checked: boolean)=> void
    titleTD: string
    todolistID: string
}


const Todolist = (props: TodolistPropsType) => {


    ////////////////////////////////////////////////////////////////////

    let [error, setError] = useState<null | 'error'>(null)
    let [title, setTitle] = useState('')


    const onclickHandlerAddTask = () => {
        if (title.trim() !== '') {
            props.addTask(props.todolistID, title.trim())
            setTitle('')
            setError(null)
        } else setError('error')
    }


    const OnChangeInputHandler = (newTitle: string) => {
        setTitle(newTitle)
        setError(null)
    }

    const styleError = {
        border: '1px solid red',
        color: 'red'
    }

    const styleErrorText = {
        color: 'red'
    }

    const onChangeRemoveTask = (taskID: string) => {
        props.removeTask(props.todolistID, taskID)
    }


    const onChangeFilter = (value: FilterType) => {
        props.onChangeFilter(props.todolistID, value)
    }

    const onChangeCheckbox =(taskID: string, e: ChangeEvent<HTMLInputElement>)=>{
        props.onChangeCheckbox(props.todolistID, taskID, e.target.checked)
    }

    return (
        <div className={s.todolist}>
            <h3 className={s.h3task}>{props.titleTD}</h3>

           <div className={s.divInput}>
                <Input title={title}
                       callback={OnChangeInputHandler}/><Button title={'+'} callback={onclickHandlerAddTask}/>
        </div>

           <div className={s.ulTasks}> {error && <div style={styleErrorText}>Field is required</div>}
            <ul>
                {props.tasks.map(t => {
                    return (
                        <li className={t.isDone ? s.liNoActive : s.liActive  } key={t.id}><Button callback={() => {
                            onChangeRemoveTask(t.id)
                        }} title={'X'}/><CheckBox callback={(event)=>{onChangeCheckbox(t.id, event)}} checked={t.isDone}/><span>{t.title}</span></li>
                    )
                })}
            </ul>
           </div>
            <div className={s.buttonStyle}>
            <Button callback={() => {onChangeFilter('all')}} title={'all'} />
            <Button callback={() => {onChangeFilter('active')}} title={'active'} />
            <Button callback={() => {onChangeFilter('complited')}} title={'complited'} />
            </div>
        </div>
    )
}

export default Todolist

