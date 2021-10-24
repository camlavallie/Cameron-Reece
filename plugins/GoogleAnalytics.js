import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')

  Vue.use(
    VueGtag,
    {
      config: { id: 'GTM-KZ3ZQVF' },
      bootstrap: getGDPR === 'true',
      appName: 'Cameron Reece',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true
    },
    app.router
  )
}
