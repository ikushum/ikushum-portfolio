<template>
  <div>
    <app-header style="margin-top:-90px" />
    <about />
    <my-works />
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import About from '@/components/About'
import MyWorks from '@/components/MyWorks/Index'
export default {
  components: { AppHeader, About, MyWorks }
}
</script>
