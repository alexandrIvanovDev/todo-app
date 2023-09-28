import { ChangeEvent, FC, useState } from "react";
import cl from "./Task.module.scss";
import deleteIcon from "../../assets/images/icon-cross.svg";
import {
  changeTaskStatus,
  deleteTask,
  TaskType,
} from "../../store/reducers/todo.ts";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Checkbox } from "../checkbox";
import { Draggable } from "react-beautiful-dnd";
import { TaskTitle } from "../taskTitle";

type PropsType = {
  task: TaskType;
  index: number;
};

export const Task: FC<PropsType> = ({ task, index }) => {
  const [value, setValue] = useState(task.text);
  const [isChecked, setIsChecked] = useState(task.checked);
  const [isShowIcon, setIsShowIcon] = useState(false);

  const dispatch = useDispatch();

  const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
    dispatch(
      changeTaskStatus({ id: task.id, checked: e.currentTarget.checked }),
    );
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={classNames(cl.wrapper, { [cl.isDone]: isChecked })}
          onMouseEnter={() => setIsShowIcon(true)}
          onMouseLeave={() => setIsShowIcon(false)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox
            id={task.id}
            isChecked={isChecked}
            onCheckboxHandler={onCheckboxHandler}
          />

          <TaskTitle task={task} value={value} setValue={setValue} />

          {isShowIcon && (
            <img
              src={deleteIcon}
              alt="delete"
              className={cl.deleteIcon}
              onClick={() => dispatch(deleteTask(task.id))}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};
