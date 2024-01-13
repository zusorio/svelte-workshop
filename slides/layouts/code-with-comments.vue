<template>
  <div class="slidev-layout default">
    <slot />

    <div class="grid custom-grid gap-4">
      <slot name="code" />
      <slot name="comments" />
    </div>
  </div>
</template>

<style scoped>
.custom-grid {
  grid-template-columns: 1fr 1.4fr;
}
</style>
