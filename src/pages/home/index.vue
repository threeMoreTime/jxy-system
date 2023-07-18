<template>
    <div>
        <!-- 轮播图子组件 -->
        <Carousel />
        <!-- 搜索框组件 -->
        <Search />
        <!-- 医院信息列表 -->
        <el-row gutter="20">
            <el-col :span="20">
                <Selectlist />
                <!-- 医院信息卡片 -->
                <div class="hospitalList">

                    <Card class="item" v-for="(item, index) in hospitalArr" :key="index" :hospitaInfo="item" />

                    <!-- 分页器 -->
                </div>
            </el-col>
            <el-col :span='4'>
                右边的内容
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
// 引入子组件
import Carousel from './carouselmap/index.vue'
import Search from './search/index.vue'
import Selectlist from './selectlist/index.vue'
import Card from './card/index.vue'
// 引入请求接口
import { reqHospital } from '@/api/home'
import { onMounted, ref } from 'vue';
// 引入element库
import { ElMessage } from "element-plus";

// 分页器页码
let pageNo = ref<number>(1);
// 一页几条数据
let pageSize = ref<number>(10);
// 存放医院数据的空数组
let hospitalArr = ref([]);
// 医院的个数
let totalNum = ref(0);
onMounted(() => {
    getHospitalInfo();
})

const getHospitalInfo = async () => {
    let result: any = await reqHospital(pageNo.value, pageSize.value);
    if (result.code == 200) {
        // 医院的全部数据
        pageSize.value = result.data.content;
        // 医院的个数
        totalNum.value = result.data.totalElements;

    } else {
        return Promise.reject(new Error('error'))
    }

}
</script>

<style lang="scss" scoped>
.hospitalList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin: 10px 0px;
    }
}
</style>