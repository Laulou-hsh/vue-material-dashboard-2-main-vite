<template>
  <div class="py-4 container-fluid">
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <mini-statistics-card
            v-for="{title, detail, icon} of MiniStatisticsData"
            :key="title.text"
            :title="title"
            :detail="detail"
            :icon="icon"
          />
        </div>
        <div class="row mt-4">
          <div class="col-lg-4 col-md-6 mt-4">
            <ChartHolderCard
              title="Website Views"
              subtitle="Last Campaign Performance"
              update="campaign sent 2 days ago"
            >
              <BarChart
                :chart="{
                  xAxislDatas: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                  datasets: {
                    label: 'Sales',
                    data: [50, 20, 10, 22, 50, 10, 40],
                  },
                }"
              />
            </ChartHolderCard>
          </div>
          <div class="col-lg-4 col-md-6 mt-4">
            <ChartHolderCard
              title="Daily Sales"
              subtitle="(<span class='font-weight-bolder'>+15%</span>) increase in today sales."
              update="updated 4 min ago"
              color="success"
            >
              <LineChart
                :chart="{
                  xAxislDatas: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: {
                    label: 'Mobile apps',
                    data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                  },
                }"
              />
            </ChartHolderCard>
          </div>
          <div class="col-lg-4 mt-4">
            <ChartHolderCard
              title="Completed Tasks"
              subtitle="Last Campaign Performance"
              update="just updated"
              color="dark"
            >
              <LineChart
                id="tasks-chart"
                :chart="{
                  xAxislDatas: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  datasets: {
                    label: 'Mobile apps',
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                  },
                }"
              />
            </ChartHolderCard>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <project-card
        :key="ProjectCardData.projects.index"
        :title="ProjectCardData.title"
        :description="ProjectCardData.description"
        :headers="ProjectCardData.headers"
        :projects="ProjectCardData.projects"
      />
      <timeline />
    </div>
  </div>
</template>

<script setup>
import ChartHolderCard from './components/ChartHolderCard.vue'
import BarChart from '@/examples/Charts/BarChart.vue'
import LineChart from '@/examples/Charts/LineChart.vue'
import MiniStatisticsCard from './components/MiniStatisticsCard/MiniStatisticsCard.vue'
import ProjectCard from './components/ProjectCard/ProjectCard.vue'
import Timeline from './components/Timeline/Timeline.vue'
import MiniStatistics from './components/MiniStatisticsCard/MiniStatisticsData.json'
import Project from './components/ProjectCard/ProjectCardData.json'

const MiniStatisticsData = MiniStatistics.data
const ProjectCardData = Project.data
</script>
