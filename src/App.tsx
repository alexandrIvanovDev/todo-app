import { Todo } from "./components/todo";
import classNames from "classnames";
import { useTheme } from "./themeProvider/lib/useTheme.ts";
import "./styles/index.scss";

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", theme)}>
      <Todo />
    </div>
  );
}

export default App;
