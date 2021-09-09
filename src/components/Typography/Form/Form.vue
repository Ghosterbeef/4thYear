<template>
  <form @submit.prevent="$emit('submit')">
    <slot>

    </slot>
  </form>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-small);
}
</style>
