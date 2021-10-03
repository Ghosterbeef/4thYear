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
    <teleport to="#content">
      <span ref="cursor" class="cursor"/>
    </teleport>
  </div>
</template>

<script>
import {LineChart} from "vue-chart-3";
import {Chart, registerables} from 'chart.js';
import {merge} from 'lodash'

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
              text: 'Коммиты',
              color: "hsl(0, 0%, 70%)",
              font: {
                size: 16,
                family: 'sans-serif',
                weight: 'bold',
              }
            },
            ticks: {
              color: "hsl(0, 0%, 70%)",
            }
          },
          x: {
            grid: {
              color: "hsl(0, 0%, 70%)"
            },
            title: {
              display: true,
              text: 'Дата',
              color: "hsl(0, 0%, 70%)",
              font: {
                size: 16,
                family: 'sans-serif',
                weight: 'bold',
              }
            },
            ticks: {
              color: "hsl(0, 0%, 70%)",
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
      this.innerOptions = merge(this.innerOptions, this.$props.options)
    }
  },
  methods: {
    enter: function () {
      this.$refs.cursor.style.display = 'inline-block';
      this.$refs.wrapper.style.cursor = "none"
    },
    move: function (e) {
      const bounds = e.target.closest('#content').getBoundingClientRect();
      this.$refs.cursor.style.left = e.pageX - bounds.left + "px"
      this.$refs.cursor.style.top = e.pageY + e.target.closest('#content').scrollTop - bounds.top + "px"
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
  transform: translate(-50%, -50%);
}
</style>
