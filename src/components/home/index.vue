<template>
  <div class="wrapper">
    <div class="ui list">
      <div class="item dir-item">
        <i class="folder icon"></i>
        <div class="content">
          <div class="header">src</div>
        </div>
      </div>
      <div class="item dir-item">
        <i class="folder icon"></i>
        <div class="content">
          <div class="header">dist</div>
        </div>
      </div>
      <div class="item dir-item">
        <i class="file icon"></i>
        <div class="content">
          <div class="header">semantic.json</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.dir-item {
  cursor: pointer;
}

.dir-item:hover > .content {
  text-decoration: underline;
}
</style>
