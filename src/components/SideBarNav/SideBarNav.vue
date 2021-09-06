<template>
  <div class="nav_wrapper">
    <nav :class="{'minimized': isMinimized}">
      <div class="header" @click="$router.push('/')">
        <box-icon type='solid' name='ghost' color="white" size="md"/>
        <Title :level="4" lang="en" color="light">Ghosterbeef</Title>
      </div>
      <ul>
        <li>
          <Link to="/prune" has-icon>
            <box-icon type='solid' name='dice-5' color="gold" size="md"></box-icon>
            <span>ППРУН</span>
          </Link>
        </li>
        <li>
          <Link to="/soon" has-icon>
            <box-icon type='solid' name='time' color="gold" size="md"></box-icon>
            <span>COMING SOON</span>
          </Link>
        </li>
        <li>
          <Link to="/progress" has-icon>
            <box-icon name='trending-up' color="gold" size="md"></box-icon>
            <span>Прогресс</span>
          </Link>
        </li>
      </ul>
    </nav>
    <span class="controls" @click="isMinimized=!isMinimized">
      <box-icon name='menu' size="md" color="white"></box-icon>
    </span>
  </div>
</template>

<script>
import Title from "../Typography/Title";
import Link from "../Typography/Link";

export default {
  name: "SideBarNav",
  components: {Link, Title},
  data() {
    return {
      isMinimized: true
    }
  }
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
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.7,-0.51, 0.35, 1.79);
  position: relative;

  &.minimized {
    width: 76px;
    min-width: 76px;


    li {
      white-space: nowrap;
    }
  }

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

.nav_wrapper {
  position: relative;
  .controls {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    top: 25px;
    right: -50px;
    z-index: 100;
    background-color: $bg-sidebar;
    border-radius: 5px;
    cursor: pointer;
  }
}

@media (max-width: $sm) {
  nav {
    padding: 10px;
    &.minimized {
      width: 56px;
      min-width: 56px;
    }
  }
  .nav_wrapper {
    .controls {
      top: 15px;
      right: -50px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>

