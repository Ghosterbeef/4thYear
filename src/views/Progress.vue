<template>
  <div class="progress">
    <section class="version">
      <Title :level="5">В разработке</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Лабораторная работа №1 </Title>
            <Emphasis styled-like="danger" lang="en" is-bold is-underline>Epic</Emphasis>
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
            Доработка верстки для улучшения UX
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Прогресс </Title>
            <Emphasis styled-like="danger" lang="en" is-bold is-underline>Epic</Emphasis>
          </span>
          <Paragraph styled-like="description">
            Планируется перенсти отрисовку прогресса на циклы.
            Хранение информации будет происходить либо в json на хостинге, либо в firebase
          </Paragraph>
        </li>
      </List>
    </section>
    <section class="version">
      <Title :level="5">0.0.18</Title>
      <Title :level="5">Реализовано</Title>
      <List>
        <li>
          <span class="name">
            <Title :level="6">Переменные</Title>
          </span>
          <Paragraph styled-like="description">
            90% стилей перенесны на переменные.
          </Paragraph>
          <Paragraph styled-like="warning">
            Оставшиеся 10% будут перенесены по мере необходимости
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Адаптив</Title>
          </span>
          <Paragraph styled-like="description">
            Адаптив был частично переработан для улучшения использования полезного пространства на экране мобильных устройств.
            Работа продолжается
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Компоненты типографии</Title>
          </span>
          <Paragraph styled-like="description">
            Были добавлены компонеты: Акцент (выделение фрагмента текста), Автограф (компонет, для указания источника)
          </Paragraph>
        </li>
        <li>
          <span class="name">
            <Title :level="6">Иконки</Title>
          </span>
          <Paragraph styled-like="description">
            Был изменне подход для отрисовки иконок. Создан компонет для иконок, создана анимированная иконка для меню.
          </Paragraph>
          <Paragraph styled-like="warning">Иконки не окончательные</Paragraph>
        </li>
      </List>
    </section>
    <section class="version">
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
    </section>
    <section class="version">
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
    </section>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";
import Paragraph from "../components/Typography/Paragraph";
import List from "../components/Typography/List";
import Emphasis from "@/components/Typography/Emphasis";

export default {
  name: "Progress",
  components: {Emphasis, List, Paragraph, Title}
}
</script>

<style scoped lang="scss">
.progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);

  .version {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);

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
