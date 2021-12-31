<template>
  <!-- <login/> -->
  <v-main>

<!-- top compnent for home page -->
 <HomePageTop/>

  <v-container class="mt-16 pt-10">
    <p> <v-icon class="pe-3" >mdi-bullhorn-variant </v-icon> Binance to Acquire Outstanding Shares in Swipe 12:30 | <span class="text-color px-3" >More</span> </p>
    <p><v-icon class="pe-3" >mdi-android-messages </v-icon>  Special Notice about Binance.com in Singapore <span class="text-color px-3" >More</span> </p>
    <p><v-icon class="pe-3" >mdi-android-messages </v-icon>  Special Notice About Binance Markets Limited <span class="text-color px-3" >More</span> </p>

  </v-container>

<!-- Market Trend Section -->
<MarketTrends/>

  </v-main>
  <!-- <SignUp/> -->
</template>

<script>
import HomePageTop from '@/components/HomePageTop.vue'
import MarketTrends from '@/components/MarketTreds.vue'
// import SignUp from '@/components/SignUp.vue'

export default {
  name: "Home",

  components: {
    // login,
    // SignUp
    HomePageTop,
    MarketTrends
  },
};
</script>

<style scoped>
.container-bg{
background-color: #F5F6F7;
}
</style>
