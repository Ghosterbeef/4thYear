<template>
  <div class="wrapper">
    <table class="matrix" v-if="!isOneRow">
      <thead>
      <tr>
        <th class="item empty"/>
        <th class="item head" v-for="i in cols" :key="`h${i}`">
          {{ `${axes.x}${i}` }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, i) in matrix" :key="`r${i+1}`">
        <td class="item aside">{{ axes.y }}{{answer < 0 ? i+1 : answer}}</td>
        <td class="item value"
            v-for="(item,j) in row"
            :key="`${i}+${j}`"
        >
          <span v-if="typeof item !== 'object'">{{ item }}</span>
          <span v-else class="marked" :class="[styledLike]">{{ item.value }}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="matrix" v-else>
      <thead>
      <tr>
        <th class="item head" v-for="(item,i) in this.matrix" :key="`h${i}`">
          {{ axes.x }}{{ i+1 }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="item value" :class="[styledLike]" v-for="(item, i) in matrix" :key="`r${i}`">
          <span v-if="typeof item !== 'object'">{{ item }}</span>
          <span v-else class="marked" :class="[styledLike]">{{ item.value }}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "StaticMatrix",
  components: {Icon},
  props: {
    matrix: {
      type: Array,
      default: [[]]
    },
    isOneRow: {
      type: Boolean,
      default: false
    },
    axes: {
      type: Object,
      default: {
        x: 'q',
        y: 'a'
      }
    },
    answer: {
      type: Number,
      default: -1
    },
    styledLike: {
      type: String,
      validator(val) {
        return ["default", "success", "warning", "danger", "description", "link"].includes(val)
      },
      default: "default"
    }
  },
  computed: {
    cols: function () {
      if (this.matrix)
        if (this.matrix[0])
          return this.matrix[0].length
        else
          return 0
    },
    rows: function () {
      if (this.matrix)
        return this.matrix.length
      else
        return 0
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 1px;
  min-width: 100%;
  max-width: 100%;
  padding-bottom: 1px;
  overflow-x: auto;

  .matrix {
    margin: 0 auto;
    border-collapse: collapse;

    button {
      width: 40px;
      height: 40px;
      cursor: pointer;
      background-color: $default-background;
      border: 1px solid $default-font;
      border-radius: var(--border-radius-small);
      transition: all 0.3s ease;
      position: relative;

      &:hover {
        background-color: darken($default-background, 10%);
      }

      &.remove, &.add {
        &::before, &::after {
          position: absolute;
          content: "";
          border: 2px solid $danger-font;
          border-radius: 2px;
          height: 80%;
          top: 10%;
          left: calc(50% - 2px);
        }
      }

      &.add {
        &::before, &::after {
          border: 2px solid $success-font !important;
          transform: rotate(0deg);
        }

        &::after {
          transform: rotate(90deg);
        }
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }

    .item {
      text-align: center;
      min-width: 50px;
      width: 50px;
      height: 50px;
      font-weight: 700;
      font-size: var(--p);

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0;
      }

      &.head, &.aside {
        font-size: var(--p);
        color: $default-font;
        border: 1px solid $default-font;
        background-color: $default-background;
      }

      &.value {
        padding: 0;
        border: 1px solid $default-font;

        & span {
          text-align: center;
          background-color: $default-background;
          border: none;

          &.marked {
            &.success {
              background-color: $success-font;
              color: $light-font
            }

            &.warning {
              background-color: $warning-font;
            }

            &.danger {
              background-color: $danger-font;
              color: $light-font
            }

            &.description {
              background-color: $description-font;
              color: $light-font
            }

            &.link {
              background-color: $link-light;
            }
          }
        }
      }

      &.w-btn {
        padding: 0 !important;
        text-align: center;
      }

      &.edit {
        padding: 0 !important;
      }
    }
  }
}
</style>

