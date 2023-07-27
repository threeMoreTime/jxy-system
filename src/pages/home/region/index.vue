<template>
   <!-- 医院地区信息 -->
   <div class="region">
            <div class="left">地区:</div>
            <ul>
                <li class="active">全部</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
                <li>东城区</li>
            </ul>
        </div>
</template>

<script setup lang="ts">
import { defineProps,ref } from 'vue'
const props = defineProps({
  gradeList: {
    type: Array,
    required: true
  }
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