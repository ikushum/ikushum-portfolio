<template>
  <div>
    <app-header
      id="home"
      style="margin-top:-90px"
      @click-action="$vuetify.goTo('#about')"
    />

    <div class="px-sm-10 px-5">
      <about id="about" />
      <my-works id="works" />
      <testomonials id="testomonials" />
      <!-- <my-expertise id="expertise" /> -->
      <my-journal />
      <contact-me id="contact" class="my-12" />
    </div>
  </div>
</template>

<script>
import About from '@/components/About'
import AppHeader from '@/components/Header'
import MyJournal from '@/components/MyJournal'
import ContactMe from '@/components/ContactMe'
import MyWorks from '@/components/MyWorks/Index'
import Testomonials from '@/components/Testomonials'
// import MyExpertise from '@/components/MyExpertise'

const seo = {
  title: 'Ishan Subedi - Top rated Frontend Engineer',
  description: 'I help businesses build extraordinary web solutions and succeed together. A Kathmandu based Frontend Engineer helping clients bring their ideas into reality.',
  image: require('@/assets/images/preview.png'),
  og: {
    type: 'website'
  }
}

export default {
  components: {
    About,
    MyWorks,
    ContactMe,
    MyJournal,
    AppHeader,
    Testomonials
    // MyExpertise,
  },
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
        { hid: 'og:title', property: 'og:title', content: seo.title },
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

        // Twitter Card
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
