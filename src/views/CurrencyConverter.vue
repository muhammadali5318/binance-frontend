/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file CurrencyConverter.vue is responsible for currency converion 
from any number of ammount to cryptocurrency amount.
*/
<template>
  <div class="pt-2 wrapper" style="height: 100vh">
    <NavBar />

    <v-sheet height="100vh" class="main-sheet">
      <v-container
        class="
          py-10
          d-flex
          justify-lg-space-between
          align-center
          overflow-hidden
        "
      >
        <div>
          <v-btn class="background rounded-xl">Market</v-btn>
          <v-btn text>Limit</v-btn>
        </div>
        <v-btn text>Orders</v-btn>
      </v-container>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="8" xl="8" md="8" sm="12" xs="12">
            <p>Enter Amount</p>
            <v-text-field
              outlined
              color="rgb(252, 213, 53)"
              placeholder="20-22300"
              required
            ></v-text-field>
            <p>Select Currency To convert:</p>
            <v-select
              outlined
              :items="Currency"
              color="rgb(252, 213, 53)"
              placeholder="BNB Binance"
              required
            ></v-select>
            <div class="d-flex justify-center">
              <v-btn width="50%" class="py-6 background"> Convert </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import { component } from 'vue/types/umd'
export default {
  name: "CurrencyConverter",
  components: {
    NavBar,
  },
  data() {
    return {
      Currency: ["Bitcoin", "Etherem", "Doge Coin"],
    };
  },
};
</script>

<style scoped>
.main-sheet {
  margin-top: 15rem;
  border-radius: 3%;
}
.wrapper {
  background: url("../assets/otc.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-y: auto;
}
</style>