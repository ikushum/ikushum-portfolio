<template>
  <section id="writing" class="writing section">
    <div class="wrap wrap-wide">
      <div class="writing__head">
        <div>
          <p v-reveal class="eyebrow">Writing</p>
          <h2 v-reveal="{ delay: '0.05s' }" class="writing__title">
            Notes from the workshop.
          </h2>
        </div>
        <nuxt-link v-reveal to="/journals" class="btn btn--ghost writing__all">
          All writing
          <svg class="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </nuxt-link>
      </div>

      <div class="writing__grid">
        <nuxt-link
          v-for="(post, i) in posts"
          :key="post.slug"
          v-reveal="{ delay: (i * 0.06) + 's' }"
          class="writing__card"
          :to="`/journals/${post.slug}`"
        >
          <div class="writing__thumb">
            <img :src="`/journals/${post.slug}/${post.image}`" :alt="post.title" loading="lazy">
          </div>
          <div class="writing__meta mono">{{ formatDate(post.createdAt) }}</div>
          <h3 class="writing__card-title">{{ post.title }}</h3>
          <p class="writing__excerpt muted">{{ truncate(post.description, 96) }}</p>
          <span class="writing__read">Read <span aria-hidden="true">→</span></span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch () {
    this.posts = await this.$content('journals')
      .where({ isHidden: { $ne: true } })
      .only(['createdAt', 'title', 'image', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
  },
  data () {
    return { posts: [] }
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
  }
}
</script>

<style scoped>
.writing__head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}
.writing__title { font-size: var(--text-3xl); margin-top: 1rem; }
.writing__all { flex: 0 0 auto; }

.writing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 3vw, 2rem);
}
.writing__card {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-bottom: 0.25rem;
}
.writing__thumb {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 3 / 2;
  margin-bottom: 0.75rem;
  background: var(--surface);
}
.writing__thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s var(--ease-out); }
.writing__card:hover .writing__thumb img { transform: scale(1.04); }
.writing__meta { font-size: 0.7rem; color: var(--ink-faint); letter-spacing: 0.02em; }
.writing__card-title {
  font-size: var(--text-lg);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.2;
  transition: color 0.25s;
}
.writing__card:hover .writing__card-title { color: var(--accent-text); }
.writing__excerpt { font-size: var(--text-sm); margin: 0; }
.writing__read {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-text);
  margin-top: 0.35rem;
}

@media (max-width: 820px) {
  .writing__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .writing__grid { grid-template-columns: 1fr; }
  .writing__head { flex-direction: column; align-items: flex-start; }
}
</style>
