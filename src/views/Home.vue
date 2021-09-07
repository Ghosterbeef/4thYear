<template>
  <div class="home">
    <main>
      <Title lang="en">4thYear</Title>
      <Paragraph styled-like="description">
        Веб приложение созданное
        <Emphasis lang="en">Ghosterbeef</Emphasis>
        для выполнения лабораторных работ 4го года обучения.
      </Paragraph>
      <Paragraph styled-like="warning">
        Приложение находится в фазе активной разработки.
        Баги и недоработки - нормальное явление на данном этапе разработки
      </Paragraph>
      <Paragraph>
        Публикация выполненных лабораторных работ будет происходить по мере их выполнения.
        Опубликованы будут работы, которые возможно выполнить в веб сфере.
      </Paragraph>
    </main>
    <footer>
      <Allusion>
        Icons made by
        <Link href="https://www.freepik.com" color="dark">Freepik</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
      <Allusion>
        Icons made by
        <Link href="https://www.flaticon.com/authors/good-ware" color="dark">Good Ware</Link>
        from
        <Link href="https://www.flaticon.com/" color="dark">www.flaticon.com</Link>
      </Allusion>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Link from "@/components/Typography/Link";
import Paragraph from "@/components/Typography/Paragraph";
import Allusion from "@/components/Typography/Allusion";
import Title from "@/components/Typography/Title";
import Emphasis from "@/components/Typography/Emphasis";

export default {
  name: 'Home',
  components: {Title, Allusion, Paragraph, Link, Emphasis}
}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: var(--gap-big);

  footer {
    display: flex;
    gap: var(--gap-small);
    flex-wrap: wrap;
  }
}
</style>
