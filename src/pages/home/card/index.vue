<template>
  <el-card shadow="hover" class="box-card">
    <div class="container">
      <div class="left">
        <div class="name">北京人民医院</div>
        <div class="tip">
          <div class="level"><el-icon>
              <Histogram />
            </el-icon><span>三级甲等</span> </div>
          <div class="time"><el-icon><Timer /></el-icon>
          <span>2023-7-7</span> </div>
        </div>
      </div>
      <div class="right">
        <img src="../../../assets//images/logo.png" alt="">
      </div>

    </div>
  </el-card>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>


.container {
 
  display: flex;
  justify-content: space-between;

  .left {
    width: 60%;

    .tip {
      color: #999;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      span{
        margin-left: 5px;
      }
    }

  }

  .right {
    img {
      height: 80px;
      width: 80px;
    }
  }
}</style>