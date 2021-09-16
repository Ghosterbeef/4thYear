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
import Icon from "./Icon";

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

    .item {
      text-align: center;
      min-width: var(--matrix-item-size);
      width: var(--matrix-item-size);
      height: var(--matrix-item-size);
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
        color: var(--default-font);
        border: 1px solid var(--default-font);
        background-color: var(--default-background);
      }

      &.value {
        padding: 0;
        border: 1px solid var(--default-font);

        & span {
          text-align: center;
          background-color: var(--default-background);
          border: none;

          &.marked {
            &.success {
              background-color: var(--success-font);
              color: var(--light-font)
            }

            &.warning {
              background-color: var(--warning-font);
            }

            &.danger {
              background-color: var(--danger-font);
              color: var(--light-font)
            }

            &.description {
              background-color: var(--description-font);
              color: var(--light-font)
            }

            &.link {
              background-color: var(--link-light);
            }
          }
        }
      }
    }
  }
}
</style>

