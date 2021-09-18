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
        :options="innerOptions"
    />
    <teleport to="body">
      <span ref="cursor" class="cursor"/>
    </teleport>
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
      innerOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              color: "hsl(0, 0%, 70%)"
            },
            beginAtZero: true,
            grace: '5%',
            title: {
              display: true,
              text: 'Коммиты'
            }
          },
          x: {
            grid: {
              color: "hsl(0, 0%, 70%)"
            },
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
      this.innerOptions = {
        ...this.innerOptions,
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
  background-color: var(--cursor-color);
  position: absolute;
}
</style>
