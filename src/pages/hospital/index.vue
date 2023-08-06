<template>
  <div class="hospital">
    <!-- 左侧菜单部分 -->
    <div class="menu">
      <!-- 顶部医院标题和图标 -->
      <div class="top">
        <el-icon><HomeFilled /></el-icon>
        <p>/医院</p>
      </div>
      <!-- 左侧惨淡 -->
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="activeNum"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <el-icon><UserFilled /></el-icon>
              <span>预约挂号</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>医院详情</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <span>预约须知</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><Remove /></el-icon>
              <span>停诊信息</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon><Search /></el-icon>
              <span>查询/取消</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20" :style="{background:'red'}"> 我是右侧的内容 </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  HomeFilled,
  UserFilled,
  Document,
  Menu as IconMenu,
  Remove,
  Search,
} from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";

let activeNum = ref<Number>(1);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(`${activeNum == key ? true : false}`, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
// 主容器
.hospital {
  // 左侧菜单部分
  .menu {
    display: flex;
    // 医院图标和标题
    .top {
      display: flex;
      p {
        display: inline;
      }
    }

    .tac {
      // 左侧菜单属性
      .el-menu {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10%;

        // 左侧菜单标题
        .el-menu-item:nth-child(1) {
          font-family: Helvetica Neue, Helvetica, Arial, PingFang SC,
            Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei,
            sans-serif;
          font-weight: bold; /* 设置为粗体 */
          font-size: 16px;
          color: #4490f1;
        }

        .el-menu-item {
          margin-top: 10%;
        }
      }
    }
  }
}

// 高亮样式
.active {
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB,
    Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  font-weight: bold; /* 设置为粗体 */
  font-size: 16px;
  color: #4490f1;
}
</style>
