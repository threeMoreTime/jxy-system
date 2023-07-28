<template>
    <!-- 医院地区信息 -->
    <div class="region">
        <div class="left">地区:</div>
        <ul>
            <li :class="{active:changeValue==''}">全部</li>
            <li @click="changeactive(item.value)" :class="{active:changeValue==item.value}" v-for="(item,index) in placeList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref,onMounted } from 'vue'
const props = defineProps({
    placeList: {
        type: Array,
        required: true
    }
})
onMounted(()=>{

})
const changeValue = ref('');
const changeactive = (value: string) => {
    changeValue.value = value;  
};
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