<template>
  <div class="nav_wrapper" ref="nav_wrapper"  v-click-outside="() => {isMinimized = true}">
    <nav :class="{'minimized': isMinimized}">
      <div class="header" @click="$router.push('/'); isMinimized=true">
        <Icon icon="ghost"/>
        <Title :level="4" lang="en" color="light">Ghosterbeef</Title>
      </div>
      <ul class="nav-items">
        <li @click="isMinimized && !isActive ? isMinimized = false : undefined">
          <Accordion :is-active="isActive">
            <template v-slot:activator>
              <span class="item-name">
                <Icon icon="rand" styled-like="link"/>
                <span>ППРУН</span>
              </span>
            </template>
            <template v-slot:default>
              <ul class="sub_menu">
                <li class="sub_menu-items">
                  <Link to="/pprun/lab1" @click="isMinimized=true"><span>Лабораторная №1</span></Link>
                </li>
                <li class="sub_menu-items">
                  <Link to="/pprun/lab2" @click="isMinimized=true"><span>Лабораторная №2</span></Link>
                </li>
              </ul>
            </template>
          </Accordion>
        </li>
        <li>
          <Link to="/soon" has-icon @click="isMinimized=true">
            <Icon icon="soon" styled-like="link"/>
            <span>COMING SOON</span>
          </Link>
        </li>
        <li>
          <Link to="/progress" has-icon @click="isMinimized=true">
            <Icon icon="progress" styled-like="link"/>
            <span>Прогресс</span>
          </Link>
        </li>
      </ul>
    </nav>
    <span class="controls" :class="{'close': !isMinimized}" @click="isMinimized=!isMinimized">
      <span/>
      <span/>
      <span/>
    </span>
  </div>
</template>

<script>
import Title from "../Typography/Title";
import Link from "../Typography/Link";
import Accordion from "@/components/Accordion";
import Icon from "@/components/Icon";
import clickOutside from "../../directives/clickOutside";

export default {
  name: "SideBarNav",
  components: {Icon, Accordion, Link, Title},
  directives:{
    "click-outside": clickOutside
  },
  data() {
    return {
      isMinimized: true,
      isActive: false
    }
  },
  watch: {
    isMinimized: {
      handler(val) {
        if (val) {
          this.isActive = true;
          setTimeout(() => this.isActive = false, 0)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: var(--sidebar-nav-width);
  height: 100%;
  background-color: $bg-sidebar;
  padding: var(--padding-universal);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.7, -0.51, 0.35, 1.79);

  &.minimized {
    width: var(--sidebar-nav-min-width);

    li {
      white-space: nowrap;
    }
  }

  .header {
    display: flex;
    gap: var(--gap-big);
    align-items: center;
    cursor: pointer;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
    margin-top: 30px;
    list-style: none;

    .item-name {
      font-weight: bold;
      font-size: var(--p);
      display: flex;
      align-items: center;
      gap: var(--gap-big);
      color: $link-light;
      cursor: pointer;
    }

    .sub_menu {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-top: 5px;
      padding-left: var(--sidebar-nav-submenu-padding);
      gap: calc(var(--gap-small) / 2);
    }
  }
}

.nav_wrapper {
  position: relative;

  .controls {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
    top: var(--padding-universal);
    left: calc(100% + var(--padding-universal));
    background-color: $bg-sidebar;
    border-radius: var(--border-radius-small);
    z-index: 100;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;

    span {
      position: absolute;
      height: 5%;
      width: 80%;
      background-color: $icon-default;
      transition: all 0.3s ease;

      &:first-child {
        top: 30%;
        height: 5%;
      }

      &:last-child {
        bottom: 30%;
        height: 6%;
      }
    }

    &.close {
      span {
        &:first-child {
          top: auto;
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          width: 0;
        }

        &:last-child {
          bottom: auto;
          transform: rotate(-45deg);
        }
      }
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>

