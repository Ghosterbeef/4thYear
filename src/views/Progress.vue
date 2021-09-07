<template>
  <div class="progress">
    <section class="version">
      <Title :level="5">В разработке</Title>
      <List v-if="progressData.inProgress">
        <li v-for="(task, index) in progressData.inProgress.tasks" :key="index">
          <span class="name">
            <Title :level="6">{{task.name}}</Title>
            <Emphasis styled-like="danger" lang="en" is-bold is-underline v-if="task.isEpic">Epic</Emphasis>
          </span>
          <Paragraph styled-like="description">
            {{ task.description }}
          </Paragraph>
        </li>
      </List>
    </section>
    <div v-if="progressData.versions">
      <section class="version" v-for="version in reversedVersions" :key="version.value">
        <Title :level="5">{{version.value}}</Title>
        <Title :level="5">Реализовано</Title>
        <List>
          <li v-for="(task, index) in version.tasks" :key="index">
          <span class="name">
            <Title :level="6">{{task.name}}</Title>
          </span>
            <div v-if="task.descriptions">
              <Paragraph v-for="(description, index) in task.descriptions" :key="index" :styled-like="description.type">
                {{ description.text }}
              </Paragraph>
            </div>
          </li>
        </List>
      </section>
    </div>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";
import Paragraph from "../components/Typography/Paragraph";
import List from "../components/Typography/List";
import Emphasis from "@/components/Typography/Emphasis";

export default {
  name: "Progress",
  components: {Emphasis, List, Paragraph, Title},
  data() {
    return {
      progressData: {}
    }
  },
  created() {
    fetch('https://thyear-3e949-default-rtdb.europe-west1.firebasedatabase.app/progress.json')
        .then(res => res.json())
        .then(json => {
          this.progressData = json
        })
  },
  computed:{
    reversedVersions: function () {
      return this.progressData.versions.reverse()
    }
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
