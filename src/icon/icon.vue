<template>
    <component :is="name"/>
    <home />
</template>

import { icon } from ".";
<script>
import * as icon from './variants'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icon',
  components: { ...icon },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icon).includes(value)
      }
    }
  }
}
</script>
