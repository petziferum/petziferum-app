<template>
  <v-container>
    <v-card max-width="500">
      <v-toolbar color="secondary" dark elevation="1">{{title}}</v-toolbar>
        <v-row class="pa-4">
        <v-form class="ma-4">
          <v-text-field v-model="name" label="Your Name"></v-text-field>
<v-btn value="Enter" max-width="120px" @click.prevent="enterChat">Enter</v-btn>
            <p v-if="feedback" class="red--text">{{feedback}}</p>
        </v-form>
        </v-row>
    </v-card>
  </v-container>

</template>
<script>
  export default {
    data: () => ({
    title: "Chat",
      user: [],
        name: null,
        feedback:null
    }),
      methods: {
        enterChat(){
            if(this.name){
                console.log(name)
                this.$router.push({name: 'Chat', params: {name: this.name} })
            }else{
                this.feedback = 'You must enter a name to join!'
            }
        }
      },
    mounted()  {
      this.$store.dispatch("init")
      this.user = this.$store.getters.getUser
    }
  }
</script>
