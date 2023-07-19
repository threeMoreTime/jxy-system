<template>
  <el-card shadow="hover" class="box-card">
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
defineProps(["hospitaInfo"]);

onMounted(() => { });
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
