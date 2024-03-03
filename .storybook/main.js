import { dirname, join } from "path";
// import { join, dirname } from "path";

const { config } = require("@vue/test-utils");

// /**
//  * This function is used to resolve the absolute path of a package.
//  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
//  */
// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, "package.json")));
// }

// /** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
// const config = {
//   stories: ["../src/components/**/*.stories.js"],
//   addons: [
//     getAbsolutePath("@storybook/addon-links"),
//     getAbsolutePath("@storybook/addon-essentials"),
//     getAbsolutePath("@storybook/addon-interactions"),
//   ],
//   framework: {
//     name: getAbsolutePath("@storybook/vue3-webpack5"),
//     options: {
//       builder: {
//         useSWC: true,
//       },
//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;


module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons":[
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    "@storybook/addon-webpack5-compiler-babel"
  ],

  webpackFinal: config => {
    config.module.rules.push({
      test: /.scss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    })
    return config;
  },

  framework: {
    name: getAbsolutePath("@storybook/vue3-webpack5"),
    options: {}
  },

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
