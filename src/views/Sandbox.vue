<template>
  <div>
    <Title lang="en" :level="2" is-centered color="dark">Sandbox</Title>
    <Paragraph styled-like="warning">Данная страница предназначена исключительно для разработки</Paragraph>
    <div class="row">
      <Paragraph>Эмулировать загрузку</Paragraph>
      <VueToggles
        :value="isLoading"
        width="50"
        checked-text="on"
        unchecked-text="off"
        dot-color="gold"
        @click="isLoading = !isLoading"
      />
    </div>
    <NewLoader v-if="isLoading"/>
  </div>
</template>

<script>
import Paragraph from "@/components/Typography/Paragraph";
import Title from "@/components/Typography/Title";
import VueToggles from "vue-toggles/src/VueToggles";
import NewLoader from "@/components/NewLoader";

export default {
  name: "Sandbox",
  components: {NewLoader, Title, Paragraph, VueToggles},
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  gap: var(--gap-big);
  height: max-content;
}
</style>
