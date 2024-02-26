<template>
    <button :class="['button', {'active': isOpened}]" @click="toggle">
        <span class="text">{{  isOpened ? "Hide" : "Show"}} View issues </span>
        <span class="icon">
            <icon name="triangle"/>
        </span>
    </button>
</template>

<script>
import { icon } from '../../icon'

export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>
