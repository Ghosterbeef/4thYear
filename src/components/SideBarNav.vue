<template>
  <aside class="nav_wrapper" ref="nav_wrapper" v-click-outside="() => {isMinimized = true}">
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
        <li @click="isMinimized && !isActive ? isMinimized = false : undefined">
          <Accordion :is-active="isActive">
            <template v-slot:activator>
              <span class="item-name">
                <Icon icon="parallel" styled-like="link"/>
                <span>ТРСПВ</span>
              </span>
            </template>
            <template v-slot:default>
              <ul class="sub_menu">
                <li class="sub_menu-items">
                  <Link to="/trspv/lab1" @click="isMinimized=true"><span>Лабораторная №1</span></Link>
                </li>
                <li class="sub_menu-items">
                  <Link to="/trspv/lab2" @click="isMinimized=true"><span>Лабораторная №2</span></Link>
                </li>
              </ul>
            </template>
          </Accordion>
        </li>
        <li @click="isMinimized && !isActive ? isMinimized = false : undefined">
          <Accordion :is-active="isActive">
            <template v-slot:activator>
              <span class="item-name">
                <Icon icon="projects" styled-like="link"/>
                <span>Ghosterbeef <br> production</span>
              </span>
            </template>
            <template v-slot:default>
              <ul class="sub_menu">
                <li class="sub_menu-items">
                  <Link to="/projects" @click="isMinimized=true"><span>Все проекты</span></Link>
                </li>
                <li class="sub_menu-items">
                  <Link href="https://amfystructures.herokuapp.com/" @click="isMinimized=true">
                    <span>
                      AmfyStructures
                      <Icon icon="blank" styled-like="link" size="button"/>
                    </span>
                  </Link>
                </li>
                <li class="sub_menu-items">
                  <Link href="https://widgetportfolio.herokuapp.com/" @click="isMinimized=true">
                    <span>
                      WidgetPortfolio
                      <Icon icon="blank" styled-like="link" size="button"/>
                    </span>
                  </Link>
                </li>
                <li class="sub_menu-items">
                  <Link href="https://vvv-holding.web.app/" @click="isMinimized=true">
                    <span>
                      Агрегатор
                      <Icon icon="blank" styled-like="link" size="button"/>
                    </span>
                  </Link>
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
          <span class="attention"
                v-if="$store.getters.getCheckedVersion !== $store.getters.getVersion"
          >!
          </span>
          <Link to="/progress" has-icon @click="isMinimized=true">
            <Icon icon="progress" styled-like="link"/>
            <span>Прогресс</span>
          </Link>
        </li>
      </ul>
      <VueToggles
        :value="$store.getters.isDarkTheme"
        class="theme-toggle"
        width="50"
        checked-text="&#127769;"
        unchecked-text="&#127774;"
        unchecked-bg="white"
        checked-bg="hsl(0, 0%, 35%)"
        dot-color="gold"
        @click="$store.commit('setIsDarkTheme',
           {value: !$store.getters.isDarkTheme
           })"
      />
    </nav>
    <span class="controls" :class="{'close': !isMinimized}" @click="isMinimized=!isMinimized">
      <span/>
      <span/>
    </span>
  </aside>
</template>

<script>
import Title from "./Typography/Title";
import Link from "./Typography/Link";
import Accordion from "@/components/Accordion";
import Icon from "@/components/Icon";
import clickOutside from "../directives/clickOutside";
import VueToggles from "vue-toggles/src/VueToggles";

export default {
  name: "SideBarNav",
  components: {Icon, Accordion, Link, Title, VueToggles},
  directives: {
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
  overflow: hidden;
  height: 100%;
  width: var(--sidebar-nav-width);
  padding: var(--padding-universal);
  background-color: var(--bg-sidebar);
  transition: all 0.4s cubic-bezier(0.7, -0.51, 0.35, 1.79);

  .theme-toggle {
    position: absolute;
    bottom: var(--gap-big);
    left: calc(var(--padding-universal) / 2);
    transition: all 0.3s ease;
  }

  li {
    position: relative;
    white-space: nowrap;

    .attention {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -5px;
      left: calc(var(--icon-size) - 5px);
      width: 15px;
      height: 15px;
      font-size: 10px;
      font-weight: bold;
      line-height: 11px;
      border-radius: 50%;
      color: var(--danger-background);
      background-color: var(--danger-font);
    }
  }

  &.minimized {
    width: var(--sidebar-nav-min-width);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--gap-big);
    cursor: pointer;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: var(--gap-small);
    list-style: none;
    overflow-y: auto;
    padding-bottom: 50px;

    .item-name {
      display: flex;
      align-items: center;
      gap: var(--gap-big);
      font-weight: bold;
      font-size: var(--p);
      color: var(--link-light);
      cursor: pointer;
    }

    .sub_menu {
      display: flex;
      flex-direction: column;
      gap: calc(var(--gap-small) / 2);
      padding-left: var(--sidebar-nav-submenu-padding);
      margin-top: 5px;
      list-style: none;
    }
  }
}

.nav_wrapper {
  position: relative;

  .controls {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size);
    height: var(--icon-size);
    bottom: var(--padding-universal);
    left: calc(100% + var(--padding-universal));
    z-index: 100;
    opacity: 0.6;
    background-color: var(--bg-sidebar);
    border-radius: var(--border-radius-small);
    transition: all 0.3s ease;
    cursor: pointer;

    span {
      position: absolute;
      height: 10%;
      width: 52%;
      background-color: var(--icon-default);
      border-radius: var(--border-radius-small);
      transition: all 0.3s ease;

      &:first-child {
        top: 30%;
        transform: rotate(45deg);
      }

      &:last-child {
        bottom: 30%;
        transform: rotate(-45deg);
      }
    }

    &.close {
      span {
        &:first-child {
          transform: rotate(135deg);
        }

        &:last-child {
          transform: rotate(-135deg);
        }
      }
    }

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: $sm) {
    .theme-toggle {
      transform: rotate(-90deg) translateY(-32%);

      ::v-deep(.text) {
        transform: rotate(90deg);
      }
    }
  }
}
</style>

