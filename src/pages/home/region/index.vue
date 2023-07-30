<template>
    <!-- 医院地区信息 -->
    <div class="region">
        <div class="left">地区:</div>
        <ul>
            <li :class="{ active: changeValue == '' }">全部</li>
            <li @click="changeactive(item.value)" :class="{ active: changeValue == item.value }"
                v-for="(item, index) in hospitalPlace" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
// 引入请求接口
import { reqHospital, reqExportData } from '@/api/home'
// 引入type规范
import { HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type'
import { ref, onMounted, defineEmits } from 'vue'
onMounted(() => {
    getExportData();
})
// 医院地区数据
let hospitalPlace = ref<HospitalLevelAndRegionArr>([])
// 修改高亮的参数
const changeValue = ref('');
const changeactive = (value: string) => {
    changeValue.value = value;
    $emit('getRegion', value)
};
//获取数据字典数据
const getExportData = async () => {
    let result: HospitalLevelAndRegionResponseData = await reqExportData('beijin');
    try {
        if (result.code == 200) {
            hospitalPlace.value = result.data
        } else {
            return Promise.reject(new Error('error'))
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

// 给父组件传递参数
let $emit = defineEmits(['getRegion'])
</script>

<style lang="scss" scoped>
// 地区信息列表
.region {

    margin-top: 20px;
    display: flex;

    .left {
        display: flex;
    }

    ul {
        width: 900px;
        display: flex;
        flex-wrap: wrap;

        .active {
            color: aquamarine;
        }

        li {
            margin: 0px 10px 10px;
            cursor: pointer;
        }

        li:hover {
            color: aquamarine;
        }

    }
}
</style>