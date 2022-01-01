<template>
  <v-stepper v-model="e1">
    <v-stepper-header >
      <v-stepper-step  color="#fcd535" :complete="e1 > 1" step="1">
        Application Data
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#fcd535" :complete="e1 > 2" step="2">
        Identity Document
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#fcd535" :complete="e1 > 3" step="3">
        Upload Documents
      </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step color="#fcd535" step="4"> Address </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <KYCTermsAndConditions />

        <div class="my-5">
          <v-btn class="background" @click="e1 = 2"> Continue </v-btn>
          
        </div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <IdentityDocument />
        <div class="my-5">
          <v-btn class="background" @click="e1 = 3"> Continue </v-btn>
          <v-btn text @click="e1 = 1"> Previous </v-btn>
        </div>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn class="background" @click="e1 = 4"> Continue </v-btn>

        <v-btn text @click="e1 = 2"> Previous </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn class="background" @click="e1 = 1"> Continue </v-btn>

        <v-btn text @click="e1 = 3" > Privious </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import KYCTermsAndConditions from "@/components/KYCTermsAndConditions.vue";
import IdentityDocument from "@/components/IdentityDocument.vue";
export default {
  name: "KYCVerification",
  components: {
    KYCTermsAndConditions,
    IdentityDocument,
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>