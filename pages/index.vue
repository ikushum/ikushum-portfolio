<template>
  <div>
    <hero />
    <capabilities />
    <open-source />
    <work />
    <approach />
    <about />
    <proof />
    <writing />
    <contact />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero'
import Capabilities from '@/components/home/Capabilities'
import Work from '@/components/home/Work'
import OpenSource from '@/components/home/OpenSource'
import Approach from '@/components/home/Approach'
import About from '@/components/home/About'
import Proof from '@/components/home/Proof'
import Writing from '@/components/home/Writing'
import Contact from '@/components/home/Contact'

const seo = {
  title: 'Ishan Subedi — Product Engineer',
  description:
    'Ishan Subedi is a product engineer who takes founders from idea to shipped product — design, full-stack build, AI, and deployment. One person, the whole product.'
}

export default {
  components: {
    Hero,
    Capabilities,
    Work,
    OpenSource,
    Approach,
    About,
    Proof,
    Writing,
    Contact
  },
  head () {
    return {
      title: seo.title,
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: seo.description },
        { hid: 'og:title', property: 'og:title', content: seo.title },
        { hid: 'og:description', property: 'og:description', content: seo.description },
        { hid: 'twitter:title', name: 'twitter:title', content: seo.title },
        { hid: 'twitter:description', name: 'twitter:description', content: seo.description }
      ]
    }
  }
}
</script>
