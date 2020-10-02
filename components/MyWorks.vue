<template>
  <v-container class="circle-bg min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2">
        My Works
      </h2>

      <v-row class="my-5">
        <v-col cols="12" md="6" lg="4">
          <v-img
            :src="works[0].image"
            height="100%"
            dark
            class="rounded-lg pa-5"
            gradient="to right top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
          >
            <div class="d-flex flex-column fill-height">
              <h1>{{ works[0].title }}</h1>
              <p class="caption">
                {{ works[0].description }}
              </p>

              <v-spacer />

              <v-btn class="ml-auto" text>
                View
              </v-btn>
            </div>
          </v-img>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-img
            :src="works[1].image"
            height="100%"
            dark
            class="rounded-lg pa-5"
            gradient="to right top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
          >
            <div class="d-flex flex-column fill-height">
              <h1>{{ works[1].title }}</h1>
              <p class="caption">
                {{ works[1].description }}
              </p>

              <v-spacer />

              <v-btn class="ml-auto" text>
                View
              </v-btn>
            </div>
          </v-img>
        </v-col>

        <v-col cols="12" md="12" lg="4">
          <v-row class="">
            <v-col cols="12" md="6" lg="12" class="pt-0">
              <v-img
                :src="works[2].image"
                height="200"
                dark
                class="rounded-lg pa-5"
                gradient="to right top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
              >
                <div class="d-flex flex-column fill-height">
                  <h1>{{ works[2].title }}</h1>
                  <p class="caption">
                    {{ works[2].description }}
                  </p>

                  <v-spacer />

                  <v-btn class="ml-auto" text>
                    View
                  </v-btn>
                </div>
              </v-img>
            </v-col>

            <v-col cols="12" md="6" lg="12" class="pb-0">
              <v-img
                :src="works[3].image"
                height="200"
                dark
                class="rounded-lg pa-5"
                gradient="to right top, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.7)"
              >
                <div class="d-flex flex-column fill-height">
                  <h1>{{ works[3].title }}</h1>
                  <p class="caption">
                    {{ works[3].description }}
                  </p>

                  <v-spacer />

                  <v-btn class="ml-auto" text>
                    View
                  </v-btn>
                </div>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      works: [
        { title: 'Podkite', description: 'A short description', image: 'https://picsum.photos/200' },
        { title: 'Elastic Pod', description: 'A short description', image: 'https://picsum.photos/201' },
        { title: 'Merojob', description: 'A short description', image: 'https://picsum.photos/202' },
        { title: 'RealHRsoft', description: 'A short description', image: 'https://picsum.photos/203' }
      ]
    }
  }
}
</script>

<style scoped>
  .circle-bg {
    background-size: 40%;
    background-position: top right;
    background-image: url('/circle.svg');
  }
</style>
