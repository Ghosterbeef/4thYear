<template>
  <h1 v-if="level === 1" :class="[lang,color, {'centered': isCentered}]">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2" :class="[lang,color, {'centered': isCentered}]">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3" :class="[lang,color, {'centered': isCentered}]">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4" :class="[lang, color, {'centered': isCentered}]">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5" :class="[lang, color, {'centered': isCentered}]">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6" :class="[lang, color, {'centered': isCentered}]">
    <slot></slot>
  </h6>
</template>

<script>

export default {
  name: "Title",
  props: {
    level: {
      validator(value) {
        return [1, 2, 3, 4, 5, 6].includes(value)
      },
      default: 1
    },
    lang: {
      validator(value) {
        return ["ru", "en"].includes(value)
      },
      default: "ru"
    },
    color: {
      validator(value) {
        return ["dark", "light"].includes(value)
      },
      default: "dark"
    },
    isCentered: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;

  &.en {
    font-family: 'Poppins', sans-serif;
  }

  &.dark{
    color: #333333;
  }

  &.light{
    color: whitesmoke;
  }

  &.centered{
    text-align: center;
  }
}


h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}
</style>
