<template>
  <SideBarNav/>
  <div class="content">
  <div class="content_wrapper">
    <router-view/>
  </div>
  </div>
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
  height: 100%;
  width: 100%;

  .content{
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8vw;
    .content_wrapper {
      background-color: #f5f5f5;
      margin: 20px auto;
      padding: 20px;
      border-radius: 20px;
      justify-self: center;
      max-width: 1200px;
      min-height: max-content;
      width: 70%;
      min-width: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

}

@media (max-width: $sm) {
  #app{
    padding-right: 0;

    .content_wrapper {
      padding: 10px;
      margin: 10px;
      min-width: max-content;
    }
  }
}
</style>

