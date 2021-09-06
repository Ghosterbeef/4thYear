<template>
  <div class="p404">
    <Title :level="1">404</Title>
    <Title :level="2">Такую страничку еще не сделали =(</Title>
    <Title :level="2">Опробуйте одну из существующих!</Title>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";

export default {
  name: "404",
  components: {Title}
}
</script>

<style scoped>
.p404 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
