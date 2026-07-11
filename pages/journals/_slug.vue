<template>
  <journal :journal="journal" />
</template>

<script>
import Journal from '@/components/Journal'
export default {
  components: { Journal },
  scrollToTop: true,
  async asyncData ({ $content, params }) {
    const journal = await $content('journals', params.slug).fetch()
    return { journal }
  },
  computed: {
    ogImage () {
      return process.env.SITE_URL + '/journals/' + this.journal.slug + '/' + this.journal.image
    }
  },
  head () {
    return {
      title: this.journal.title + ' - ',
      meta: [
        { hid: 'description', name: 'description', content: this.journal.description },
        { hid: 'og:title', property: 'og:title', content: this.journal.title },
        { hid: 'og:description', property: 'og:description', content: this.journal.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:image', property: 'og:image', content: this.ogImage },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.journal.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.journal.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.journal.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.ogImage }
      ]
    }
  }
}
</script>
