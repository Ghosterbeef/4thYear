<template>
  <div class="progress">
    <span class="version">
      <Title :level="5">0.0.17</Title>
      <Title :level="5">Реализовано</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Выпадающее меню</Title>
          </span>
          <Paragraph styled-like="description">
            Элементы меню,
            содержащие подпункты,
            теперь являются выпадающими списками.
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Стили ссылок</Title>
          </span>
          <Paragraph styled-like="description">
            Активные ссылки были переработаны.
            Было добавлено затемнение цвета.
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Были добавлены типы параграфов</Title>
          </span>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
          </Paragraph>
          <Paragraph styled-like="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
          </Paragraph>
          <Paragraph styled-like="success">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
          </Paragraph>
          <Paragraph styled-like="warning">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
          </Paragraph>
          <Paragraph styled-like="danger">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, nisi.
          </Paragraph>
        </li>
      </List>
      <Title :level="5">В разработке</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Лабораторная работа №1</Title>
          </span>
          <Paragraph styled-like="description">
            В разработке находится раздел содержащий выполнение лабораторной работы №1 по ПРУН
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Редизайн</Title>
          </span>
          <Paragraph styled-like="description">
            Многие элементы требуют доработки или полной переработки дизайна.
            Меню и страница SOON первые в очереди на переработку
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Адаптив</Title>
          </span>
          <Paragraph styled-like="description">
            Адаптив будет переработан дабы улучшить использование полезного пространства на экране
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Переменные</Title>
          </span>
          <Paragraph styled-like="description">
            Планируется перенести все стили на переменные для удобства поддержки.
          </Paragraph>
        </li>
      </List>
    </span>
    <span class="version">
      <Title :level="5">0.0.15</Title>
      <Title :level="5">Реализовано</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Страница прогресса</Title>
          </span>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Боковое меню</Title>
          </span>
          <Paragraph styled-like="description">
            Функционал требует доработки
          </Paragraph>
        </li>
      </List>
    </span>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";
import Paragraph from "../components/Typography/Paragraph";
import List from "../components/Typography/List";

export default {
  name: "Progress",
  components: {List, Paragraph, Title}
}
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .version {
    border-top: 2px solid #486491;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      .name {
        margin-left: 25px;
        display: flex;
        position: relative;

        &::before {
          position: absolute;
          top: 8px;
          left: - 21px;
          display: block;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: $bg-sidebar;
        }
      }
    }
  }
}
</style>
