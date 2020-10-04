<template>
  <v-container class="mt-10 py-12 px-5">
    <journal :journal="journal" />
  </v-container>
</template>

<script>
import Journal from '@/components/Journal'
export default {
  layout: 'journal',
  components: { Journal },
  scrollToTop: true,
  data () {
    return {
      journal: {
        image: 'https://picsum.photos/1000/1000'
      }
    }
  },
  head () {
    return {
      title: 'Journal - '
    }
  }
}
</script>
