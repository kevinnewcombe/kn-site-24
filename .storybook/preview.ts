import type { Preview } from "@storybook/nextjs-vite";
import '../app/base.scss';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    darkMode: {
      stylePreview: true,
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light'
    },

    docs: {
      codePanel: true
    }
  },
};

export default preview;
