<template>
  <p class="paragraph" :class="[styledLike]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    styledLike: {
      validator(value) {
        return ["default", "description", "warning", "danger"].includes(value)
      },
      default: "default"
    }
  }
}
</script>

<style scoped lang="scss">
.paragraph {
  font-size: var(--p);
  margin-top: 5px;

  &.description{
    padding: 10px 0;
    border-radius: 4px;
    color: #486491;
    background-color: #e7ecf3;
  }
}
</style>
