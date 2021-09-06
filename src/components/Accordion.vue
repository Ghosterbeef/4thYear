<template>
  <div class="accordion">
    <div class="accordion__activator" v-if="$slots.activator" @click="show = !show">
      <slot name="activator"></slot>
    </div>
    <div class="accordion__body" ref="accordion__body" v-collapse="show">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import collapse from "@/directives/element";

export default {
  name: "Accordion",
  directives:{
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
  watch:{
    isActive:{
      immediate: true,
      handler (val){
        console.log(val)
        this.show = val
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
