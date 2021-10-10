<template>
  <div class="lab1">
    <header>
      <Title :level="3" is-centered>Лабораторная работа №1</Title>
      <Title :level="5">Цель работы</Title>
      <Paragraph>
        Исследовать функции библиотеки MPI, необходимые для
        создания и взаимодействия распределено выполняемых программ.
      </Paragraph>
      <Accordion color="dark">
        <template #activator>
          <Paragraph styled-like="warning">
            <Emphasis styled-like="warning" is-bold>Не так быстро!</Emphasis>
          </Paragraph>
        </template>
        <Paragraph styled-like="warning">
          Поскольку я влюблен в язык javascript,
          я потсавил для себя другую цель:
          изучить способы ораганизации распределенных вычислений в приложениях,
          написанных на javascript.
        </Paragraph>
      </Accordion>
    </header>
    <main>
      <Accordion color="dark">
        <template #activator>
          <Paragraph styled-like="description">
            Многопточность в Javascript?!
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          Javascript действительно однопточный язык.
          И у людей "в теме" может возникнуть предположение,
          что лабораторная работа выполнена в приычном stack-режиме. <br/>
          Но это не так.
        </Paragraph>
        <Paragraph styled-like="description">
          Как только я услышал,
          что этот предмет подразумевает написание лабораторных работ на языке C++,
          я начал поиск обходных путей реализации многопоточности в Javascript. И наткнулся на технологию Web
          Workers
          (Спасибо Андрей Юрьевич).
          Как я понял, идея очень проста.
          Если javascript однопоточен,
          почему бы не взять много однопоточных javascript-ов
          и не создать много-javascript-овое приложение?
        </Paragraph>
        <Paragraph styled-like="description">
          Каждый поток - отдельный файл js,
          создаваемый в атоматическом режиме,
          благодаря библиотеке vue-workers.
          Они общаются как потоки и выполняют задачи параллельно.
          <br/>Просто сказка.
        </Paragraph>
      </Accordion>
      <Accordion color="dark">
        <template #activator>
          <Paragraph styled-like="description">
            А где параллельные вычисления?
          </Paragraph>
        </template>
        <Paragraph styled-like="description">
          К сожалению, вариант задания,
          указанный в методических указаниях,
          не позволяет в полной мере продемонстрировать мощность многопоточности.
        </Paragraph>
        <Paragraph styled-like="description">
          В данном случае приложение работает в 3 потоках.
          Первый поток считывает информацию, использую для этого компонент динамической матрицы.
          Как только матрица была изменена,
          посылается сообщение во второй поток,
          который рассчитывает матрицу миноров и посылает сообщение в третий поток,
          который находит определитель матрицы, и рассчитывает для исходной матрицы - обратную.
        </Paragraph>
        <Paragraph styled-like="description">
          И поскольку эти процессы имеют минимальную ресурсоемкость,
          все происходит моментально,
          создавая ощущение обычных однопоточных последовательных вычислений.
        </Paragraph>
      </Accordion>
      <section class="thread first_thread">
        <Title :level="6">Поток ввода данных</Title>
        <DynamicMatrix v-model="matrix"/>
        <Paragraph styled-like="danger" v-if="isIncorrectData">Некорректно введены данные! Проверьте чтобы все
          яейки матрицы были заполнены!
        </Paragraph>
        <Accordion color="dark">
          <template #activator>
            <Paragraph styled-like="description">
              Что здесь происходит?
            </Paragraph>
          </template>
          <Paragraph styled-like="description">
            В данном потоке происходит считиывание матрицы 3х3.
            Просто измените значения по умолчанию,
            для того чтобы рассчитать нужную вам матрицу.
          </Paragraph>
        </Accordion>
      </section>
      <section class="thread second_thread" v-if="!isIncorrectData">
        <Title :level="6">Поток вычисления миноров</Title>
        <StaticMatrix :matrix="minors"/>
        <Accordion color="dark">
          <template #activator>
            <Paragraph styled-like="description">
              Что здесь происходит?
            </Paragraph>
          </template>
          <Paragraph styled-like="description">
            Для формирования матрицы миноров, находим минор для каждого элемента матрицы.
            Для нахождения минора элемента из матрицы исключается строка и столбец, в которых он онаходится,
            а затем из произведения главной диагонали вычитается произведение побочной.
            Минор элемента с нечетной суммой i+j умножается на -1.
            <br/>
            <br/>
            В последуюзих матрицах выделены строки и столбцы, которую не участвуют в вычислениях.
            Элемент находящийся на их пересечении - элемент для которого вычисляется минор.
            <span v-for="i in 3">
                            <span v-for="j in 3">
                                <br/>&nbsp;
                                <StaticMatrix styled-like="danger" :matrix="markRemovedColsNRows(matrix, i-1,j-1)"/>
                                <br/>
                                <span class="answer">
                                    <span class="answer_item" v-if="countMinor(matrix, i-1,j-1).isMinus">
                                        -1
                                    </span>
                                    <span class="answer_item" v-if="countMinor(matrix, i-1,j-1).isMinus">
                                        *
                                    </span>
                                    <span class="answer_item">
                                        {{ countMinor(matrix, i - 1, j - 1).firstValue }}
                                    </span>
                                    <span class="answer_item">
                                        *
                                    </span>
                                    <span class="answer_item">
                                        {{ countMinor(matrix, i - 1, j - 1).secondValue }}
                                    </span>
                                    <span class="answer_item">
                                        -
                                    </span>
                                    <span class="answer_item">
                                        {{ countMinor(matrix, i - 1, j - 1).thirdValue }}
                                    </span>
                                    <span class="answer_item">
                                        *
                                    </span>
                                    <span class="answer_item">
                                        {{ countMinor(matrix, i - 1, j - 1).fourthValue }}
                                    </span>
                                    <span class="answer_item">
                                        =
                                    </span>
                                    <span class="answer_item result">
                                        {{ countMinor(matrix, i - 1, j - 1).value }}
                                    </span>
                                </span>
                            </span>
                        </span>
            <br/>
            Результат вычисений.
            <br/>
            <br/>
            <StaticMatrix :matrix="minors"/>
          </Paragraph>
        </Accordion>
      </section>
      <section class="thread third_thread" v-if="!isIncorrectData">
        <Title :level="6">Поток вычисления обратной матрицы</Title>
        <StaticMatrix :matrix="answer" v-if="!isDeterminantZero"/>
        <Paragraph styled-like="warning" v-else>
          Определитель матрицы равен 0. Вычисление обратной матрицы невозможно!
        </Paragraph>
        <Accordion color="dark">
          <template #activator>
            <Paragraph styled-like="description">
              Что здесь происходит?
            </Paragraph>
          </template>
          <Paragraph styled-like="description">
            Для начала, нам необходимо вычислить определитель матрицы.
            Определитель матрицы, в данном случае,
            находится при помощи добавления первого и второго столбца в конец матрицы.
            <br/>&nbsp;
            <StaticMatrix styled-like="warning" :matrix="markLastTwoColumns(extendedMatrix)"/>
            <br/>
            Находим сумму произведений элементов главной диагонали и двух диагоналей после нее.
            <br/>&nbsp;
            <StaticMatrix styled-like="warning" :matrix="markDiagonals(extendedMatrix)"/>
            <br/>&nbsp;
            <span class="answer">
                            <span class="answer_item result">
                                {{ getSumOfMultiplicationOfDiagonals(extendedMatrix) }}
                            </span>
                        </span>
            <br/>
            Находим сумму произведений элементов побочной диагонали и двух диагоналей перед ней.
            <br/>&nbsp;
            <StaticMatrix styled-like="warning"
                          :matrix="reverseMatrix(markDiagonals(reverseMatrix(extendedMatrix)))"/>
            <br/>
            <span class="answer">
                            <span class="answer_item result">
                                {{ getSumOfMultiplicationOfDiagonals(reverseMatrix(extendedMatrix)) }}
                            </span>
                        </span>
            <br/>
            Вычитаем из первого значения и получаем значение определителя матрицы.
            <br/>&nbsp;
            <span class="answer">
                            <span class="answer_item">
                                {{ getSumOfMultiplicationOfDiagonals(extendedMatrix) }}
                            </span>
                            <span class="answer_item">-</span>
                            <span class="answer_item">
                               {{ getSumOfMultiplicationOfDiagonals(reverseMatrix(extendedMatrix)) }}
                            </span>
                            <span class="answer_item">=</span>
                            <span class="answer_item result">
                                {{
                                getSumOfMultiplicationOfDiagonals(extendedMatrix)
                                -
                                getSumOfMultiplicationOfDiagonals(reverseMatrix(extendedMatrix))
                              }}
                            </span>
                        </span>
            <br/>
            Для нахождения обратной матрицы нам необходимо применить формулу:
            <Emphasis styled-like="warning" is-bold is-italic>1/|A| * (A)</Emphasis>
            Иными словами, мы перемножаем каждый элемент матрицы на единицу,
            деленную на определитель матрицы.
            <br/>&nbsp;
            <StaticMatrix :matrix="answer"/>
          </Paragraph>
        </Accordion>
      </section>
      <section>
        <Title :level="5">Вывод</Title>
        <Paragraph>
          Изучены способы ораганизации распределенных вычислений в приложениях,
          написанных на javascript.
        </Paragraph>
      </section>
    </main>
  </div>
</template>

<script>
import Title from "@/components/Typography/Title";
import Paragraph from "@/components/Typography/Paragraph";
import DynamicMatrix from "@/components/DynamicMatrix";
import StaticMatrix from "@/components/StaticMatrix";
import Accordion from "@/components/Accordion";
import Emphasis from "@/components/Typography/Emphasis";

export default {
  name: "Lab1",
  components: {Emphasis, Accordion, StaticMatrix, DynamicMatrix, Paragraph, Title},
  data() {
    const actions = [
      {
        message: 'minors', func: arg => {
          const matrix = JSON.parse(arg)
          return matrix.map((row, i) => {
            return row.map((col, j) => {
              const temp = matrix.filter((row, k) => {
                if (k !== i)
                  return row
              }).map((row) => {
                const temp = JSON.parse(JSON.stringify(row))
                temp.splice(j, 1)
                return temp

              })
              return Math.pow(-1, i + j) * (temp[0][0] * temp[1][1] - temp[1][0] * temp[0][1])
            })
          })
        }
      },
      {
        message: "inversion", func: (value, matrix) => {
          const parsedValue = JSON.parse(value)
          const parsedMatrix = JSON.parse(matrix)
          let tempMatrix = parsedMatrix.map((row, i) => {
            return row.concat(parsedMatrix[i].slice(0, 2))
          })
          let determinant = 0
          for (let i = 0; i < parsedMatrix.length; i++) {
            let temp = 1;
            for (let j = 0; j < parsedMatrix.length; j++) {
              temp *= tempMatrix[j][j + i]
            }
            determinant += temp;
            temp = 1;
          }
          const reversed = JSON.parse(JSON.stringify(tempMatrix)).map(element => element.reverse())
          for (let i = 0; i < parsedMatrix.length; i++) {
            let temp = 1;
            for (let j = 0; j < parsedMatrix.length; j++) {
              temp *= reversed[j][j + i]
            }
            determinant -= temp;
            temp = 1;
          }
          if (!determinant) return {
            determinant: 0,
            answer: null,
            extendedMatrix: tempMatrix
          }
          const transposed = parsedValue[0].map((col, i) => parsedValue
            .map(row => row[i]))
          const answer = transposed.map(row => {
            return row.map(element => element * (1 / determinant))
          })

          return {
            determinant: determinant,
            answer: answer,
            extendedMatrix: tempMatrix
          }
        }
      }
    ]
    return {
      worker: this.$worker.create(actions),
      matrix: [
        [4, -2, 1],
        [1, 6, -2],
        [1, 0, 0]
      ],
      minors: [],
      extendedMatrix: [],
      answer: [],
      isDeterminantZero: false,
    }
  },
  computed: {
    isIncorrectData: function () {
      return this.matrix.filter(row => !row.includes('')).length !== 3
    }
  },
  watch: {
    matrix: {
      handler: function (newValue) {
        if (this.worker) {
          if (this.isIncorrectData) {
            return
          }
          this.worker.postMessage('minors', [JSON.stringify(newValue)])
            .then(value => {
              this.minors = value
              this.worker.postMessage('inversion', [JSON.stringify(value), JSON.stringify(newValue)])
                .then(value => {
                  if (!value.determinant) {
                    this.extendedMatrix = value.extendedMatrix
                    this.isDeterminantZero = true
                    return
                  }
                  this.extendedMatrix = value.extendedMatrix
                  this.isDeterminantZero = false
                  this.answer = value.answer
                })
            })
        }
      },
      immediate: true
    }
  },
  methods: {
    reverseMatrix: function (matrix) {
      if (this.isIncorrectData) return []
      return JSON.parse(JSON.stringify(matrix)).map(row => {
        return row.reverse()
      })
    },
    markLastTwoColumns: function (matrix) {
      if (this.isIncorrectData) return []
      return matrix.map(row => {
        return row.map((element, index) => {
          return index > 2 ? {
            value: element,
            marked: true
          } : element
        })
      })
    },
    markDiagonals: function (matrix) {
      if (this.isIncorrectData) return []
      return matrix.map((row, i) => {
        return row.map((element, j) => {
          return j === 0 + i || j === 1 + i || j === 2 + i ? {
            value: element,
            marked: true
          } : element
        })
      })
    },
    getSumOfMultiplicationOfDiagonals(matrix) {
      if (this.isIncorrectData) return null
      let temp = [1, 1, 1]
      matrix.forEach((row, i) => {
        row.forEach((element, j) => {
          if (j === 0 + i || j === 1 + i || j === 2 + i) {
            temp[j - i] *= element
          }
        })
      })
      return temp.reduce((prev, cur) => {
        return prev + cur
      });
    },
    markRemovedColsNRows: function (matrix, I, J) {
      if (this.isIncorrectData) {
        return []
      }
      return matrix.map((row, i) => {
        return row.map((element, j) => {
          return i === I || j === J ? {
            value: element,
            marked: true
          } : element
        })
      })
    },
    countMinor: function (matrix, I, J) {
      if (this.isIncorrectData) return null
      const temp = JSON.parse(JSON.stringify(matrix)).filter((row, i) => {
        if (i !== I) return row
      }).map(row => {
          const temp = JSON.parse(JSON.stringify(row))
          temp.splice(J, 1)
          return temp
        }
      )
      return {
        isMinus: (I + J) % 2,
        firstValue: temp[0][0],
        secondValue: temp[1][1],
        thirdValue: temp[1][0],
        fourthValue: temp[0][1],
        value: Math.pow(-1, I + J) * (temp[0][0] * temp[1][1] - temp[1][0] * temp[0][1])
      }

    }
  }
}
</script>

<style scoped lang="scss">
.thread {
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);
  border: none !important;

  .answer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: calc(var(--gap-small) / 2);

    &_item {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--title-font);
      font-weight: 700;
      width: var(--matrix-item-size);
      height: var(--matrix-item-size);
      background-color: var(--warning-background);

      &.result {
        color: var(--success-font);
        background-color: var(--success-background);
      }
    }
  }
}
</style>
