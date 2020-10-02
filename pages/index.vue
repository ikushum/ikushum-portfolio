<template>
  <div>
    <app-header style="margin-top:-90px" />
    <about />
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import About from '@/components/About'
export default {
  components: { AppHeader, About }
}
</script>
