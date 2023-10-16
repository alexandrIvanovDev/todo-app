import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'src/App.tsx';
import { ThemeProvider } from 'src/themeProvider/ui/ThemeProvider.tsx';

import { store } from 'src/store/store.ts';

import '@fontsource-variable/josefin-sans';
import 'src/styles/index.scss';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
