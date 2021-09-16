<template>
  <button :disabled="!isActive">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props:{
    isActive: Boolean
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: var(--link-light);
  border: none;
  width: 200px;
  padding: var(--padding-top-bottom-small) var(--padding-right-left);
  border-radius: var(--border-radius-small);
  font-size: var(--p);
  cursor: pointer;
  transition: all 0.3s ease;

  &:not(&:disabled):hover {
    background-color: var(--link-light-action)
  }
}
</style>
