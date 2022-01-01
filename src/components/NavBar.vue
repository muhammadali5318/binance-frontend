/*
System: Binance Front-end
Developer: Muhammad Ali
Date: Jan 1, 2022
Organization: Programmer Force
Purpose: This file NavBar.vue is the main NavBar which is used in all project
*/
<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title style="cursor: pointer">
        <v-img width="60%" src="@/assets/binance-logo.png"></v-img>
      </v-toolbar-title>

      <div class="hidden-md-and-down">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Buy Crypto
              <v-icon right size="30"> mdi-menu-down </v-icon>

            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Trade
              <v-icon right size="30"> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text> Markets </v-btn>

       

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              Finance
              <v-icon right size="30"> mdi-menu-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              NFT
              <v-icon right size="30"> mdi-menu-down </v-icon>
              <v-chip class="background ms-2" label>New</v-chip>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>

      <v-btn text>Login</v-btn>
      <v-btn text>Register</v-btn>
      <v-btn class="hidden-md-and-down" text>Downloads</v-btn>
    </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list flat>
        <v-toolbar-title class="px-5 font-weight-medium"
          >Muhammad Ali</v-toolbar-title
        >
        <div class="px-5 text-caption">Logged In</div>
        <v-divider></v-divider>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in NavItems"
            :key="i"
            @click="route(item.routeName)"
            style="cursor: pointer"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
     NavItems: [
        { text: "Home", icon: "mdi-home", routeName: "Home" },
        {
          text: "Profile",
          icon: "mdi-account-box",
          routeName: "UpdateProfile",
        },

        {
          text: "Logout",
          icon: "mdi-bag-checked",
          routeName: "SignUpLogin",
        },
      ],
  }),
};
</script>