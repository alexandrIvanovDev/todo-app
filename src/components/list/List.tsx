import { FC } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { Filter } from 'src/components/filter';
import { Footer } from 'src/components/footer';
import { Task } from 'src/components/task';
import { setReorderTasks } from 'src/store/reducers/todo.ts';
import { useAppSelector } from 'src/store/store.ts';

import cl from './List.module.scss';

export const List: FC = () => {
  const { tasks, filter } = useAppSelector((state) => state.todo);

  const dispatch = useDispatch();

  let filteredTask = tasks;

  if (filter === 'active') {
    filteredTask = tasks.filter((t) => !t.checked);
  }
  if (filter === 'completed') {
    filteredTask = tasks.filter((t) => t.checked);
  }

  const onDragEnd = (res: DropResult) => {
    const { destination, source } = res;

    if (!destination) return;

    const reorderedTasks = [...tasks];

    const [movedTask] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, movedTask);
    dispatch(setReorderTasks(reorderedTasks));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={cl.content}>
        <Droppable droppableId={'1'}>
          {(provided) => (
            <div
              className={cl.tasksWrapper}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTask.map((task, index) => (
                <Task task={task} key={task.id} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Filter />
      </div>
      <Footer />
    </DragDropContext>
  );
};
