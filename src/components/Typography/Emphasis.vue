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
    color: $success-font;
    background-color: $success-background;
  }

  &.warning {
    color: $warning-font;
    background-color: $warning-background;
  }

  &.danger {
    color: $danger-font;
    background-color: $danger-background;
  }

  &.description {
    color: $description-font;
    background-color: $description-background;
  }
}
</style>
