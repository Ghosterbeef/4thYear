<template>
  <div class="wrapper">
    <table class="matrix">
      <thead>
      <tr>
        <th class="item empty"/>
        <th class="item head" v-for="i in cols" :key="`h${i}`">
          <button></button>
          q{{ i }}
        </th>
        <th>
          <button class="add"></button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, i) in matrix" :key="`r${i}`">
        <td class="item aside">a{{ i }}
          <button></button>
        </td>
        <td class="item value" v-for="(item,j) in row" :key="`${i}+${j}`">
          <input v-model="matrix[i][j]" type="text">
        </td>
      </tr>
      <tr>
        <td>
          <button class="add"></button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Matrix",
  props: {
    array: {
      type: Array,
      default: [[]]
    },
    isEqual: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      matrix: this.$props.array
    }
  },
  computed: {
    cols: function () {
      return this.matrix[0].length
    },
    rows: function () {
      return this.matrix.length
    }
  }
}
</script>

<style scoped lang="scss">
.matrix {
  padding: 40px 0 40px 40px;

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &::before, &::after {
      position: absolute;
      content: "";
      border: 2px solid $danger-font;
      border-radius: 2px;
      height: 80%;
      top: 10%;
      left: calc(50% - 2px);
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
    padding: var(--padding-top-bottom-small);
    min-width: 40px;
    width: 40px;
    height: 40px;

    input {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }

  thead {
    tr {
      th {
        position: relative;

        & button {
          left: 0;
          top: -100%;
        }
      }
    }
  }

  tbody {
    tr {
      position: relative;

      & button {
        right: 100%;
        top: 0;
      }
    }
  }
}
</style>
