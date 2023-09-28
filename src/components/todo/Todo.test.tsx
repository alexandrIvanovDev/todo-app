import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';

import { store } from '../../store/store.ts';

import '@testing-library/jest-dom';
import { Todo } from './Todo.tsx';

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <Todo />
    </Provider>
  );
  const header = screen.getByTestId('header');

  return { header, ...utils };
};

describe('List', () => {
  test('When havent tasks', () => {
    const { header } = setup();

    expect(header).toBeInTheDocument();
  });
});
