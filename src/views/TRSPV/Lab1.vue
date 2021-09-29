<template>
    <div class="lab1">
        <header>
            <Title :level="3" is-centered>Лабораторная работа №1</Title>
            <Title :level="5">Цель работы</Title>
            <Paragraph>
                Исследовать функции библиотеки MPI, необходимые для
                создания и взаимодействия распределено выполняемых программ.
            </Paragraph>
        </header>
        <main>
            <section class="thread first_thread">
                <Title :level="6">Поток ввода данных</Title>
                <DynamicMatrix v-model.lazy="matrix"/>
                <Paragraph styled-like="danger" v-if="isIncorrectData">Некорректно введены данные! Проверьте чтобы все яейки матрицы были заполнены!</Paragraph>
            </section>
            <section class="thread second_thread">
                <Title :level="6">Поток вычисления миноров</Title>
                <StaticMatrix :matrix="minors"/>
            </section>
            <section class="thread third_thread">
                <Title :level="6">Поток вычисления обратной матрицы</Title>
                <StaticMatrix :matrix="answer" v-if="!isDeterminantZero"/>
                <Paragraph styled-like="warning" v-else>
                    Определитель матрицы равен 0. Вычисление обратной матрицы невозможно!
                </Paragraph>
            </section>
            <section>
                <Title :level="5">Вывод</Title>
                <Paragraph>
                    Исследованы функции библиотеки MPI, необходимые для
                    создания и взаимодействия распределено выполняемых программ.
                </Paragraph>
            </section>
        </main>
    </div>
</template>

<script>
    import Title from "../../components/Typography/Title";
    import Paragraph from "../../components/Typography/Paragraph";
    import DynamicMatrix from "../../components/DynamicMatrix";
    import StaticMatrix from "../../components/StaticMatrix";

    export default {
        name: "Lab1",
        components: {StaticMatrix, DynamicMatrix, Paragraph, Title},
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
                        const reversed = tempMatrix.map(element => element.reverse())
                        for (let i = 0; i < parsedMatrix.length; i++) {
                            let temp = 1;
                            for (let j = 0; j < parsedMatrix.length; j++) {
                                temp *= reversed[j][j + i]
                            }
                            determinant -= temp;
                            temp = 1;
                        }
                        if (!determinant) return 0
                        const transposed = parsedValue[0].map((col, i) => parsedValue
                            .map(row => row[i]))
                        return transposed.map(row => {
                            return row.map(element => element * (1 / determinant))
                        })
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
                answer: [],
                isDeterminantZero: false,
                isIncorrectData: false
            }
        },
        watch: {
            matrix: {
                handler: function (newValue) {
                    if (this.worker) {
                        if (newValue.length !== 3) {
                            this.isIncorrectData = true;
                            return
                        }
                        this.isIncorrectData = false;
                        this.worker.postMessage('minors', [JSON.stringify(newValue)])
                            .then(value => {
                                this.minors = value
                                this.worker.postMessage('inversion', [JSON.stringify(value), JSON.stringify(newValue)])
                                    .then(answer => {
                                        if (!answer) {
                                            this.isDeterminantZero = true
                                            return
                                        }
                                        this.isDeterminantZero = false
                                        this.answer = answer
                                    })
                            })
                    }
                },
                immediate: true
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
    }
</style>
