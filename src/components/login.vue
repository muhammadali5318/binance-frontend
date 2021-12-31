<template>
  <div>
    <AuthNavBar />
    <!-- *************************************************** -->
    <div
      style="height: 100vh"
      class="wrapper"
    >
      <section >
        <v-row>
          <v-col>
            <v-form ref="form" class="pa-5 pt-16 rounded form">
                <div class="py-8">

              <div
                class="
                    py-6
                  font-weight-bold
                  text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4
                "
              >
                Binance Account Login
              </div>

              <v-spacer></v-spacer>
              <p class="grey--text lighten-1">
                Welcome back! Log In with your Email, Phone number or QR code
              </p>
                </div>

              <v-text-field
              color="rgb(252, 213, 53)"
              
                placeholder="Email"
                append-icon="mdi-email"
                :rules="emailRule"
                :hint="emailHint"
                ref="email"
              ></v-text-field>

              <v-text-field
              color="rgb(252, 213, 53)"
              
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                placeholder="Password"
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-btn
                class="py-8 background"
                elevation="2"
                width="100%"
                @click="submit"
                >Log In</v-btn
              >

              <v-snackbar
                top
                centered
                color="red"
                v-model="snackbar"
                timeout="2000"
              >
                <span class="group">
                  {{ text }}

                  <v-icon dark>mdi-check-decagram-outline </v-icon>
                </span>
              </v-snackbar>

              <p class="mt-5 d-flex flex-column">
                <router-link class="text-color text-decoration-none" to="/">
                  Forgot Password?
                </router-link>
                <router-link class="text-color text-decoration-none" to="/">
                  Register Now
                </router-link>
              </p>
            </v-form>
          </v-col>
        </v-row>
      </section>
      <section  class="d-flex flex-column justify-center align-center">
          <div class="d-flex flex-column justify-center align-center">

          <div style="max-width: 50%" class="d-flex justify-center align-center" >
        <v-img width="50%" src="@/assets/QR.jpg"></v-img>
          </div>

        <h3>Login With QR Code</h3>

        <p class="mb-16 pb-16 ">Scan this code with the Binance mobile app to log in instantly.</p>
          </div>
      </section>
    </div>
    <!-- *************************************************** -->
  </div>
</template>

<script>
import AuthNavBar from "./AuthNavBar.vue";

//  import  AuthNavBar  from "../components/AuthNavBar.vue";

export default {
  name: "Login",
  components: {
    AuthNavBar,
    // AuthNavBar
  },
  data(){
      return{
          text: "Invalid Credentials",

      }
  }
};
</script>


<style scoped>

.wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    gap: 2rem;
}
</style>