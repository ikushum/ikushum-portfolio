<template>
  <v-app>
    <v-app-bar
      app
      flat
      dark
      hide-on-scroll
      class="px-12"
      height="90px"
      color="transparent"
    >
      <app-bar-content />
    </v-app-bar>

    <v-app-bar
      dark
      fixed
      color="#212427"
      inverted-scroll
      class="px-12"
      scroll-threshold="65"
    >
      <app-bar-content />
    </v-app-bar>

    <v-main>
      <v-container style="max-width:2300px" class="pa-0">
        <nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBarContent from '@/components/AppBarContent'
export default {
  components: { AppBarContent },
  data () {
    return {
      title: 'ikushum'
    }
  }
}
</script>
