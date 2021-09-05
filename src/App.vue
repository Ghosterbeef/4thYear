<template>
  <SideBarNav>

  </SideBarNav>
  <router-view/>
</template>

<script>
import SideBarNav from "./components/SideBarNav/SideBarNav";

export default {
  components: {SideBarNav}
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: gold;
  height: 100%;
  width: 100%;
}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>

