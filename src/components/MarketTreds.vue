/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file MarketTrends.vue is a simple file consist of a table where current market trends show.
*/
<template>
  <v-container>
    <h2 class="my-6">Market Trends</h2>

    <v-card>
      <v-card-title>
        Trends
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="Trends  "
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Last Price', value: 'lastPrice' },
          { text: '24h Change', value: 'change' },
          { text: 'markets', value: 'Markets' }
        ],
        Trends: [
          {
            name: 'BNB BNB',
            lastPrice: "$12159.23",
            change: "+3.25%",
            Markets: 452,
          },
          {
            name: 'BTC Bitcoin',
            lastPrice: "$159.23",
            change: "+4.25%",
            Markets: 34,
          },
          {
            name: '  ETH Ethereum',
            lastPrice: "$159.23",
            change: "+3.25%",
            Markets: 4,
          },
          {
            name: 'LUNA Terra',
            lastPrice: "$159.23",
            change: "+6.25%",
            Markets: 56,
          },
          {
            name: 'SHIB SHIBA INU',
            lastPrice: "$159.23",
            change: "+6.25%",
            Markets: 56,
          },
          {
            name: 'SOL Solona',
            lastPrice: "$159.23",
            change: "+6.25%",
            Markets: 56,
          },
          {
            name: 'ROSE Oasis Network',
            lastPrice: "$159.23",
            change: "+6.25%",
            Markets: 56,
          },
        ],
      }
    },
  }
</script>