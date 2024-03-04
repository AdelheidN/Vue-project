import progress from "./progress.vue";

export default {
  title: "Progress bar",
  component: { progress },
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "When progress loaded",
    },
  },
};

export const defaultView = (args) => ({
  components: { xProgress: progress },
  data() {
    return { args };
  },
  template: `
    <x-progress @onFinish="args.onFinish" />`,
});
