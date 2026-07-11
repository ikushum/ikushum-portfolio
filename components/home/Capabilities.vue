<template>
  <section id="capabilities" ref="root" class="cap section">
    <div class="wrap wrap-wide">
      <div class="cap__stage">
        <!-- Sticky statement + rail -->
        <div class="cap__aside">
          <p class="cap__kicker">
            <span class="cap__kicker-bar" aria-hidden="true" />
            The offer
          </p>
          <h2 v-reveal class="cap__title">
            You don't need to hire a team of five. You need
            <span class="cap__title-accent">one engineer who owns the outcome.</span>
          </h2>
          <div class="cap__rail">
            <span class="cap__rail-track" aria-hidden="true">
              <span class="cap__rail-fill" :style="{ transform: `scaleY(${railFill})` }" />
            </span>
            <ol class="cap__rail-list">
              <li
                v-for="(item, i) in capabilities"
                :key="item.title"
                class="cap__rail-item"
                :class="{ 'is-active': i === current, 'is-done': i < current }"
              >
                <button type="button" @click="jumpTo(i)">
                  <span class="cap__rail-idx">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="cap__rail-name">{{ item.title }}</span>
                </button>
              </li>
            </ol>
          </div>
        </div>

        <!-- Scrolling chapters -->
        <div class="cap__scroll">
          <article
            v-for="(item, i) in capabilities"
            :ref="'item'"
            :key="item.title"
            class="cap__item"
            :class="{ 'is-active': i === current }"
          >
            <span class="cap__item-idx">{{ String(i + 1).padStart(2, '0') }}<span class="cap__item-total"> / {{ String(capabilities.length).padStart(2, '0') }}</span></span>
            <h3 class="cap__item-title">{{ item.title }}</h3>
            <p class="cap__item-desc">{{ item.desc }}</p>
            <div class="cap__item-tags">
              <span v-for="t in item.tags" :key="t" class="cap__tag">{{ t }}</span>
            </div>
          </article>
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
      railFill: 0,
      capabilities: [
        {
          title: 'Product & UX design',
          desc: 'Turn a fuzzy idea into clear flows and interfaces that feel obvious to use — not just wireframes, but the real, polished thing.',
          tags: ['Figma', 'Design systems', 'Prototyping']
        },
        {
          title: 'Full-stack engineering',
          desc: 'Production web apps built front to back in modern frameworks — fast, typed, tested, and maintainable long after launch.',
          tags: ['Vue / Nuxt', 'React / Next', 'TypeScript', 'Node']
        },
        {
          title: 'Backend, data & payments',
          desc: 'The plumbing your product runs on: APIs, databases, auth, and billing wired up to be reliable and secure.',
          tags: ['Postgres', 'Firebase', 'REST / GraphQL', 'Stripe']
        },
        {
          title: 'AI features that ship',
          desc: 'LLM-powered features that actually work in production — search, assistants, automation — not demos that fall over on real data.',
          tags: ['Claude', 'OpenAI', 'RAG', 'Embeddings']
        },
        {
          title: 'Infra & deployment',
          desc: 'Get it live, keep it fast, keep it up. Pipelines, environments, and monitoring so shipping is boring and safe.',
          tags: ['Vercel', 'AWS', 'CI / CD', 'Monitoring']
        },
        {
          title: 'Iterate & scale',
          desc: 'Launch is the start. Ship weekly against real usage, measure what matters, and evolve the product with your users.',
          tags: ['Analytics', 'Experiments', 'Performance']
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => this.setupMotion())
  },
  beforeDestroy () {
    if (this.ctx) { this.ctx.revert() }
  },
  methods: {
    jumpTo (i) {
      const items = this.$refs.item
      const el = Array.isArray(items) ? items[i] : items
      if (el && this.$motion) { this.$motion.scrollToHash(el) }
    },
    setupMotion () {
      const m = this.$motion
      if (!m || m.reduce) { return }
      const { gsap, ScrollTrigger } = m
      const items = this.$refs.item
      if (!items || !items.length) { return }

      this.ctx = gsap.context(() => {
        items.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 62%',
            end: 'bottom 62%',
            onToggle: (self) => { if (self.isActive) { this.current = i } }
          })
        })

        ScrollTrigger.create({
          trigger: this.$refs.root,
          start: 'top 62%',
          end: 'bottom 85%',
          onUpdate: (self) => { this.railFill = self.progress }
        })
      }, this.$refs.root)
    }
  }
}
</script>

<style scoped>
.cap { position: relative; padding-block: clamp(4rem, 8vw, 7rem); }

.cap__stage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

/* Sticky statement */
.cap__aside { position: sticky; top: 96px; }
.cap__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.7em;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent-text);
  margin-bottom: 1.4rem;
}
.cap__kicker-bar { width: 1.8em; height: 1px; background: var(--accent-line); }
.cap__title {
  font-size: var(--text-3xl);
  letter-spacing: -0.03em;
  line-height: 1.06;
  max-width: 18ch;
}
.cap__title-accent { color: var(--accent-text); }
.cap__lead {
  margin-top: 1.5rem;
  font-size: var(--text-lg);
  color: var(--ink-muted);
  line-height: 1.55;
  max-width: 46ch;
}

/* Progress rail */
.cap__rail { display: flex; gap: 1rem; margin-top: clamp(2rem, 4vw, 3rem); }
.cap__rail-track {
  position: relative;
  width: 2px;
  background: var(--border);
  border-radius: 2px;
  flex-shrink: 0;
}
.cap__rail-fill {
  position: absolute;
  inset: 0;
  background: var(--accent);
  border-radius: 2px;
  transform-origin: top;
  transform: scaleY(0);
}
.cap__rail-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.05rem; }
.cap__rail-item button {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  color: var(--ink-faint);
  transition: color 0.35s var(--ease-out);
}
.cap__rail-idx { font-size: 0.72rem; color: var(--ink-faint); font-variant-numeric: tabular-nums; }
.cap__rail-name { font-size: 0.92rem; font-weight: 500; letter-spacing: -0.01em; }
.cap__rail-item.is-done button { color: var(--ink-muted); }
.cap__rail-item.is-active button { color: var(--accent-text); }
.cap__rail-item.is-active .cap__rail-name { color: var(--ink); }

/* Scrolling chapters */
.cap__scroll { display: flex; flex-direction: column; }
.cap__item {
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: clamp(2rem, 4vw, 3.5rem);
  border-top: 1px solid var(--border);
  opacity: 0.5;
  transition: opacity 0.5s var(--ease-out);
}
.cap__item:first-child { border-top: 0; padding-top: 0; min-height: 46vh; }
.cap__item.is-active { opacity: 1; }
.cap__item-idx {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-text);
  font-variant-numeric: tabular-nums;
  margin-bottom: 1.2rem;
}
.cap__item-total { color: var(--ink-faint); font-weight: 400; }
.cap__item-title {
  font-size: var(--text-2xl);
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}
.cap__item-desc {
  font-size: var(--text-lg);
  color: var(--ink-muted);
  max-width: 42ch;
  line-height: 1.55;
  margin: 0 0 1.6rem;
}
.cap__item-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.cap__tag {
  font-size: 0.8rem;
  color: var(--ink-muted);
  padding: 0.32em 0.75em;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
}

/* Responsive / fallback */
@media (max-width: 900px) {
  .cap__stage { grid-template-columns: 1fr; gap: clamp(2rem, 6vw, 3rem); }
  .cap__aside { position: static; }
  .cap__rail { display: none; }
  .cap__item {
    min-height: 0;
    justify-content: flex-start;
    padding-block: clamp(2rem, 7vw, 3rem);
    opacity: 1;
  }
  .cap__item:first-child { min-height: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cap__aside { position: static; }
  .cap__rail { display: none; }
  .cap__item {
    min-height: 0;
    justify-content: flex-start;
    padding-block: clamp(2rem, 5vw, 3rem);
    opacity: 1;
    transition: none;
  }
  .cap__item:first-child { min-height: 0; }
}
</style>
