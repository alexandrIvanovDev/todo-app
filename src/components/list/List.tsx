import { FC } from "react";
import { Task } from "../task";
import cl from "./List.module.scss";
import { Filter } from "../filter";
import { useAppSelector } from "../../store/store.ts";
import { Footer } from "../footer";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { setReorderTasks } from "../../store/reducers/todo.ts";

export const List: FC = () => {
  const { tasks, filter } = useAppSelector((state) => state.todo);

  const dispatch = useDispatch();

  let filteredTask = tasks;

  if (filter === "active") {
    filteredTask = tasks.filter((t) => !t.checked);
  }
  if (filter === "completed") {
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
        <Droppable droppableId={"1"}>
          {(provided) => (
            <div
              className={cl.tasksWrapper}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTask.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
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
