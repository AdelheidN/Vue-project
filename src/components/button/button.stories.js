import button from './buton.vue'

export default {
    title: 'button',
    component: { button },
    argTypes: {
        hoverText: {
            control: { type: 'text'}
        }
    }
}

const template = (args) => ({
    components: {xButton: button},
    data () {
        return { args }
    },
    template: `
        <xButton v-bind="args"> Following </xButton>
    `
});

export const Default = template.bind({})

Default.args = {
    hoverText: "Unfollow"
}