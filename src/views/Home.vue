<template>
<!-- <login/> -->
  <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto "
      max-height="auto"
    >
      <v-container class="mt-16 ">
        <v-row gutters>
          <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
            <v-card class="pa-2 fill-height " flat tile>
              <div
                class="
                  blue--text
                  text--darken-4
                  font-weight-bold
                  text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
                "
              >
Buy & sell Crypto in minutes
              </div>

              <p
                class="
                  headline
                  font-weight-light
                  mt-5
                "
              >Join the world's largest crypto exchange
              </p>

              <v-btn
                width="40%"
                class="white--text background py-6"
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

            
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" md="12" lg="7" xl="7">
            <v-card
              class="pa-2 fill-height "
              flat
              tile
              max-width="100%"
            >
              <v-responsive>
                <!-- <v-img src="../assets/herosection.png"></v-img> -->
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
<!-- <SignUp/> -->
</template>

<script>
  // import login from '@/components/login.vue'
  // import SignUp from '@/components/SignUp.vue'

  export default {
    name: 'Home',

    components: {
      // login,
      // SignUp
    },
  }
</script>
