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
                    <div class="item" v-for="item in 10" :key="item">
                        <Card />
                      
                        
                    </div>
                      <!-- 分页器 -->
                        
                      <el-pagination background layout="prev, pager, next" :total="1000" />
                </div>
            </el-col>
            <el-col :span='4'>
                右边的内容
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import Carousel from './carouselmap/index.vue'
import Search from './search/index.vue'
import Selectlist from './selectlist/index.vue'
import Card from './card/index.vue'
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