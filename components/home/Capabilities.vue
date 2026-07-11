<template>
  <section id="capabilities" class="cap section">
    <div class="wrap wrap-wide">
      <div class="cap__head">
        <p v-reveal class="eyebrow">The offer</p>
        <h2 v-reveal="{ delay: '0.05s' }" class="cap__title">
          You don't need to hire a team of five.
          You need one engineer who owns the outcome.
        </h2>
        <p v-reveal="{ delay: '0.1s' }" class="lead cap__lead">
          Designer, frontend dev, backend dev, DevOps — that's four hires, four
          calendars, and a lot of things lost in the handoff. I do all of it, end
          to end, and I'm accountable for one thing: your product working in the
          real world.
        </p>
      </div>

      <ul class="cap__list">
        <li
          v-for="(item, i) in capabilities"
          :key="item.title"
          v-reveal="{ delay: (i * 0.05) + 's' }"
          class="cap__row"
        >
          <span class="cap__idx mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="cap__row-title">{{ item.title }}</h3>
          <p class="cap__row-desc muted">{{ item.desc }}</p>
          <div class="cap__tags">
            <span v-for="t in item.tags" :key="t" class="cap__tag mono">{{ t }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style scoped>
.cap__head { max-width: 46rem; margin-bottom: clamp(2.5rem, 5vw, 4rem); }
.cap__title {
  font-size: var(--text-3xl);
  margin-top: 1rem;
  max-width: 20ch;
}
.cap__lead { margin-top: 1.4rem; }

.cap__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--border); }
.cap__row {
  display: grid;
  grid-template-columns: 3rem minmax(11rem, 15rem) 1fr auto;
  align-items: start;
  gap: clamp(1rem, 3vw, 2.5rem);
  padding: clamp(1.5rem, 3vw, 2.25rem) 0.5rem;
  border-bottom: 1px solid var(--border);
  transition: background 0.35s var(--ease-out);
  border-radius: var(--radius);
}
.cap__row:hover { background: var(--surface); }
.cap__idx { color: var(--accent-text); font-size: 0.8rem; padding-top: 0.4rem; }
.cap__row-title {
  font-size: var(--text-xl);
  font-weight: 500;
  letter-spacing: -0.02em;
}
.cap__row-desc { font-size: var(--text-base); max-width: 46ch; margin: 0; }
.cap__tags { display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: flex-end; max-width: 15rem; }
.cap__tag {
  font-size: 0.68rem;
  color: var(--ink-muted);
  padding: 0.3em 0.7em;
  border: 1px solid var(--border);
  border-radius: var(--radius-pill);
  white-space: nowrap;
}

@media (max-width: 940px) {
  .cap__row {
    grid-template-columns: 2.5rem 1fr;
    grid-template-areas:
      'idx title'
      '.   desc'
      '.   tags';
    gap: 0.6rem 1.25rem;
  }
  .cap__idx { grid-area: idx; }
  .cap__row-title { grid-area: title; }
  .cap__row-desc { grid-area: desc; margin-top: 0.35rem; }
  .cap__tags { grid-area: tags; justify-content: flex-start; max-width: none; margin-top: 0.6rem; }
}
</style>
