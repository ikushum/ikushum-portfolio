<template>
  <div class="py-5">
    <div class="mb-12 text-center">
      <h1 class="display-2">
        {{ journal.title }}
      </h1>

      <p class="subtitle-1 grey--text mt-5 mb-3">
        {{ formatDate(journal.createdAt) }}
        <span class="mx-5">/</span>
        {{ journal.author }}
        <span class="mx-5">/</span>
        {{ readTime }} min read
      </p>

      <div class="text-center">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-btn
            icon
            :color="hover ? '#39a8df' : '#757575'"
            target="_blank"
            @click="tweet()"
          >
            <v-icon>
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-hover>

        <v-hover
          v-slot:default="{ hover }"
        >
          <v-btn
            :color="hover ? '#2777b5' : '#757575'"
            icon
            target="_blank"
            @click="linkedInPost()"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-hover>

        <v-hover
          v-slot:default="{ hover }"
        >
          <v-btn
            :color="hover ? '#4866aa' : '#757575'"
            icon
            target="_blank"
            @click="facebookPost()"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </v-hover>
      </div>
    </div>

    <v-img
      :height="$vuetify.breakpoint.mdAndUp ? '70vh' : '50vh'"
      :src="`/journals/${journal.slug}/${journal.image}`"
      gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
    />

    <div class="content my-12 mx-auto">
      <nuxt-content :document="journal" />
    </div>

    <div class="content mx-auto mt-16">
      <Disqus shortname="ishansubedi-2" />
    </div>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  components: {
    Disqus
  },
  props: {
    journal: {
      type: Object,
      required: true
    }
  },
  computed: {
    readTime () {
      let minutes = 0
      const contentText = JSON.stringify(this.journal)
      const words = contentText.split(' ').length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    tweet () {
      const tweetURL =
        'https://twitter.com/intent/tweet?text=' +
        document.title +
        '&url=' +
        location.href
      window.open(tweetURL)
    },

    linkedInPost () {
      const linkedInPostURL =
        'https://www.linkedin.com/shareArticle/?mini=true&url=' + location.href
      this.PopupCenter(linkedInPostURL, 500, 500)
    },

    facebookPost () {
      const fbPostURL =
        'https://www.facebook.com/sharer/sharer.php?u=' +
        location.href +
        '&display=page'
      window.open(fbPostURL)
    },

    PopupCenter (url, w, h) {
      const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : screen.left
      const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : screen.top

      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : screen.width
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : screen.height

      const left = width / 2 - w / 2 + dualScreenLeft
      const top = height / 2 - h / 2 + dualScreenTop
      const newWindow = window.open(
        url,
        '_blank',
        'scrollbars=yes, width=' +
          w +
          ', height=' +
          h +
          ', top=' +
          top +
          ', left=' +
          left
      )

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }
  }
}
</script>

<style scoped>
  .content {
    max-width: 680px;
    font-size: 1.2rem;
  }
  .circle-bg {
    background-size: 40%;
    background-position: center;
    background-image: url('/circle.svg');
  }
  .display-2{
    font-weight: 500 !important;
    font-family: 'Playfair Display', serif !important;
  }
</style>
