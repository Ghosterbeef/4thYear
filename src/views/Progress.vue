<template>
  <div class="progress">
    <span class="version">
      <Title :level="5">0.0.15</Title>
      <Title :level="5">Реализовано</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Страница прогресса</Title>
          </span>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Боковое меню</Title>
          </span>
          <Paragraph styled-like="description">
            Функционал требует доработки
          </Paragraph>
        </li>
      </List>
    </span>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";
import Paragraph from "../components/Typography/Paragraph";
import List from "../components/Typography/List";

export default {
  name: "Progress",
  components: {List, Paragraph, Title}
}
</script>

<style scoped lang="scss">
.progress {
  width: 100%;

  li {
    .name {
      margin-left: 25px;
      display: flex;
      position: relative;

      &::before {
        position: absolute;
        top: 8px;
        left: - 21px;
        display: block;
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $bg-sidebar;
      }
    }
  }
}
</style>
