<template>
  <v-app>
    <site-nav />
    <main class="errpage">
      <div class="wrap errpage__inner">
        <p class="eyebrow">{{ error.statusCode === 404 ? 'Error 404' : 'Something broke' }}</p>
        <h1 class="errpage__code">{{ error.statusCode || 'Oops' }}</h1>
        <p class="errpage__msg lead">
          {{ error.statusCode === 404
            ? "That page shipped off somewhere. It doesn't exist — or it moved."
            : "An unexpected error occurred. Try again, or head back home." }}
        </p>
        <div class="errpage__cta">
          <NuxtLink to="/" class="btn btn--accent btn--lg">
            Back home
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </NuxtLink>
          <NuxtLink to="/journals" class="btn btn--ghost btn--lg">Read the journal</NuxtLink>
        </div>
      </div>
    </main>
    <site-footer />
  </v-app>
</template>

<script>
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
export default {
  components: { SiteNav, SiteFooter },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: (this.error && this.error.statusCode === 404 ? 'Page not found' : 'Error') + ' — '
    }
  }
}
</script>

<style scoped>
.errpage {
  min-height: 78vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
}
.errpage__inner { text-align: center; max-width: 40rem; }
.eyebrow { justify-content: center; margin-bottom: 1.5rem; }
.errpage__code {
  font-size: clamp(4rem, 18vw, 9rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  color: var(--accent-text);
}
.errpage__msg { margin: 1.5rem auto 2.5rem; }
.errpage__cta { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
</style>
