<template>
    <div :class={active} class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: false
        }
    },
    emits: ['onFinish'],
    methods: {
        emitOnFinish() {
            this.$emit('onFinish')
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.active = true 
        })
       
        this.$refs.indicator.addEventListener('transitioned', this.emitOnFinish);

    },

    beforeUnmount () {
        this.$refs.indicator.removeEventListener(
            "transitioned",
            this.emitOnFinish
        );
    },

  
};
    
</script>

<style lang="scss" scoped src="./progress.scss"></style>