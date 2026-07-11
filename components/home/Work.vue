<template>
  <section id="work" class="work section">
    <div class="wrap wrap-wide">
      <div class="work__head">
        <p v-reveal class="eyebrow">Selected work</p>
        <h2 v-reveal="{ delay: '0.05s' }" class="work__title">
          Products I've designed, built, and shipped.
        </h2>
        <p v-reveal="{ delay: '0.1s' }" class="lead">
          A few of the products I've helped bring to life — from marketplaces
          to analytics platforms, most touched by my hands from interface to
          deployment.
        </p>
      </div>

      <div class="work__list">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          v-reveal
          class="work__item"
        >
          <div class="work__intro">
            <span class="work__idx mono">{{ String(i + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</span>
            <h3 class="work__name">{{ project.title }}</h3>
            <p class="work__desc muted">{{ project.desc }}</p>
          </div>

          <a
            class="work__media"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Visit ${project.title}`"
          >
            <img :src="project.image" :alt="project.alt" loading="lazy">
            <span class="work__visit">Visit <span aria-hidden="true">↗</span></span>
          </a>

          <div class="work__details">
            <dl class="work__meta">
              <div>
                <dt class="mono">Role</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt class="mono">Focus</dt>
                <dd>{{ project.focus }}</dd>
              </div>
            </dl>

            <div class="work__tags">
              <span v-for="t in project.tags" :key="t" class="work__tag mono">{{ t }}</span>
            </div>

            <a class="link work__link" :href="project.link" target="_blank" rel="noopener noreferrer">
              {{ project.domain }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // NOTE: role / focus lines are best-guess placeholders — edit freely.
      projects: [
        {
          title: 'Racepass',
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
  }
}
</script>

<style scoped>
.work__head { max-width: 44rem; margin-bottom: clamp(3rem, 6vw, 5rem); }
.work__title { font-size: var(--text-3xl); margin: 1rem 0 1.4rem; max-width: 18ch; }

.work__list { display: flex; flex-direction: column; gap: clamp(4rem, 8vw, 7rem); }

.work__item {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  grid-template-areas:
    "media intro"
    "media details";
  align-items: center;
  column-gap: clamp(2rem, 5vw, 4.5rem);
}
.work__intro { grid-area: intro; }
.work__media { grid-area: media; }
.work__details { grid-area: details; }

.work__item:nth-child(even) {
  grid-template-columns: 1fr 1.15fr;
  grid-template-areas:
    "intro media"
    "details media";
}

.work__media {
  position: relative;
  display: block;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
  aspect-ratio: 16 / 11;
  box-shadow: var(--shadow-2);
}
.work__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.8s var(--ease-out);
}
.work__media:hover img { transform: scale(1.035); }
.work__visit {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.45em 0.85em;
  border-radius: var(--radius-pill);
  background: var(--accent);
  color: var(--accent-ink);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out);
}
.work__media:hover .work__visit { opacity: 1; transform: none; }

.work__idx { color: var(--accent-text); font-size: 0.72rem; letter-spacing: 0.04em; }
.work__name { font-size: var(--text-2xl); margin: 0.7rem 0 0.7rem; letter-spacing: -0.03em; }
.work__desc { font-size: var(--text-lg); max-width: 42ch; margin: 0 0 1.6rem; }

.work__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 2.5rem;
  margin: 0 0 1.4rem;
  padding: 1.2rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.work__meta dt { font-size: 0.66rem; color: var(--ink-faint); letter-spacing: 0.04em; margin-bottom: 0.35rem; }
.work__meta dd { margin: 0; font-size: var(--text-sm); font-weight: 500; }

.work__tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem; }
.work__tag {
  font-size: 0.68rem;
  color: var(--ink-muted);
  padding: 0.3em 0.7em;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
}
.work__link { font-size: var(--text-sm); font-family: var(--font-mono); }

@media (max-width: 820px) {
  /* Name + description, then the screenshot it refers to, then the details */
  .work__item,
  .work__item:nth-child(even) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "intro"
      "media"
      "details";
    gap: 1.5rem;
  }
}
</style>
