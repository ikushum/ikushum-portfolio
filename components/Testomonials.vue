<template>
  <v-container class="min-full-vh d-flex align-center">
    <div style="width:100%">
      <h2 class="display-2 my-10 text-center">
        Happy Clients
      </h2>

      <v-carousel
        :show-arrows="false"
        light
        cycle
        height="auto"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="testomonial in testomonials"
          :key="testomonial.title"
          class="mb-12"
        >
          <v-row align="center" justify="center">
            <v-col
              sm="12"
              md="9"
            >
              <v-list color="transparent" class="text-center">
                <v-list-item>
                  <v-list-item-avatar size="100" class="mx-auto">
                    <v-img :src="testomonial.image" />
                  </v-list-item-avatar>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="headline">
                      {{ testomonial.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ testomonial.designation }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <div class="headline py-10 grey--text text-center">
                  "
                  {{ testomonial.feedback }}
                  "
                </div>
              </v-list>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      testomonials: [
        {
          name: 'Jalal Fathi',
          designation: 'Founder & Chief Podkiter at Podkite',
          image: require('@/assets/images/clients/jay.jpeg'),
          feedback: 'Ishan picked tasks up in a timely manner and was able to communicate complex challenges with ease. What I most enjoyed about working with Ishan is the fact that I could trust him as a person and the speed he familiarized himself with new technologies and challenges. Your team will thrive with Ishan.'
        },
        {
          name: 'Nikita Kutselev',
          designation: 'Senior Big Data DevOps Engineer',
          image: require('@/assets/images/clients/nikita.jpeg'),
          feedback: 'Ishan did a great job redesigning my landing page, and only in one day. He has a great sense of design and writes beautiful code. I\'m impressed.'
        },
        {
          name: 'Cécile G.',
          designation: 'Risk Manager / BI specialist',
          image: require('@/assets/images/clients/cg.jpg'),
          feedback: 'We really liked working with Ishan. He worked fast and well. He understood our documented requirements easily and even made suggestions.'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .display-2{
    font-weight: bold;
    font-family: 'Playfair Display', serif !important;
  }
</style>
