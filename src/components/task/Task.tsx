import {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import cl from './Task.module.scss';
import deleteIcon from '../../assets/images/icon-cross.svg'
import {changeTaskStatus, changeTaskText, deleteTask, TaskType} from '../../store/reducers/todo.ts';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';
import {Checkbox} from '../checkbox/Checkbox.tsx';

type PropsType = {
    task: TaskType
}

export const Task: FC<PropsType> = ({task}) => {
    const [value, setValue] = useState(task.text)
    const [isChecked, setIsChecked] = useState(task.checked)
    const [isShowIcon, setIsShowIcon] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const dispatch = useDispatch()

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
        dispatch(changeTaskStatus({id: task.id, checked: e.currentTarget.checked}))
    }

    const closeEditMode = () => {
        setEditMode(false)
        dispatch(changeTaskText({id: task.id, text: value}))
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            closeEditMode()
        }
    }

    const editTask = () => {
        if (!task.checked) {
            setEditMode(true)
        }
    }

    // const onDragStartHandler = (e: DragEvent<HTMLDivElement>, task: TaskType) => {
    //     console.log(e, task)
    // }
    //
    // const onDragEndHandler = (e: DragEvent<HTMLDivElement>) => {
    //
    // }
    //
    // const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    // }
    //
    // const onDropHandler = (e: DragEvent<HTMLDivElement>, task: TaskType) => {
    //     e.preventDefault()
    //     console.log('drop', task)
    // }

    return (
        <div
            className={classNames(cl.wrapper, {[cl.isDone]: isChecked})}
            onMouseEnter={() => setIsShowIcon(true)}
            onMouseLeave={() => setIsShowIcon(false)}
            draggable
            // onDragStart={(e) => onDragStartHandler(e, task)}
            // onDragLeave={(e) => onDragEndHandler(e)}
            // onDragEnd={(e) => onDragEndHandler(e)}
            // onDragOver={(e) => onDragOverHandler(e)}
            // onDrop={(e) => onDropHandler(e, task)}
        >

            <Checkbox id={task.id} isChecked={isChecked} onCheckboxHandler={onCheckboxHandler}/>

            {editMode
                ? <input
                    type="text"
                    value={value}
                    onChange={onChangeValue}
                    onBlur={closeEditMode}
                    className={cl.input}
                    onKeyDown={onEnterHandler}
                    autoFocus
                />
                : <span
                    className={cl.text}
                    onDoubleClick={editTask}
                    title='Double click to change the task title'
                >{value}</span>}

            {isShowIcon && <img src={deleteIcon}
                                alt="delete"
                                className={cl.deleteIcon}
                                onClick={() => dispatch(deleteTask(task.id))}
            />
            }
        </div>
    );
}