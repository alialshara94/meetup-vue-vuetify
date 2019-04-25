<template>
  <v-app>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click="sideNav=!sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">meetup-App</router-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        flat 
        v-for="item in menuItems" 
        :key="item.title" 
         
        :to="item.link">
          <v-icon>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items
      v-if="userIsAuth"
      @click="onLogout"
       class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list>
          <v-list-tile  v-for="item in menuItems" :key="item.title"  :to="item.link">
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="userIsAuth" @click="onLogout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Logout</v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  data () {
    return {
      //
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
      if (this.userIsAuth) {
        menuItems = [
          { icon: 'view_module', title: 'View Meetup', link: '/meetups' },
          { icon: 'room', title: 'Organize Mettup', link: '/meetup/new' },
          { icon: 'person', title: 'Profile', link: '/profile' }
        ]
      }
      return menuItems
    },
    userIsAuth () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
