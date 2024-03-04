import "../src/global.scss";

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  webpackFinal: async (config) => {
    config.plugins.push({
      test: /\.scss$/i,
      use: ['style-loader', 'sass-loader'],
    });
    return config;
  },
};

export default preview;
