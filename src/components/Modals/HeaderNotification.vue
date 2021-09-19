<template>
  <div class="header_notification" :class="[options.styledLike, {'pointer': this.options.redirect}]" @click="redirect"
       v-if="this.options.text">
    <div class="icon">
      <Icon size="fixed" :icon="iconName" :styled-like="options.styledLike"/>
    </div>
    {{ options.text }}
    <button class="close" @click.stop="$store.commit(options.action)">
      &#215;
    </button>
  </div>
</template>

<script>
import Icon from "../Icon";

export default {
  name: "HeaderNotification",
  components: {Icon},
  computed: {
    options: function () {
      return this.$store.getters.getHeaderAlert
    },
    iconName: function () {
      if (!this.options.styledLike) return
      const temp = this.options.styledLike.split('')
      temp[0] = temp[0].toUpperCase()
      return `shield${temp.join('')}`
    },
  },
  methods: {
    redirect: function () {
      if (!this.options.redirect) return
      this.$router.push(this.options.redirect)
    }
  }

}
</script>

<style scoped lang="scss">
.header_notification {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  max-width: 1200px;
  height: max-content;
  min-width: min-content;
  margin: 0 auto;
  font-size: var(--p);
  gap: var(--gap-small);
  padding: var(--padding-top-bottom-big) var(--padding-right-left);

  &.pointer {
    cursor: pointer;
  }

  &.warning {
    color: var(--warning-font);
    background-color: var(--warning-background);
  }

  &.danger {
    color: var(--danger-font);
    background-color: var(--danger-background);
  }

  &.success {
    color: var(--success-font);
    background-color: var(--success-background);
  }

  &.description {
    color: var(--description-font);
    background-color: var(--description-background);
  }

  .icon {
    align-self: flex-start;
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-left: auto;
    align-self: flex-start;
    border: none;
    font-size: 30px;
    color: var(--danger-font);
    background-color: transparent;
    border-radius: var(--border-radius-small);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--danger-background)
    }
  }
}

@media (max-width: $sm) {
  .header_notification{
    margin: 0 auto;
    width: 97%;
  }

}
</style>
