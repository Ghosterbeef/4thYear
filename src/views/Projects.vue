<template>
  <div class="projects">
    <Title :level="4" color="dark">Другие проекты</Title>
    <div class="card_wrapper">
      <ProjectCard v-for="project in projects" :key="project.title" :project-info="project"/>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Typography/Title";
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Projects",
  components: {ProjectCard, Title},
  data() {
    return {
      projects: [
        {
          title: 'AmfyStructures',
          tag: {
            text: 'Завершен',
            type: 'success'
          },
          description: `Одностраничное веб - приложение,
           созданное Ghosterbeef,
            для изучения пользовательских структур для хранения
             данных и способов их визуализации в языке javascript.`,
          image: 'amfystructures.jpg',
          emphasis: [
            'Vue.js'
          ],
          link: 'https://amfystructures.herokuapp.com/'
        },
        {
          title: 'WidgetPortfolio',
          tag: {
            text: 'Заморожен',
            type: 'danger'
          },
          description: `Попытка создать приложение,
           позволяющее пользователю расширять функционал по мере необходимости.
            Проект временно заморожен.`,
          image: 'widgetportfolio.jpg',
          emphasis: [
            'Vue.js'
          ],
          link: 'https://widgetportfolio.herokuapp.com/'
        },
        {
          title: 'Агрегатор',
          tag: {
            text: 'В разработке',
            type: 'warning'
          },
          description: `Дипломный проект,
           разрабатываемый Ghosterbeef (Front-end + Design) и ByAmfy (Back-end + Design).
            Проект предполагает реализацию сервиса - агрегатора, включающего в себя интернет-магазин игрушек и сервис по бронированию размещения в гостиннице.`,
          image: 'agregator.jpg',
          emphasis: [
            'Vue.js'
          ],
          link: 'https://vvv-holding.web.app/'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);

  .card_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap-big);
  }
}
</style>
