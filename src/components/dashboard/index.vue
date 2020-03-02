<template>
  <div class="wrapper">
    <sui-tab :menu="{ secondary: true }">
      <sui-tab-pane title="Home" :attached="false">
        <home />
      </sui-tab-pane>
      <sui-tab-pane title="Bookmarks" :attached="false">
        Bookmarks
      </sui-tab-pane>
      <sui-tab-pane title="Triangle" :attached="false">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>

import home from '../home/index.vue'

export default {
  name: 'dashboard',
  components: {
    home
  }
}
</script>

<style scoped>
.wrapper {
  padding: 10px;
}
</style>
