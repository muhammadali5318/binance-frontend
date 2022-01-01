/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file AuthNavBar.vue is a Nav Bar in Signup And Login Page
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