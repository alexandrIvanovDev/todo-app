import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'src/app/App.tsx';
import { store } from 'src/app/providers/store/store.ts';
import { ThemeProvider } from 'src/app/providers/themeProvider/ThemeProvider.tsx';

import '@fontsource-variable/josefin-sans';
import 'src/app/styles/index.scss';

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
