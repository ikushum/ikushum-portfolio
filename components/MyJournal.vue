<template>
  <v-container class="min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2 my-12">
        My Journal
      </h2>

      <v-row class="my-5">
        <v-col
          v-for="journal in journals"
          :key="journal.title"
          xs="12"
          sm="6"
          md="4"
        >
          <v-card flat>
            <v-img
              :src="journal.image"
              height="250px"
              class="rounded-lg"
              gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
            />

            <v-card-title class="px-0 pb-2 line-height-25">
              The Mountains are calling me
            </v-card-title>

            <v-card-actions class="pt-0 px-0">
              <div class="caption grey--text">
                2020-21-12
              </div>

              <v-spacer />

              <v-btn
                text
                small
                color="primary"
                class="text-capitalize"
              >
                Readmore
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      journals: [
        { title: 'Vue', description: 'A short description', image: 'https://picsum.photos/200' },
        { title: 'Nuxt', description: 'A short description', image: 'https://picsum.photos/201' },
        { title: 'Vuetify', description: 'A short description', image: 'https://picsum.photos/202' },
        { title: 'Firebase', description: 'A short description', image: 'https://picsum.photos/203' },
        { title: 'SAAS', description: 'A short description', image: 'https://picsum.photos/204' },
        { title: 'Tailwind', description: 'A short description', image: 'https://picsum.photos/205' }
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
  .line-height-25 {
    line-height: 25px;
  }
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
