import { FC } from "react";
import { useAppSelector } from "../../store/store.ts";
import Header from "../header/Header.tsx";
import { List } from "../list";
import { TextField } from "../textField";
import cl from "./Todo.module.scss";

export const Todo: FC = () => {
  const tasks = useAppSelector((state) => state.todo.tasks);

  return (
    <div className={cl.container}>
      <Header />
      <TextField />
      {tasks.length ? (
        <List />
      ) : (
        <h2 className={cl.header} data-testid="header">
          Add a new task
        </h2>
      )}
    </div>
  );
};
