// 轮播图组件
<template>
  <el-carousel height='350px' :interval="4000">
    <el-carousel-item v-for="item, in 4" :key="item">
      <img src="../../../assets//images/web-banner-1.png" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss" scoped>
/* 在这里添加组件的样式 */
img {
  width: 100%;
  height: 350px;
}
</style>