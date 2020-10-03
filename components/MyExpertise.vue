<template>
  <v-container class="min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2 my-12">
        My Expertise
      </h2>

      <v-row class="my-5">
        <v-col
          v-for="expertise in expertises"
          :key="expertise.title"
          xs="12"
          sm="6"
          md="6"
        >
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="display-1 d-flex align-center">
                <v-avatar tile class="mx-4">
                  <v-img contain :src="expertise.image" />
                </v-avatar>
                <div class="circle-bg py-5 pr-5" v-text="expertise.title" />
              </v-list-item-title>
              <div class="grey--text px-2 pa-2 line-height">
                Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy it is based on a number of factors, including ad placement,
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      expertises: [
        { title: 'Vue', description: 'A short description', image: '/expertise/vue.svg' },
        { title: 'Nuxt', description: 'A short description', image: '/expertise/nuxt.svg' },
        { title: 'Vuetify', description: 'A short description', image: '/expertise/vuetify.svg' },
        { title: 'Firebase', description: 'A short description', image: '/expertise/firebase.svg' }
        // { title: 'Tailwind', description: 'A short description', image: 'https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg' },
        // { title: 'SASS', description: 'A short description', image: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' }
      ]
    }
  }
}
</script>

<style scoped>
  .circle-bg {
    background-size: contain;
    background-position: right;
    background-image: url('/circle.svg');
  }

  .line-height {
    line-height: 25px;
  }
</style>
