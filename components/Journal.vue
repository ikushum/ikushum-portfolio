<template>
  <article class="article">
    <div class="wrap article__head">
      <nuxt-link to="/journals" class="article__back link">
        <span aria-hidden="true">←</span> All writing
      </nuxt-link>

      <p class="article__meta mono">
        <span>{{ formatDate(journal.createdAt) }}</span>
        <span class="article__sep">/</span>
        <span>{{ journal.author }}</span>
        <span class="article__sep">/</span>
        <span>{{ readTime }} min read</span>
      </p>

      <h1 class="article__title">{{ journal.title }}</h1>

      <p v-if="journal.description" class="article__standfirst">
        {{ journal.description }}
      </p>

      <div class="article__share">
        <button type="button" class="article__share-btn" aria-label="Share on X" @click="tweet">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" /></svg>
        </button>
        <button type="button" class="article__share-btn" aria-label="Share on LinkedIn" @click="linkedInPost">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
        </button>
        <button type="button" class="article__share-btn" aria-label="Copy link" @click="copyLink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>
          <span v-if="copied" class="article__copied">Copied</span>
        </button>
      </div>
    </div>

    <div class="wrap article__hero">
      <img :src="`/journals/${journal.slug}/${journal.image}`" :alt="journal.title">
    </div>

    <div class="wrap prose article__body">
      <nuxt-content :document="journal" />
    </div>

    <div class="wrap article__comments">
      <Disqus shortname="ishansubedi" />
    </div>
  </article>
</template>

<script>
import { Disqus } from 'vue-disqus'
export default {
  components: { Disqus },
  props: {
    journal: {
      type: Object,
      required: true
    }
  },
  data () {
    return { copied: false }
  },
  computed: {
    readTime () {
      const contentText = JSON.stringify(this.journal)
      const words = contentText.split(' ').length
      return Math.ceil(words / 200)
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    tweet () {
      window.open(
        'https://twitter.com/intent/tweet?text=' +
          encodeURIComponent(document.title) +
          '&url=' +
          encodeURIComponent(location.href)
      )
    },
    linkedInPost () {
      window.open(
        'https://www.linkedin.com/sharing/share-offsite/?url=' +
          encodeURIComponent(location.href),
        '_blank',
        'width=560,height=560'
      )
    },
    copyLink () {
      const done = () => {
        this.copied = true
        setTimeout(() => { this.copied = false }, 1600)
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(done).catch(done)
      } else {
        done()
      }
    }
  }
}
</script>

<style scoped>
.article { padding-top: 7rem; padding-bottom: 4rem; }
.article__head {
  max-width: 760px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.article__back {
  display: inline-flex;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  margin-bottom: 2rem;
}
.article__meta {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.76rem;
  color: var(--ink-faint);
  margin-bottom: 1.4rem;
}
.article__sep { color: var(--accent-line); }
.article__title {
  font-size: var(--text-3xl);
  letter-spacing: -0.035em;
  margin-bottom: 1.3rem;
}
.article__standfirst {
  font-size: var(--text-lg);
  color: var(--ink-muted);
  max-width: 52ch;
  margin: 0 auto 2rem;
}
.article__share { display: flex; justify-content: center; gap: 0.5rem; }
.article__share-btn {
  position: relative;
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ink-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, transform 0.4s var(--ease-out);
}
.article__share-btn:hover { color: var(--accent-text); border-color: var(--accent-line); transform: translateY(-2px); }
.article__copied {
  position: absolute;
  bottom: -1.8rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  color: var(--accent-text);
  white-space: nowrap;
}

.article__hero {
  margin: clamp(2.5rem, 5vw, 4rem) auto;
  max-width: 980px;
}
.article__hero img {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.article__body { max-width: 720px; }
.article__comments { max-width: 720px; margin-top: 4rem; padding-top: 2.5rem; border-top: 1px solid var(--border); }

@media (prefers-reduced-motion: reduce) {
  .article__share-btn { transition: none; }
}
</style>
