<template>
    <div class="container">
        <div class="container-middle">
            <div class="left">
                <span>京ICP备 13018369号</span>
                <span>电话挂号010-56253825</span>
            </div>
            <div class="right">
                <ul>
                    <span>联系我们</span>
                    <span>合作伙伴</span>
                    <span>用户协议</span>
                    <span>隐私协议</span>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
    // fixed让元素不再以文档流进行定位
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    /* 可以设置元素高度 */
    background-color: #fff;

    //   底部中间的盒子
    .container-middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 1200px;
        font-size: 14px;

        // 底部中间左边的盒子
        .left {

            span {
                margin: 0px 5px;
            }
        }

        .right {
            span {
                margin: 0px 5px;
            }
        }

    }
}
</style>