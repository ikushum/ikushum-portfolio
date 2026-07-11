<template>
  <section id="proof" class="proof section">
    <div class="wrap wrap-wide">
      <div class="proof__head">
        <p v-reveal class="eyebrow">In their words</p>
        <h2 v-reveal="{ delay: '0.05s' }" class="proof__title">
          Founders and teams trust me with the whole thing.
        </h2>
      </div>

      <div class="proof__grid">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name"
          v-reveal="{ delay: (i * 0.05) + 's' }"
          class="proof__card"
          :class="{ 'proof__card--feature': i === 0 }"
        >
          <blockquote class="proof__quote">
            <span class="proof__mark" aria-hidden="true">“</span>
            {{ t.feedback }}
          </blockquote>
          <figcaption class="proof__by">
            <img class="proof__avatar" :src="t.image" :alt="t.name">
            <span>
              <span class="proof__name">{{ t.name }}</span>
              <span class="proof__role muted">{{ t.designation }}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      testimonials: [
        {
          name: 'Jalal Fathi',
          designation: 'Founder & Chief Podkiter, Podkite',
          image: require('@/assets/images/clients/jay.jpeg'),
          feedback: 'Ishan picked tasks up in a timely manner and communicated complex challenges with ease. What I most enjoyed is that I could trust him as a person, and the speed he familiarized himself with new technologies and challenges. Your team will thrive with Ishan.'
        },
        {
          name: 'Kees Van Velzen',
          designation: 'Managing Director, Learnforce',
          image: require('@/assets/images/clients/kees.jpg'),
          feedback: 'A very communicative and professional developer. Manages expectations incredibly well, keeps his promises, and writes faultless, very clean code. Highly recommended.'
        },
        {
          name: 'Nikita Kutselev',
          designation: 'Senior Big Data DevOps Engineer',
          image: require('@/assets/images/clients/nikita.jpeg'),
          feedback: 'Ishan redesigned my landing page in a single day. He has a great sense of design and writes beautiful code. I\'m impressed.'
        },
        {
          name: 'Cécile G.',
          designation: 'Risk Manager / BI Specialist',
          image: require('@/assets/images/clients/cg.jpg'),
          feedback: 'We really liked working with Ishan. He worked fast and well, understood our requirements easily, and even made suggestions of his own.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.proof__head { max-width: 40rem; margin-bottom: clamp(2.5rem, 5vw, 3.5rem); }
.proof__title { font-size: var(--text-3xl); margin-top: 1rem; max-width: 18ch; }

.proof__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2.5vw, 1.5rem);
}
.proof__card {
  margin: 0;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  transition: border-color 0.3s, transform 0.5s var(--ease-out);
}
.proof__card:hover { border-color: var(--border-strong); transform: translateY(-3px); }
.proof__card--feature {
  grid-column: 1 / -1;
  background: var(--bg-elev);
  border-color: var(--accent-line);
}
.proof__quote {
  position: relative;
  margin: 0;
  font-size: var(--text-lg);
  line-height: 1.5;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.proof__card--feature .proof__quote {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--text-xl);
  line-height: 1.35;
  max-width: 40ch;
}
.proof__mark {
  color: var(--accent-text);
  font-family: var(--font-display);
  font-size: 1.4em;
  line-height: 0;
  margin-right: 0.1em;
}
.proof__by { display: flex; align-items: center; gap: 0.85rem; margin-top: auto; }
.proof__avatar {
  width: 46px; height: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
  flex: 0 0 auto;
}
.proof__name { display: block; font-weight: 600; font-size: var(--text-sm); }
.proof__role { display: block; font-size: var(--text-xs); }

@media (max-width: 680px) {
  .proof__grid { grid-template-columns: 1fr; }
}
</style>
