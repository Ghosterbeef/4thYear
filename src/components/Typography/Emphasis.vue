<template>
  <span :class="
  [
   lang,
   {'italic': isItalic},
   {'bold': isBold},
   {'underline': isUnderline},
   styledLike
  ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "Emphasis",
  props: {
    lang: {
      validator(val) {
        return ["ru", "en"].includes(val)
      },
      default: "ru"
    },
    isBold: {
      type: Boolean,
      default: false
    },
    isItalic: {
      type: Boolean,
      default: false
    },
    isUnderline: {
      type: Boolean,
      default: false
    },
    styledLike: {
      type: String,
      validator(val) {
        return ["default", "success", "warning", "danger", "description"].includes(val)
      },
      default: "default"
    }
  }
}
</script>

<style scoped lang="scss">
span {
  padding: 0 calc(var(--padding-right-left) / 4);
  border-radius: var(--border-radius-small);

  &.en {
    font-family: 'Poppins', sans-serif;
  }

  &.italic {
    font-style: italic;
  }

  &.underline {
    text-decoration: underline;
  }

  &.bold {
    font-weight: bold;
  }

  &.success {
    color: var(--success-font);
    background-color: var(--success-background);
  }

  &.warning {
    color: var(--warning-font);
    background-color: var(--warning-background);
  }

  &.danger {
    color: var(--danger-font);
    background-color: var(--danger-background);
  }

  &.description {
    color: var(--description-font);
    background-color: var(--description-background);
  }
}
</style>
