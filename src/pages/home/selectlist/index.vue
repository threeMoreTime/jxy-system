<template>
    <div class="listData">
        <h5 class="title">医院</h5>
        <!-- 第二行医院等级 -->
        <div class="hospitalList">
            <div class="left">等级:</div>
            <ul>
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级乙等</li>
                <li>二级甲等</li>
                <li>二级乙等</li>
                <li>一级</li>
            </ul>
        </div>
        <!-- 第三行医院地区 -->
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
    </div>
</template>

<script setup lang="ts">

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

    // 第三行地区
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
}</style>