<template>
  <section id="work" ref="root" class="work section">
    <div class="wrap wrap-wide">
      <div class="work__head">
        <p class="work__kicker">
          <span class="work__kicker-bar" aria-hidden="true" />
          Selected work
        </p>
        <h2 class="work__title">
          Products designed, built,<br>
          and <span class="work__title-accent">shipped to production.</span>
        </h2>
        <p class="lead work__lead">
          Marketplaces, analytics platforms, learning tools — most of them touched
          by my hands from the first interface to the live deployment.
        </p>
      </div>

      <div ref="stage" class="work__stage">
        <!-- Sticky instrument monitor (desktop + motion) -->
        <div class="work__viewport">
          <div class="work__monitor">
            <div class="work__monitor-bar">
              <span class="work__monitor-dots" aria-hidden="true"><i /><i /><i /></span>
              <transition name="workswap" mode="out-in">
                <span :key="active.domain" class="work__monitor-url mono">{{ active.domain }}</span>
              </transition>
              <span class="work__monitor-live"><span class="work__live-dot" aria-hidden="true" />Live</span>
            </div>
            <a
              class="work__monitor-shot"
              :href="active.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Visit ${active.title}`"
            >
              <img
                v-for="(p, i) in projects"
                :key="p.title"
                :src="p.image"
                :alt="p.alt"
                :class="{ 'is-active': i === current }"
                loading="lazy"
              >
              <span class="work__visit">Visit&nbsp;<span aria-hidden="true">↗</span></span>
            </a>
          </div>

          <div class="work__rail">
            <span class="work__rail-track" aria-hidden="true">
              <span class="work__rail-fill" :style="{ transform: `scaleY(${railFill})` }" />
            </span>
            <ol class="work__rail-list">
              <li
                v-for="(p, i) in projects"
                :key="p.title"
                class="work__rail-item"
                :class="{ 'is-active': i === current, 'is-done': i < current }"
              >
                <button type="button" @click="jumpTo(i)">
                  <span class="work__rail-idx">{{ String(i + 1).padStart(2, '0') }}</span>
                  <span class="work__rail-name">{{ p.title }}</span>
                </button>
              </li>
            </ol>
          </div>
        </div>

        <!-- Scrolling chapters -->
        <div class="work__scroll">
          <article
            v-for="(project, i) in projects"
            :ref="'chapter'"
            :key="project.title"
            class="work__chapter"
          >
            <div class="work__chapter-head">
              <span class="work__chapter-idx">{{ String(i + 1).padStart(2, '0') }}<span class="work__chapter-total"> / {{ String(projects.length).padStart(2, '0') }}</span></span>
              <span class="work__chapter-year">{{ project.year }}</span>
            </div>

            <h3 class="work__chapter-name">{{ project.title }}</h3>
            <p class="work__chapter-desc">{{ project.desc }}</p>

            <!-- inline media: mobile + reduced-motion fallback -->
            <a
              class="work__chapter-media"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Visit ${project.title}`"
            >
              <img :src="project.image" :alt="project.alt" loading="lazy">
            </a>

            <dl class="work__chapter-meta">
              <div>
                <dt>Role</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{{ project.focus }}</dd>
              </div>
              <div class="work__chapter-stack">
                <dt>Stack</dt>
                <dd>
                  <span v-for="t in project.tags" :key="t" class="work__tag">{{ t }}</span>
                </dd>
              </div>
            </dl>

            <a class="link work__chapter-link" :href="project.link" target="_blank" rel="noopener noreferrer">
              Visit {{ project.domain }} <span aria-hidden="true">↗</span>
            </a>
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
      projects: [
        {
          title: 'Racepass',
          year: '2023',
          desc: 'An online marketplace for sporting events — discover, register, and pay for races in one place.',
          role: 'Frontend architecture & product UI',
          focus: 'Marketplace UX, checkout flow',
          tags: ['Vue', 'Nuxt', 'Marketplace'],
          image: '/works/racepass.png?v=2',
          alt: 'Racepass sporting-events marketplace homepage',
          link: 'https://racepass.com/',
          domain: 'racepass.com'
        },
        {
          title: 'Labster',
          year: '2022',
          desc: 'Virtual science labs for STEM education — immersive simulations that let students run real experiments safely, from any device.',
          role: 'Product engineering & UI',
          focus: 'Interactive learning experience',
          tags: ['EdTech', 'Simulations', 'At scale'],
          image: '/works/labster.png?v=2',
          alt: 'Labster virtual STEM labs homepage',
          link: 'https://labster.com/',
          domain: 'labster.com'
        },
        {
          title: 'Merojob',
          year: '2020',
          desc: "Nepal's number-one job portal, connecting hundreds of thousands of seekers and employers.",
          role: 'Product engineering at scale',
          focus: 'Job-seeker experience, performance',
          tags: ['Vue', 'At scale', 'SSR'],
          image: '/works/merojob.png?v=2',
          alt: 'Merojob job portal listings page',
          link: 'https://merojob.com/',
          domain: 'merojob.com'
        },
        {
          title: 'Podkite',
          year: '2024',
          desc: 'Chart analytics and marketing attribution for podcasters — see what actually drives listens.',
          role: 'Full product UI & dashboards',
          focus: 'Data viz, analytics dashboards',
          tags: ['Nuxt', 'Analytics', 'Dashboards'],
          image: '/works/podkite.png?v=2',
          alt: 'Podkite podcast analytics dashboard',
          link: 'https://podkite.com/',
          domain: 'podkite.com'
        }
      ]
    }
  },
  computed: {
    active () {
      return this.projects[this.current]
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
      const chapters = this.$refs.chapter
      const el = Array.isArray(chapters) ? chapters[i] : chapters
      if (el && this.$motion) { this.$motion.scrollToHash(el) }
    },
    setupMotion () {
      const m = this.$motion
      if (!m || m.reduce) { return }
      const { gsap, ScrollTrigger } = m
      const chapters = this.$refs.chapter
      if (!chapters || !chapters.length) { return }

      this.ctx = gsap.context(() => {
        chapters.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 60%',
            end: 'bottom 60%',
            onToggle: (self) => { if (self.isActive) { this.current = i } }
          })
        })

        ScrollTrigger.create({
          trigger: this.$refs.stage,
          start: 'top 60%',
          end: 'bottom 90%',
          onUpdate: (self) => { this.railFill = self.progress }
        })
      }, this.$refs.root)
    }
  }
}
</script>

<style scoped>
.work { position: relative; padding-block: clamp(4rem, 8vw, 7rem); }

.work__head { max-width: 44rem; margin-bottom: clamp(3rem, 6vw, 5rem); }
.work__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.7em;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--accent-text);
  margin-bottom: 1.4rem;
}
.work__kicker-bar { width: 1.8em; height: 1px; background: var(--accent-line); }
.work__title {
  font-size: var(--text-3xl);
  letter-spacing: -0.03em;
  line-height: 1.05;
  max-width: 16ch;
}
.work__title-accent { color: var(--accent-text); }
.work__lead { margin-top: 1.4rem; }

/* Stage: sticky monitor + scrolling chapters */
.work__stage {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;
}

/* Sticky viewport */
.work__viewport {
  position: sticky;
  top: 96px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  align-items: start;
}
.work__monitor {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  box-shadow: var(--shadow-2);
}
.work__monitor-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg-elev);
}
.work__monitor-dots { display: inline-flex; gap: 6px; }
.work__monitor-dots i { width: 9px; height: 9px; border-radius: 50%; background: var(--border-strong); }
.work__monitor-url {
  font-size: 0.72rem;
  color: var(--ink-faint);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  padding: 0.2rem 0.8rem;
  margin-left: auto;
}
.work__monitor-live {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--accent-text);
}
.work__live-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
  animation: workblink 1.8s var(--ease-out) infinite;
}
@keyframes workblink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
.work__monitor-shot { position: relative; display: block; aspect-ratio: 16 / 11; overflow: hidden; background: var(--surface); }
.work__monitor-shot img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.7s var(--ease-out), transform 1.4s var(--ease-out);
}
.work__monitor-shot img.is-active { opacity: 1; transform: scale(1); }
.work__visit {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.45em 0.9em;
  border-radius: var(--radius-pill);
  background: var(--accent);
  color: var(--accent-ink);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out);
}
.work__monitor-shot:hover .work__visit { opacity: 1; transform: none; }

.workswap-enter-active, .workswap-leave-active { transition: opacity 0.3s var(--ease-out), transform 0.3s var(--ease-out); }
.workswap-enter { opacity: 0; transform: translateY(4px); }
.workswap-leave-to { opacity: 0; transform: translateY(-4px); }

/* Progress rail */
.work__rail { display: flex; gap: 0.9rem; padding-top: 0.4rem; }
.work__rail-track {
  position: relative;
  width: 2px;
  background: var(--border);
  border-radius: 2px;
  flex-shrink: 0;
}
.work__rail-fill {
  position: absolute;
  inset: 0;
  background: var(--accent);
  border-radius: 2px;
  transform-origin: top;
  transform: scaleY(0);
}
.work__rail-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 1.4rem; }
.work__rail-item button {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  color: var(--ink-faint);
  transition: color 0.35s var(--ease-out);
}
.work__rail-idx { font-size: 0.72rem; color: var(--ink-faint); font-variant-numeric: tabular-nums; }
.work__rail-name { font-size: 0.9rem; font-weight: 500; letter-spacing: -0.01em; }
.work__rail-item.is-done button { color: var(--ink-muted); }
.work__rail-item.is-active button { color: var(--accent-text); }
.work__rail-item.is-active .work__rail-name { color: var(--ink); }

/* Scrolling chapters */
.work__scroll { display: flex; flex-direction: column; }
.work__chapter {
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: clamp(2rem, 5vw, 4rem);
  border-top: 1px solid var(--border);
}
.work__chapter:first-child { border-top: 0; padding-top: 0; min-height: 62vh; }
.work__chapter-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}
.work__chapter-idx {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-text);
  font-variant-numeric: tabular-nums;
}
.work__chapter-total { color: var(--ink-faint); font-weight: 400; }
.work__chapter-year { font-size: 0.85rem; color: var(--ink-faint); }
.work__chapter-name {
  font-size: var(--text-2xl);
  letter-spacing: -0.03em;
  margin-bottom: 0.9rem;
}
.work__chapter-desc {
  font-size: var(--text-lg);
  color: var(--ink-muted);
  max-width: 40ch;
  margin: 0 0 1.8rem;
}

/* inline media — hidden on desktop w/ motion, shown mobile + reduced-motion */
.work__chapter-media {
  display: none;
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 16 / 11;
  margin-bottom: 1.8rem;
  box-shadow: var(--shadow-1);
}
.work__chapter-media img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }

.work__chapter-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 2.5rem;
  padding: 1.3rem 0;
  border-top: 1px solid var(--border);
  margin-bottom: 1.6rem;
}
.work__chapter-meta dt {
  font-size: 0.78rem;
  color: var(--ink-faint);
  margin-bottom: 0.45rem;
}
.work__chapter-meta dd { margin: 0; font-size: var(--text-base); color: var(--ink); }
.work__chapter-stack { flex-basis: 100%; }
.work__chapter-stack dd { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.work__tag {
  font-size: 0.8rem;
  color: var(--ink-muted);
  padding: 0.32em 0.75em;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
}
.work__chapter-link { font-size: var(--text-sm); align-self: flex-start; }

/* Responsive / fallback */
@media (max-width: 900px) {
  .work__stage { grid-template-columns: 1fr; gap: 0; }
  .work__viewport { display: none; }
  .work__chapter {
    min-height: 0;
    justify-content: flex-start;
    padding-block: clamp(2.5rem, 8vw, 4rem);
  }
  .work__chapter:first-child { min-height: 0; }
  .work__chapter-media { display: block; }
}

@media (prefers-reduced-motion: reduce) {
  .work__viewport { display: none; }
  .work__stage { grid-template-columns: 1fr; gap: 0; }
  .work__chapter {
    min-height: 0;
    justify-content: flex-start;
    padding-block: clamp(2.5rem, 6vw, 4rem);
  }
  .work__chapter:first-child { min-height: 0; }
  .work__chapter-media { display: block; }
  .work__live-dot, .work__monitor-shot img { animation: none; transition: none; }
}
</style>
