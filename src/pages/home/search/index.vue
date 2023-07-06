<template>
  <div class="search-bar">
    <el-input  placeholder="请输入搜索内容" clearable  />
      <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>

</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script >


<style lang="scss" scoped>
.search-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0px;

  .el-input {
    width: 600px;
  }
}
</style>