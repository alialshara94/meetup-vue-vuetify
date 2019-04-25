import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'
import EditMeetupDialogForm from './components/Meetup/Edit/EditMeetupDialog'
// import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDate'
// import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTime'
import RegisterDialog from './components/Registration/RegisterDialog'

import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, secondary: colors.red.lighten3, accent: colors.purple.base, error: colors.red.base, warning: colors.yellow.base, info: colors.blue.base, success: colors.green.base
  }
})

Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-dialog', EditMeetupDialogForm)
// Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
// Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-register-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
