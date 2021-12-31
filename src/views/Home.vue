<template>

  <v-main class="pa-0" >
    <NavBar/>

<!-- top compnent for home page -->
 <HomePageTop/>

  <v-container class="mt-16 pt-10">
    <p> <v-icon class="pe-3" >mdi-bullhorn-variant </v-icon> Binance to Acquire Outstanding Shares in Swipe 12:30 | <span class="text-color px-3" >More</span> </p>
    <p><v-icon class="pe-3" >mdi-android-messages </v-icon>  Special Notice about Binance.com in Singapore <span class="text-color px-3" >More</span> </p>
    <p><v-icon class="pe-3" >mdi-android-messages </v-icon>  Special Notice About Binance Markets Limited <span class="text-color px-3" >More</span> </p>
  </v-container>

<!-- Market Trend Section -->
<MarketTrends/>
<HomeCard/>
<GetInTouchSection/>

  </v-main>
</template>

<script>
import HomePageTop from '@/components/HomePageTop.vue'
import MarketTrends from '@/components/MarketTreds.vue'
import HomeCard from '@/components/HomeCard.vue'
import NavBar from '@/components/NavBar.vue'
import GetInTouchSection from '@/components/GetInTouchSection.vue'
// import SignUp from '@/components/SignUp.vue'

export default {
  name: "Home",

  components: {
    // login,
    // SignUp
    HomePageTop,
    MarketTrends,
    HomeCard,
    NavBar,
    GetInTouchSection
  },
};
</script>

<style scoped>
.container-bg{
background-color: #F5F6F7;
}
</style>
