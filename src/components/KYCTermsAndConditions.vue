/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file KYCTermsAndConition.vue is a helping component used in KYC Verificatino procss
*/
<template>
  <section>
    <h1>Terms and conditions</h1>
    <v-divider class="my-5"></v-divider>
    <ul>
      <li>Lorem ipsum dolor, cum ab culpa exercitationem porro. Nostrum similique aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo? Nisi velit amet ullam, quae dolore assumenda qui a neque doloribus ex, alias aut magnam placeat nulla molestiae. Voluptatibus alias odio vitae consequuntur distinctio maiores eaque aliquam eligendi. Ipsa error tenetur, animi dolores, adipisci consequuntur fugit, beatae inventore omnis eius ullam provident repudiandae delectus cumque aperiam recusandae similique natus quis voluptatem. Dolorum harum ipsa saepe nisi beatae iusto eum assumenda accusantium modi sapiente officia repudiandae neque veritatis iste a doloremque minus tenetur quo ullam, laudantium, porro expedita voluptatibus dolor. Impedit voluptatibus sit nulla obcaecati. Omnis nihil totam explicabo reiciendis illo necessitatibus recusandae!</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae recusandae, cum ab culpa exercitationem porro. Nostrum similique aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo? Nisi velit amet ullam, quae dolore assumenda qui a neque doloribus ex, alias aut magnam placeat nulla molestiae. Voluptatibus alias odio vitae consequuntur distinctio maiores eaque aliquam eligendi. Ipsa error tenetur, animi dolores, adipisci consequuntur fugit, beatae inventore omnis eius ullam provident repudiandae delectus cumque aperiam recusandae similique natus quis voluptatem. Dolorum harum ipsa saepe nisi beatae iusto eum assumenda accusantium modi sapiente officia repudiandae neque veritatis iste a doloremque minus tenetur quo ullam, laudantium, porro expedita voluptatibus dolor. Impedit voluptatibus sit nulla obcaecati. Omnis nihil totam explicabo reiciendis illo necessitatibus recusandae!</li>
      </ul>
      <h2 class="mt-8" >Return Policy:</h2>
      <ul>
      <li>Lorem ipsum dolor, cum ab culpa exercitationem porro. Nostrum similique aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo? Nisi velit amet ullam, quae dolore assumenda qui a neque doloribus ex, alias aut magnam placeat nulla molestiae. Voluptatibus alias odio vitae consequuntur distinctio maiores eaque aliquam eligendi. Ipsa error tenetur, animi dolores, adipisci consequuntur fugit, beatae inventore omnis eius ullam provident repudiandae delectus cumque aperiam recusandae similique natus quis voluptatem. Dolorum harum ipsa saepe nisi beatae iusto eum assumenda accusantium modi sapiente officia repudiandae neque veritatis iste a doloremque minus tenetur quo ullam, laudantium, porro expedita voluptatibus dolor. Impedit voluptatibus sit nulla obcaecati. Omnis nihil totam explicabo reiciendis illo necessitatibus recusandae!</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae recusandae, cum ab culpa exercitationem porro. Nostrum similique aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo? Nisi velit amet ullam, quae dolore assumenda qui a neque doloribus ex, alias aut magnam placeat nulla molestiae. Voluptatibus alias odio vitae consequuntur distinctio maiores eaque aliquam eligendi. Ipsa error tenetur, animi dolores, adipisci consequuntur fugit, beatae inventore omnis eius ullam provident repudiandae delectus cumque aperiam recusandae similique natus quis voluptatem. Dolorum harum ipsa saepe nisi beatae iusto eum assumenda accusantium modi sapiente officia repudiandae neque veritatis iste a doloremque minus tenetur quo ullam, laudantium, porro expedita voluptatibus dolor. Impedit voluptatibus sit nulla obcaecati. Omnis nihil totam explicabo reiciendis illo necessitatibus recusandae!</li>
      <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor vitae recusandae,  sit amet consectetur adipisicing elit. Dolor vitae recusandae, sit amet consectetur adipisicing elit. Dolor vitae recusandae, cum ab culpa exercitationem porro. Nostrum similique aliquid obcaecati qui iste tempora, velit quae repudiandae ratione nemo? Nisi velit amet ullam, quae dolore assumenda qui a neque doloribus ex, alias aut magnam placeat nulla molestiae. Voluptatibus alias odio vitae consequuntur distinctio maiores eaque aliquam eligendi. Ipsa error tenetur, animi dolores, adipisci consequuntur fugit, beatae inventore omnis eius ullam provident repudiandae delectus cumque aperiam recusandae similique natus quis voluptatem. Dolorum harum ipsa saepe nisi beatae iusto eum assumenda accusantium modi sapiente officia repudiandae neque veritatis iste a doloremque minus tenetur quo ullam, laudantium, porro expedita voluptatibus dolor. Impedit voluptatibus sit nulla obcaecati. Omnis nihil totam explicabo reiciendis illo necessitatibus recusandae!</li>
      </ul>
    <v-checkbox
    color="#fcd535"
      v-model="checkbox1"
      label="Agree to Terms and Conditions"
    ></v-checkbox>
  </section>
</template>
<script>
export default {
  name: "KYCTermsAndConditions",
  data(){
      return{

          checkbox1: false,
      }
  }
};
</script>