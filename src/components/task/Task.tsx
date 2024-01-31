import { ChangeEvent, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';
import { TaskType } from 'src/app/providers/store/types.ts';
import { CrossIcon } from 'src/assets/icons/cross.tsx';
import { changeTaskStatus, deleteTask } from 'src/services/todo.ts';

import { Checkbox } from 'src/components/checkbox';
import { TaskTitle } from 'src/components/taskTitle';

import cl from './Task.module.scss';

type Props = {
  task: TaskType;
  index: number;
};

export const Task = ({ task, index }: Props) => {
  const [value, setValue] = useState(task.text);
  const [isChecked, setIsChecked] = useState(task.checked);

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

          <CrossIcon
            className={cl.deleteIcon}
            onClick={() => dispatch(deleteTask(task.id))}
          />
        </div>
      )}
    </Draggable>
  );
};
