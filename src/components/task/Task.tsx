import { ChangeEvent, FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';
import deleteIcon from 'src/assets/images/icon-cross.svg';

import { Checkbox } from 'src/components/checkbox';
import { TaskTitle } from 'src/components/taskTitle';
import { TaskType, changeTaskStatus, deleteTask } from 'src/store/reducers/todo.ts';

import cl from './Task.module.scss';

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
      changeTaskStatus({ id: task.id, checked: e.currentTarget.checked })
    );
  };

  return (
    <Draggable index={index} draggableId={task.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          onMouseEnter={() => setIsShowIcon(true)}
          onMouseLeave={() => setIsShowIcon(false)}
          className={classNames(cl.wrapper, { [cl.isDone]: isChecked })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox
            task={task}
            isChecked={isChecked}
            onCheckboxHandler={onCheckboxHandler}
          />

          <TaskTitle task={task} value={value} setValue={setValue} />

          {isShowIcon && (
            <img
              alt='delete'
              src={deleteIcon}
              className={cl.deleteIcon}
              onClick={() => dispatch(deleteTask(task.id))}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};
