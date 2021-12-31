<template>
<v-container>

     <v-row class="mb-16" gutters>
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
              <v-icon x-large color="blue lighten-5">{{ n.icon }}</v-icon>
              <h2 class="grey--text mt-6 mb-3">{{ n.title }}</h2>
              <p class="grey--text font-weight-regular">
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
          title: "Start online Shopping now",
          icon: "mdi-cursor-default-click",
        },
        {
          title: "Move your business online",
          icon: "mdi-arrow-expand-horizontal",
        },
        {
          title: "Hire a Shopify expert",
          icon: "mdi-account-multiple",
        },
        {
          title: "Switch to Shopify",
          icon: "mdi-home-switch",
        },
      ],
        }
    }
}
</script>