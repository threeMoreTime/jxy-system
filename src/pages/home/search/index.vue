<template>
  <div class="search-bar">
    <el-autocomplete
      @select="goDetail"
      :trigger-on-focus="false"
      clearable
      placeholder="请你输入医院名称"
      v-model="message"
      :fetch-suggestions="showInfo"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
  <!--:trigger-on-focus首次点击是否触发   :fetch-suggestions 输入完信息自动回调一次 -->
</template>

<script setup lang="ts">
import { onMounted, ref,defineComponent } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { reqSearchInfo } from "@/api/home";
defineComponent({
  name: "Search",
});
// 搜索框输入信息
let message = ref<string>("");
// 初始化路由
//创建路由器对象
let $router = useRouter();
onMounted(() => {});
const goDetail = async () => {
  let arr: any = await reqSearchInfo(message.value);
  console.log(arr);
};
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
