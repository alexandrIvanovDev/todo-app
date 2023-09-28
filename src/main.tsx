import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import "@fontsource-variable/josefin-sans";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "./themeProvider/ui/ThemeProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
);
