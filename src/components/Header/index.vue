<template>
    <div class="top">
        <div id="content">
            <div class="top-left" @click="goHome">
                <img src='../../assets//images//logo.png' alt="">
                <p>捷信源 预约挂号统一平台</p>
            </div>
            <div class="top-right">
                <p class="login">登陆注册</p>
                <p class="help">帮助中心</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const $router = useRouter();
// 返回首页
const goHome = () =>{
    $router.push({path:'/home'});
}

</script>

<style lang="scss" scoped>
.top {
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    background: white;
    width: 100%;
    height: 70px;

    // 顶部中间的盒子
    #content {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        height: 70px;

        /* 顶部的左侧 */
        .top-left {
            cursor: pointer;
            display: flex;
            /* 两边对对齐 */
            justify-content: space-between;
            /* 水平居中 */
            justify-items: center;
            /* 垂直居中 */
            align-items: center;
            width: 286px;
            height: 70px;

            // 顶部左侧的logo图片
            img {
                width: 50px;
                height: 50px;
            }

            // 顶部左侧的文字
            p {
                font-size: 20px;
                color: #55a6fe;
            }
        }

        /* 顶部的右侧 */
        .top-right {
            display: flex;
            justify-content: space-between;
            align-items:center;

            // 顶部右侧的文字
            p {
                font:inherit;
                font-size: 15px;
                color: #0c4958;
                margin-right: 5px;
            }
        }
    }
}
</style>