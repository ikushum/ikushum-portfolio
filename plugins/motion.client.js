/* eslint-disable no-console */
// Motion spine: Lenis smooth scroll + GSAP ScrollTrigger, wired together.
// Progressive enhancement: if the user prefers reduced motion we skip Lenis
// and scrubbed animation entirely and let components render their static state.
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default (ctx, inject) => {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let lenis = null

  if (!reduce) {
    document.documentElement.classList.add('lenis')

    lenis = new Lenis({
      duration: 1.05,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6
    })

    // Drive ScrollTrigger off Lenis, and Lenis off GSAP's ticker.
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    window.__lenis = lenis
  }

  // Smoothly scroll to an in-page hash, respecting the fixed nav offset.
  const scrollToHash = (hash) => {
    const el = typeof hash === 'string' ? document.querySelector(hash) : hash
    if (!el) { return }
    if (lenis) {
      lenis.scrollTo(el, { offset: -80, duration: 1.15 })
    } else {
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }
  }

  const api = { gsap, ScrollTrigger, lenis, reduce, scrollToHash }
  inject('motion', api)

  // Recalculate triggers once fonts/images settle.
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => ScrollTrigger.refresh())
  }
}
