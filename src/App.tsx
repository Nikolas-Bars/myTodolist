import React, {useState} from 'react';
import './App.css';
import Todolist from "./components/Todolist";
import {v1} from "uuid";
export type tasksType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterType = 'all'|'complited'|'active'
export type TodolistType = {
    id: string
    titleTD: string
    filter: FilterType
}


function App() {




    const todolistID1 = v1()
    const todolistID2 = v1()
    const todolistID3 = v1()
    const todolistID4 = v1()


    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, titleTD: 'What to learn', filter: 'all'},
        {id: todolistID2, titleTD: 'What to read', filter: 'all'},
        {id: todolistID3, titleTD: 'What to buy', filter: 'all'},
        {id: todolistID4, titleTD: 'What to eat', filter: 'all'},
    ])

    let [tasks, setTask] = useState({

        [todolistID1]:[
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Html', isDone: false},
            {id: v1(), title: 'CSS', isDone: false},
            {id: v1(), title: 'Vue', isDone: true},
        ],
        [todolistID2]:[
            {id: v1(), title: 'Harry Potter', isDone: false},
            {id: v1(), title: 'Lord of The Rings', isDone: true},
            {id: v1(), title: 'street cat named bob', isDone: false},
            {id: v1(), title: 'Game of Thrones', isDone: false},
        ],
        [todolistID3]:[
            {id: v1(), title: 'Laptop', isDone: true},
            {id: v1(), title: 'Books', isDone: false},
            {id: v1(), title: 'Mirror', isDone: false},
            {id: v1(), title: 'Car', isDone: false},
        ],
        [todolistID4]:[
            {id: v1(), title: 'Bread', isDone: false},
            {id: v1(), title: 'Eags', isDone: false},
            {id: v1(), title: 'Pasta', isDone: false},
            {id: v1(), title: 'Coffee', isDone: true},
        ],

})



    const addTask = (todolistID: string ,title: string)=>{
        let newTask = {id: v1(), title: title, isDone: false}
        /*let forSet = {...tasks, [todolistID]: [newTask, ...tasks[todolistID]] }*/
        setTask({...tasks, [todolistID]: [newTask, ...tasks[todolistID]] })
    }


    const removeTask = (todolistID: string, taskID: string)=>{
        let taskRemove = tasks[todolistID].filter(el=> el.id !== taskID)
        console.log(taskRemove)
        setTask({...tasks, [todolistID]: taskRemove})
    }

    const onChangeFilter =(todolistID:string, value: FilterType)=>{
      console.log(todolistID)
        let changeTodolist = todolists.find(el => el.id === todolistID);
      if(changeTodolist){

          changeTodolist.filter = value

      }
        setTodolists([...todolists])
    }

    let [filter, setFilter] = useState<FilterType>('all')

    ////////////////////////////////////////////////////////////////////





    const onChangeCheckbox =(todolistID:string, taskID: string, checked: boolean)=>{
        let task = tasks[todolistID].find(el=>el.id === taskID)
        if(task){
            task.isDone = checked
            setTask({...tasks})
        }



    console.log(taskID)
}



  return (
    <div className="App">
      <div className="App-header">
          {todolists.map(el => {

              let taskForTodolist = tasks[el.id]

              if(el.filter === 'complited'){
                  taskForTodolist = tasks[el.id].filter(el=> el.isDone)
              }

              if(el.filter === 'active'){
                  taskForTodolist = tasks[el.id].filter(el=> !el.isDone)
              }


              return (


                  <div key={el.id} className={"todolists"}>
                      <Todolist
                          todolistID={el.id}
                      addTask={addTask}
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      onChangeFilter={onChangeFilter}
                      setTask={setTask}
                      filter={filter}
                      setFilter={setFilter}
                      onChangeCheckbox={onChangeCheckbox}
                      titleTD = {el.titleTD}

                  />      </div>
              )
          })}






      </div>


    </div>
  );
}

export default App;
