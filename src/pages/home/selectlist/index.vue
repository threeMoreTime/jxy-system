<template>
    <div class="listData">
        <h5 class="title">医院</h5>
        <!-- 第二行医院等级 -->
        <div class="hospitalList">
            <div class="left">等级:</div>
            <ul>
                <li @click="changeactive('')" :class="{ active: changeValue == '' }">全部</li>

                <li @click="changeactive(level.value)" :class="{ active: changeValue == level.value }" v-for="level in gradeList"
                    :key="level.value">
                    {{ level.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
// 引入请求
import { reqExportData } from '@/api/home'
import { defineProps, ref,onMounted } from 'vue'
// 引入type规范
import { Content, HospTailResponseData, HospitalLevelAndRegionArr, HospitalLevelAndRegionResponseData } from '@/api/home/type'
const props = defineProps({
    gradeList: {
        type: Array,
        required: true
    }
})
onMounted(() => {
// 获取等级信息
    getExportData();
})
//  医院等级数据
let hospitalGrade = ref<HospitalLevelAndRegionArr>([])

//获取等级数据
const getExportData = async () => {
    let res: HospitalLevelAndRegionResponseData = await reqExportData('HosType');
    try {
        if (res.code == 200) {
            hospitalGrade.value = res.data
            console.log(hospitalGrade.value); 
        } else {
            return Promise.reject(new Error('error'))
        }
    } catch (error) {
        return Promise.reject(error)
    }
}
const changeValue = ref('');
const changeactive = (value: string) => {
    changeValue.value = value;
};
</script>

<style lang="scss" scoped>
.listData {
    color: #999;

    .title {
        margin: 20px 0px;
    }

    // 第二行 等级
    .hospitalList {
        margin-top: 10px;
        display: flex;

        ul {
            display: flex;
            justify-content: center;

            .active {
                color: aquamarine;
            }

            li {
                margin: 0 10px;
                cursor: pointer;
            }

            li:hover {
                color: aquamarine;
            }

        }
    }


}
</style>