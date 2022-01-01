/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file HomePageTop.vue is a helping component used in Home page sections
*/ 
<template>
<v-container>
  <h1 class="mt-16">Get In Touch. Stay in Touch.</h1>
     <v-row class="my-10" gutters>
          <v-col
            v-for="n in infoSection"
            :key="n.title"
            cols="12"

            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
          >
            <div>
              <v-icon color="Grey darken-5" size="70">{{ n.icon }}</v-icon>
              <h2 class="grey--text text--darken-2 mt-10 mb-3">{{ n.title }}</h2>
              <p class="grey--text text--darken-1 font-weight-regular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                dolorem illum, incidunt odit corrupti perspiciatis deleniti aut
                tenetur quia repellat inventore quasi error culpa quis velit
                quas. Sint, maiores optio!
              </p>
            </div>
          </v-col>
        </v-row>
</v-container>
</template>

<script>
export default {
    name: "GetInTouchSection",
    data(){
        return{
  infoSection: [
        {
          title: "24/7 Support",
          icon: "mdi-card-account-phone",
        },
        {
          title: "Binance Blog",
          icon: "mdi-post",
        },
        {
          title: "Community",
          icon: "mdi-account-multiple",
        },
        {
          title: "Careers",
          icon: "mdi-account-group",
        },
      ],
        }
    }
}
</script>