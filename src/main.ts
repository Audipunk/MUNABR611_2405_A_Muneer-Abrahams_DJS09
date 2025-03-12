import { StorybookConfig } from '@storybook/react-native';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { } from './components/App';
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
  <App />
  </StrictMode>
);

const main: StorybookConfig = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default main;
