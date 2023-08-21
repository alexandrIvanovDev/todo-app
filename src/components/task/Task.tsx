import {ChangeEvent, FC, useState, KeyboardEvent} from 'react';
import cl from './Task.module.css';
import deleteIcon from '../../assets/images/icon-cross.svg'
import {changeTaskStatus, changeTaskText, deleteTask, TaskType} from '../../store/reducers/todo.ts';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';

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

    return (
        <div
            className={classNames(cl.wrapper, {[cl.isDone]: isChecked})}
            onMouseEnter={() => setIsShowIcon(true)}
            onMouseLeave={() => setIsShowIcon(false)}
        >
            <input
                type="checkbox"
                className={cl.checkbox}
                checked={isChecked}
                onChange={onCheckboxHandler}
            />

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
                    onDoubleClick={() => setEditMode(true)}
                >{value}</span>}

            {isShowIcon && <img src={deleteIcon}
                                alt="delete"
                                className={cl.deleteIcon}
                                onClick={() => dispatch(deleteTask(task.id))}
            />}
        </div>
    );
}