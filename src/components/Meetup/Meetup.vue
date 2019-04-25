<template>
    <v-container >
        <v-layout row wrap>
            <v-flex xs12>
                <v-card v-if="meetup">
                    <v-card-title >
                        <h3 class="primary--text">{{ meetup.title }}</h3>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                            <app-edit-meetup-dialog :meetup="meetup"></app-edit-meetup-dialog>
                        </template>
                    </v-card-title>
                    <v-img
                        :src="meetup.imageUrl"
                        aspect-ratio="2.75"
                        height="400px"
                    ></v-img>
                    
                    <v-card-text>
                        <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }} </div>
                        <!-- <div>
                          <app-edit-meetup-date-dialog
                          :meetup="meetup" v-if="userIsCreator">
                          </app-edit-meetup-dat00e-dialog>
                          <app-edit-meetup-time-dialog
                          :meetup="meetup" v-if="userIsCreator">
                          </app-edit-meetup-time-dialog>
                        </div> -->
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <app-register-dialog 
                        :meetupId="meetup.id"
                        v-if="userIsAuth && !userIsCreator"
                        ></app-register-dialog>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuth () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuth) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    }
  }
}
</script>
