import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'src/app/providers/store/store.ts';
import { FilterType } from 'src/app/providers/store/types.ts';
import { changeFilter, clearCompletedTask } from 'src/services/todo.ts';

import { Button } from 'src/components/button/Button.tsx';

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

type Props = {
  filter: FilterType;
  buttonsName: FilterType[];
};

export const FilterButtons = ({ filter, buttonsName }: Props) => {
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
