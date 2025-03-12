import ReactDOM from 'react-dom/client';
import './index.css';
ReactDOM.createRoot(document.getElementById("root")).render(/>
    < /StrictMode>);
const main = {
    stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
    addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};
export default main;
