import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import { store } from 'src/app/providers/store/store.ts';
import { expect } from 'vitest';

import { Todo } from './Todo.tsx';

import '@testing-library/jest-dom';

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
