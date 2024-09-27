import type { Preview } from "@storybook/react";
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
    }
  },
};

export default preview;
