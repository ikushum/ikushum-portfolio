<template>
  <section id="open-source" ref="root" class="oss section">
    <div class="wrap wrap-wide">
      <div class="oss__panel">
        <div class="oss__top">
          <div class="oss__head">
            <p v-reveal class="oss__kicker">
              <span class="oss__kicker-bar" aria-hidden="true" />
              Open source
            </p>
            <h2 v-reveal="{ delay: '0.05s' }" class="oss__title">
              I don't just build on <span class="oss__accent">open source</span> — I&nbsp; help build it.
            </h2>
            <p v-reveal="{ delay: '0.1s' }" class="lead oss__lead">
              I'm a regular open-source contributor across the Vue ecosystem and
              beyond. Most of that work lives in <strong>Vuetify</strong> — the Vue
              UI framework trusted by millions — where I've hardened form components
              and pushed on accessibility. I've also shipped features and fixes to
              <strong>vee-validate</strong>, <strong>expressa</strong>, and other
              tools developers rely on every day.
            </p>

            <div v-reveal="{ delay: '0.15s' }" class="oss__actions">
              <a
                class="btn btn--accent"
                href="https://github.com/vuetifyjs/vuetify/pulls?q=is%3Apr+author%3Aikushum+is%3Amerged"
                target="_blank"
                rel="noopener noreferrer"
              >
                View merged pull requests
                <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </a>
              <a
                class="link oss__repo"
                href="https://github.com/ikushum"
                target="_blank"
                rel="noopener noreferrer"
              >github.com/ikushum <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div class="oss__visual" aria-hidden="true">
            <svg ref="orbit" class="oss__orbit" :class="{ 'is-live': live }" viewBox="0 0 480 400" role="img" aria-label="The Vue ecosystem, with Vuetify highlighted">
              <defs>
                <radialGradient id="ossGlow" cx="50%" cy="46%" r="55%">
                  <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.16" />
                  <stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
                </radialGradient>
                <filter id="ossTrailGlow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="2.4" />
                </filter>
              </defs>

              <ellipse class="oss__aura" cx="240" cy="185" rx="185" ry="155" fill="url(#ossGlow)" />
              <g class="oss__rings">
                <ellipse class="oss__ring" cx="240" cy="185" rx="185" ry="140" />
                <ellipse class="oss__ring oss__ring--inner" cx="240" cy="185" rx="112" ry="82" />
              </g>

              <!-- connectors from Vue core to each ecosystem project -->
              <line class="oss__conn" x1="240" y1="185" x2="240" y2="45" />
              <line class="oss__conn" x1="240" y1="185" x2="371" y2="86" />
              <line class="oss__conn" x1="240" y1="185" x2="425" y2="185" />
              <line class="oss__conn" x1="240" y1="185" x2="371" y2="284" />
              <line class="oss__conn" x1="240" y1="185" x2="240" y2="325" />
              <line class="oss__conn" x1="240" y1="185" x2="109" y2="284" />
              <line class="oss__conn" x1="240" y1="185" x2="55" y2="185" />
              <line class="oss__conn" x1="240" y1="185" x2="109" y2="86" />

              <!-- Vue mark at the core of the ecosystem -->
              <g class="oss__core" transform="translate(189,133) scale(0.8)">
                <path d="M78.8,10L64,35.4L49.2,10H0l64,110.9L128,10H78.8z" fill="#41b883" />
                <path d="M78.8,10L64,35.4L49.2,10H25.6L64,76.5L102.4,10H78.8z" fill="#35495e" />
              </g>

              <!-- Vuetify — where the orbiter lands -->
              <circle class="oss__node" cx="371" cy="86" r="5" />
              <text class="oss__label" x="371" y="64" text-anchor="middle">Vuetify</text>

              <!-- the wider ecosystem -->
              <circle class="oss__node" cx="240" cy="45" r="5" />
              <text class="oss__label" x="240" y="30" text-anchor="middle">Vue Router</text>

              <circle class="oss__node" cx="425" cy="185" r="5" />
              <text class="oss__label" x="425" y="167" text-anchor="middle">Nuxt</text>

              <circle class="oss__node" cx="371" cy="284" r="5" />
              <text class="oss__label" x="371" y="306" text-anchor="middle">Pinia</text>

              <circle class="oss__node" cx="240" cy="325" r="5" />
              <text class="oss__label" x="240" y="347" text-anchor="middle">Vite</text>

              <circle class="oss__node" cx="109" cy="284" r="5" />
              <text class="oss__label" x="109" y="306" text-anchor="middle">Vitest</text>

              <circle class="oss__node" cx="55" cy="185" r="5" />
              <text class="oss__label" x="55" y="167" text-anchor="middle">vee-validate</text>

              <circle class="oss__node" cx="109" cy="86" r="5" />
              <text class="oss__label" x="109" y="64" text-anchor="middle">VueUse</text>

              <!-- Glowing comet trail behind the orbiter -->
              <g class="oss__trail" filter="url(#ossTrailGlow)">
                <circle v-for="n in 12" :key="'trail' + n" class="oss__trail-dot" cx="371" cy="86" r="4" />
              </g>

              <!-- Orange orbiter: sweeps the ecosystem once, lands on Vuetify -->
              <g class="oss__spinner" transform="translate(371,86)">
                <circle class="oss__ping" cx="0" cy="0" r="9" />
                <circle class="oss__halo" cx="0" cy="0" r="16" />
                <circle class="oss__spinner-dot" cx="0" cy="0" r="9" />
              </g>
            </svg>
          </div>
        </div>

        <dl ref="stats" v-reveal="{ delay: '0.05s' }" class="oss__stats">
          <div v-for="(s, i) in stats" :key="s.label" class="oss__stat">
            <dt class="oss__stat-num">{{ display[i] }}{{ s.suffix }}</dt>
            <dd class="oss__stat-label">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      live: false,
      // Sourced from merged public PRs across GitHub (author: ikushum).
      stats: [
        { value: 40, suffix: '+', count: true, label: 'Merged PRs to Vuetify' },
        { value: 8, suffix: '+', count: true, label: 'Open-source projects' },
        { value: 2016, suffix: '', count: false, label: 'Contributing since' }
      ],
      display: [40, 8, 2016]
    }
  },
  mounted () {
    this.$nextTick(() => this.setupMotion())
  },
  beforeDestroy () {
    if (this.ctx) { this.ctx.revert() }
  },
  methods: {
    countUp () {
      const m = this.$motion
      if (!m || m.reduce) { return }
      const { gsap } = m
      this.stats.forEach((s, i) => {
        if (!s.count) { return }
        const proxy = { v: 0 }
        this.$set(this.display, i, 0)
        gsap.to(proxy, {
          v: s.value,
          duration: 1.5,
          ease: 'expo.out',
          onUpdate: () => { this.$set(this.display, i, Math.round(proxy.v)) }
        })
      })
    },
    setupMotion () {
      const m = this.$motion
      if (!m || m.reduce) { return }
      const { gsap, ScrollTrigger } = m
      const r = this.$refs

      this.ctx = gsap.context(() => {
        // Connectors: prep a stroke-draw by dashing each line to its own length.
        const conns = this.$el.querySelectorAll('.oss__conn')
        conns.forEach((ln) => {
          const len = Math.hypot(
            ln.x2.baseVal.value - ln.x1.baseVal.value,
            ln.y2.baseVal.value - ln.y1.baseVal.value
          )
          gsap.set(ln, { attr: { 'stroke-dasharray': len, 'stroke-dashoffset': len } })
        })

        // Initial hidden states for the constellation (JS-only; SVG renders
        // fully without JS / under reduced motion).
        gsap.set('.oss__aura', { opacity: 0, scale: 0.85, svgOrigin: '240 185' })
        gsap.set('.oss__ring', { opacity: 0 })
        gsap.set('.oss__core', { opacity: 0 })
        gsap.set('.oss__node', { attr: { r: 0 } })
        gsap.set('.oss__label', { opacity: 0 })

        // Orbiter: parametric position on the outer ellipse (nodes at 45° steps).
        const spinner = this.$el.querySelector('.oss__spinner')
        const trailDots = Array.from(this.$el.querySelectorAll('.oss__trail-dot'))
        const labels = Array.from(this.$el.querySelectorAll('.oss__label'))
        // Node angles on the ellipse, in the same DOM order as the labels.
        const nodeAngles = [315, 270, 0, 45, 90, 135, 180, 225]
        const history = []
        let hotIdx = -1
        const place = (deg, highlight) => {
          const rad = deg * Math.PI / 180
          const x = 240 + 185 * Math.cos(rad)
          const y = 185 + 140 * Math.sin(rad)
          spinner.setAttribute('transform', `translate(${x}, ${y})`)

          // Comet trail: draw recent positions, fading + shrinking backwards.
          history.push({ x, y })
          if (history.length > trailDots.length + 2) { history.shift() }
          for (let k = 0; k < trailDots.length; k++) {
            const h = history[history.length - 2 - k]
            const d = trailDots[k]
            if (h) {
              const f = 1 - k / trailDots.length
              d.setAttribute('cx', h.x)
              d.setAttribute('cy', h.y)
              d.setAttribute('r', (1.5 + 6 * f).toFixed(2))
              d.style.opacity = (0.55 * f).toFixed(3)
            } else {
              d.style.opacity = 0
            }
          }

          // Light up whichever node the orbiter is currently nearest.
          if (!highlight) { return }
          const a = ((deg % 360) + 360) % 360
          let best = 0
          let bestD = 999
          for (let i = 0; i < nodeAngles.length; i++) {
            let dd = Math.abs(a - nodeAngles[i])
            dd = Math.min(dd, 360 - dd)
            if (dd < bestD) { bestD = dd; best = i }
          }
          if (best !== hotIdx) {
            if (hotIdx >= 0 && labels[hotIdx]) { labels[hotIdx].classList.remove('is-hot') }
            if (labels[best]) { labels[best].classList.add('is-hot') }
            hotIdx = best
          }
        }
        const target = -45 // Vuetify's angle on the ellipse
        const orbit = { a: target - 360 } // start one full turn back
        place(orbit.a, false)
        gsap.set([spinner, '.oss__trail'], { opacity: 0 })

        const tl = gsap.timeline({
          defaults: { ease: 'expo.out' },
          scrollTrigger: { trigger: r.root, start: 'top 72%', once: true }
        })

        tl.to('.oss__aura', { opacity: 1, scale: 1, duration: 1.2 }, 0)
          .to('.oss__ring', { opacity: 0.7, duration: 1, stagger: 0.14 }, 0.05)
          .to('.oss__core', { opacity: 1, duration: 0.6 }, 0.15)
          .to('.oss__conn', { attr: { 'stroke-dashoffset': 0 }, duration: 0.9, stagger: 0.05 }, 0.25)
          .to('.oss__node', { attr: { r: 5 }, duration: 0.5, stagger: 0.045 }, 0.45)
          .to('.oss__label', { opacity: 1, duration: 0.5, stagger: 0.035 }, 0.55)
          // The orbiter + trail appear, sweep the ecosystem once, and settle.
          .to(spinner, { opacity: 1, duration: 0.4 }, 0.7)
          .to('.oss__trail', { opacity: 1, duration: 0.4 }, 0.7)
          .to(orbit, {
            a: target,
            duration: 2.8,
            ease: 'power2.out',
            onUpdate: () => place(orbit.a, true)
          }, 0.8)
          // Once it lands, the trail fades away.
          .to('.oss__trail', { opacity: 0, duration: 0.5 }, 3.3)
          .add(() => { this.live = true })

        // Numbers count up only once they scroll into view.
        ScrollTrigger.create({
          trigger: r.stats,
          start: 'top 88%',
          once: true,
          onEnter: () => this.countUp()
        })
      }, this.$refs.root)
    }
  }
}
</script>

<style scoped>
.oss__panel {
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  padding: clamp(2rem, 5vw, 4rem);
}

.oss__top {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
}

.oss__head { max-width: 40rem; }
.oss__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.7em;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent-text);
  margin-bottom: 1.4rem;
}
.oss__kicker-bar { width: 1.8em; height: 1px; background: var(--accent-line); }
.oss__title { font-size: var(--text-3xl); margin: 0 0 1.4rem; max-width: 18ch; }
.oss__accent { color: var(--accent-text); }
.oss__lead { margin: 0; }
.oss__lead strong { color: var(--ink); font-weight: 600; }

.oss__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.75rem;
  margin-top: 2rem;
}
.oss__repo { font-family: var(--font-mono); font-size: var(--text-sm); }

/* Vue ecosystem constellation */
.oss__visual { justify-self: center; width: 100%; max-width: 30rem; }
.oss__orbit { width: 100%; height: auto; overflow: visible; }
.oss__ring {
  fill: none;
  stroke: var(--border-strong);
  stroke-width: 1;
  stroke-dasharray: 3 6;
  opacity: 0.7;
}
.oss__conn { stroke: var(--border-strong); stroke-width: 1; opacity: 0.5; }
.oss__node { fill: var(--surface); stroke: var(--ink-faint); stroke-width: 1.5; }
.oss__spinner-dot {
  fill: var(--accent);
  stroke: none;
  filter: drop-shadow(0 0 5px var(--accent));
}
.oss__halo { fill: none; stroke: var(--accent); stroke-width: 1.5; opacity: 0.35; }
.oss__ping { fill: none; stroke: var(--accent); stroke-width: 1.5; opacity: 0; }
.oss__trail { opacity: 0; }
.oss__trail-dot { fill: var(--accent); opacity: 0; }
.oss__label {
  font-family: var(--font-mono);
  font-size: 12px;
  fill: var(--ink-muted);
  letter-spacing: 0.01em;
  transition: fill 0.25s var(--ease-out);
}
.oss__label.is-hot { fill: var(--accent-text); font-weight: 600; }

/* Ambient motion — only after the orbiter has landed (.is-live). */
.oss__orbit.is-live .oss__ring { animation: ossDash 3.5s linear infinite; }
.oss__orbit.is-live .oss__ring--inner { animation-duration: 5.5s; animation-direction: reverse; }
.oss__orbit.is-live .oss__ping { animation: ossPing 2.8s ease-out infinite; }
.oss__orbit.is-live .oss__halo { animation: ossHalo 3.4s ease-in-out infinite; }

@keyframes ossDash { to { stroke-dashoffset: -18; } }
@keyframes ossPing {
  0% { r: 9px; opacity: 0.5; }
  70% { opacity: 0; }
  100% { r: 30px; opacity: 0; }
}
@keyframes ossHalo {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.06); }
}
.oss__halo { transform-box: fill-box; transform-origin: center; }

.oss__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  margin: clamp(2.5rem, 5vw, 3.5rem) 0 0;
  padding-top: clamp(1.75rem, 4vw, 2.5rem);
  border-top: 1px solid var(--border);
}
.oss__stat { margin: 0; }
.oss__stat-num {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--accent-text);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.oss__stat-label {
  margin: 0.6rem 0 0;
  font-size: var(--text-sm);
  color: var(--ink-muted);
  max-width: 20ch;
}

@media (max-width: 900px) {
  .oss__top { grid-template-columns: 1fr; gap: 2.5rem; }
  .oss__head { max-width: none; }
  .oss__visual { max-width: 24rem; order: 2; }
}
@media (max-width: 680px) {
  .oss__stats { grid-template-columns: 1fr; gap: 1.5rem; }
  .oss__stat { display: flex; align-items: baseline; gap: 1rem; }
  .oss__stat-label { margin-top: 0; }
}
</style>
