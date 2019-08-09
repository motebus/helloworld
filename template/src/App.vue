<template>
<v-app id="app">
    <v-content>
        <v-container class="pa-0" fluid fill-height>
          <v-flex xs12 fill-height>
                <router-view></router-view>
          </v-flex>
       </v-container>
    </v-content>
</v-app>
</template>
<script>
export default {
  name: 'App',
  created () {
      this.$store.dispatch('fetchUser');
  }
};
</script>
<style lang="sass">
@import 'reset-css';

body
  overflow-x: hidden
#app
  +htmlDefault
  +bnbFont
  +text
  +flex
  position: relative
  box-sizing: border-box
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  min-height: 100vh
</style>
