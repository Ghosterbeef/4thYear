<template>
  <div class="soon">
    <Title :level="2">Приложение находится в разработке</Title>
    <Title :level="3">Следите за обновлениями</Title>
    <Paragraph styled-like="description">Вы можете посмотреть списки готового функционала и тех, что находятся в
      разработке на соответствующей странице -
      <Link to="/progress">
        <Icon icon="progress" styled-like="link"/>
      </Link>
    </Paragraph>
    <Title :level="4">Я не сижу без дела =) Поверьте этому графику!</Title>
    <LineChart :chart-data="transformData(commits)" :options="chartOptions"/>
  </div>
</template>

<script>
import Paragraph from "../components/Typography/Paragraph";
import Title from "../components/Typography/Title";
import Icon from "../components/Icon";
import Link from "../components/Typography/Link";
import {LineChart} from "vue-chart-3";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables)
export default {
  name: "Soon",
  components: {Link, Icon, Title, Paragraph, LineChart},
  data() {
    return {
      commits: [],
      active: [],
      confirmed: [],
      recovered: [],
      deaths: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async created() {
    const github = await fetch('https://api.github.com/repos/Ghosterbeef/4thYear/stats/commit_activity').then(res => res.json())
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
  },
  methods: {
    transformData: function (array) {
      const temp = array.filter(item => item !== undefined)
      return {
        labels: [...temp.map(element => element.date)],
        datasets: [{
          label: "Коммиты",
          data: temp.map(element => element.amount),
          fill: true,
          backgroundColor: ['rgba(196,243,216,0.5)'],
          pointBackgroundColor: ['#27b062'],
          tension: 0.2
        }]
      }
    }
  }
}
</script>

<style scoped>
.soon {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
}
</style>
