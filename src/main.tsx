import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import '@fontsource-variable/josefin-sans';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {ThemeProvider} from './themeProvider/ui/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Provider>
)
