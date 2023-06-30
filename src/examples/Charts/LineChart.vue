<template>
  <div class="chart">
    <div :id="id" class="chart-canvas" :style="{width: '100%', height: height + 'px'}"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'LineChart',
  props: {
    id: {
      type: String,
      default: 'line-chart2',
    },
    height: {
      type: [Number, String],
      default: '170',
    },
    chart: {
      type: Object,
      required: true,
      xAxislDatas: Array,
      datasets: {
        label: String,
        data: Array,
      },
    },
  },
  mounted() {
    const chartDom = document.getElementById(this.id)
    const chart = echarts.init(chartDom)
    let option

    option = {
      grid: {
        left: '8%',
        right: '8%',
        bottom: '8%',
        top: '10%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: {
          color: '#fff',
        },
        borderWidth: 0,
      },
      xAxis: {
        type: 'category',
        data: this.chart.xAxislDatas,
        axisLine: {
          show: false, // 隐藏X轴线
        },
        axisTick: {
          show: false, // 隐藏X轴刻度线
        },
        axisLabel: {
          color: '#f8f9fa',
          padding: 10,
          fontSize: 14,
          fontWeight: 300,
          fontFamily: 'Roboto',
          lineHeight: 2,
        },
        splitLine: {
          show: true, // 显示X轴网格线
          lineStyle: {
            color: 'rgba(255, 255, 255, .2)',
            type: 'dashed',
          },
        },
      },
      yAxis: {
        type: 'value',
        splitNumber: 3, // Y轴分段数
        axisLine: {
          show: false, // 隐藏Y轴线
        },
        axisTick: {
          show: false, // 隐藏Y轴刻度线
        },
        axisLabel: {
          color: '#fff',
          padding: 10,
          fontSize: 14,
          fontWeight: 300,
          fontFamily: 'Roboto',
          lineHeight: 2,
        },
        splitLine: {
          show: true, // 显示Y轴网格线
          lineStyle: {
            color: 'rgba(255, 255, 255, .2)',
            type: 'dashed',
          },
        },
        min: 0,
        max:
          Math.max(...this.chart.datasets.data) < 100
            ? Math.max(...this.chart.datasets.data) + 10
            : Math.ceil(Math.max(...this.chart.datasets.data) / 100) * 100,
      },
      series: [
        {
          name: this.chart.datasets.label,
          data: this.chart.datasets.data,
          type: 'type',
          barMaxWidth: 6,
          itemStyle: {
            borderWidth: 0,
            borderRadius: 5,
            color: 'rgba(255, 255, 255, .8)',
          },
          lineStyle: {
            color: 'rgba(255, 255, 255, .8)',
          },
          areaStyle: {
            color: 'transparent',
          },
        },
      ],
    }

    option && chart.setOption(option)
  },
}
</script>

<style scoped>
.chart-canvas {
  width: 100%;
}
</style>
