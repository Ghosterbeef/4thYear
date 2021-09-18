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
  font-size: var(--a);

  &.hasIcon {
    display: flex;
    align-items: center;
    gap: var(--gap-big);
  }

  &.light {
    color: var(--link-light);

    &.router-link-exact-active {
      color: var(--link-light-action);

      ::v-deep(path){
        fill: var(--link-light-action);
      }
    }
  }

  &.dark {
    color: var(--link-dark);

    &.router-link-exact-active {
      color: var(--link-dark-action);

      ::v-deep(path){
        fill: var(--link-dark-action);
      }
    }
  }
}
</style>
