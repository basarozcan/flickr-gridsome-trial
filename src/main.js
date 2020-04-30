// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import '~/assets/styles.scss'
import '~/assets/normalize.css';

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  Vue.component('Layout', DefaultLayout)
}

