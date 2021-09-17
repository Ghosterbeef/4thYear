<template>
  <SideBarNav/>
  <div id="content" class="content" :class="{'dark-theme' : $store.getters.isDarkTheme}">
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
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;

  #app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    height: 100%;

    section, main, header, footer {
      border-top: 1px solid var(--title-font);
      padding-top: 10px;
      padding-bottom: 10px;
      transition: all 0.3s ease;
    }

    .content {
      display: flex;
      width: 100%;
      max-width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: var(--padding-right-app);
      background-color: var(--default-background);
      transition: all 0.3s ease;
      position: relative;

      .content_wrapper {
        display: flex;
        flex-direction: column;
        justify-self: center;
        width: 80%;
        max-width: 1200px;
        min-width: min-content;
        height: max-content;
        margin: 20px auto;
        padding: var(--padding-universal);
        border-radius: var(--border-radius-big);
        background-color: var(--section-background);
      }
    }
  }

  @media (max-width: $sm) {
    #app {
      .content {
        .content_wrapper {
          margin: 10px;
          width: 100%;
        }
      }
    }
  }
}
</style>

