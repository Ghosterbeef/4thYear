<template>
  <div v-if="isError">
    <Paragraph v-if="isError" styled-like="danger">При загрузке данных произошла ошибка!</Paragraph>
    <Paragraph v-if="isError" styled-like="danger">Возможно это связано с политикой Google по отношению к Крыму.
    </Paragraph>
    <Paragraph v-if="isError" styled-like="danger">Включите vpn и перезагрузите страницу.</Paragraph>
  </div>
  <NewLoader v-if="$store.getters.isLoading && !isError"/>
  <div class="progress" v-else-if="!isError">
    <section class="version">
      <Accordion color="dark">
        <template #activator>
          <Title :level="5">В разработке</Title>
        </template>
        <List v-if="progressData.inProgress">
          <li v-for="(task, index) in progressData.inProgress.tasks" :key="index">
          <span class="name">
            <Title :level="6">{{task.name}}&nbsp;&nbsp;</Title>
            <Emphasis styled-like="danger" lang="en" is-bold is-underline v-if="task.isEpic">Epic</Emphasis>
          </span>
            <Paragraph styled-like="description">
              {{ task.description }}
            </Paragraph>
          </li>
        </List>
      </Accordion>
    </section>
    <div v-if="progressData.versions">
      <section class="version" v-for="(version,i) in reversedVersions" :key="version.value"
               @click="setPatchNoteChecked(version.value)">
        <Accordion color="dark">
          <template #activator>
            <Title :level="5">
              {{version.value}}
              <Emphasis
              styled-like="success"
              v-if="version.value === $store.getters.getVersion"
              >
              Текущая версия
              </Emphasis>
              <Emphasis
              styled-like="danger"
              v-else-if="i === 0"
              >
              Ожидается
              </Emphasis>
            </Title>
          </template>
          <Title :level="5">Реализовано</Title>
          <List>
            <li v-for="(task, index) in version.tasks" :key="index">
          <span class="name">
            <Title :level="6">{{task.name}}</Title>
          </span>
              <div v-if="task.descriptions">
                <Paragraph v-for="(description, index) in task.descriptions" :key="index"
                           :styled-like="description.type">
                  {{ description.text }}
                </Paragraph>
              </div>
            </li>
          </List>
        </Accordion>
      </section>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Typography/Title";
import Paragraph from "@/components/Typography/Paragraph";
import List from "@/components/Typography/List";
import Emphasis from "@/components/Typography/Emphasis";
import Accordion from "@/components/Accordion";
import NewLoader from "@/components/NewLoader";

export default {
  name: "Progress",
  components: {NewLoader, Accordion, Emphasis, List, Paragraph, Title},
  data() {
    return {
      progressData: {},
      isError: false
    }
  },
  created() {
    this.$store.commit("setIsLoading", {value: true});
    fetch('https://thyear-3e949-default-rtdb.europe-west1.firebasedatabase.app/progress.json')
      .then(res => res.json())
      .then(json => {
        this.progressData = json
      }).then(() => this.$store.commit("setIsLoading", {value: false}))
      .catch(
        () => {
          fetch('https://ghosterbeefproxy.herokuapp.com/fetch/https://thyear-3e949-default-rtdb.europe-west1.firebasedatabase.app/progress.json')
            .then(res => res.json())
            .then(json => {
              this.progressData = json
            }).then(() => this.$store.commit("setIsLoading", {value: false}))
            .catch(
              () => {
                this.isError = true
                this.$store.commit("setIsLoading", {value: false})
              }
            )
        })
  },
  computed: {
    reversedVersions: function () {
      return this.progressData.versions.reverse()
    }
  },
  methods: {
    setPatchNoteChecked: function (value) {
      if (value !== this.$store.getters.getVersion) return
      this.$store.commit('setCheckedVersion')
    }
  }
}
</script>

<style scoped lang="scss">
.progress {
  .version {
    display: flex;
    flex-direction: column;

    li {
      .name {
        position: relative;
        display: flex;
        padding-left: 25px;

        &::before {
          position: absolute;
          top: 8px;
          left: 5px;
          width: 8px;
          height: 8px;
          content: "";
          border-radius: 50%;
          background: var(--title-font);
        }
      }
    }
  }
}
</style>
