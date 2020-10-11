<template>
  <v-footer class="px-10" color="#212427">
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="3"
        >
          <v-img
            :class="{'mx-auto': !$vuetify.breakpoint.mdAndUp}"
            contain
            max-width="100"
            src="/logo.svg"
            class="cursor-pointer"
            @click="$router.push('/')"
          />
        </v-col>

        <v-col cols="12" md="7" class="text-center">
          <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.text"
            dark
            text
            x-small
            class="text-capitalize mx-2"
            @click="navigate(menuItem)"
          >
            {{ menuItem.text }}
          </v-btn>
        </v-col>

        <v-col class="text-center text-md-right" cols="12" md="2">
          <v-icon
            v-for="(socialLink, index) in socialLinks"
            :key="index"
            dark
            class="mx-2"
            @click="openExternal(socialLink.link)"
          >
            {{ socialLink.icon }}
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true
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
    },
    navigate (menuItem) {
      if (menuItem.page) {
        this.$router.push(menuItem.page)
      }

      if (document.querySelector(menuItem.goto)) {
        this.$vuetify.goTo(menuItem.goto)
      }
    }
  }
}
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
