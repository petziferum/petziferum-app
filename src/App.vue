<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-img :src="logo" contain max-width="140px"></v-img>
      <span class="headline"> - APP</span>
<v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    logo: require("@/assets/Petziferum_schriftzug_Trans.png")
  }),
};
</script>
