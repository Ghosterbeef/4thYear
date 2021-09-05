<template>
  <SideBarNav>

  </SideBarNav>
  <router-view/>
</template>

<script>
import SideBarNav from "./components/SideBarNav/SideBarNav";
import Title from "./components/Typography/Title";

export default {
  components: {Title, SideBarNav}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Poppins:wght@300;400;500;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  background-color: gold;
  height: 100%;
  width: 100%;
}
</style>

