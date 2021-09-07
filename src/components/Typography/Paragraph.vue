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
        return ["default", "description", "warning", "danger", "success"].includes(value)
      },
      default: "default"
    }
  }
}
</script>

<style scoped lang="scss">
.paragraph {
  font-size: var(--p);
  font-weight: 400;
  margin-top: var(--gap-small);
  padding: var(--padding-top-bottom-small) var(--padding-right-left);
  border-radius: var(--border-radius-small);
  position: relative;
  background-color: $default-background;
  color: $default-font;

  &.description {
    color: $description-font;
    background-color: $description-background;
  }

  &.warning, &.danger, &.success {
    &::before {
      position: absolute;
      content: "";
      height: 80%;
      left: calc(var(--padding-right-left) / 2);
      border-left: calc(var(--padding-right-left) / 3) solid transparent;
      top: 10%;
    }
  }

  &.warning {
    color: $warning-font;
    background-color: $warning-background;

    &::before {
      border-color: $warning-font;
    }
  }

  &.danger {
    color: $danger-font;
    background-color: $danger-background;

    &::before {
      border-color: $danger-font;
    }
  }

  &.success {
    color: $success-font;
    background-color: $success-background;

    &::before {
      border-color: $success-font;
    }
  }
}
</style>
