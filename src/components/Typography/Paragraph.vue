<template>
  <p class="paragraph" :class="[styledLike, textAlign, {'zero-padding': isZeroPadding}]">
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
    },
    textAlign: {
      validator(value) {
        return ["left", "center", "justify"].includes(value)
      },
      default: "left"
    },
    isZeroPadding: {
      type: Boolean,
      default: false
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
  background-color: var(--default-background);
  color: var(--default-font);

  &.description {
    color: var(--description-font);
    background-color: var(--description-background);
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
    color: var(--warning-font);
    background-color: var(--warning-background);

    &::before {
      background-color: var(--warning-font);
    }
  }

  &.danger {
    color: var(--danger-font);
    background-color: var(--danger-background);

    &::before {
      background-color: var(--danger-font);
    }
  }

  &.success {
    color: var(--success-font);
    background-color: var(--success-background);

    &::before {
      background-color: var(--success-font);
    }
  }

  &.left {
    text-align: left;
  }

  &.center {
    text-align: center;
  }

  &.justify {
    text-align: justify;
  }

  &.zero-padding {
    padding: 0 !important;
  }
}
</style>
