<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
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
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>

                </ul>

            </template>
        </topline>
   </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'feeds',
  components: {
    topline, storyUserItem
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"> </style>
