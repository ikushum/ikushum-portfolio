<template>
  <footer class="footer">
    <div class="wrap wrap-wide footer__inner">
      <div class="footer__brand">
        <a href="/" class="footer__name" @click.prevent="goHome">
          <span class="footer__mark"><logo-mark /></span>
          Ishan Subedi
        </a>
        <p class="footer__tag muted">
          Product engineer building and shipping full products for founders — from first sketch to production.
        </p>
        <a class="link footer__mail" href="mailto:ikushum@gmail.com">ikushum@gmail.com</a>
      </div>

      <nav class="footer__col" aria-label="Sitemap">
        <span class="footer__h mono">Sitemap</span>
        <a href="#work" @click.prevent="navigate('#work')">Work</a>
        <a href="#approach" @click.prevent="navigate('#approach')">Approach</a>
        <a href="#about" @click.prevent="navigate('#about')">About</a>
        <nuxt-link to="/journals">Writing</nuxt-link>
      </nav>

      <nav class="footer__col" aria-label="Elsewhere">
        <span class="footer__h mono">Elsewhere</span>
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.link"
          target="_blank"
          rel="noopener noreferrer"
        >{{ s.label }}<span class="footer__ext" aria-hidden="true">↗</span></a>
      </nav>
    </div>

    <div class="wrap wrap-wide footer__base">
      <span class="muted">© {{ year }} Ishan Subedi. Built from Kathmandu.</span>
      <span class="footer__status">
        <span class="footer__dot" aria-hidden="true" />
        Available for new projects
      </span>
    </div>
  </footer>
</template>

<script>
import LogoMark from '@/components/LogoMark'

export default {
  components: { LogoMark },
  data () {
    return {
      year: new Date().getFullYear(),
      socials: [
        { label: 'GitHub', link: 'https://github.com/ikushum' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ikushum/' },
        { label: 'Upwork', link: 'https://www.upwork.com/o/profiles/users/~01d59c7d222074ad1c/' }
      ]
    }
  },
  methods: {
    goHome () {
      if (this.$route.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        this.$router.push('/')
      }
    },
    navigate (hash) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => this.scrollToSection(hash))
        })
        return
      }
      this.scrollToSection(hash)
    },
    scrollToSection (hash) {
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: clamp(3rem, 2rem + 4vw, 5rem) 2rem;
  background: var(--bg);
}
.footer__inner {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
}
.footer__name {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}
.footer__mark { width: 30px; height: 30px; display: inline-block; }
.footer__tag { margin: 1rem 0 1.25rem; max-width: 38ch; font-size: var(--text-sm); }
.footer__mail { font-size: var(--text-base); }

.footer__col { display: flex; flex-direction: column; gap: 0.7rem; }
.footer__h {
  font-size: var(--text-xs);
  letter-spacing: 0.05em;
  color: var(--ink-faint);
  margin-bottom: 0.3rem;
}
.footer__col a {
  color: var(--ink-muted);
  font-size: var(--text-sm);
  width: fit-content;
  transition: color 0.2s;
}
.footer__col a:hover { color: var(--accent-text); }
.footer__ext { font-size: 0.7em; margin-left: 0.35em; opacity: 0.6; }

.footer__base {
  margin-top: clamp(2.5rem, 5vw, 4rem);
  padding-top: 1.75rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-size: var(--text-xs);
}
.footer__status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink-muted);
  font-family: var(--font-mono);
}
.footer__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: oklch(0.78 0.16 150);
  box-shadow: 0 0 0 3px oklch(0.78 0.16 150 / 0.2);
}

@media (max-width: 720px) {
  .footer__inner { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; }
}
</style>
