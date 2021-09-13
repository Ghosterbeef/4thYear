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
      height: calc(100% - var(--padding-top-bottom-small));
      left: calc(var(--padding-universal) / 3);
      width: calc(var(--padding-universal) / 5);
      background-color: transparent;
      border-radius: var(--border-radius-small);
      top: calc(var(--padding-top-bottom-small) / 2);
    }
  }

  &.warning {
    color: $warning-font;
    background-color: $warning-background;

    &::before {
      background-color: $warning-font;
    }
  }

  &.danger {
    color: $danger-font;
    background-color: $danger-background;

    &::before {
      background-color: $danger-font;
    }
  }

  &.success {
    color: $success-font;
    background-color: $success-background;

    &::before {
      background-color: $success-font;
    }
  }
}
</style>
