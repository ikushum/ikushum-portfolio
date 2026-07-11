<template>
  <section id="open-source" class="oss section">
    <div class="wrap wrap-wide">
      <div class="oss__panel">
        <div class="oss__top">
          <div class="oss__head">
            <p v-reveal class="eyebrow">Open source</p>
            <h2 v-reveal="{ delay: '0.05s' }" class="oss__title">
              I don't just build on <span class="oss__accent">open source</span> — I help build it.
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

          <div v-reveal="{ delay: '0.12s' }" class="oss__visual" aria-hidden="true">
            <svg class="oss__orbit" viewBox="0 0 480 400" role="img" aria-label="The Vue ecosystem, with Vuetify highlighted">
              <defs>
                <radialGradient id="ossGlow" cx="50%" cy="46%" r="55%">
                  <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.16" />
                  <stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx="240" cy="185" rx="185" ry="155" fill="url(#ossGlow)" />
              <ellipse class="oss__ring" cx="240" cy="185" rx="185" ry="140" />
              <ellipse class="oss__ring" cx="240" cy="185" rx="112" ry="82" />

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
              <g transform="translate(189,133) scale(0.8)">
                <path d="M78.8,10L64,35.4L49.2,10H0l64,110.9L128,10H78.8z" fill="#41b883" />
                <path d="M78.8,10L64,35.4L49.2,10H25.6L64,76.5L102.4,10H78.8z" fill="#35495e" />
              </g>

              <!-- Vuetify — emphasized (where my work concentrates) -->
              <circle class="oss__halo" cx="371" cy="86" r="16" />
              <circle class="oss__node oss__node--v" cx="371" cy="86" r="9" />
              <text class="oss__label oss__label--v" x="371" y="64" text-anchor="middle">Vuetify</text>

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
            </svg>
          </div>
        </div>

        <dl v-reveal="{ delay: '0.1s' }" class="oss__stats">
          <div v-for="s in stats" :key="s.label" class="oss__stat">
            <dt class="oss__stat-num">{{ s.num }}</dt>
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
      // Sourced from merged public PRs across GitHub (author: ikushum).
      stats: [
        { num: '40+', label: 'Merged PRs to Vuetify' },
        { num: '8+', label: 'Open-source projects' },
        { num: '2016', label: 'Contributing since' }
      ]
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
.oss__title { font-size: var(--text-3xl); margin: 1rem 0 1.4rem; max-width: 18ch; }
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
.oss__node--v { fill: var(--accent); stroke: none; }
.oss__halo { fill: none; stroke: var(--accent); stroke-width: 1.5; opacity: 0.35; }
.oss__label {
  font-family: var(--font-mono);
  font-size: 12px;
  fill: var(--ink-muted);
  letter-spacing: 0.01em;
}
.oss__label--v { fill: var(--accent-text); font-size: 14px; font-weight: 600; }

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
