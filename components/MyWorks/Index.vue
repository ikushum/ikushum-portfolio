<template>
  <v-container class="circle-bg min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2">
        My Works
      </h2>

      <v-row v-if="$vuetify.breakpoint.lgAndUp" class="my-5">
        <v-col
          v-for="work in works.slice(2)"
          :key="work.title"
          cols="4"
        >
          <my-work :work="work" height="100%" />
        </v-col>

        <v-col cols="4">
          <v-row class="">
            <v-col
              v-for="(work, index) in works.slice(-2)"
              :key="work.title"
              cols="12"
              :class="index === 0 ? 'pt-0' : 'pb-0'"
            >
              <my-work :work="work" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-else class="my-5">
        <v-col
          v-for="work in works"
          :key="work.title"
          xs="12"
          sm="6"
          md="6"
        >
          <my-work :work="work" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import MyWork from './MyWork'
export default {
  components: { MyWork },
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
