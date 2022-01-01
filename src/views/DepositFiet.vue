<template>
  <section>
    <NavBar />
    <div class="py-6 grey lighten-5">
      <v-container>
        <div
          class="
            grey--text
            text--darken-4
            font-weight-bold
            text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4
          "
        >
          Deposit Fiet
          <v-btn text class="background mx-8"
            >Order History <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-container>
    </div>

    <!-- *************************************************** -->

    <v-container>
      <v-row>
        <v-col cols="12" lg="5" xl="5">
          <v-form ref="form" class="pa-5 pt-16 rounded form">
            <div class="py-8">
              <div
                class="
                  py-6
                  font-weight-bold
                  text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4
                "
              >
                Select Currency
              </div>
            </div>

            <p>Currency to deposit</p>
            <v-select
              outlined
              :items="Currency"
              color="rgb(252, 213, 53)"
              placeholder="BNB Binance"
              required
            ></v-select>

            <h2 class="grey--text text--darken-3">Pay with:</h2>
            <v-radio-group v-model="radioGroup">
              <v-radio
                class="font-weight-bold text-h3"
                color="rgb(252, 213, 53)"
                v-for="n in RadioOption"
                :key="n"
                :label="`${n}`"
                :value="n"
              ></v-radio>
            </v-radio-group>

            <v-btn
              class="py-8 background"
              elevation="2"
              width="100%"
              @click="submit"
              >Continue</v-btn
            >
          </v-form>
        </v-col>
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          xl="4"
          lg="4"
        >
          <div class="d-flex flex-column justify-center align-center">
            <div class="text-h4">
              <span class="text-color px-3">
                <v-icon class="pe-3">mdi-bullhorn-variant </v-icon>Didn't
                receive Deposit</span
              >
            </div>

            <div class="text-h6 mt-4">
              How to pay with credit or debit Card?
            </div>
            <div class="text-h6">How long does the deposit take?</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <section class="d-flex flex-column justify-center align-center"></section>
  </section>
  <!-- *************************************************** -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "DepositFiet",
  components: {
    NavBar,
  },
  data() {
    return {
      Currency: ["Bitcoin", "Etherem", "Doge Coin", "Binance"],
      RadioOption: [
        "Bank Card (Visa/MC)",
        "Advcash Account Balance",
        "P2P Express",
      ],
      radioGroup: 1,
    };
  },
};
</script>


<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  gap: 2rem;
}
</style>