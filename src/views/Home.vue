<template>
  <div class="home">
    <main>
      <Title :level="0" lang="en" is-centered color="logo">4thYear</Title>
      <Paragraph styled-like="description">
        Веб-приложение, созданное
        <Emphasis lang="en">Ghosterbeef,</Emphasis>
        для выполнения лабораторных работ 4-го года обучения.
      </Paragraph>
      <Paragraph styled-like="warning">
        Приложение находится в фазе активной разработки.
        Баги и недоработки - нормальное явление на данном этапе.
      </Paragraph>
      <Paragraph>
        Публикация выполненных лабораторных работ будет происходить по мере их выполнения.
        Опубликованы будут работы, которые возможно выполнить в веб сфере.
      </Paragraph>
      <Paragraph>
        Вы можете отслеживать активность разработки на странице -
        <Link to="/soon">
          <Icon icon="soon" styled-like="link"/>
        </Link>
        ,
        а также изучить изменения в приложении на странице прогресса -
        <Link to="/progress">
          <Icon icon="progress" styled-like="link"/>
        </Link>
        .
      </Paragraph>
    </main>
    <footer>
      <Allusion is-special>
        Особая благодарность
        <Link href="https://github.com/yyx990803" color="dark" is-special lang="en">Evan You</Link>
        за создание
        <Link
          href="https://v3.vuejs.org/"
          is-special
        >
          <Emphasis
            lang="en"
            styled-like="success"
            is-underline
          >
            Vue.js
          </Emphasis>
        </Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.freepik.com" color="dark">Freepik</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://icon54.com/" color="dark">Pixel perfect</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.flaticon.com/" color="dark">fjstudio</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.flaticon.com/authors/eucalyp" color="dark">Eucalyp</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.flaticon.com/authors/roundicons" color="dark">Roundicons</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.flaticon.com/" color="dark">mavadee</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
    </footer>
  </div>
</template>

<script>
import Link from "@/components/Typography/Link";
import Paragraph from "@/components/Typography/Paragraph";
import Allusion from "@/components/Typography/Allusion";
import Title from "@/components/Typography/Title";
import Emphasis from "@/components/Typography/Emphasis";
import Icon from "@/components/Icon";

export default {
  name: 'Home',
  components: {Title, Allusion, Paragraph, Link, Emphasis, Icon}
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-small);
    align-items: flex-start;
  }
}
</style>
