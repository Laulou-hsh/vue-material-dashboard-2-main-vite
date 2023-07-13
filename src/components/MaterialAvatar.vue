<template>
  <div class="avatar" :class="getSize(size)">
    <img :src="img" :alt="alt" :class="[getClasses(shadow, circular, borderRadius)]" />
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  shadow: {
    type: String,
    default: '',
  },
  borderRadius: {
    type: String,
    default: '',
  },
  circular: {
    type: Boolean,
    default: false,
  },
})

function getSize(size) {
  return size ? `avatar-${size}` : null
}

function getClasses(shadow, circular, borderRadius) {
  let shadowValue

  if (shadow) {
    shadowValue = shadow === 'regular' ? 'shadow' : `shadow-${shadow}`
  } else {
    shadowValue = null
  }

  const circularValue = circular ? 'rounded-circle' : null
  const borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null

  return `${shadowValue} ${circularValue} ${borderRadiusValue}`
}
</script>
