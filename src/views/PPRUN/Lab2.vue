<template>
    <div>
        <header>
            <Title :level="3" is-centered>Лабораторная работа №2</Title>
            <Title :level="5">Цель работы</Title>
            <Paragraph>
                Изучить и исследовать методы принятия решений при наличии информации о
                стохастической связи между экспериментами и их исходами, между принимаемыми решениями и их
                результатами.
            </Paragraph>
        </header>
        <main>
            <section class="info zero-border">
                <Title :level="5">Данные по варианту</Title>
                <Title :level="6">Распределение вероятностей Pz|eQ</Title>
                <table>
                    <thead>
                    <tr>
                        <th rowspan="4" class="top_both">Z<sub>h</sub></th>
                        <th rowspan="4" class="gap"/>
                        <th colspan="4" class="top_both">E</th>
                    </tr>
                    <tr>
                        <th colspan="2">e<sub>0</sub></th>
                        <th colspan="2">e<sub>1</sub></th>
                    </tr>
                    <tr>
                        <th class="bottom_left">&#952;<sub>0</sub></th>
                        <th>&#952;<sub>1</sub></th>
                        <th>&#952;<sub>0</sub></th>
                        <th class="bottom_right">&#952;<sub>1</sub></th>
                    </tr>
                    <tr>
                        <th class="gap vertical" colspan="4"/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="aside">Z<sub>0</sub></td>
                        <td class="gap"/>
                        <td class="top_left">{{data[0][0][0]}}</td>
                        <td>{{data[0][0][1]}}</td>
                        <td>{{data[0][1][0]}}</td>
                        <td class="top_right">{{data[0][1][1]}}</td>
                    </tr>
                    <tr>
                        <td class="aside">Z<sub>1</sub></td>
                        <td class="gap"/>
                        <td>{{data[1][0][0]}}</td>
                        <td>{{data[1][0][1]}}</td>
                        <td>{{data[1][1][0]}}</td>
                        <td>{{data[1][1][1]}}</td>
                    </tr>
                    <tr>
                        <td class="aside bottom_both">Z<sub>2</sub></td>
                        <td class="gap"/>
                        <td class="bottom_left">{{data[2][0][0]}}</td>
                        <td>{{data[2][0][1]}}</td>
                        <td>{{data[2][1][0]}}</td>
                        <td class="bottom_right">{{data[2][1][1]}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="two_cols_section">
                    <div>
                        <Title :level="6">
                            Значения полезности для
                            соответствующих стратегий
                            проведения эксперимента и
                            принятия решений.
                        </Title>
                    </div>
                    <div>
                        <Title :level="6">
                            Для Q (j=1,2) распределение вероятностей имеет вид:
                        </Title>
                    </div>
                    <table>
                        <tr v-for="index in 6">
                            <td :class="[{'top_left': index === 1}, {'bottom_left': index===6}]">
                                U{{Object.keys(utilityValues)[2* (index-1)]}}
                                =
                                {{Object.values(utilityValues)[2* (index-1)]}}
                            </td>
                            <td :class="[{'top_right': index === 1}, {'bottom_right': index===6}]">
                                U{{Object.keys(utilityValues)[1+ 2* (index-1)]}}
                                =
                                {{Object.values(utilityValues)[1+ 2* (index-1)]}}
                            </td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td class="top_left bottom_left">
                                P'θ<sub>1</sub>= {{probabilityDistribution[0]}}
                            </td>
                            <td class="top_right bottom_right">
                                P'θ<sub>2</sub>= {{probabilityDistribution[1]}}
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <Title :level="6">Стратегия реализации экспериментов и принятия решений:</Title>
                    <div v-for="(strat, i) in strategy">
                        <Accordion>
                            <template #activator>
                                <Paragraph>Стартегия {{i+1}}</Paragraph>
                            </template>
                            <Paragraph>
                                <Emphasis v-for="(item,i) in strat">
                                    <span>{{i+1}}) </span>
                                    <span>a={{item.a}}&nbsp;</span>
                                    <span>z={{item.z}}&nbsp;</span>
                                    <span>e={{item.e}}&nbsp;</span>
                                    <span>θ={{item.q}}&nbsp;</span>
                                    <br/>
                                </Emphasis>
                            </Paragraph>
                        </Accordion>
                    </div>
                </div>
            </section>
            <section>
                <Accordion color="dark">
                    <template #activator>
                        <Paragraph styled-like="description">
                            Самая эффективная стретегия - {{getAnswer.index}}
                            ({{getAnswer.answer}})
                        </Paragraph>
                    </template>
                    <Paragraph styled-like="description">
                        Описание не завершено!!
                        <StaticMatrix :axes="{x: 'θ', y: 'Z'}" styled-like="warning" :matrix="markCell(0,0)"/>
                    </Paragraph>
                </Accordion>
            </section>
            <section>
                <Title :level="5">Вывод</Title>
                <Paragraph>
                    Изучены и исследованы методы принятия решений при наличии информации о
                    стохастической связи между экспериментами и их исходами, между принимаемыми решениями и их
                    результатами.
                </Paragraph>
            </section>
        </main>
    </div>
</template>

<script>
    import Title from "@/components/Typography/Title";
    import Paragraph from "@/components/Typography/Paragraph";
    import Alert from "@/components/Modals/Alert";
    import Emphasis from "@/components/Typography/Emphasis";
    import Icon from "@/components/Icon";
    import Accordion from "../../components/Accordion";
    import StaticMatrix from "../../components/StaticMatrix";

    export default {
        name: "Lab2",
        components: {StaticMatrix, Accordion, Icon, Emphasis, Alert, Paragraph, Title},
        data() {
            return {
                data: [
                    [[1, 1], [0, 0]],
                    [[0, 0], [0.65, 0.25]],
                    [[0, 0], [0.35, 0.75]]
                ],
                utilityValues: {
                    'a0z0e0q0': 65,
                    'a0z0e0q1': 60,
                    'a1z0e0q0': 80,
                    'a1z0e0q1': 80,
                    'a0z1e1q0': 50,
                    'a0z1e1q1': 58,
                    'a1z1e1q0': 65,
                    'a1z1e1q1': 65,
                    'a0z2e1q0': 80,
                    'a0z2e1q1': 90,
                    'a1z2e1q0': 40,
                    'a1z2e1q1': 68,
                },
                probabilityDistribution: [
                    0.55, 0.45
                ],
                strategy: [
                    [
                        {
                            a: 0,
                            z: 0,
                            e: 0,
                            q: 0
                        },
                        {
                            a: 0,
                            z: 0,
                            e: 0,
                            q: 1
                        }
                    ],
                    [
                        {
                            a: 1,
                            z: 0,
                            e: 0,
                            q: 0
                        },
                        {
                            a: 1,
                            z: 0,
                            e: 0,
                            q: 1
                        }
                    ],
                    [
                        {
                            a: 0,
                            z: 1,
                            e: 1,
                            q: 0,
                        },
                        {
                            a: 1,
                            z: 2,
                            e: 1,
                            q: 0
                        },
                        {
                            a: 0,
                            z: 1,
                            e: 1,
                            q: 1,
                        },
                        {
                            a: 1,
                            z: 2,
                            e: 1,
                            q: 1
                        }
                    ],
                    [
                        {
                            a: 1,
                            z: 1,
                            e: 1,
                            q: 0
                        },
                        {
                            a: 0,
                            z: 2,
                            e: 1,
                            q: 0
                        },
                        {
                            a: 1,
                            z: 1,
                            e: 1,
                            q: 1
                        },
                        {
                            a: 0,
                            z: 2,
                            e: 1,
                            q: 1
                        },
                    ]
                ],
                answer: []
            }
        },
        computed: {
            getAnswer: function () {
                this.strategy.forEach((element, i) => {
                    if (element.length === 2) {
                        let temp = 0
                        element.forEach((strategy, j) => {
                            temp += this.data[strategy.z][strategy.e][strategy.q] * this.utilityValues[`a${strategy.a}z${strategy.z}e${strategy.e}q${strategy.q}`] * this.probabilityDistribution[j]
                        })
                        this.answer.push(temp)
                    }
                    if (element.length === 4) {
                        const temp = [0, 0]
                        element.forEach((strategy, j) => {
                            temp[strategy.q] += this.data[strategy.z][strategy.e][strategy.q] * this.utilityValues[`a${strategy.a}z${strategy.z}e${strategy.e}q${strategy.q}`]
                        })
                        this.answer.push(temp.reduce((acc, cur, i) => {
                            return acc + cur * this.probabilityDistribution[i]
                        }, 0))
                    }
                })
                return {
                    answer: Math.max(...this.answer),
                    index: this.answer.indexOf(Math.max(...this.answer)) + 1
                }
            }
        },
        methods: {
            markCell: function (I, J) {
                const data = [
                    [1, 1, 0, 0],
                    [0, 0, 0.65, 0.25],
                    [0, 0, 0.35, 0.75]
                ]
                return data.map((row, i) => {
                    return row.map((elemnt, j) => {
                        return i===I && j===J ? {
                            value: elemnt,
                            marked: true
                        } : elemnt
                    })
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: var(--gap-small);

        .info {
            display: flex;
            flex-direction: column;
            gap: var(--gap-big);

            &.zero-border {
                border: none !important;
            }
        }

        .two_cols_section {
            display: flex;
            flex-wrap: wrap;
            gap: var(--gap-big);
            justify-content: space-between;

            div {
                flex: 0 0 48%;
            }

            table {
                align-self: flex-start;
                flex: 0 0 48%;

                tr {
                    td {
                        width: 50%;
                    }
                }
            }
        }
    }

    table {
        border-collapse: collapse;
        width: 100%;

        th, td {
            background-color: var(--description-background);
            box-shadow: 0 0 0 1px var(--description-font);;
            padding: calc(var(--padding-top-bottom-small) / 2);
            color: var(--description-font);
            font-size: var(--p);
            text-align: center;

            &.aside {
                font-weight: bold;
            }

            &.gap {
                box-shadow: none;
                background: none;
                border: none;
                width: var(--gap-big);

                &.vertical {
                    width: auto;
                    height: var(--gap-big);
                }
            }

            &.top_both {
                border-top-left-radius: var(--border-radius-small);
                border-top-right-radius: var(--border-radius-small);
            }

            &.bottom_both {
                border-bottom-left-radius: var(--border-radius-small);
                border-bottom-right-radius: var(--border-radius-small);
            }

            &.top_left {
                border-top-left-radius: var(--border-radius-small);
            }

            &.top_right {
                border-top-right-radius: var(--border-radius-small);
            }

            &.bottom_left {
                border-bottom-left-radius: var(--border-radius-small);
            }

            &.bottom_right {
                border-bottom-right-radius: var(--border-radius-small);
            }
        }

    }

</style>
