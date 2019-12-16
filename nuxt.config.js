export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/ProximaNova-Regular.otf' }
    ]
  },
  loading: '~/components/loading.vue',
  css: [
    '~/assets/style.css'
  ],
}
