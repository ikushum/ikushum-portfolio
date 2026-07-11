<template>
  <section id="approach" class="approach section">
    <div class="wrap wrap-wide">
      <div class="approach__head">
        <p v-reveal class="eyebrow">How it works</p>
        <h2 v-reveal="{ delay: '0.05s' }" class="approach__title">
          A tight loop from idea to live product.
        </h2>
        <p v-reveal="{ delay: '0.1s' }" class="lead">
          No months-long specs, no handoff black holes. We move in short cycles —
          you see real, working software early, and it's in front of users fast.
        </p>
      </div>

      <ol class="approach__steps">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal="{ delay: (i * 0.06) + 's' }"
          class="approach__step"
        >
          <span class="approach__num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="approach__dot" aria-hidden="true" />
          <h3 class="approach__step-title">{{ step.title }}</h3>
          <p class="approach__step-desc muted">{{ step.desc }}</p>
        </li>
      </ol>

      <div v-reveal class="approach__ai">
        <span class="approach__ai-mark mono">AI-native</span>
        <p class="approach__ai-text">
          AI makes every step faster — more prototypes in a day, fewer weeks to a
          working build, tighter iteration once you're live. I use it to move at a
          pace that used to take a whole team. The judgment about
          <em>what</em> to build is still human, and that's where I earn my keep.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      steps: [
        {
          title: 'Discover',
          desc: 'We get clear on the business, the users, and what a win actually looks like — before a line of code.'
        },
        {
          title: 'Design & prototype',
          desc: 'A clickable, real prototype fast, so we\'re reacting to something concrete instead of arguing over docs.'
        },
        {
          title: 'Build & ship',
          desc: 'Production-grade build, deployed and live. Real infrastructure, not a throwaway demo.'
        },
        {
          title: 'Iterate',
          desc: 'Measure against real usage, then improve on a weekly cadence. Launch is the starting line.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.approach {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg-elev);
}
.approach__head { max-width: 42rem; margin-bottom: clamp(3rem, 6vw, 4.5rem); }
.approach__title { font-size: var(--text-3xl); margin: 1rem 0 1.4rem; max-width: 16ch; }

.approach__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1.5rem, 3vw, 2.5rem);
  position: relative;
}
.approach__steps::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
}
.approach__step { position: relative; padding-top: 2.2rem; }
.approach__dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 11px; height: 11px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.approach__num {
  position: absolute;
  top: -1px;
  left: 1.5rem;
  font-size: 0.72rem;
  color: var(--accent-text);
}
.approach__step-title { font-size: var(--text-xl); font-weight: 500; margin-bottom: 0.6rem; letter-spacing: -0.02em; }
.approach__step-desc { font-size: var(--text-sm); max-width: 32ch; margin: 0; }

.approach__ai {
  margin-top: clamp(3rem, 6vw, 4.5rem);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid var(--accent-line);
  border-radius: var(--radius-lg);
  background: var(--accent-soft);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: start;
}
.approach__ai-mark {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  color: var(--accent-text);
  padding: 0.4em 0.8em;
  border: 1px solid var(--accent-line);
  border-radius: var(--radius-pill);
  white-space: nowrap;
}
.approach__ai-text { margin: 0; font-size: var(--text-lg); max-width: 62ch; }
.approach__ai-text em { font-style: italic; color: var(--ink); }

@media (max-width: 860px) {
  .approach__steps { grid-template-columns: 1fr 1fr; gap: 2rem 1.5rem; }
}
@media (max-width: 560px) {
  .approach__steps { grid-template-columns: 1fr; }
  .approach__steps::before { display: none; }
  .approach__ai { grid-template-columns: 1fr; gap: 1rem; }
  .approach__ai-mark { justify-self: start; }
}
</style>
