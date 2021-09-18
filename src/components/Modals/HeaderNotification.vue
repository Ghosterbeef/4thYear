<template>
  <div class="header_notification">
    <Paragraph styled-like="warning">
      {{ $store.getters.getHeaderAlert.text }}
    </Paragraph>
    <button class="close" @click="$store.commit($store.getters.getHeaderAlert.action)">
      &#215;
    </button>
  </div>
</template>

<script>
import Paragraph from "@/components/Typography/Paragraph";

export default {
  name: "HeaderNotification",
  components: {Paragraph}
}
</script>

<style scoped lang="scss">
.header_notification {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--gap-small);
  padding: var(--padding-right-left);

  .close {
    height: 100%;
    max-height: var(--icon-size);
    min-width: var(--icon-size);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: var(--danger-font);
    background-color: var(--danger-background);
    border: none;
    border-radius: var(--border-radius-small);
    cursor: pointer;
  }
}
</style>
