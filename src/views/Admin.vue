<template>
  <div class="admin">
    <div class="progress">
      <section class="version">
        <Title :level="5">В разработке</Title>
        <List v-if="inProgress.tasks">
          <li v-for="(task, index) in inProgress.tasks" :key="index">
          <span class="name">
            <Title :level="6">{{task.name}}</Title>
            <Emphasis styled-like="danger" lang="en" is-bold is-underline v-if="task.isEpic">Epic</Emphasis>
            <Button is-circled><Icon icon="edit" size="button"/></Button>
          </span>
            <Paragraph styled-like="description">
              {{ task.description }}
            </Paragraph>
          </li>
        </List>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat";
import Title from "../components/Typography/Title";
import Paragraph from "../components/Typography/Paragraph";
import List from "../components/Typography/List";
import Emphasis from "@/components/Typography/Emphasis";
import Button from "@/components/Typography/Button";
import Icon from "@/components/Icon";

export default {
  name: "Admin",
  components: {Icon, Button, Emphasis, List, Paragraph, Title},
  data() {
    return {
      inProgress: {}
    }
  },
  created() {
    fetch('https://thyear-3e949-default-rtdb.europe-west1.firebasedatabase.app/progress/inProgress.json')
        .then(res => res.json())
        .then(json => {
          this.inProgress = json
        })
  }
}
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);

  .version {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);

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
}
</style>
