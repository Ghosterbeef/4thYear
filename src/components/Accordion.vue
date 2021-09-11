<template>
  <div class="accordion">
    <div class="accordion__activator" :class="{'active':show}" v-if="$slots.activator" @click="show = !show">
      <span class="controls">
        <Icon icon="expand" styled-like="warning"/>
      </span>
      <slot name="activator"></slot>
    </div>
    <div class="accordion__body" ref="accordion__body" v-collapse="show">
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
  cursor: pointer;
  perspective: 100000px;

  & .controls {
    height: var(--icon-size);
    background-color: $bg-sidebar;
    z-index: 100;
    position: absolute;
    right: var(--gap-small);
    top: 50%;
    transform: translateY(-45%);
    transition: all 0.3s ease;
  }

  &.active {
    & .controls {
      transform: translateY(-55%) rotateX(180deg);
    }
  }
}
</style>
