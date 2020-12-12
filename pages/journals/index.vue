<template>
  <div>
    <app-header
      style="margin-top:-90px"
      action-text="Journals"
      @click-action="$vuetify.goTo('#journals')"
    />

    <div class="px-sm-10 px-5">
      <my-journal id="journals" :limit="1000" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import MyJournal from '@/components/MyJournal'

const seo = {
  title: 'Journals - Ishan Subedi',
  description: 'I help businesses build extraordinary web solutions and succeed together. A Kathmandu based Frontend Engineer helping clients bring their ideas into reality.',
  image: require('@/assets/images/preview.png'),
  og: {
    type: 'website'
  }
}

export default {
  layout: 'journals',
  components: { AppHeader, MyJournal },
  scrollToTop: true,
  head () {
    return {
      title: seo.title,
      titleTemplate: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: seo.description
        },

        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: seo.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: seo.description
        },
        { hid: 'og:type', property: 'og:type', content: seo.og.type },
        {
          hid: 'og:image',
          property: 'og:image',
          content: seo.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: seo.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: seo.title
        },

        // // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: seo.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: seo.description
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: seo.image
        }
      ]
    }
  }
}
</script>
