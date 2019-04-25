<template>   
    <v-dialog persistent max-width="350px" v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Time
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title primary-title>
                            Edit Meetup Date
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                         <v-time-picker v-model="editableTime" actions format="24hr">
                             <template >
                                 <v-btn
                                 class="blue--text darken-1"
                                 flat
                                 @click="editDialog = false">Close</v-btn>
                                 <v-btn
                                 class="blue--text darken-1"
                                 flat
                                 @click="onSaveChanges">Save</v-btn>
                             </template>
                         </v-time-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>     
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableTime: null
    }
  },
  methods: {
    onSaveChanges () {
      const newTime = this.editableTime
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newTime
      })
    }
  }
}
</script>
