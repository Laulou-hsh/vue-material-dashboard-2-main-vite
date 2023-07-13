<template>
  <span class="badge" :class="getClasses(variant, color, size, circle, floating)">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'success',
  },
  variant: {
    type: String,
    default: 'fill',
  },
  circle: {
    type: Boolean,
    default: false,
  },
  floating: {
    type: Boolean,
    default: false,
  },
})

function getClasses(variant, color, size, circle, floating) {
  const colorValue = variant === 'gradient' ? 'bg-gradient-success' : 'badge-success'
  const sizeValue = size ? `badge-${size}` : null
  const circleValue = circle ? 'badge-circle' : null
  const floatingValue = floating ? 'badge-floating' : null

  return `${colorValue} ${sizeValue} ${circleValue} ${floatingValue}`
}
</script>
