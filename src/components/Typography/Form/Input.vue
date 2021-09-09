<template>
  <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: "Input",
  emits: [
    'update:modelValue'
  ],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      validator(val) {
        return ["text", "password"].includes(val)
      },
      default: "text"
    }
  }
}
</script>

<style scoped lang="scss">
input {

  &[type="text"], &[type="password"] {
    width: 70%;
    min-width: 200px;
    max-width: 400px;
    padding: var(--padding-top-bottom-small) var(--padding-right-left);
    border: 1px solid $link-light;
    border-radius: var(--border-radius-small)
  }
}
</style>
