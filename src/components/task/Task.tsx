import {ChangeEvent, FC, useState} from 'react';
import cl from './Task.module.css';
import deleteIcon from '../../assets/images/icon-cross.svg'
import {TaskType} from '../../store/reducers/todo.ts';

type PropsType = {
    task: TaskType
}

export const Task: FC<PropsType> = ({task}) => {
    const [value, setValue] = useState(task.text)
    const [isChecked, setIsChecked] = useState(task.checked)

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <div className={`${cl.wrapper} ${isChecked ? cl.isDone : ''}`}>
            <input
                type="checkbox"
                className={cl.checkbox}
                checked={isChecked}
                onChange={onCheckboxHandler}
            />
            <span className={cl.text}>{value}</span>
            <img src={deleteIcon} alt="delete" className={cl.deleteIcon}/>
        </div>
    );
}