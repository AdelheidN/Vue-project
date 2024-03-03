import button from './buton.vue'

export default {
    title: 'button',
    component: { button }
}

const template = () => ({
    components: {xButton: button},
    template: `
        <x-button hover-text="Unfollow"> Following </x-button>
    `
});

export const Default = template.bind({});