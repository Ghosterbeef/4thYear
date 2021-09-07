<template>
  <ul class="list">
    <slot>

    </slot>
  </ul>
</template>

<script>
export default {
  name: "List"
}
</script>

<style scoped lang="scss">
.list {
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap-small);
}
</style>
