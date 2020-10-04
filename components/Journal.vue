<template>
  <div class="py-5">
    <div class="mb-12 text-center ">
      <h1 class="display-2">
        The Mountains Are Calling Me
      </h1>
      <p class="subtitle-1 grey--text my-5">
        Feb 2, 2017
        <span class="mx-5">/</span>
        By Ishan Subedi
        <span class="mx-5">/</span>
        Travel
      </p>
    </div>

    <v-img
      height="70vh"
      :src="journal.image"
      class="rounded-lg"
      gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
    />

    <div class="content my-12 mx-auto">
      <p class="grey--text text--darken-1">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.

        <br>
        <br>

        Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.

        <v-img
          height="300"
          src="https://picsum.photos/400/400"
          class="rounded-lg my-10"
          gradient="to left top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)"
        />

        Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journal: {
      type: Object,
      required: true
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
