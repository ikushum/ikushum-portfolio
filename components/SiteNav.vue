<template>
  <header class="nav" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <div class="nav__inner wrap wrap-wide">
      <a href="/" class="brand" aria-label="John — home" @click.prevent="goHome">
        <span class="brand__mark"><logo-mark /></span>
        <span class="brand__name">John</span>
        <span class="brand__role">Product Engineer</span>
      </a>

      <nav class="nav__links" aria-label="Primary">
        <a
          v-for="item in links"
          :key="item.hash"
          :href="item.hash"
          class="nav__link"
          @click.prevent="navigate(item)"
        >{{ item.label }}</a>
      </nav>

      <div class="nav__actions">
        <theme-toggle />
        <a href="#contact" class="btn btn--accent nav__cta" @click.prevent="navigate({ hash: '#contact' })">
          Book a call
        </a>
        <button
          class="nav__burger"
          type="button"
          :aria-expanded="String(menuOpen)"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="nav__burger-box" aria-hidden="true">
            <span /><span />
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <transition name="drawer">
      <div v-if="menuOpen" class="drawer">
        <a
          v-for="(item, i) in links"
          :key="item.hash"
          :href="item.hash"
          class="drawer__link"
          :style="{ '--i': i }"
          @click.prevent="navigate(item)"
        >
          <span class="drawer__idx mono">0{{ i + 1 }}</span>
          {{ item.label }}
        </a>
        <a
          href="#contact"
          class="btn btn--accent btn--lg drawer__cta"
          @click.prevent="navigate({ hash: '#contact' })"
        >Book a call</a>
      </div>
    </transition>
  </header>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle'
import LogoMark from '@/components/LogoMark'

export default {
  components: { ThemeToggle, LogoMark },
  data () {
    return {
      scrolled: false,
      menuOpen: false,
      links: [
        { label: 'Work', hash: '#work' },
        { label: 'Approach', hash: '#approach' },
        { label: 'About', hash: '#about' },
        { label: 'Writing', hash: '#writing' }
      ]
    }
  },
  watch: {
    menuOpen (open) {
      if (process.client) {
        document.body.style.overflow = open ? 'hidden' : ''
      }
    },
    $route () {
      this.menuOpen = false
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
    if (process.client) { document.body.style.overflow = '' }
  },
  methods: {
    onScroll () {
      this.scrolled = window.scrollY > 24
    },
    goHome () {
      this.menuOpen = false
      if (this.$route.path === '/') {
        if (this.$motion && this.$motion.lenis) {
          this.$motion.lenis.scrollTo(0, { duration: 1.1 })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else {
        this.$router.push('/')
      }
    },
    navigate (item) {
      this.menuOpen = false
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => this.scrollToSection(item.hash))
        })
        return
      }
      this.scrollToSection(item.hash)
    },
    scrollToSection (hash) {
      if (this.$motion) {
        this.$motion.scrollToHash(hash)
        return
      }
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: var(--z-nav);
  transition: background 0.4s var(--ease-out), border-color 0.4s var(--ease-out), backdrop-filter 0.4s;
  border-bottom: 1px solid transparent;
}
.nav.is-scrolled {
  background: color-mix(in oklch, var(--bg) 78%, transparent);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  backdrop-filter: blur(16px) saturate(1.4);
  border-bottom-color: var(--border);
}
.nav.is-open { background: var(--bg); }

.nav__inner {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  height: 74px;
}

/* Brand */
.brand {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0 0.6rem;
  margin-right: auto;
}
.brand__mark {
  grid-row: 1 / 3;
  width: 34px;
  height: 34px;
  transition: transform 0.5s var(--ease-out);
}
.brand:hover .brand__mark { transform: translateY(-2px) rotate(-4deg); }
.brand__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.02rem;
  letter-spacing: -0.02em;
  line-height: 1;
}
.brand__role {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.02em;
  color: var(--ink-faint);
  line-height: 1;
  margin-top: 2px;
}

/* Links */
.nav__links { display: flex; align-items: center; gap: 0.35rem; }
.nav__link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--ink-muted);
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-pill);
  transition: color 0.25s, background 0.25s;
}
.nav__link:hover { color: var(--ink); background: var(--surface); }

.nav__actions { display: flex; align-items: center; gap: 0.6rem; }

.nav__burger {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  cursor: pointer;
  padding: 0;
  place-items: center;
  transition: border-color 0.25s, background 0.25s, transform 0.4s var(--ease-out);
}
.nav__burger:hover { border-color: var(--ink-faint); transform: translateY(-1px); }
.nav__burger-box {
  position: relative;
  display: block;
  width: 18px;
  height: 12px;
}
.nav__burger-box span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--ink);
  transition: transform 0.38s var(--ease-out), top 0.28s var(--ease-out);
}
.nav__burger-box span:nth-child(1) { top: 2px; }
.nav__burger-box span:nth-child(2) { top: 8px; }
.is-open .nav__burger-box span:nth-child(1) { top: 5px; transform: rotate(45deg); }
.is-open .nav__burger-box span:nth-child(2) { top: 5px; transform: rotate(-45deg); }

/* Drawer */
.drawer {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.5rem var(--wrap-pad) 2.5rem;
  min-height: calc(100vh - 74px);
  min-height: calc(100svh - 74px);
  background: var(--bg);
}
.drawer__link {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2rem, 12vw, 3rem);
  letter-spacing: -0.03em;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
  color: var(--ink);
}
.drawer__idx { font-size: 0.8rem; color: var(--accent-text); font-family: var(--font-mono); }
.drawer__cta { margin-top: 2rem; align-self: flex-start; }

.drawer-enter-active, .drawer-leave-active { transition: opacity 0.3s var(--ease-out); }
.drawer-enter, .drawer-leave-to { opacity: 0; }

@media (max-width: 860px) {
  .nav__links, .nav__cta { display: none; }
  .nav__burger { display: grid; }
  .drawer { display: flex; }
}

@media (prefers-reduced-motion: reduce) {
  .nav, .brand__mark, .nav__link, .nav__burger span { transition: none; }
}
</style>
