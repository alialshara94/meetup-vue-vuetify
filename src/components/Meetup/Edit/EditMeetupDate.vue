<template>   
    <v-dialog persistent max-width="350px" v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Date
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
                         <v-date-picker v-model="editableDate" style="width: 100%" actions>
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
                         </v-date-picker>
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
      editableDate: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = this.editableDate
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableDate = this.meetup.date
  }
}
</script>
