<template>
  <span class="allusion" :class="{'special': isSpecial}">
    <Icon icon="respect" styled-like="description"/>
    <slot></slot>
  </span>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Allusion",
  components: {Icon},
  props: {
    isSpecial: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.allusion {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px var(--padding-right-left);
  border-radius: var(--border-radius-small);
  background-color: var(--description-background);
  color: var(--description-font);
  margin-right: 5px;
  font-size: var(--p);

  & > ::v-deep(*) {
    margin: 0 var(--gap-small);
  }

  &.special {
    font-weight: 700;
    font-size: var(--h6);
    padding: var(--padding-top-bottom-small)
  }
}
</style>
