import ReactDOM from 'react-dom/client';
import App from './App';

export const mount = (container: HTMLElement, props?: Record<string, unknown>) => {
    const root = ReactDOM.createRoot(container);
    root.render(<App {...props} />);
};

export const unmount = (container: HTMLElement) => {
    const root = ReactDOM.createRoot(container);
    root.unmount();
};