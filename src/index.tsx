import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './styles/index.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);