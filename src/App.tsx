import './App.module.css'
import desktopLight from './assets/images/bg-desktop-light.jpg';
import cl from './App.module.css'
import {Todo} from './components/todo/Todo.tsx';

function App() {
    return (
        <>
            <img src={desktopLight} alt='background' className={cl.background}/>
            <Todo/>
        </>
    )
}

export default App
