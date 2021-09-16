<template>
  <span class="allusion">
    <Icon icon="respect" styled-like="description"/>
    <p>
    <slot></slot>
    </p>
  </span>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Allusion",
  components: {Icon}
}
</script>

<style scoped lang="scss">
.allusion {
  display: flex;
  align-items: center;
  gap: var(--gap-small);
  padding: 0 var(--padding-right-left);
  border-radius: var(--border-radius-small);
  background-color: var(--description-background);
  color: var(--description-font);
  margin-right: 5px;
}
</style>
