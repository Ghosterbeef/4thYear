<template>
  <nav>
    <div class="header" @click="$router.push('/')">
      <box-icon type='solid' name='ghost' color="white" size="md"/>
      <Title :level="4" lang="en" color="light">Ghosterbeef</Title>
    </div>
    <ul>
      <li>
        <Link to="/about" has-icon>
          <box-icon type='solid' name='dice-5' color="gold" size="md"></box-icon>
          ППРУН
        </Link>
      </li>
      <li>
        <Link to="/soon" has-icon>
          <box-icon type='solid' name='time' color="gold" size="md"></box-icon>
          COMING SOON
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Title from "../Typography/Title";
import Link from "../Typography/Link";

export default {
  name: "SideBarNav",
  components: {Link, Title}
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  min-width: 280px;
  height: 100%;
  background-color: $bg-sidebar;
  padding: 20px;

  .header {
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    list-style: none;
  }
}
</style>

