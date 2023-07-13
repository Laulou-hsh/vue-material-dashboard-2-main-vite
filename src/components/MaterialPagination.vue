<template>
  <ul class="pagination" :class="getClasses(color, size)">
    <slot />
  </ul>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'success',
  },
  size: {
    type: String,
    default: 'md',
  },
})

function getClasses(color, size) {
  const colorValue = color ? `pagination-${color}` : null
  const sizeValue = size ? `pagination-${size}` : null

  return `${colorValue} ${sizeValue}`
}
</script>
