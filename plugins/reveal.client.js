import Vue from 'vue'

/*
 * v-reveal — reveal-on-scroll via IntersectionObserver.
 * Content is visible by default (see .reveal in design.css); the hidden
 * state only applies when the `.js` class is present, so no-JS and headless
 * renders always show content. Optional: v-reveal="{ delay: '0.1s' }".
 */
const supported =
  typeof window !== 'undefined' && 'IntersectionObserver' in window

const observer = supported
  ? new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
  )
  : null

Vue.directive('reveal', {
  inserted (el, binding) {
    el.classList.add('reveal')
    if (binding.value && binding.value.delay) {
      el.style.setProperty('--reveal-delay', binding.value.delay)
    }
    if (observer) {
      observer.observe(el)
    } else {
      el.classList.add('is-in')
    }
  },
  unbind (el) {
    if (observer) { observer.unobserve(el) }
  }
})
