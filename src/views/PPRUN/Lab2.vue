<template>
  <Alert v-if="$store.getters.isLocalhost" styled-like="warning" @clickOutside="$router.push('/')">
    <template #icon>
      <Icon styled-like="warning" icon="shieldWarning"/>
    </template>
    <template #title>
      Warning!
    </template>
    <Paragraph styled-like="default">Раздел находится в разработке. Возвращайтесь позже.</Paragraph>
  </Alert>
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
      <table>
        <thead>
        <tr>
          <th rowspan="3">Z<sub>h</sub></th>
          <th colspan="4">E</th>
        </tr>
        <tr>
          <th colspan="2">e<sub>0</sub></th>
          <th colspan="2">e<sub>1</sub></th>
        </tr>
        <tr>
          <th>&#952;<sub>0</sub></th>
          <th>&#952;<sub>1</sub></th>
          <th>&#952;<sub>0</sub></th>
          <th>&#952;<sub>1</sub></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Z<sub>0</sub></td>
          <td>1,0</td>
          <td>1,0</td>
          <td>0,0</td>
          <td>0,0</td>
        </tr>
        <tr>
          <td>Z<sub>1</sub></td>
          <td>0,0</td>
          <td>0,0</td>
          <td>0,65</td>
          <td>0,25</td>
        </tr>
        <tr>
          <td>Z<sub>2</sub></td>
          <td>0,0</td>
          <td>0,0</td>
          <td>0,35</td> <!--PZ1Q1-->
          <td>0,75</td> <!--PZ2Q2-->
        </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import Title from "@/components/Typography/Title";
import Paragraph from "@/components/Typography/Paragraph";
import Alert from "@/components/Modals/Alert";
import Emphasis from "@/components/Typography/Emphasis";
import Icon from "@/components/Icon";

export default {
  name: "Lab2",
  components: {Icon, Emphasis, Alert, Paragraph, Title},
  data() {
    return {
      data: [
        [1, 1, 0, 0],
        [0, 0, 0.65, 0.25],
        [0, 0, 0.35, 0.75]
      ],
    }
  },

}
</script>

<style scoped lang="scss">

table {
  border-collapse: collapse;
  width: 100%;

  th {
    border: 1px solid $bg-sidebar;
  }

  td {
    text-align: center;
    border: 1px solid $bg-sidebar;
  }

}

</style>
