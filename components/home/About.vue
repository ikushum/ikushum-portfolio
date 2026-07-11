<template>
  <section id="about" class="about section">
    <div class="wrap wrap-wide about__inner">
      <div class="about__lead">
        <p v-reveal class="eyebrow">About</p>
        <h2 v-reveal="{ delay: '0.05s' }" class="about__title">
          Hi, I'm Ishan. I've been shipping software since I was a teenager.
        </h2>
      </div>

      <div v-reveal class="about__media">
        <div class="about__photo">
          <img src="/ishan.jpg" alt="Ishan Subedi, product engineer, at work">
        </div>
        <div class="about__badge">
          <span class="about__badge-dot" aria-hidden="true" />
          <span>Kathmandu, Nepal · <span class="mono">GMT+5:45</span></span>
        </div>
      </div>

      <div class="about__body">
        <div v-reveal="{ delay: '0.1s' }" class="about__text">
          <p>
            Started with QBASIC games as a kid and never stopped. Eventually I was
            the person staying up past midnight because<strong> a bug was more interesting
              than sleep.</strong>
          </p>
          <p>
            Since then I've shipped for founders and teams across Switzerland, the
            US, and beyond as a <strong>Top Rated</strong> freelancer. Today I work
            as a <strong>product engineer</strong> who owns the whole life cycle — design,
            code, infrastructure, and whether it actually works for real people.
          </p>
        </div>

        <ul v-reveal="{ delay: '0.15s' }" class="about__values">
          <li v-for="v in values" :key="v.k">
            <span class="about__values-k mono">{{ v.k }}</span>
            <span class="about__values-v">{{ v.v }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      values: [
        { k: 'Own it', v: 'Accountable for the outcome, not just the task.' },
        { k: 'Ship it', v: 'Real software in front of users, early and often.' },
        { k: 'Say it straight', v: 'Clear, honest communication — no surprises.' }
      ]
    }
  }
}
</script>

<style scoped>
.about__inner {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  grid-template-areas:
    "media lead"
    "media body";
  grid-template-rows: min-content 1fr;
  column-gap: clamp(2.5rem, 6vw, 5rem);
  align-items: start;
}
.about__lead { grid-area: lead; }
.about__media { grid-area: media; position: sticky; top: 6rem; }
.about__body { grid-area: body; }
.about__photo {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 4 / 5;
  box-shadow: var(--shadow-2);
}
.about__photo img { width: 100%; height: 100%; object-fit: cover; filter: saturate(1.02) contrast(1.02); }
.about__photo::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, oklch(0.16 0.006 55 / 0.35), transparent 45%);
  pointer-events: none;
}
.about__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 1rem;
  font-size: var(--text-xs);
  color: var(--ink-muted);
}
.about__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: oklch(0.78 0.16 150);
  box-shadow: 0 0 0 3px oklch(0.78 0.16 150 / 0.2);
}

.about__title { font-size: var(--text-2xl); margin: 1rem 0 1.6rem; }
.about__text p {
  font-size: var(--text-lg);
  color: var(--ink-muted);
  margin: 0 0 1.1rem;
  max-width: 58ch;
}
.about__text strong { color: var(--ink); font-weight: 600; }

.about__values {
  list-style: none;
  margin: 2rem 0 0;
  padding: 1.6rem 0 0;
  border-top: 1px solid var(--border);
  display: grid;
  gap: 1rem;
}
.about__values li { display: flex; align-items: baseline; gap: 1rem; }
.about__values-k {
  flex: 0 0 auto;
  min-width: 8.5rem;
  font-size: 0.78rem;
  color: var(--accent-text);
}
.about__values-v { color: var(--ink-muted); font-size: var(--text-sm); }

@media (max-width: 860px) {
  /* Intro heading, then the photo, then the story */
  .about__inner {
    grid-template-columns: 1fr;
    grid-template-areas:
      "lead"
      "media"
      "body";
    gap: 1.5rem;
  }
  .about__media { position: static; max-width: 22rem; }
  .about__values li { flex-direction: column; gap: 0.2rem; }
  .about__values-k { min-width: 0; }
}
</style>
