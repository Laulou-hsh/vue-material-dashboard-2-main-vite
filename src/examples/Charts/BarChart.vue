<template>
  <div class="chart">
    <div :id="id" class="chart-canvas" :style="{width: '100%', height: height + 'px'}"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'BarChart',
  props: {
    id: {
      type: String,
      default: 'bar-chart',
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
    const echart = echarts.init(chartDom)
    window.onresize = () => {
      setTimeout(echart.resize, 200)
    }
    const options = {
      grid: {
        left: '3%',
        right: '3%',
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
          padding: 5,
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
          type: 'bar',
          barMaxWidth: 6,
          itemStyle: {
            borderWidth: 0,
            borderRadius: 4,
            color: 'rgba(255, 255, 255, .8)',
          },
        },
      ],
    }
    options && echart.setOption(options)
  },
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chart-canvas {
  width: 100%;
}
</style>
