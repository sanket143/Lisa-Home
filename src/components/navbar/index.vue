<template>
  <div>
    <sui-tab active-index="2">
      <sui-tab-pane icon="users" title="Circle">
        Circle
      </sui-tab-pane>
      <sui-tab-pane label="0" title="Box">
        Box
      </sui-tab-pane>
      <sui-tab-pane icon="check" label="14" title="Triangle">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
}
</style>