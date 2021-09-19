<template>
  <div>
    <div class="accordion__activator" :class="{'active':show}" v-if="$slots.activator" @click="show = !show">
      <span class="controls">
        <Icon icon="expand" size="small" :styled-like="color"/>
      </span>
      <slot name="activator"></slot>
    </div>
    <div v-collapse="show">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import collapse from "@/directives/element";
import Icon from "./Icon";

export default {
  name: "Accordion",
  components: {Icon},
  directives: {
    collapse: collapse
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      validator(val) {
        return ["dark", "link"].includes(val)
      },
      default: "link"
    }
  },
  data() {
    return {
      show: this.$props.isActive,
    }
  },
  watch: {
    isActive: {
      immediate: true,
      handler(val) {
        this.show = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion__activator {
  position: relative;
  perspective: 100000px;
  cursor: pointer;

  & .controls {
    position: absolute;
    top: 50%;
    right: var(--gap-small);
    height: var(--icon-size-small);
    transform: translateY(-45%);
    transition: all 0.3s ease;
    z-index: 100;
  }

  &.active {
    & .controls {
      transform: translateY(-55%) rotateX(180deg);
    }
  }
}
</style>
