import { FC } from 'react';

import { Header } from 'src/components/header';
import { List } from 'src/components/list';
import { TextField } from 'src/components/textField';
import { useAppSelector } from 'src/store/store.ts';

import cl from './Todo.module.scss';

export const Todo: FC = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  return (
    <div className={cl.container}>
      <Header />
      <TextField />
      {tasks.length ? (
        <List />
      ) : (
        <h2 data-testid='header' className={cl.header}>
          Add a new task
        </h2>
      )}
    </div>
  );
};
