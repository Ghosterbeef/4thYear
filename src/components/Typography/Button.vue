<template>
  <button @click.prevent="$emit.click" :class="[{'circled':isCircled}]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    isCircled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
button {
  &.circled {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: var(--bg-sidebar);
  }
}
</style>
