<template>
  <div class="code_wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Code"
}
</script>

<style lang="scss">
.code_wrapper {
  margin: var(--gap-small) 0;
  padding: var(--padding-universal);
  border-radius: var(--border-radius-small);
  background-color: $default-background;
  color: $default-font;
  min-width: 100%;
  width: 1px;
  max-width: 100%;
  display: flex;
  overflow-y: auto;

  pre {
    font-family: 'JetBrains Mono', monospace;
    font-size: calc(var(--p) - 5px);
  }
}
</style>
