<template>
    <div>
        <!-- 轮播图子组件 -->
        <Carousel />
        <!-- 搜索框组件 -->
        <Search />
        <!-- 医院信息列表 -->
        <el-row gutter="20">
            <el-col :span="20">
                <!-- 等级列表 -->
                <Selectlist @getLevel="getLevel" />
                <!-- 地区列表 -->
                <region @getRegion="getRegion" />
                <!-- 医院信息卡片 -->
                <div class="hospitalList" v-if="hospitalArr.length!==0">
                    <Card class="item" v-for="(item, index) in hospitalArr" :key="index" :hospitaInfo="item" />
                    <!-- 分页器 -->
                    <el-pagination @size-change="handleSizeChange" @current-change="currentChange" :current-page="pageNo"
                        :page-sizes="[2, 4, 6, 10]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                        :total="totalNum">
                    </el-pagination>
                </div>
                <el-empty v-else description="无符合条件医院信息"></el-empty>
            </el-col>
            <el-col :span='4'>
                <Right />
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
import region from './region/index.vue'
import Right from './right/index.vue'
// 引入请求接口
import { reqHospital, reqExportData } from '@/api/home'
import { onMounted, ref } from 'vue';
// 引入element库
import { ElMessage } from "element-plus";
// 引入type规范
import { Content, HospTailResponseData, HospitalLevelAndRegionArr } from '@/api/home/type'
// 分页器页码
let pageNo = ref<number>(1);
// 一页几条数据
let pageSize = ref<number>(4);
// 存放医院数据的空数组
let hospitalArr = ref<Content>([]);
// 医院的个数
let totalNum = ref<number>(0);
// 等级参数和地区参数
let hostype = ref<string>((""))
let districtCode = ref<string>((""))

onMounted(() => {
    getHospitalInfo();
})

// 发送获取医院信息请求
const getHospitalInfo = async () => {
    let result: HospTailResponseData = await reqHospital(pageNo.value, pageSize.value, hostype.value, districtCode.value);
    if (result.code == 200) {
        // 医院的全部数据
        hospitalArr.value = result.data.content;
        // 医院的个数
        totalNum.value = result.data.totalElements;
    } else {
        return Promise.reject(new Error('error'))
    }
}

// 修改一页多少数据重新发送请求
const handleSizeChange = (size: number) => {
    pageSize.value = size;
    getHospitalInfo();
}

// 翻页重新获取列表数据
const currentChange = (page: number) => {
    pageNo.value = page;
    getHospitalInfo();
}

// 获取selectlist子组件传递的参数
const getLevel = (level: string) => {
    // 修改等级参数后重新发送请求
    hostype.value = level;
    getHospitalInfo();
}

// 获取region子组件传递的参数
const getRegion = (Region: string) => {
    // 修改地区参数后重新发送请求
    districtCode.value = Region;
    getHospitalInfo();
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