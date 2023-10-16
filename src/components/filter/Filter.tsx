import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'src/components/button/Button.tsx';
import {
  FilterType,
  changeFilter,
  clearCompletedTask,
} from 'src/store/reducers/todo.ts';
import { useAppSelector } from 'src/store/store.ts';

import cl from './Filter.module.scss';

export const Filter = () => {
  const [leftItems, setLeftItems] = useState(0);
  const { tasks, filter } = useAppSelector((state) => state.todo);

  const filterArray: FilterType[] = ['all', 'active', 'completed'];

  const dispatch = useDispatch();

  useEffect(() => {
    setLeftItems(tasks.filter((t) => !t.checked).length);
  }, [tasks]);

  return (
    <>
      <div className={cl.wrapper}>
        <div className={cl.leftItems}>
          <span>{leftItems} items left</span>
        </div>

        <FilterButtons filter={filter} buttonsName={filterArray} />

        <div className={cl.clearAll}>
          <Button
            addClass={cl.buttonClearAll}
            onClick={() => dispatch(clearCompletedTask())}
          >
            Clear completed
          </Button>
        </div>
      </div>
      <div className={cl.forMobile}>
        <FilterButtons filter={filter} buttonsName={filterArray} />
      </div>
    </>
  );
};

type FilterProps = {
  filter: FilterType;
  buttonsName: FilterType[];
};

export const FilterButtons: FC<FilterProps> = ({ filter, buttonsName }) => {
  const dispatch = useDispatch();
  return (
    <div className={cl.btns}>
      {buttonsName.map((b) => {
        const filterClass = {
          [cl.activeFilter]: filter === b,
        };

        return (
          <Button
            key={b}
            addClass={filterClass}
            onClick={() => dispatch(changeFilter(b))}
          >
            {b}
          </Button>
        );
      })}
    </div>
  );
};
