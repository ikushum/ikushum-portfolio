<template>
  <div>
    <app-header
      style="margin-top:-90px"
      action-text="Journals"
      @click-action="$vuetify.goTo('#journals')"
    />

    <div class="px-sm-10 px-5">
      <my-journal id="journals" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import MyJournal from '@/components/MyJournal'
export default {
  layout: 'journals',
  components: { AppHeader, MyJournal },
  scrollToTop: true,
  data () {
    return {
      title: 'Journals - ',
      description: 'Journals by Pramod Devireddy'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        // // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        }
      ]
    }
  }
}
</script>
