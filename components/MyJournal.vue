<template>
  <v-container class="min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2 my-12">
        My Journal
      </h2>

      <v-row class="my-5">
        <v-col
          v-for="journal in journals"
          :key="journal.slug"
          xs="12"
          sm="6"
          md="4"
        >
          <v-card
            flat
            tile
            height="100%"
            class="d-flex flex-column"
            @click="$router.push(`/journals/${journal.slug}`)"
          >
            <v-img
              :src="`/journals/${journal.slug}/${journal.image}`"
              height="250px"
              gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)"
            />

            <v-card-title class="title-text px-0 pb-2 line-height-25">
              {{ journal.title }}
            </v-card-title>

            <v-card-text class="px-0 pb-2 line-height-25">
              {{ truncateString(journal.description, 100) }}
            </v-card-text>

            <v-spacer />

            <v-card-actions class="pt-0 px-0">
              <div class="caption grey--text">
                {{ formatDate(journal.createdAt) }}
              </div>

              <v-spacer />

              <v-btn
                text
                small
                color="primary"
                class="text-capitalize"
                :href="`/journals/${journal.slug}`"
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
  props: {
    limit: {
      type: [Number, String],
      default: 6
    }
  },
  data () {
    return {
      journals: []
    }
  },
  mounted () {
    this.fetchJournals()
  },
  methods: {
    async fetchJournals () {
      this.journals = await this.$content('journals')
        .only(['createdAt', 'title', 'image', 'description', 'slug'])
        .sortBy('createdAt', 'desc')
        .limit(this.limit)
        .fetch()
    },
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    truncateString (str, num) {
      if (str.length > num) {
        return str.slice(0, num) + '...'
      } else {
        return str
      }
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
  .display-2, .title-text{
    word-break: normal;
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
