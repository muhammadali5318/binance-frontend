/*
This component is the top header for home page.
*/ 
<template>
  <!-- <login/> -->
  <v-sheet
    id="scrolling-techniques-7"
    class="overflow-y-auto"
    color="#F5F6F7"
    max-height="auto"
  >
    <v-container class="container-bg mt-16">
      <v-row gutters>
        <v-col cols="12">
          <v-card color="#F5F6F7" class="container-bg pa-2 fill-height" flat tile>
            <div
              class="
                grey--text
                text--darken-4
                font-weight-bold
                text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
              "
            >
              Buy & sell Crypto in minutes
            </div>

            <p class="headline font-weight-light mt-5">
              Join the world's largest crypto exchange
            </p>

            <v-btn
              class="my-10 black--text background py-6"
              elevation="2"
              x-large
              @click="snackbar = true"
              >Register Now</v-btn
            >

            <v-container>
              <v-row no-gutters>
                <v-col v-for="n in 6" :key="n" cols="12" sm="3" lg="3" xl="2">
                  <div class="mt-16 pt-8">
                    <p class="ma-0 font-weight-medium">
                      SHB/UXI <span class="green--text">+ 32.20%</span>
                    </p>
                    <h2>05346521354</h2>
                    <div class="text-subtitle-1 grey--text darken-1">
                      $684520
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <!-- <SignUp/> -->
</template>

<script>
export default {
  name: "HomePageTop",

  components: {
    // login,
    // SignUp
  },
};
</script>

<style scoped>
.container-bg{
background-color: #F5F6F7;
}
</style>
