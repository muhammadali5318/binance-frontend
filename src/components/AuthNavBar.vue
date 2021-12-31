/*
This is nav bar file used in Signup And Login Page
 */

<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <v-toolbar-title style="cursor: pointer">
        <v-img width="60%" src="@/assets/binance-logo.png"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text> English </v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: "AuthNavBar",
};
</script>