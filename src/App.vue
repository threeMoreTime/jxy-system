<template>
  <div class="container">
      <Header/>
      <div id="content">
        <!-- 路由展示位置 -->
        <router-view></router-view>
      </div>
      
      <Floor/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container{

  display: flex;
  flex-direction: column;
  align-items: center;
  // 轮播图容器
  #content{
    // 避免遮挡Header组件
    margin-top: 70px;
  min-width: 1200px;
  min-height: 700px;
}

}

</style>