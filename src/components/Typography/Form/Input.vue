<template>
  <input
    :class="[{'centered': isCentered}]"
    :type="type"
    :inputmode="type==='number' ? 'decimal': undefined"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
  name: "Input",
  emits: [
    'update:modelValue'
  ],
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    type: {
      validator(val) {
        return ["text", "password", "number"].includes(val)
      },
      default: "text"
    },
    isCentered: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped lang="scss">
input {
  &.centered {
    width: var(--matrix-item-size);
    height: var(--matrix-item-size);
    align-self: center;
    text-align: center;
  }

  &[type="text"], &[type="password"] {
    width: 70%;
    min-width: 200px;
    max-width: 400px;
    padding: var(--padding-top-bottom-small) var(--padding-right-left);
    border: 1px solid var(--link-light);
    border-radius: var(--border-radius-small)
  }
}
</style>
