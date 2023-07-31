<template>
  <div class="search-bar">
    <el-autocomplete
      @select="goDetail"
      :trigger-on-focus="false"
      clearable
      placeholder="请输入医院名称"
      v-model="message"
      :fetch-suggestions="showInfo"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
  <!--:trigger-on-focus="false"取消默认触发   :fetch-suggestions 输入完信息自动回调一次 -->
</template>

<script setup lang="ts">
import { onMounted, ref, defineComponent } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { reqSearchInfo } from "@/api/home";
import { HospTailInfo } from "@/api/type";
defineComponent({
  name: "Search",
});
// 搜索框输入医院名称信息
let message = ref<string>("");
// 初始化路由
//创建路由器对象
let $router = useRouter();
onMounted(() => {
  console.log($router);
});
// 点击回调
const goDetail = (item: any) => {
  $router.push({path:'/hospital',query:{item:item}})
};
// 输入信息自动回调方法
const showInfo = async (keyword: string, cb: any) => {
  let arr: HospTailInfo = await reqSearchInfo(keyword);
  console.log(arr);
  // 整理cb所需要的参数 key值必须是value
  let valueData = arr.data.map((item) => {
    return { 
      value: item.hosname,
      hoscode:item.hoscode,
      id:item.id, 
    };
  });
  // 显示弹出框中的数据
  cb(valueData);
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
