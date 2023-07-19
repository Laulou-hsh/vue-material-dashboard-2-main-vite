<template>
  <div class="container-fluid py-4">
    <AuthorsTable />
    <ProjectsTable />
  </div>
</template>

<script setup>
import AuthorsTable from './components/TableCard/AuthorsTable.vue'
import ProjectsTable from './components/TableCard/ProjectsTable.vue'
</script>
