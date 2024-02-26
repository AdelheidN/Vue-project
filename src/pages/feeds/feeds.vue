<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div class="topline">
        <topline>
            <template #headline>
                <div class="icon">
                    <icon name="home"/>
                </div>

            </template>
            <template #content>
                <story-user-item

                />
            </template>
        </topline>
   </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icon'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline,
    icon
  }
}
</script>

<style lang="scss" scoped>
    .icon {
        color: black;
        width: 50px;
    }
</style>
