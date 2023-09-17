import {Todo} from './components/todo/Todo.tsx';
import classNames from 'classnames';
import {useTheme} from './themeProvider/lib/useTheme.ts';
import './index.scss';

function App() {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Todo/>
        </div>
    )
}

export default App
