<template>
  <a :href="href" v-if="href" :class="[color, {'hasIcon':hasIcon}] ">
    <slot></slot>
  </a>
  <router-link :to="to" v-else-if="to" :class="[color, {'hasIcon':hasIcon}] ">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: String,
    to: String,
    color: {
      validator(value) {
        return ["dark", "light"].includes(value)
      },
      default: "light"
    },
    hasIcon: Boolean,
  }
}
</script>

<style scoped lang="scss">

a {
  text-decoration: underline;
  font-weight: bold;
  font-size: 18px;

  &.hasIcon {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &.light {
    color: $link-light;
  }

  &.dark {
    color: $link-dark;
  }

  &.router-link-exact-active {
  }
}
</style>
