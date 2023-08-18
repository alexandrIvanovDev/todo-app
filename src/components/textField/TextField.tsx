import cl from './TextField.module.css'
import {ChangeEvent, FC, useState} from 'react';

type PropsType = {
    value?: string
    checked?: boolean
}

export const TextField: FC<PropsType> = ({value, checked}) => {
    const [inputValue, setInputValue] = useState(value)
    const [isChecked, setIsChecked] = useState(checked)

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return (
        <div className={cl.wrapper}>
            <input
                type="checkbox"
                className={cl.checkbox}
                checked={isChecked}
                onChange={onCheckboxHandler}
            />
            <input
                type="text"
                className={cl.input}
                placeholder='Crate a new todo...'
                value={inputValue}
                onChange={onInputHandler}
            />
        </div>
    );
};