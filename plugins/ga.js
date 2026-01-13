export default ({ app }) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const forceEnabled = process.env.ENABLE_ANALYTICS === 'true'

  // Skip if not production and not explicitly enabled
  if (!isProduction && !forceEnabled) { return }

  const measurementId = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID
  if (!measurementId) { return }

  // Load gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag () { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId, { send_page_view: false })

  // Track route changes for SPA
  app.router.afterEach((to) => {
    gtag('event', 'page_view', {
      page_path: to.fullPath,
      page_title: document.title
    })
  })
}
