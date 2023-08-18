import './App.module.css'
import Header from './components/header/Header.tsx';
import desktopLight from './assets/images/bg-desktop-light.jpg';
import cl from './App.module.css'
import {TextField} from './components/textField/TextField.tsx';
import {useState} from 'react';
import {List} from './components/list/List.tsx';

export type TaskType = {
    id: number
    text: string
    checked: boolean
}

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, text: 'Complete online JS course', checked: true},
        {id: 2, text: '10 minutes meditation', checked: false},
        {id: 3, text: 'Read for 1 hour', checked: false},
        {id: 4, text: 'Complete Todo app', checked: false}
    ])

    const onChecked = (tasks: TaskType[], id: number, newChecked: boolean) => {
        const task = tasks.find(t => t.id === id)
        if (task) {
            task.checked = newChecked
        }
        setTasks([...tasks])
    }



    return (
        <>
            <img src={desktopLight} alt='background' className={cl.background}/>
            <div className={cl.container}>
                <Header/>
                <TextField />
                <List tasks={tasks} onChecked={onChecked}/>
            </div>
        </>
    )
}

export default App
