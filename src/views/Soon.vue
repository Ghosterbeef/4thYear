<template>
  <div class="soon">
    <Title :level="2">Приложение находится в разработке</Title>
    <Title :level="3">Следите за обновлениями</Title>
    <Title :level="4">Вы можете посмотреть списки готового функционала и тех, что находятся в разработке на соответствующей странице</Title>
    <Title :level="5">Если она не в разработке =)</Title>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";
export default {
  name: "Soon",
  components: {Title}
}
</script>

<style scoped>
.soon{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
}
</style>
