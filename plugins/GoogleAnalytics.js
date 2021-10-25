import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(
    VueGtag,
    {
      config: { id: 'G-YH2T1Q2BBC' },
      bootstrap: getGDPR === 'true',
      appName: 'Cameron Reece',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true
    },
    app.router
  )
}
