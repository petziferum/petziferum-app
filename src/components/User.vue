<template>
  <v-container>
    <v-card max-width="30em">
      <v-toolbar color="primary" elevation="1">
        {{user.name}}
        <v-spacer></v-spacer>
        <v-btn dark icon class="float-right">
        <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-subheader v-text="user.email"></v-subheader>
      <v-list dense>
        <v-list-item>{{user.id}}</v-list-item>
        <v-list-item>{{user.valid}}</v-list-item>
        <v-list-item>{{user.item}}</v-list-item>
      </v-list>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
          "user"
  ],
  data: () => ({

  }),
};
</script>
