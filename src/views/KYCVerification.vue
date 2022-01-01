<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Application Data
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Tax Residency
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Identity Documents
      </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step step="4"> Address </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content  step="1">
        <KYCTermsAndConditions />

<div class="my-5">
        <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
</div>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import KYCTermsAndConditions from "@/components/KYCTermsAndConditions.vue";
export default {
  name: "KYCVerification",
  components: {
    KYCTermsAndConditions,
  },
  data() {
    return {
      e1: 1,
    };
  },
};
</script>