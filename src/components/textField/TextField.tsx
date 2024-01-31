import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'src/app/providers/store/store.ts';
import { addTask, setError } from 'src/services/todo.ts';

import cl from './TextField.module.scss';

export const TextField = () => {
  const [inputValue, setInputValue] = useState('');
  const error = useAppSelector((state) => state.todo.error);

  const dispatch = useDispatch();

  const setErrorNull = () => {
    if (error) dispatch(setError(null));
  };

  useEffect(() => {
    setErrorNull();
  }, []);

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorNull();
    setInputValue(e.currentTarget.value);
  };

  const onAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addTask(inputValue));
      setInputValue('');
    }
  };

  return (
    <>
      <div className={cl.inputWrapper}>
        <div className={cl.circle}></div>
        <input
          type='text'
          value={inputValue}
          className={cl.input}
          onKeyDown={onAddTask}
          data-testid='textfield'
          onChange={onInputHandler}
          placeholder='Create a new todo...'
        />
        {error && <div className={cl.error}>{error}</div>}
      </div>
    </>
  );
};
