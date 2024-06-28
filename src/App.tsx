import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    // BLL
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"
    const tasks_1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML&CSS"},
        {id: 2, isDone: true, title: "JS"},
        {id: 3, isDone: false, title: "React"},
        {id: 4, isDone: false, title: "Redux"},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 5, isDone: true, title: "Bread"},
        {id: 6, isDone: false, title: "Chocolate"},
        {id: 7, isDone: true, title: "Tea"},
        {id: 8, isDone: false, title: "Milk"},
    ]
    // UI:
    return (
        <div className="App">
            <TodoList
                tasks={tasks_1}
                title={todoListTitle_1}/>
            <TodoList
                tasks={tasks_2}
                title={todoListTitle_2}/>
        </div>
    );
}

export default App;
