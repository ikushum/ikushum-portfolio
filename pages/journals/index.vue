<template>
  <div class="journals">
    <header class="journals__head wrap wrap-wide">
      <p class="eyebrow">Writing</p>
      <h1 class="journals__title">The Journal</h1>
      <p class="lead journals__lead">
        Notes on building products, the craft of engineering, and lessons from
        shipping software for founders and teams — some recent, some from years back.
      </p>
    </header>

    <div class="wrap wrap-wide">
      <div class="journals__grid">
        <nuxt-link
          v-for="post in posts"
          :key="post.slug"
          class="journals__card"
          :to="`/journals/${post.slug}`"
        >
          <div class="journals__thumb">
            <img :src="`/journals/${post.slug}/${post.image}`" :alt="post.title" loading="lazy">
          </div>
          <div class="journals__meta mono">{{ formatDate(post.createdAt) }}</div>
          <h2 class="journals__card-title">{{ post.title }}</h2>
          <p class="journals__excerpt muted">{{ truncate(post.description, 120) }}</p>
          <span class="journals__read mono">Read <span aria-hidden="true">→</span></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const seo = {
  title: 'Writing — Ishan Subedi',
  description:
    'Notes on building products, engineering craft, and lessons from shipping software for founders and teams.'
}

export default {
  scrollToTop: true,
  async asyncData ({ $content }) {
    const posts = await $content('journals')
      .where({ isHidden: { $ne: true } })
      .only(['createdAt', 'title', 'image', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return { posts }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    truncate (str, num) {
      if (!str) { return '' }
      return str.length > num ? str.slice(0, num).trim() + '…' : str
    }
  },
  head () {
    return {
      title: seo.title,
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: seo.description },
        { hid: 'og:title', property: 'og:title', content: seo.title },
        { hid: 'og:description', property: 'og:description', content: seo.description },
        { hid: 'og:url', property: 'og:url', content: process.env.SITE_URL + '/journals' },
        { hid: 'twitter:title', name: 'twitter:title', content: seo.title },
        { hid: 'twitter:description', name: 'twitter:description', content: seo.description }
      ]
    }
  }
}
</script>

<style scoped>
.journals { padding-top: 8rem; padding-bottom: 5rem; }
.journals__head { max-width: 44rem; margin-bottom: clamp(2.5rem, 5vw, 4rem); }
.journals__title { font-size: var(--text-4xl); margin: 1rem 0 1.4rem; }
.journals__lead { max-width: 56ch; }

.journals__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
}
.journals__card { display: flex; flex-direction: column; gap: 0.6rem; }
.journals__thumb {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 3 / 2;
  margin-bottom: 0.75rem;
  background: var(--surface);
}
.journals__thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s var(--ease-out); }
.journals__card:hover .journals__thumb img { transform: scale(1.04); }
.journals__meta { font-size: 0.7rem; color: var(--ink-faint); }
.journals__card-title {
  font-size: var(--text-lg);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  transition: color 0.25s;
}
.journals__card:hover .journals__card-title { color: var(--accent-text); }
.journals__excerpt { font-size: var(--text-sm); margin: 0; }
.journals__read { font-size: 0.72rem; color: var(--accent-text); margin-top: 0.35rem; }

@media (prefers-reduced-motion: reduce) {
  .journals__thumb img { transition: none; }
}
</style>
