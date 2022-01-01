<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style >.background {
  background-color: #fcd535 !important;
}
.text-color {
  color: #c99400;
}
html, body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>