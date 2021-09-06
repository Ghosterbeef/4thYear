<template>
  <p class="paragraph" :class="[styledLike]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    styledLike: {
      validator(value) {
        return ["default", "description", "warning", "danger", "success"].includes(value)
      },
      default: "default"
    }
  }
}
</script>

<style scoped lang="scss">
.paragraph {
  font-size: var(--p);
  font-weight: 400;
  margin-top: 5px;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;
  background-color: white;
  color: #2c3e50;

  &.description {
    color: #486491;
    background-color: #e7ecf3;
  }

  &.warning {
    color: gold;
    background-color: lemonchiffon;

    &::before {
      position: absolute;
      content: "";
      border-left: 5px solid gold;
      height: 80%;
      left: 4px;
      top: 10%;
    }
  }

  &.danger {
    color: crimson;
    background-color: mistyrose;

    &::before {
      position: absolute;
      content: "";
      border-left: 5px solid crimson;
      height: 80%;
      left: 4px;
      top: 10%;
    }
  }

  &.success {
    color: #27b062;
    background-color: #c4f3d8;

    &::before {
      position: absolute;
      content: "";
      border-left: 5px solid #27b062;
      height: 80%;
      left: 4px;
      top: 10%;
    }
  }
}
</style>
