<template>
  <div class="project-card">
    <img :src="require(`../assets/img/projects/${projectInfo.image}`)" :alt="projectInfo.image">
    <div class="info">
      <Title
        :level="5"
        is-centered
      >
        {{projectInfo.title}}
        <Emphasis
        is-bold
        :styled-like="projectInfo.tag.type"
        >
        {{projectInfo.tag.text}}
        </Emphasis>
      </Title>
      <Paragraph text-align="justify" is-zero-padding>{{ projectInfo.description }}</Paragraph>
      <div>
        <Emphasis
          styled-like="success"
          is-bold
          lang="en"
          v-for="emphasis in projectInfo.emphasis"
        >
          {{ emphasis }}
        </Emphasis>
      </div>
      <Link :href="projectInfo.link">Открыть</Link>
    </div>
  </div>
</template>

<script>
import Title from "./Typography/Title";
import Paragraph from "./Typography/Paragraph";
import Emphasis from "./Typography/Emphasis";
import Link from "./Typography/Link";

export default {
  name: "ProjectCard",
  components: {Link, Emphasis, Paragraph, Title},
  props: {
    projectInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.project-card {
  background-color: var(--default-background);
  max-width: 500px;
  min-width: 220px;
  padding: var(--padding-universal) 0;
  border-radius: var(--border-radius-big);
  box-shadow: 0 0 15px 1px black;

  img {
    max-width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
    padding: var(--padding-universal)
  }
}
</style>
