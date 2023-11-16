import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faExpand, faCircleXmark, faDrum, faCompactDisc, faHeadphones, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faOpencart, faSpotify, faYoutube, faSafari } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faUser, faHeart, faOpencart, faExpand, faCircleXmark, faCirclePlay, faDrum, faCompactDisc, faHeadphones, faSpotify, faYoutube, faSafari, faMusic, faCloud, faGuitar, faRocket, faTrophy, faCalendarDays)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
