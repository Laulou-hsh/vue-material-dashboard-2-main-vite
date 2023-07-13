<template>
  <div class="alert text-white" role="alert" :class="getClasses(color, dismissible)">
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      {{ icon && '&nbsp;' }}
      <slot />
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'success',
  },
  icon: {
    type: String,
    default: '',
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
})

function getClasses(color, dismissible) {
  const colorValue = color ? `alert-${color}` : null
  const dismissibleValue = dismissible ? 'alert-dismissible fade show' : null
  return `${colorValue} ${dismissibleValue}`
}

const getIcon = (icon) => {
  return icon ? icon : null
}
</script>
