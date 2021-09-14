<template>
  <div
      ref="wrapper"
      class="chart_wrapper"
      @mouseenter="enter"
      @mousemove="move($event)"
      @mouseleave="leave"
  >
    <LineChart
        :chart-data="data"
        :options="options"
    />
    <span ref="cursor" class="cursor"/>
  </div>
</template>

<script>
import {LineChart} from "vue-chart-3";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables)
export default {
  name: "LineChartWrapper",
  components: {LineChart},
  props: {
    data: {
      required: true
    },
    options: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grace: '5%',
            title: {
              display: true,
              text: 'Коммиты'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Дата'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },
  created() {
    if (this.$props.options) {
      this.options = {
        ...this.options,
        ...this.$props.options
      }
    }
  },
  methods: {
    enter: function () {
      this.$refs.cursor.style.display = 'inline-block';
      this.$refs.wrapper.style.cursor = "none"
    },
    move: function (e) {
      this.$refs.cursor.style.top = e.pageY + "px"
      this.$refs.cursor.style.left = e.pageX + "px"
    },
    leave: function () {
      this.$refs.cursor.style.display = 'none';
      this.$refs.wrapper.style.cursor = "default"
    }
  }
}
</script>

<style scoped lang="scss">
.cursor {
  pointer-events: none;
  display: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: $cursor-color;
  position: absolute;
}
</style>
