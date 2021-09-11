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
      <Accordion>
        <template v-slot:activator>
          <Paragraph styledLike="danger">
            Соблюдайте правила!
          </Paragraph>
        </template>
        <Paragraph styled-like="danger">
          Для корректных рассчетов метода Байеса-Лапласа количество значений матрицы вероятностей должно быть равно колчеству столбцов в матрице прибыли/потерь.
        </Paragraph>
        <Paragraph styled-like="danger">
          Учитывайте тот факт, что любая строка двумерной матрицы, содержащая хотя бы одну пустую ячейку, не будет участвовать в рассчетах.
        </Paragraph>
      </Accordion>
      <Title :level="6">Матрица прибыли/потерь</Title>
      <DynamicMatrix v-model="matrix" is-editable/>
      <Title :level="6">Матрица вероятностей</Title>
      <DynamicMatrix v-model="probability" is-editable is-one-row/>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Вальда
            <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ valdaProfit }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Находим
          <Emphasis styled-like="warning" is-bold>минимальное</Emphasis>
          значение в каждой
          <Emphasis styled-like="warning" is-bold>строке</Emphasis>
          .
          <br/>&nbsp;
          <StaticMatrix
            :matrix="markMinInRows"
            styled-like="warning"
          />
          <br/>&nbsp;
          2. Создаем массив из найденных элементов и среди них находим
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'p'}"
            :matrix="markMaxInRow(minInRow)"
            is-one-row
            styled-like="warning"
          />
          <br/>&nbsp;
          3. Индекс этого элемента + 1 - правильное решение
          <br/>&nbsp;
          <StaticMatrix
            :answer="getIndexOfMax(minInRow)+1"
            :matrix="getRightRow(getIndexOfMax(minInRow))"
            styled-like="warning"
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Вальда
            <Emphasis styled-like="danger" is-bold>Убытки</Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ valdaLosses }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Находим
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение в каждой
          <Emphasis styled-like="warning" is-bold>строке</Emphasis>
          .
          <br/>&nbsp;
          <StaticMatrix
            :matrix="markMaxInRows"
            styled-like="warning"
          />
          <br/>&nbsp;
          2. Создаем массив из найденных элементов и среди них находим
          <Emphasis styled-like="warning" is-bold>минимальное</Emphasis>
          значение
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'p'}"
            :matrix="markMinInRow(maxInRow)"
            is-one-row
            styled-like="warning"
          />
          <br/>&nbsp;
          3 Индекс этого элемента + 1 - правильное решение
          <br/>&nbsp;
          <StaticMatrix
            :answer="getIndexOfMin(minInRow)+1"
            :matrix="getRightRow(getIndexOfMin(minInRow))"
            styled-like="warning"
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Байеса-Лапласа
            <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ baesaLaplasaProfit }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Перемножаем каждый элемент строки
          <Emphasis styled-like="warning" is-bold>матрицы прибыли</Emphasis>
          на соответствующий элемент из
          <Emphasis styled-like="warning" is-bold>матрицы вероятностей</Emphasis>
          .
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a'}"
            :matrix="baesaLaplasaTemp"
            is-one-row
          />
          <br/>&nbsp;
          2. Формируем матрицу из полученных элементов и находим среди них
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение.
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a'}"
            styled-like="warning"
            :matrix="markMaxInRow(baesaLaplasaTemp)"
            is-one-row
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Байеса-Лапласа
            <Emphasis styled-like="danger" is-bold>Убытки</Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ baesaLaplasaLosses }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Перемножаем каждый элемент строки
          <Emphasis styled-like="warning" is-bold>матрицы прибыли</Emphasis>
          на соответствующий элемент из
          <Emphasis styled-like="warning" is-bold>матрицы вероятностей</Emphasis>
          .
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a'}"
            :matrix="baesaLaplasaTemp"
            is-one-row
          />
          <br/>&nbsp;
          2. Формируем матрицу из полученных элементов и находим среди них
          <Emphasis styled-like="warning" is-bold>минимальное</Emphasis>
          значение.
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a'}"
            styled-like="warning"
            :matrix="markMinInRow(baesaLaplasaTemp)"
            is-one-row
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Сэвиджа
            <Emphasis styled-like="success" is-bold>Прибыль</Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ Savage }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Транспонируем матрицу для удобства работы с ней.
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a', y:'p'}"
            :matrix="transpose(matrix)"
          />
          <br/>&nbsp;
          2. Находим
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение в каждой строке.
          <br/>&nbsp;
          <StaticMatrix
            styled-like="warning"
            :axes="{x:'a', y:'p'}"
            :matrix="markMaxInRowsF(transpose(matrix))"
          />
          <br/>&nbsp;
          3. Из каждого элемента строки вычитаем по модулю
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение соответствующей строки.
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x:'a', y:'p'}"
            :matrix="savageCalculations(transpose(matrix))"
          />
          <br/>&nbsp;
          4. Транспонируем матрицу в исходное состояние.
          <br/>&nbsp;
          <StaticMatrix
            :matrix="transpose(savageCalculations(transpose(matrix)))"
          />
          <br/>&nbsp;
          5. Находим
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение в каждой строке.
          <br/>&nbsp;
          <StaticMatrix
            styled-like="warning"
            :matrix="markMaxInRowsF(transpose(savageCalculations(transpose(matrix))))"
          />
          <br/>&nbsp;
          6. Формируем из найденных элементов матрицу и находим среди них
          <Emphasis styled-like="warning" is-bold>минимальное</Emphasis>
          значение
          <br/>&nbsp;
          <StaticMatrix
            styled-like="warning"
            is-one-row
            :axes="{x:'a'}"
            :matrix="markMinInRow(getMaxInRows(transpose(savageCalculations(transpose(matrix)))))"
          />
          <br/>&nbsp;
          7. Ответ стратегия, содержащая
          <Emphasis styled-like="warning" is-bold>мнимальное</Emphasis>
          значение
          <br/>&nbsp;
          <StaticMatrix
            :answer="getIndexOfMin(getMaxInRows(transpose(savageCalculations(transpose(matrix)))))+1"
            :matrix="getRightRow(getIndexOfMin(getMaxInRows(transpose(savageCalculations(transpose(matrix))))))"
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
      <Accordion v-if="isValid">
        <template v-slot:activator>
          <Paragraph>Метод Гарвика
            <Emphasis :styled-like="optimism > 0.5 ? 'success' : 'danger'" is-bold>
              {{ optimism > 0.5 ? 'Приыль' : 'Убытки' }}
            </Emphasis>
            :
            <Emphasis styled-like="description" is-bold>{{ Gurvic }}</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          1. Находим
          <Emphasis styled-like="warning" is-bold>мнимальное</Emphasis>
          значение в каждой строке.
          <br/>&nbsp;
          <StaticMatrix
            :matrix="markMinInRows"
            styled-like="warning"
          />
          <br/>&nbsp;
          2. Находим
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значение в каждой строке.
          <br/>&nbsp;
          <StaticMatrix
            :matrix="markMaxInRows"
            styled-like="warning"
          />
          <br/>&nbsp;
          3. По формуле (1-α)min(f<sub>ij</sub>)+αmax(f<sub>ij</sub>) прибавляем
          <Emphasis styled-like="warning" is-bold>минимум</Emphasis>
          , умноженный на 1 - α,
          к соответствующему
          <Emphasis styled-like="warning" is-bold>максимуму</Emphasis>
          , умноженному на α.
          <br/>&nbsp;
          <StaticMatrix
            :axes="{x: 'a'}"
            :matrix="markMaxInRow(gurvicCalculations)"
            is-one-row
            styled-like="warning"
          />
          <br/>&nbsp;
          4. Выбираем
          <Emphasis styled-like="warning" is-bold>максимальное</Emphasis>
          значенеи среди полученных данных. Стратегия, содержащая это значение, является ответом.
          <br/>&nbsp;
          <StaticMatrix
            :answer="getIndexOfMax(gurvicCalculations)+1"
            :matrix="getRightRow(getIndexOfMin(gurvicCalculations))"
          />
          <br/>&nbsp;
        </Paragraph>
      </Accordion>
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
import DynamicMatrix from "@/components/DynamicMatrix";
import Emphasis from "@/components/Typography/Emphasis";
import Code from "@/components/Typography/Code";
import Accordion from "../../components/Accordion";
import StaticMatrix from "../../components/StaticMatrix";

export default {
  name: 'PPRUNLab1',
  components: {StaticMatrix, Accordion, Code, Emphasis, DynamicMatrix, Paragraph, Title},
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
      optimism: 0.3,
    }
  },
  computed: {
    isValid() {
      if (this.matrix.length) {
        if (this.matrix[0].length)
          return true
      }
    },
    minInRow: function () {
      if (!this.isValid) return []
      return this.matrix.map(row => Math.min(...row))
    },
    maxInRow: function () {
      if (!this.isValid) return []
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
      if (!this.isValid) return []
      if (this.probability.length < this.matrix.length) return []
      return this.matrix
        .map((row) => {
          return row.reduce((prev, val, i) => {
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
      const transposed = this.transpose(this.matrix)
      const max = transposed.map(row => Math.max(...row))
      const temp = this.transpose(transposed
        .map((row, i) => {
          return row
            .map(item => max[i] - item)
        }))
        .map(row => Math.max(...row))
      return `Стратегия - a${temp.indexOf(Math.min(...temp)) + 1}. Причина: ${Math.min(...temp)}`

    },

    gurvicCalculations: function () {
      if (!this.isValid) return []
      const min = this.minInRow
      const max = this.maxInRow
      return min.map((element, i) => (1 - this.optimism) * element + max[i] * this.optimism)
    },

    Gurvic: function () {
      if (!this.isValid) return "NaN"
      const temp = this.gurvicCalculations
      return `Стратегия - a${temp.indexOf(Math.max(...temp)) + 1}. Причина: ${Math.max(...temp)}`
    },

    //DescriptionSection
    markMinInRows: function () {
      if (!this.isValid) return []
      return this.matrix.map((row) => {
        const min = Math.min(...row)
        return row.map(
          (item) => {
            return item === min ? {
                value: min,
                marked: true
              }
              : item
          }
        )
      })
    },
    markMaxInRows: function () {
      if (!this.isValid) return []
      return this.matrix.map((row) => {
        const min = Math.max(...row)
        return row.map(
          (item) => {
            return item === min ? {
                value: min,
                marked: true
              }
              : item
          }
        )
      })
    },
  },
  methods: {
    transpose: function (matrix) {
      if (!this.isValid) return []
      return matrix[0]
        .map((col, i) => matrix
          .map(row => row[i]))
    },
    markMaxInRow: function (row) {
      if (!this.isValid) return []
      const max = Math.max(...row)
      return row.map(
        (item) => {
          return item === max ? {
              value: max,
              marked: true
            }
            : item
        }
      )
    },
    markMinInRow: function (row) {
      if (!this.isValid) return []
      const min = Math.min(...row)
      return row.map(
        (item) => {
          return item === min ? {
              value: min,
              marked: true
            }
            : item
        }
      )
    },
    getIndexOfMax: function (row) {
      if (!this.isValid) return -1
      return row.indexOf(Math.max(...row))
    },
    getIndexOfMin: function (row) {
      if (!this.isValid) return -1
      return row.indexOf(Math.min(...row))
    },
    getRightRow: function (index) {
      if (!this.isValid) return []
      return this.matrix.filter((row, i) => {
        if (index === i) return row
      })
    },
    markMaxInRowsF: function (matrix) {
      if (!this.isValid) return []
      return matrix.map((row) => {
        const min = Math.max(...row)
        return row.map(
          (item) => {
            return item === min ? {
                value: min,
                marked: true
              }
              : item
          }
        )
      })
    },
    savageCalculations: function (matrix) {
      if (!this.isValid) return []
      const max = this.transpose(this.matrix).map(row => Math.max(...row))
      return matrix.map((row, i) => {
        return row
          .map(item => max[i] - item)
      })
    },
    getMinInRows: function (matrix) {
      if (!this.isValid) return "0"
      return matrix.map(row => Math.min(...row))
    },
    getMaxInRows: function (matrix) {
      if (!this.isValid) return "0"
      return matrix.map(row => Math.max(...row))
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
