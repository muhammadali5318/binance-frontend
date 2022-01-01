/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file HomeCard.vue is a helping component used in Home page sections
*/ 
<template>
  <v-sheet
    id="scrolling-techniques-7"
    class="mt-16 overflow-y-auto grey lighten-5"
    max-height="auto"
  >
    <v-container class="mt-16 grey lighten-5">
      <v-row gutters>
        <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
          <v-card class="pa-2 fill-height grey lighten-5" flat tile>
            <div
              class="
                grey--text
                text--darken-4
                font-weight-bold
                text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
              "
            >
              Trade Anywhere
            </div>

            <p
              class="grey--text text--darken-2 headline font-weight-light mt-5"
            >
              Compatible with multiple devices, start trading with safty and
              convinence
            </p>

            <v-text-field
              outlined
              label="Enter you email"
              append-icon="mdi-email"
            ></v-text-field>
            <v-btn
              width="100%"
              class="white--text grey darken-4 py-8"
              elevation="2"
              x-large
              @click="snackbar = true"
              >Start free trial</v-btn
            >

            <v-snackbar
              top
              center
              color="success"
              v-model="snackbar"
              timeout="2000"
            >
              <span class="group">
                {{ text }}

                <v-icon dark>mdi-check-decagram-outline </v-icon>
              </span>
            </v-snackbar>

            <div class="text-body-1 mt-8">
              Try Binance free for 14 days, no credit card required.By entering
              your email, you agree to receive marketing emails from Binance.
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" lg="7" xl="7">
          <v-card
            class="pa-2 fill-height grey lighten-5"
            flat
            tile
            max-width="100%"
          >
            <v-responsive class="rounded">
              <v-img src="../assets/binance.jpg"></v-img>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "HomeCard",
};
</script>