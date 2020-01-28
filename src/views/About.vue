<template>
  <v-container>
    <v-card>
      <v-toolbar color="secondary" dark elevation="1">{{title}}</v-toolbar>
      Store<br>
      <v-card-text>
      <span v-for="user in user" :key="user.id">{{user.id}}, {{user.name}}, {{user.email}}<br></span>
      </v-card-text>

    </v-card>

  </v-container>

</template>
<script>
  export default {
    data: () => ({
    title: "About",
      user: []
    }),
    mounted()  {
      this.$store.dispatch("init")
      this.user = this.$store.getters.getUser
    }
  }
</script>
