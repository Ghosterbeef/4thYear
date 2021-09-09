<template>
  <label :for="forId">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "Label",
  props: {
    forId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
label {
  width: 70%;
  min-width: 200px;
  max-width: 400px;
  font-size: var(--h6);
}
</style>
