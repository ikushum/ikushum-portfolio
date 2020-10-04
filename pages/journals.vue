<template>
  <div>
    <app-header
      style="margin-top:-90px"
      action-text="Journals"
      @click-action="$vuetify.goTo('#journals')"
    />

    <div class="px-sm-10 px-5">
      <my-journal id="journals" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import MyJournal from '@/components/MyJournal'
export default {
  layout: 'journals',
  components: { AppHeader, MyJournal },
  scrollToTop: true,
  head () {
    return {
      title: 'Journals - '
    }
  }
}
</script>
