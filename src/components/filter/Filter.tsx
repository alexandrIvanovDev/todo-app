import cl from './Filter.module.scss';
import {
  changeFilter,
  clearCompletedTask,
  FilterType,
} from '../../store/reducers/todo.ts';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/store.ts';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

export const Filter = () => {
  const [leftItems, setLeftItems] = useState(0);
  const { tasks, filter } = useAppSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    setLeftItems(tasks.filter((t) => !t.checked).length);
  });

  return (
    <>
      <div className={cl.wrapper}>
        <div className={cl.leftItems}>
          <span>{leftItems} items left</span>
        </div>

        <FilterButtons filter={filter} />

        <div className={cl.clearAll}>
          <button
            className={classNames(cl.button, cl.buttonClearAll)}
            onClick={() => dispatch(clearCompletedTask())}
          >
            Clear completed
          </button>
        </div>
      </div>
      <div className={cl.forMobile}>
        <FilterButtons filter={filter} />
      </div>
    </>
  );
};

type FilterProps = {
  filter: FilterType;
};

export const FilterButtons: FC<FilterProps> = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <div className={cl.btns}>
      <button
        className={classNames(cl.button, {
          [cl.activeFilter]: filter === 'all',
        })}
        onClick={() => dispatch(changeFilter('all'))}
      >
        All
      </button>
      <button
        className={classNames(cl.button, {
          [cl.activeFilter]: filter === 'active',
        })}
        onClick={() => dispatch(changeFilter('active'))}
      >
        Active
      </button>
      <button
        className={classNames(cl.button, {
          [cl.activeFilter]: filter === 'completed',
        })}
        onClick={() => dispatch(changeFilter('completed'))}
      >
        Completed
      </button>
    </div>
  );
};
