<template>
    <div class="listData">
        <h5 class="title">医院</h5>
        <!-- 第二行医院等级 -->
        <div class="hospitalList">
            <div class="left">等级:</div>
            <ul>
                <li @click="changeactive('')" :class="{active:changeValue==''}">全部</li>
               
               <li @click="changeactive(level.value)" :class="{active:changeValue==level.value}" v-for="level in gradeList" :key="level.value">
                {{ level.name }}
               </li>
            </ul>
        </div>
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

   
}</style>