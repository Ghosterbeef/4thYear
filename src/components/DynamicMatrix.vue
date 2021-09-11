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
        <th class="item empty" v-if="editMode"/>
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
          <input v-model.number="matrix[i][j]" type="text" @input="$emit('update:modelValue', matrixToWork)">
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
          p{{ i+1 }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="item empty" v-if="editMode"/>
        <td class="item empty"/>
        <td class="item value" v-for="(item, i) in matrix" :key="`r${i}`">
          <input v-model.number="matrix[i]" type="text" @input="$emit('update:modelValue', matrixToWork)">
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
        this.matrix[0].forEach(item => {
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
        this.matrix[0].forEach(item => {
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

      input {
        width: 100%;
        height: 100%;
        padding: 0;
      }

      &.head, &.aside {
        font-size: var(--p);
        border: 1px solid $default-font;
        background-color: $default-background;
      }

      &.value {
        padding: 0;
        border: 1px solid $default-font;

        & input {
          text-align: center;
          background-color: $default-background;
          border: none;
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
