<template>
  <el-card @click="goDetail" shadow="hover" class="box-card">
    <div class="container">
      <div class="left">
        <div class="name">{{ hospitaInfo.hosname }}</div>
        <div class="tip">
          <div class="level">
            <el-icon>
              <Histogram />
            </el-icon><span>{{ hospitaInfo.param.hostypeString }}</span>
          </div>
          <div class="time">
            <el-icon>
              <Timer />
            </el-icon>
            <span>{{ hospitaInfo.bookingRule.releaseTime }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <!--  -->
        <img :src="`data:imagejpeg;base64,${hospitaInfo.logoData}`" alt="医院logo" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";
defineProps(["hospitaInfo"]);
// 初始化路由 创建路由对象
let $router = useRouter();
// 点击卡片信息的回调
const goDetail = () =>{
  $router.push({path:'/hospital/register'})
}
onMounted(() => { });
</script>
<style lang="scss" scoped>
.container {
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  .left {
    width: 60%;

    .tip {
      color: #999;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;

      span {
        margin-left: 5px;
      }
    }
  }

  .right {
    img {
      height: 80px;
      width: 80px;
      border-radius: 40px;
      margin-left: 12px;
      transition: all .2s linear;
    }
  }
}
</style>
