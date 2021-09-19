<template>
  <div class="p404">
    <Title :level="1">404</Title>
    <Title :level="2">Такую страничку еще не сделали &#128577;</Title>
    <Title :level="2">Опробуйте одну из существующих!</Title>
    <pre>
         ／フ　 フ
　　　　| 　_　 _|
 　　　／`ミ _x 彡
　 　 /　　　 　 |
　　 /　 ヽ　　 ﾉ
／￣|　　 |　|　|
| (￣ヽ＿_ヽ_)_)
＼二つ
    </pre>
  </div>
</template>

<script>
import Title from "../components/Typography/Title";

export default {
  name: "404",
  components: {Title}
}
</script>

<style scoped lang="scss">
.p404 {
  display: flex;
  flex-direction: column;
  align-items: center;

    pre {
      margin-top: var(--gap-big);
      font-weight: bold;
      font-size: var(--p);
      color: var(--title-font);
    }
}
</style>
