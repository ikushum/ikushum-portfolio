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
  async asyncData ({ $content, params }) {
    const journal = await $content('journals', params.slug).fetch()
    return { journal }
  },
  head () {
    return {
      title: this.journal.title + ' - ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.journal.description
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.journal.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.journal.description
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },

        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.journal.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.journal.description
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: this.journal.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.journal.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.journal.image
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.journal.image
        }
      ]
    }
  }
}
</script>
