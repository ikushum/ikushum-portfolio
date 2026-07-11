<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} theme`"
    :title="`Switch to ${isDark ? 'light' : 'dark'} theme`"
    @click="toggle"
  >
    <span class="theme-toggle__icon" :class="{ 'is-dark': isDark }">
      <!-- Sun -->
      <svg class="sun" width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <g stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
          <path d="M12 2.4v2.6M12 19v2.6M4.4 12H1.8M22.2 12h-2.6M5.6 5.6 3.8 3.8M20.2 20.2l-1.8-1.8M18.4 5.6l1.8-1.8M3.8 20.2l1.8-1.8" />
        </g>
      </svg>
      <!-- Moon -->
      <svg class="moon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 14.2A8 8 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2Z" fill="currentColor" />
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  data () {
    return { isDark: true }
  },
  mounted () {
    this.isDark =
      document.documentElement.getAttribute('data-theme') !== 'light'
  },
  methods: {
    toggle () {
      this.isDark = !this.isDark
      const theme = this.isDark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', theme)
      try {
        localStorage.setItem('theme', theme)
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  --size: 40px;
  width: var(--size);
  height: var(--size);
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, transform 0.4s var(--ease-out);
}
.theme-toggle:hover {
  border-color: var(--ink-faint);
  transform: translateY(-1px);
}
.theme-toggle__icon {
  position: relative;
  width: 18px;
  height: 18px;
  display: grid;
  place-items: center;
}
.theme-toggle__icon svg {
  grid-area: 1 / 1;
  transition: opacity 0.45s var(--ease-out), transform 0.55s var(--ease-out);
}
.theme-toggle__icon .sun { color: var(--accent-text); opacity: 0; transform: rotate(-90deg) scale(0.4); }
.theme-toggle__icon .moon { opacity: 1; transform: rotate(0) scale(1); }
.theme-toggle__icon.is-dark .sun { opacity: 1; transform: rotate(0) scale(1); }
.theme-toggle__icon.is-dark .moon { opacity: 0; transform: rotate(90deg) scale(0.4); }

@media (prefers-reduced-motion: reduce) {
  .theme-toggle, .theme-toggle__icon svg { transition: none; }
}
</style>
