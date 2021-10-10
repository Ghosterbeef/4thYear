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
        <td class="item aside">{{ axes.y }}{{ answer < 0 ? i + 1 : answer }}</td>
        <td class="item value"
            v-for="(item,j) in row"
            :key="`${i}+${j}`"
        >
                    <span v-if="typeof item !== 'object'">
                        {{ Math.floor(item.toFixed(5) * 100) / 100 }}
                    </span>
          <span v-else
                class="marked"
                :class="[styledLike]">
                        {{ Math.floor(item.value.toFixed(5) * 100) / 100 }}
                    </span>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="matrix" v-else>
      <thead>
      <tr>
        <th class="item head" v-for="(item,i) in this.matrix" :key="`h${i}`">
          {{ axes.x }}{{ i + 1 }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="item value" :class="[styledLike]" v-for="(item, i) in matrix" :key="`r${i}`">
                    <span v-if="typeof item !== 'object'">
                        {{ Math.floor(item.toFixed(5) * 100) / 100 }}
                    </span>
          <span v-else
                class="marked"
                :class="[styledLike]"
          >
                        {{ Math.floor(item.value.toFixed(5) * 100) / 100 }}
                    </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "StaticMatrix",
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
  overflow-x: auto;
  padding-bottom: 1px;

  .matrix {
    margin: 0 auto;
    border-collapse: collapse;

    .item {
      height: var(--matrix-item-size);
      width: var(--matrix-item-size);
      min-width: var(--matrix-item-size);
      text-align: center;
      font-weight: 700;
      font-size: var(--p);

      &:not(.empty) {
        color: var(--title-font);
        border: 1px solid var(--default-font);
        background-color: var(--default-background);
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      &.value {
        color: var(--description-font);

        .marked {
          &.success {
            color: var(--success-font);
            background-color: var(--success-background);
          }

          &.warning {
            color: var(--warning-font);
            background-color: var(--warning-background);
          }

          &.danger {
            color: var(--danger-font);
            background-color: var(--danger-background);
          }

          &.description {
            color: var(--description-font);
            background-color: var(--description-background);
          }

          &.link {
            color: var(--light-font);
            background-color: var(--link-light);
          }
        }
      }
    }
  }
}
</style>

