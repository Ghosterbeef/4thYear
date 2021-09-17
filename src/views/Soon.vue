<template>
  <div class="soon">
    <Title :level="3">Приложение находится в разработке!</Title>
    <Title :level="4">Следите за обновлениями.</Title>
    <Paragraph styled-like="description">Вы можете посмотреть списки готового функционала и тех, что находятся в
      разработке на соответствующей странице -
      <Link to="/progress">
        <Icon icon="progress" styled-like="link"/>
      </Link>.
    </Paragraph>
    <Title :level="5">Я не сижу без дела =) Поверьте этим графикам:</Title>
    <Title :level="6">График количества комитов в день.</Title>
    <LineChartWrapper :data="transformCommits"/>
    <Title :level="6">График количества добавлений и удалений контента в неделю.</Title>
    <LineChartWrapper :data="transformCode" :options="codeOptions"/>
  </div>
</template>

<script>
import Paragraph from "../components/Typography/Paragraph";
import Title from "../components/Typography/Title";
import Icon from "../components/Icon";
import Link from "../components/Typography/Link";
import LineChartWrapper from "@/components/Charts/LineChartWrapper";

export default {
  name: "Soon",
  components: {LineChartWrapper, Link, Icon, Title, Paragraph},
  data() {
    return {
      commits: [],
      codeAdd: [],
      codeDelete: [],
      codeOptions: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Количество строк'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Дата'
            }
          }
        },
      }
    }
  },
  async created() {
    const github = await fetch('https://api.github.com/repos/Ghosterbeef/4thYear/stats/commit_activity').then(res => res.json())
    const github1 = await fetch('https://api.github.com/repos/Ghosterbeef/4thYear/stats/code_frequency').then(res => res.json())
    console.log(github1)
    const firstWeek = github.findIndex(i => i.total !== 0)
    github.splice(0, firstWeek)
    const date = new Date(github[0].week * 1000)
    github.forEach((item, i) => {
      this.commits.push(...item.days.map((d, j) => {
        if ((i * 7 + j) * 24 * 60 * 60 * 1000 + Date.parse(date) <= Date.now())
          return {
            amount: d,
            date: i * 7 + j + date.getDate()
          }
      }))
    })
    github1.forEach((item) => {
      const startDate = new Date(item[0] * 1000)
      const endDate = new Date((item[0] * 1000) + 7 * 24 * 60 * 60 * 1000)
      this.codeAdd.push({
        code: item[1],
        date: `${startDate.getDate()}/${startDate.getMonth() + 1}-${endDate.getDate()}/${endDate.getMonth() + 1}`
      })
      this.codeDelete.push({
        code: item[2],
        date: `${startDate.getDate()}/${startDate.getMonth() + 1}-${endDate.getDate()}/${endDate.getMonth() + 1}`
      })
    })
  },
  computed: {
    transformCommits: function () {
      const temp = this.commits.filter(item => item !== undefined)
      return {
        labels: [...temp.map(element => element.date)],
        datasets: [{
          label: "Коммиты",
          data: temp.map(element => element.amount),
          borderColor: ['rgb(160,239,201)'],
          backgroundColor: ['rgba(196,243,216,0.5)'],
          pointBackgroundColor: ['#27b062'],
          tension: 0.2,
          fill: true
        },]
      }
    },
    transformCode: function () {
      return {
        labels: [...this.codeAdd.map(element => element.date)],
        datasets: [
          {
            label: "Добавления",
            data: this.codeAdd.map(element => element.code),
            borderColor: ['rgb(160,239,201)'],
            pointBackgroundColor: ['#27b062'],
            tension: 0.2
          },
          {
            label: "Удаления",
            data: this.codeDelete.map(element => Math.abs(element.code)),
            borderColor: ['rgb(255,181,177)'],
            pointBackgroundColor: ['crimson'],
            tension: 0.2
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.soon {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: stretch;
}
</style>
