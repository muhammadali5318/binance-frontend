<template>
  <v-main>
    <AuthNavBar />
    <!-- *************************************************** -->
    <div class="wrapper">
      <section class="main">
        <v-container >
          <v-row class="mt-8">
            <v-col class="ms-xl-16 ms-lg-16 ms-md-16 ps-xl-16 ps-lg-16  ps-md-16" cols="12" lg="5" xl="5" md="5" xs="12" sm="12">
              <v-form class="form pa-5 rounded" ref="form">
                <div
                  class="
                    py-6
                    font-weight-bold
                    text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4
                  "
                >
                  Create Binance Account
                </div>

                <v-spacer></v-spacer>
                <p class="grey--text lighten-1 font-weight-light">
                  Register with your email or mobile
                </p>

                <div>
                  <p>Name</p>
                  <v-text-field
                    outlined
                    color="#c99400"
                    append-icon="mdi-pencil-outline"
                    v-model="userData.name.firstname"
                    hint="minimum 3 characters"
                    :rules="nameRules"
                  ></v-text-field>
                </div>

                <div>
                  <p>Email</p>
                  <v-text-field
                    color="#c99400"
                    outlined
                    v-model="userData.email"
                    append-icon="mdi-email"
                    :rules="emailRule"
                    :hint="emailHint"
                    ref="email"
                  ></v-text-field>
                </div>

                <div>
                  <p>Password</p>
                  <v-text-field
                    color="#c99400"
                    label="Password"
                    outlined
                    v-model="userData.password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    placeholder="Password"
                    counter="8"
                    :rules="passwordRules"
                    @click:append="show1 = !show1"
                    hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
                  ></v-text-field>
                </div>
                <!-- ************************ Need to ask ******************************** -->

                <p class="mt-5 font-weight-light">
                  By proceeding, you agree to the
                  <router-link
                    class="text-color text-decoration-none"
                    to="/SignIn"
                  >
                    Terms and conditions
                  </router-link>
                </p>

                <v-btn
                  width="100%"
                  class="background pa-7 px-12 font-weight-bold"
                  elevation="2"
                  @click="submit"
                  >Create Account</v-btn
                >

                <p class="mt-5 font-weight-light">
                  Already Registered?
                  <router-link
                    class="text-color text-decoration-none"
                    to="/SignIn"
                  >
                    Login
                  </router-link>
                </p>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
    <!-- *************************************************** -->
  </v-main>
</template>

<script>
import AuthNavBar from "./AuthNavBar.vue";

//  import  AuthNavBar  from "../components/AuthNavBar.vue";

export default {
  name: "SignUp",
  components: {
    AuthNavBar,
    // AuthNavBar
  },
  data() {
    return {
      text: "Invalid Credentials",
      userData: {
        address: {
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
          city: "Lahore",
          street: "12-A, Johar Town",
          number: "619",
          zipcode: "12926-3874",
        },
        id: "",
        email: "",
        username: "",
        password: "",
        profilePicture: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
      },
    };
  },
};
</script>



<style scoped>
.background {
  background-color: rgb(252, 213, 53) !important;
}
.text-color {
  color: #c99400;
}
.min {
  width: 100vw;
  height: 100vh;
}
.form {
  background-color: rgba(255, 255, 255, 0.9);
}
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>
