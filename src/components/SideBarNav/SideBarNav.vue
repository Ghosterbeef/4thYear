<template>
  <nav>
    <div class="header">
      <slot name="header">

      </slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBarNav"
}
</script>

<style scoped lang="scss">
nav {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: $bg-sidebar;
}
</style>
