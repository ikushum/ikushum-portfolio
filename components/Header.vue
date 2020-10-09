<template>
  <v-img
    gradient="to right top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.7)"
    src="/header-bg.svg"
    cover
    class="full-vh black d-flex align-center text-center white--text"
  >
    <v-container>
      <h1 class="display-2 font-weight-bold">
        Namaste, I’m Ishan Subedi
      </h1>

      <div class="my-7">
        <h2 class="headline">
          Top Rated Frontend Engineer
        </h2>
        <h3 class="body-1">
          From the roots of Himalayas
        </h3>
      </div>

      <v-btn
        large
        color="primary"
        depressed
        @click="$emit('click-action')"
      >
        {{ actionText }}
      </v-btn>
    </v-container>

    <v-footer class="socialIcons text-left transparent px-12">
      <v-container>
        <v-hover
          v-for="(socialLink, index) in socialLinks"
          :key="index"
          v-slot:default="{ hover }"
        >
          <v-icon
            :color="hover ? 'primary' : 'grey lighten-1'"
            class="mr-5"
            @click="openExternal(socialLink.link)"
          >
            {{ socialLink.icon }}
          </v-icon>
        </v-hover>
      </v-container>
    </v-footer>
  </v-img>
</template>

<script>
export default {
  props: {
    actionText: {
      type: String,
      default: 'About Me'
    }
  },
  data () {
    return {
      socialLinks: [
        { icon: 'mdi-github', link: 'https://github.com/ikushum' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/ikushum/' },
        { icon: 'mdi-gmail', link: 'mailto:ikushum@gmail.com' }
      ]
    }
  },
  methods: {
    openExternal (link) {
      window.open(link)
    }
  }
}
</script>

<style scoped>
.display-2{
  font-family: 'Playfair Display', serif !important;
  font-weight: bold;
}
.socialIcons {
  width: 100%;
  bottom: 40px;
  position: absolute;
}
</style>
