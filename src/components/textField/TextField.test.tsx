import { Provider } from 'react-redux';

import { fireEvent, render, screen } from '@testing-library/react';
import { store } from 'src/app/providers/store/store.ts';
import { describe, expect, test } from 'vitest';

import { TextField } from './TextField.tsx';

import '@testing-library/jest-dom';

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <TextField />
    </Provider>
  );
  const textfield = screen.getByTestId('textfield');
  return { textfield, ...utils };
};

describe('Text field component', () => {
  test('rendered', () => {
    const { textfield } = setup();

    expect(textfield).toBeInTheDocument();
  });
  test('change value and press enter', () => {
    const { textfield } = setup();

    // @ts-ignore
    expect(textfield.value).toBe('');

    fireEvent.change(textfield, { target: { value: '123' } });
    // @ts-ignore
    expect(textfield.value).toBe('123');

    fireEvent.keyDown(textfield, { key: 'Enter' });
    // @ts-ignore
    expect(textfield.value).toBe('');
  });
});
