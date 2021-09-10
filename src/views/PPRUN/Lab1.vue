<template>
  <div class="lab1">
    <header>
      <Title :level="3">Лабораторная работа №1</Title>
      <Title :level="5">Цель работы</Title>
      <Paragraph>
        Изучить и исследовать методы принятия решений при отсутствии какой либо информации
        о связях принимаемых решений и исходов.
      </Paragraph>
    </header>
    <main>
      <Title :level="5">Данные по варианту</Title>
      <Title :level="6">Матрица прибыли/потерь</Title>
      <Matrix v-model="matrix" is-editable/>
      <Title :level="6">Матрица вероятностей</Title>
      <Matrix v-model="probability" is-editable is-one-row/>
      <Paragraph>Метод Вальда
        <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ valdaProfit }}</Emphasis>
      </Paragraph>
      <Paragraph>Метод Вальда
        <Emphasis styled-like="danger" is-bold>Убытки</Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ valdaLosses }}</Emphasis>
      </Paragraph>
      <Paragraph>Метод Байеса-Лапласа
        <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ baesaLaplasaProfit }}</Emphasis>
      </Paragraph>
      <Paragraph>Метод Байеса-Лапласа
        <Emphasis styled-like="danger" is-bold>Убытки</Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ baesaLaplasaLosses }}</Emphasis>
      </Paragraph>
      <Paragraph>Метод Сэвиджа
        <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ Savage }}</Emphasis>
      </Paragraph>
      <Paragraph>Метод Гарвика
        <Emphasis :styled-like="optimism > 0.5 ? 'success' : 'danger'" is-bold>
          {{ optimism > 0.5 ? 'Приыль' : 'Убытки' }}
        </Emphasis>
        :
        <Emphasis styled-like="description" is-bold>{{ Gurvic }}</Emphasis>
      </Paragraph>
      <Code>
        <pre>
<Emphasis is-bold styled-like="warning">isValid()</Emphasis> {
    if (this.matrix.length) {
        if (this.matrix.length)
            return true
    }
}

<Emphasis is-bold styled-like="warning">minInRow</Emphasis>: function() {
    return this.matrix.map(row => Math.min(...row))
}

<Emphasis is-bold styled-like="warning">maxInRow</Emphasis>: function() {
    return this.matrix.map(row => Math.max(...row))
}

<Emphasis is-bold styled-like="warning">valdaProfit</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    const min = this.minInRow
    return `a${min.indexOf(Math.max(...min)) + 1}`
}

<Emphasis is-bold styled-like="warning">valdaLosses</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    const max = this.maxInRow
    return `a${max.indexOf(Math.min(...max)) + 1}`
}

<Emphasis is-bold styled-like="warning">baesaLaplasaTemp</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    return this.matrix
        .map((row) => {
            return row.reduce((prev, val, i) => {
                return prev + val * this.probability[i]
            }, 0)
        })
}

<Emphasis is-bold styled-like="warning">baesaLaplasaProfit</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    const temp = this.baesaLaplasaTemp
    return `a${temp.indexOf(Math.max(...temp)) + 1}`
}

<Emphasis is-bold styled-like="warning">baesaLaplasaLosses</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    const temp = this.baesaLaplasaTemp
    return `a${temp.indexOf(Math.min(...temp)) + 1}`
}

<Emphasis is-bold styled-like="warning">Savage</Emphasis>: function() {
    if (!this.isValid) return "NaN"

    function transpose(matrix) {
        return matrix[0]
            .map((col, i) => matrix
                .map(row => row[i]))
    }

    const transposed = transpose(this.matrix)
    const max = transposed.map(row => Math.max(...row))
    const temp = transpose(transposed
            .map((row, i) => {
                return row
                    .map(item => max[i] - item)
            }))
        .map(row => Math.max(...row))
    return `a${temp.indexOf(Math.min(...temp)) + 1}`

}

<Emphasis is-bold styled-like="warning">Gurvic</Emphasis>: function() {
    if (!this.isValid) return "NaN"
    const min = this.minInRow
    const max = this.maxInRow
    const temp = min.map((element, i) => element + max[i] * this.optimism)
    return `a${temp.indexOf(Math.max(...temp)) + 1}`
}
        </pre>
      </Code>
    </main>
  </div>
</template>


<script>
import Title from "@/components/Typography/Title";
import Paragraph from "@/components/Typography/Paragraph";
import Matrix from "@/components/Matrix";
import Emphasis from "@/components/Typography/Emphasis";
import Code from "@/components/Typography/Code";

export default {
  name: 'PPRUNLab1',
  components: {Code, Emphasis, Matrix, Paragraph, Title},
  data() {
    return {
      matrix: [
        [5, 10, 18, 25],
        [8, 7, 8, 23],
        [21, 18, 12, 21],
        [30, 22, 19, 15]
      ],
      probability: [
        0.4,
        0.25,
        0.2,
        0.15
      ],
      optimism: 0.3
    }
  },
  computed: {
    isValid() {
      if (this.matrix.length) {
        if (this.matrix.length)
          return true
      }
    },
    minInRow: function () {
      return this.matrix.map(row => Math.min(...row))
    },
    maxInRow: function () {
      return this.matrix.map(row => Math.max(...row))
    },
    valdaProfit: function () {
      if (!this.isValid) return "NaN"
      const min = this.minInRow
      return `Стратегия - a${min.indexOf(Math.max(...min)) + 1}. Причина: ${Math.max(...min)}`
    },

    valdaLosses: function () {
      if (!this.isValid) return "NaN"
      const max = this.maxInRow
      return `Стратегия - a${max.indexOf(Math.min(...max)) + 1}. Причина: ${Math.min(...max)}`
    },

    baesaLaplasaTemp: function () {
      if (!this.isValid) return "NaN"
      return this.matrix
          .map((row) => {
            return row.reduce((prev, val, i) => {
              console.log('Этап')
              console.log(prev)
              console.log(val)
              console.log(this.probability[i])
              return prev + val * this.probability[i]
            }, 0)
          })
    },

    baesaLaplasaProfit: function () {
      if (!this.isValid) return "NaN"
      const temp = this.baesaLaplasaTemp
      return `Стратегия - a${temp.indexOf(Math.max(...temp)) + 1}. Причина: ${Math.max(...temp)}`
    },

    baesaLaplasaLosses: function () {
      if (!this.isValid) return "NaN"
      const temp = this.baesaLaplasaTemp
      return `Стратегия - a${temp.indexOf(Math.min(...temp)) + 1}. Причина: ${Math.min(...temp)}`
    },

    Savage: function () {
      if (!this.isValid) return "NaN"

      function transpose(matrix) {
        return matrix[0]
            .map((col, i) => matrix
                .map(row => row[i]))
      }

      const transposed = transpose(this.matrix)
      const max = transposed.map(row => Math.max(...row))
      const temp = transpose(transposed
          .map((row, i) => {
            return row
                .map(item => max[i] - item)
          }))
          .map(row => Math.max(...row))
      return `Стратегия - a${temp.indexOf(Math.min(...temp)) + 1}. Причина: ${Math.min(...temp)}`

    },

    Gurvic: function () {
      if (!this.isValid) return "NaN"
      const min = this.minInRow
      const max = this.maxInRow
      const temp = min.map((element, i) => element + max[i] * this.optimism)
      return `Стратегия - a${temp.indexOf(Math.max(...temp)) + 1}. Причина: ${Math.max(...temp)}`
    }
  }
}
</script>

<style scoped lang="scss">
lab1 {
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
