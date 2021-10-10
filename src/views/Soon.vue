<template>
  <div class="soon">
    <Title :level="3">Приложение находится в разработке!</Title>
    <Title :level="4">Следите за обновлениями.</Title>
    <Paragraph styled-like="description">Вы можете посмотреть списки готового функционала и тех, что находятся в
      разработке на соответствующей странице -
      <Link to="/progress">
        <Icon icon="progress" styled-like="link"/>
      </Link>
      .
    </Paragraph>
    <Title :level="5">Я не сижу без дела &#128521;!</Title>
    <NewLoader v-if="isLoading"/>
    <div v-if="commits.length">
      <Title :level="6">График количества комитов в день.</Title>
      <LineChartWrapper :data="transformCommits"/>
    </div>
    <div v-if="codeAdd.length || codeDelete.length">
      <Title :level="6">График количества <Emphasis styled-like="success">добавлений</Emphasis>
        и
        <Emphasis styled-like="danger">удалений</Emphasis> контента в неделю.</Title>
      <LineChartWrapper :data="transformCode" :options="codeOptions"/>
    </div>
    <Paragraph
      styled-like="description"
      v-if="commits.length || codeAdd.length || codeDelete.length"
    >
      Графики формируются на основании статистики, полученной из Github API
    </Paragraph>
    <Paragraph
      styled-like="danger"
      v-if="!isLoading && isError && (!commits.length && !codeAdd.length && !codeDelete.length)"
    >
      С графиками что то случилось! Возможно, по пути к вам на них напали маньяки.
    </Paragraph>
  </div>
</template>

<script>
import Paragraph from "@/components/Typography/Paragraph";
import Title from "@/components/Typography/Title";
import Icon from "@/components/Icon";
import Link from "@/components/Typography/Link";
import LineChartWrapper from "@/components/Charts/LineChartWrapper";
import Emphasis from "@/components/Typography/Emphasis";
import NewLoader from "@/components/NewLoader";

export default {
  name: "Soon",
  components: {NewLoader, LineChartWrapper, Link, Icon, Title, Paragraph, Emphasis},
  data() {
    return {
      isLoading: true,
      isError: false,
      commits: [],
      codeAdd: [],
      codeDelete: [],
      codeOptions: {
        scales: {
          y: {
            title: {
              text: 'Количество строк'
            }
          },
          x: {
            title: {
              text: 'Дата'
            }
          }
        },
      }
    }
  },
  async created() {
    const github = await fetch('https://api.github.com/repos/Ghosterbeef/4thYear/stats/commit_activity')
      .then(res => {
        this.isLoading = false
        return res.ok ? res.json() : Promise.reject(res)
      })
      .catch(() => {
        this.isError = true
      })
    const github1 = await fetch('https://api.github.com/repos/Ghosterbeef/4thYear/stats/code_frequency')
      .then(res => {
        this.isLoading = false
        return res.ok ? res.json() : Promise.reject(res)
      })
      .catch(() => {
        this.isError = true
      })

    if (github?.length) {
      const firstWeek = github.findIndex(i => i.total !== 0)
      github.splice(0, firstWeek)
      const date = new Date(github[0].week * 1000)
      github.forEach((item, i) => {
        this.commits.push(...item.days.map((d, j) => {
          if ((i * 7 + j) * 86400000 + Date.parse(date) <= Date.now()) {
            const temp = new Date(Date.parse(date) + (i * 7 + j) * 86400000)
            return {
              amount: d,
              date: this.getNormalDate(temp)
            }
          }
        }))
      })
    }
    if (github1?.length) {
      github1.forEach((item) => {
        const startDate = new Date(item[0] * 1000)
        const endDate = new Date((item[0] * 1000) + 7 * 86400000)
        this.codeAdd.push({
          code: item[1],
          date: `${this.getNormalDate(startDate)}-${this.getNormalDate(endDate)}`
        })
        this.codeDelete.push({
          code: item[2],
          date: `${this.getNormalDate(startDate)}-${this.getNormalDate(endDate)}`
        })
      })
    }
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
  },
  methods: {
    getNormalDate: function (date) {
      const day = date.getDate()
      const month = date.getMonth() + 1
      return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}`
    }
  }
}
</script>

<style scoped lang="scss">
.soon {
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);
}
</style>
