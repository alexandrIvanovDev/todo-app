import classNames from 'classnames';
import { useTheme } from 'src/themeProvider/lib/useTheme.ts';

import { Todo } from 'src/components/todo';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', theme)}>
      <Todo />
    </div>
  );
}

export default App;
