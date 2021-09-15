<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('clickOutside')">
      <div class="alert" :class="[styledLike]">
        <slot name="icon">
        </slot>
        <div class="wrapper">
          <span>
            <h3>
            <slot name="title"></slot>
              </h3>
            </span>
          <slot name="default"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import Icon from "@/components/Icon";
import Emphasis from "@/components/Typography/Emphasis";

export default {
  name: "Alert",
  emits: [
    'clickOutside'
  ],
  components: {Emphasis, Icon},
  created() {
    window.addEventListener('keydown', this.busted)
  },
  props: {
    styledLike: {
      type: String,
      validator(val) {
        return ["default", "success", "warning", "danger", "description"].includes(val)
      },
      default: "default"
    },
  },
  methods: {
    busted: function (e) {
      if (e.key === 'F12') {
        this.$router.push('/')
      }
      return null
    }
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.busted)
  }
}
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: $backdrop-color;
  z-index: 1001;
  cursor: pointer;
  padding: var(--gap-small);

  .alert {
    cursor: default;
    display: flex;
    gap: var(--gap-small);
    margin: 0 auto;
    background-color: $default-background;
    padding: var(--padding-universal);
    border-radius: var(--border-radius-small);

    .wrapper {
      display: flex;
      flex-direction: column;

      span {
        display: inline-block;
        padding: 0 var(--padding-right-left);
      }
    }

    &.success {
      border: 2px solid $success-font;

      h3 {
        color: $success-font;
      }
    }

    &.warning {
      border: 2px solid $warning-font;

      h3 {
        color: $warning-font;
      }
    }

    &.danger {
      border: 2px solid $danger-font;

      h3 {
        color: $danger-font;
      }
    }

    &.description {
      border: 2px solid $description-font;

      h3 {
        color: $description-font;
      }
    }
  }
}
</style>
