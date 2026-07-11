<template>
  <section id="home" class="hero">
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__grid" />
      <div class="hero__glow" />
    </div>

    <div class="wrap wrap-wide hero__inner">
      <div class="hero__copy">
        <span class="hero__badge anim" style="--d: 0.05s">
          <span class="hero__badge-dot" aria-hidden="true" />
          Available for new projects
          <span class="hero__badge-sep" aria-hidden="true" />
          <span class="mono">Kathmandu · GMT+5:45</span>
        </span>

        <h1 class="hero__title anim" style="--d: 0.12s">
          From idea to <span class="hero__accent">shipped product</span> — built by one engineer.
        </h1>

        <p class="hero__lead anim" style="--d: 0.2s">
          I'm Ishan, a product engineer. Founders bring me a rough idea; I hand back
          a live, revenue-ready product — design, full-stack build, AI, and
          deployment. The whole thing, one person, done right.
        </p>

        <div class="hero__cta anim" style="--d: 0.28s">
          <a href="#contact" class="btn btn--accent btn--lg" @click.prevent="go('#contact')">
            Book a call
            <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </a>
          <a href="#work" class="btn btn--ghost btn--lg" @click.prevent="go('#work')">
            See recent work
          </a>
        </div>

        <div class="hero__trust anim" style="--d: 0.36s">
          <span class="hero__trust-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="hero__star"><path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2z" /></svg>
            Product Engineer
          </span>
          <span class="hero__trust-sep" aria-hidden="true" />
          <span class="hero__trust-item">Shipping since <strong>2016</strong></span>
          <span class="hero__trust-sep" aria-hidden="true" />
          <span class="hero__trust-item">Full-stack&nbsp;+&nbsp;AI</span>
        </div>
      </div>

      <div
        class="hero__visual anim"
        style="--d: 0.32s"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <a
          class="hero__window"
          :href="active.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visit ${active.title}`"
        >
          <div class="hero__window-bar">
            <span class="hero__dots" aria-hidden="true"><i /><i /><i /></span>
            <transition name="urlswap" mode="out-in">
              <span :key="active.domain" class="hero__url mono">{{ active.domain }}</span>
            </transition>
          </div>
          <div class="hero__shot">
            <img
              v-for="(p, i) in products"
              :key="p.title"
              :src="p.image"
              :alt="p.alt"
              :class="{ 'is-active': i === current }"
              loading="eager"
            >
          </div>
        </a>

        <div class="hero__chip hero__chip--live">
          <span class="hero__chip-dot" aria-hidden="true" />
          Live in production
        </div>

        <div class="hero__showcase">
          <div class="hero__dots-nav" role="tablist" aria-label="Featured products">
            <button
              v-for="(p, i) in products"
              :key="p.title"
              type="button"
              class="hero__dot"
              :class="{ 'is-active': i === current }"
              :aria-label="`Show ${p.title}`"
              :aria-selected="String(i === current)"
              role="tab"
              @click="setProduct(i)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      timer: null,
      products: [
        { title: 'Podkite', domain: 'podkite.com', link: 'https://podkite.com/', image: '/works/podkite.png?v=2', alt: 'Podkite analytics dashboard — a product shipped by Ishan' },
        { title: 'Racepass', domain: 'racepass.com', link: 'https://racepass.com/', image: '/works/racepass.png?v=2', alt: 'Racepass sporting-events marketplace — a product shipped by Ishan' },
        { title: 'Labster', domain: 'labster.com', link: 'https://labster.com/', image: '/works/labster.png?v=2', alt: 'Labster virtual STEM labs — a product shipped by Ishan' },
        { title: 'Merojob', domain: 'merojob.com', link: 'https://merojob.com/', image: '/works/merojob.png?v=2', alt: 'Merojob job portal — a product shipped by Ishan' }
      ]
    }
  },
  computed: {
    active () {
      return this.products[this.current]
    }
  },
  mounted () {
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) { this.resume() }
  },
  beforeDestroy () {
    this.pause()
  },
  methods: {
    go (hash) {
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    },
    setProduct (i) {
      this.current = i
      this.resume()
    },
    resume () {
      this.pause()
      this.timer = setInterval(() => {
        this.current = (this.current + 1) % this.products.length
      }, 3800)
    },
    pause () {
      if (this.timer) { clearInterval(this.timer); this.timer = null }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding-top: clamp(7rem, 6rem + 4vw, 9rem);
  padding-bottom: clamp(1.5rem, 6vw, 1.5rem);
  overflow: hidden;
  isolation: isolate;
}
.hero__bg { position: absolute; inset: 0; z-index: -1; }
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--hairline) 1px, transparent 1px),
    linear-gradient(90deg, var(--hairline) 1px, transparent 1px);
  background-size: 68px 68px;
  -webkit-mask-image: radial-gradient(110% 80% at 12% 5%, #000 0%, transparent 68%);
  mask-image: radial-gradient(110% 80% at 12% 5%, #000 0%, transparent 68%);
  opacity: 0.6;
}
.hero__glow {
  position: absolute;
  top: -8%;
  right: -6%;
  width: 60vw;
  height: 60vw;
  max-width: 780px;
  max-height: 780px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 72%);
  filter: blur(50px);
  opacity: 0.6;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

/* Copy */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: var(--text-xs);
  color: var(--ink-muted);
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  background: var(--surface);
  margin-bottom: 1.8rem;
}
.hero__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: oklch(0.78 0.16 150);
  box-shadow: 0 0 0 3px oklch(0.78 0.16 150 / 0.2);
}
.hero__badge-sep { width: 1px; height: 12px; background: var(--border-strong); }

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.04;
  max-width: 15ch;
}
.hero__accent { color: var(--accent-text); }
.hero__lead {
  margin-top: 1.5rem;
  font-size: var(--text-lg);
  color: var(--ink-muted);
  max-width: 48ch;
  line-height: 1.55;
}

.hero__cta { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }

.hero__trust {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2.2rem;
  font-size: var(--text-sm);
  color: var(--ink-muted);
}
.hero__trust-item { display: inline-flex; align-items: center; gap: 0.4rem; }
.hero__trust-item strong { color: var(--ink); font-weight: 600; }
.hero__star { color: var(--accent-text); }
.hero__trust-sep { width: 4px; height: 4px; border-radius: 50%; background: var(--border-strong); }

/* Visual — product window */
.hero__visual { position: relative; }
.hero__window {
  display: block;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: var(--shadow-2);
  transform: perspective(1400px) rotateY(-6deg) rotateX(1.5deg);
  transform-origin: center;
  transition: transform 0.6s var(--ease-out);
}
.hero__window:hover { transform: perspective(1600px) rotateY(-3deg) rotateX(1deg) translateY(-4px); }
.hero__window-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elev);
}
.hero__dots { display: inline-flex; gap: 6px; }
.hero__dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--border-strong); }
.hero__url {
  font-size: 0.72rem;
  color: var(--ink-faint);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 0.2rem 0.8rem;
  margin-left: auto;
}
.hero__shot { position: relative; aspect-ratio: 16 / 11; overflow: hidden; background: var(--surface); }
.hero__shot img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transform: scale(1.02);
  transition: opacity 0.8s var(--ease-out), transform 1.2s var(--ease-out);
}
.hero__shot img.is-active { opacity: 1; transform: scale(1); }

/* URL + name swap */
.urlswap-enter-active, .urlswap-leave-active { transition: opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out); }
.urlswap-enter { opacity: 0; transform: translateY(4px); }
.urlswap-leave-to { opacity: 0; transform: translateY(-4px); }

.hero__chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--text-xs);
  font-weight: 500;
  padding: 0.55rem 0.9rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border);
  background: color-mix(in oklch, var(--bg-elev) 88%, transparent);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-1);
}
.hero__chip--live { top: 1.1rem; left: -1.4rem; }
.hero__chip-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: oklch(0.78 0.16 150);
  box-shadow: 0 0 0 3px oklch(0.78 0.16 150 / 0.2);
}

/* Showcase caption + carousel dots */
.hero__showcase {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.1rem;
  padding: 0 0.2rem;
}
.hero__dots-nav { display: inline-flex; gap: 0.5rem; }
.hero__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--border-strong);
  cursor: pointer;
  transition: width 0.4s var(--ease-out), background 0.3s;
}
.hero__dot.is-active { width: 22px; background: var(--accent); }

@media (max-width: 940px) {
  .hero__inner { grid-template-columns: 1fr; gap: 3rem; }
  .hero__title { max-width: 18ch; }
  .hero__window { transform: none; }
  .hero__window:hover { transform: translateY(-4px); }
  .hero__chip--live { left: 0.8rem; }
}
@media (max-width: 520px) {
  .hero__chip { display: none; }
  .hero__badge { display: none; }
  .hero__visual { display: none; }
}

/* Entrance */
.anim { opacity: 0; transform: translateY(16px); animation: heroUp 0.85s var(--ease-out) forwards; animation-delay: var(--d, 0s); }
@keyframes heroUp { to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .anim { opacity: 1; transform: none; animation: none; }
  .hero__shot img { transition: opacity 0.2s linear; transform: none; }
  .hero__shot img.is-active { transform: none; }
  .hero__window, .hero__dot { transition: none; }
}
</style>
