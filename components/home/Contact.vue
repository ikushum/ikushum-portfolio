<template>
  <section id="contact" class="cta section">
    <div class="wrap wrap-wide">
      <div v-reveal class="cta__panel">
        <div class="cta__glow" aria-hidden="true" />
        <div class="cta__grid" aria-hidden="true" />

        <div class="cta__content">
          <p class="cta__status">
            <span class="cta__dot" aria-hidden="true" />
            Currently taking on new projects
          </p>

          <h2 class="cta__title">
            Have an idea worth building?
            <span class="cta__accent">Let's ship it.</span>
          </h2>

          <p class="cta__sub">
            Tell me what you're trying to build. I'll tell you honestly whether
            I'm the right person, how I'd approach it, and what it would take to
            get it live. No hard sell — just a straight conversation.
          </p>

          <div class="cta__actions">
            <a class="cta__btn cta__btn--accent" :href="bookingUrl" target="_blank" rel="noopener noreferrer">
              Book a 30-min call
              <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
            <a class="cta__btn cta__btn--ghost" href="mailto:ikushum@gmail.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.7" /><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /></svg>
              ikushum@gmail.com
            </a>
          </div>

          <div class="cta__links">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="cta__link"
            >{{ link.label }} <span aria-hidden="true">↗</span></a>
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
      bookingUrl: 'https://cal.com/ikushum',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ikushum/' },
        { label: 'Upwork', href: 'https://www.upwork.com/o/profiles/users/~01d59c7d222074ad1c/' },
        { label: 'GitHub', href: 'https://github.com/ikushum' }
      ]
    }
  }
}
</script>

<style scoped>
/* Fixed dark panel in both themes — a deliberate premium band before the footer. */
.cta__panel {
  --panel-ink: oklch(0.96 0.006 80);
  --panel-muted: oklch(0.74 0.01 80);
  --panel-border: oklch(1 0 0 / 0.12);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-radius: var(--radius-xl);
  border: 1px solid var(--panel-border);
  background: oklch(0.175 0.008 55);
  padding: clamp(2.75rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 4.5rem);
  color: var(--panel-ink);
}
.cta__glow {
  position: absolute;
  z-index: -1;
  top: -45%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 130%;
  background: radial-gradient(ellipse at center, oklch(0.72 0.19 47 / 0.24), transparent 62%);
  filter: blur(10px);
}
.cta__grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  -webkit-mask-image: radial-gradient(80% 60% at 50% 0%, #000, transparent 75%);
  mask-image: radial-gradient(80% 60% at 50% 0%, #000, transparent 75%);
  opacity: 0.6;
}
.cta__content { position: relative; max-width: 46rem; margin-inline: auto; text-align: center; }

.cta__status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: var(--panel-muted);
  padding: 0.4em 0.9em;
  border: 1px solid var(--panel-border);
  border-radius: var(--radius-pill);
  margin-bottom: 1.75rem;
}
.cta__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: oklch(0.78 0.16 150);
  box-shadow: 0 0 0 3px oklch(0.78 0.16 150 / 0.2);
  animation: pulse 2.4s var(--ease-out) infinite;
}
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

.cta__title {
  color: var(--panel-ink);
  font-size: var(--text-3xl);
  letter-spacing: -0.035em;
  line-height: 1.05;
  max-width: 18ch;
  margin: 0 auto 1.4rem;
}
.cta__accent { color: oklch(0.78 0.16 47); display: block; }
.cta__sub {
  margin: 0 auto 2.4rem;
  max-width: 50ch;
  font-size: var(--text-lg);
  color: var(--panel-muted);
  line-height: 1.55;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}
.cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55em;
  font-weight: 600;
  font-size: var(--text-base);
  padding: 0.95em 1.6em;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  transition: transform 0.4s var(--ease-out), background 0.25s, border-color 0.25s, box-shadow 0.4s var(--ease-out);
}
.cta__btn:hover { transform: translateY(-2px); }
.cta__btn--accent {
  background: oklch(0.74 0.175 47);
  color: oklch(0.2 0.035 47);
  box-shadow: 0 12px 34px -12px oklch(0.72 0.19 47 / 0.6);
}
.cta__btn--accent:hover { background: oklch(0.79 0.16 47); box-shadow: 0 18px 44px -12px oklch(0.72 0.19 47 / 0.7); }
.cta__btn--accent .arrow { transition: transform 0.4s var(--ease-out); }
.cta__btn--accent:hover .arrow { transform: translateX(3px); }
.cta__btn--ghost {
  border-color: var(--panel-border);
  color: var(--panel-ink);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
.cta__btn--ghost:hover { background: oklch(1 0 0 / 0.06); border-color: oklch(1 0 0 / 0.28); }

.cta__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--panel-border);
}
.cta__link {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--panel-muted);
  transition: color 0.2s;
}
.cta__link:hover { color: var(--panel-ink); }

@media (prefers-reduced-motion: reduce) {
  .cta__dot { animation: none; }
  .cta__btn { transition: none; }
}
</style>
