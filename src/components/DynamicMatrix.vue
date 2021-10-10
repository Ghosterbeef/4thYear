<template>
  <div class="wrapper">
    <table class="matrix" v-if="!isOneRow">
      <thead>
      <tr v-if="editMode">
        <th class="item edit" v-if="isEditable">
          <button class="edit" @click="editMode = !editMode">
            <Icon icon="edit" styled-like="description"/>
          </button>
        </th>
        <th class="item empty" v-else/>
        <th class="item empty"/>
        <th class="item w-btn" v-for="i in cols" :key="`h${i}`" v-if="editMode">
          <button class="remove" @click="removeCol(i-1)"/>
        </th>
        <th class="item w-btn" v-if="editMode">
          <button class="add" @click="addCol"/>
        </th>
      </tr>
      <tr>
        <th class="item edit" v-if="isEditable && !editMode">
          <button class="edit" @click="editMode = !editMode">
            <Icon icon="edit" styled-like="description"/>
          </button>
        </th>
        <th class="item empty" v-if="editMode || !isEditable"/>
        <th class="item empty" v-if="editMode"/>
        <th class="item head" v-for="i in cols" :key="`h${i}`">
          q{{ i }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, i) in matrix" :key="`r${i+1}`">
        <td class="item w-btn" v-if="editMode">
          <button class="remove" @click="removeRow(i)"/>
        </td>
        <td class="item aside">a{{ i + 1 }}</td>
        <td class="item value"
            v-for="(item,j) in row"
            :key="`${i}+${j}`"
        >
          <input v-model.number="matrix[i][j]" type="number" inputmode="decimal"
                 @input="$emit('update:modelValue', matrixToWork)">
        </td>
      </tr>
      <tr>
        <td class="item w-btn" v-if="editMode">
          <button class="add" @click="addRow"/>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="matrix" v-else>
      <thead>
      <tr v-if="editMode">
        <th class="item empty"/>
        <th class="item edit" v-if="isEditable">
          <button class="edit" @click="editMode = !editMode">
            <Icon icon="edit" styled-like="description"/>
          </button>
        </th>
        <th class="item empty" v-else/>
        <th class="item w-btn" v-for="(item,i) in this.matrix" :key="`h${i}`" v-if="editMode">
          <button class="remove" @click="removeCol(i)"/>
        </th>
        <th class="item w-btn" v-if="editMode">
          <button class="add" @click="addCol"/>
        </th>
      </tr>
      <tr>
        <th class="item edit" v-if="isEditable && !editMode">
          <button class="edit" @click="editMode = !editMode">
            <Icon icon="edit" styled-like="description"/>
          </button>
        </th>
        <th class="item empty" v-if="editMode"/>
        <th class="item empty" v-if="editMode"/>
        <th class="item head" v-for="(item,i) in this.matrix" :key="`h${i}`">
          p{{ i + 1 }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="item empty" v-if="editMode"/>
        <td class="item empty"/>
        <td class="item value" v-for="(item, i) in matrix" :key="`r${i}`">
          <input v-model.number="matrix[i]" type="number" inputmode="decimal"
                 @input="$emit('update:modelValue', matrixToWork)">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "DynamicMatrix",
  components: {Icon},
  emits: [
    'update:modelValue'
  ],
  props: {
    modelValue: {
      type: Array,
      default: [[]]
    },
    isEqual: {
      type: Boolean,
      default: false
    },
    isEditable: {
      type: Boolean,
      default: false
    },
    isOneRow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editMode: false,
      matrix: this.$props.modelValue
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
    matrixToWork: function () {
      if (this.$props.isOneRow) {
        return this.matrix.filter(item => item !== '')
      }
      if (this.matrix) {
        return this.matrix.filter(row => !row.includes(''))
      } else return 0
    }
  },
  methods: {
    addCol: function () {
      if (this.$props.isOneRow) {
        this.matrix.push('')
        return
      }
      if (!this.cols) {
        this.matrix.push([])
      }
      this.matrix.forEach((row) => {
        row.push('')
      })
      if (this.$props.isEqual) {
        this.matrix.push([])
        this.matrix[0].forEach(() => {
          this.matrix[this.matrix.length - 1].push('')
        })
      }
    },
    removeCol: function (key) {
      if (this.$props.isOneRow) {
        this.matrix.splice(key, 1)
        return
      }
      this.matrix.forEach(
        (row) => {
          row.splice(key, 1)
        }
      )
      if (this.$props.isEqual) {
        this.matrix.splice(key, 1)
      }
    },
    addRow: function () {
      if (!this.$props.isEqual) {
        this.matrix.push([])
        this.matrix[0].forEach(() => {
          this.matrix[this.matrix.length - 1].push("")
        })
      } else {
        this.addCol()
      }
    },
    removeRow: function (key) {
      if (!this.$props.isEqual) {
        this.matrix.splice(key, 1)
      } else {
        this.removeCol(key)
      }
    }
  }
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

    button {
      position: relative;
      width: 40px;
      height: 40px;
      border: 1px solid var(--default-font);
      border-radius: var(--border-radius-small);
      background-color: var(--default-background);
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: var(--default-background-action)
      }

      &.remove, &.add {
        &::before, &::after {
          position: absolute;
          top: 10%;
          left: calc(50% - 2px);
          content: "";
          height: 80%;
          border-radius: 2px;
          border: 2px solid var(--danger-font);
        }

        &::before {
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg)
        }
      }

      &.add {
        &::before, &::after {
          transform: rotate(0deg);
          border: 2px solid var(--success-font);
        }

        &::after {
          transform: rotate(90deg);
        }
      }
    }

    .item {
      width: var(--matrix-item-size);
      height: var(--matrix-item-size);
      min-width: var(--matrix-item-size);
      font-weight: 700;
      text-align: center;
      font-size: var(--p);
      color: var(--title-font);

      &:not(.empty):not(.edit):not(.w-btn) {
        border: 1px solid var(--default-font);
        background-color: var(--default-background);

        & input {
          width: 100%;
          height: 100%;
          padding: 0;
          border: none;
          text-align: center;
          color: var(--title-font);
          background-color: var(--default-background);

          &::-webkit-inner-spin-button {
            margin: 0;
            -webkit-appearance: none;
          }
        }
      }
    }
  }
}
</style>
