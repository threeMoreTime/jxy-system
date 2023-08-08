<template>
  <div class="common-header">
    <div class="title-wrapper">
      <div class="hospital-title">
        <span> {{ detailInfo.HospitalDetailInfo.hospital?.hosname }}</span>
      </div>
      <div class="icon-wrapper">
        <svg
          t="1691465135821"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6818"
          width="32"
          height="32"
        >
          <path
            d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="6819"
          ></path>
          <path
            d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="6820"
          ></path>
          <path
            d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="6821"
          ></path>
        </svg>
        <span>
          {{
            detailInfo.HospitalDetailInfo.hospital?.param.hostypeString
          }}</span
        >
      </div>
    </div>
    <div class="Short-introduction"></div>
  </div>
  <div class="info-wrapper">
    <!-- 字符串拼接base64编码图片格式 -->
    <img
      :src="`data:image/png;base64,${detailInfo.HospitalDetailInfo.hospital?.logoData}`"
    />
    <div class="content-wrapper">
      <div>挂号规则</div>
      <div class="line">
        <span class="space"
          >预约周期：<span class="label">{{
            detailInfo.HospitalDetailInfo.bookingRule?.cycle
          }}</span></span
        >
        <span class="space"
          >放号时间：<span class="label">{{
            detailInfo.HospitalDetailInfo.bookingRule?.releaseTime
          }}</span></span
        >
        <span class="space"
          >停挂时间：<span class="label">{{
            detailInfo.HospitalDetailInfo.bookingRule?.stopTime
          }}</span></span
        >
      </div>
      <div class="line">
        <span class="space"
          >退号时间:就诊前一工作日<span class="label">{{
            detailInfo.HospitalDetailInfo.bookingRule?.quitTime
          }}</span
          >前取消</span
        >
      </div>
      <div style="margin-top: 3%">医院预约规则</div>
      <div
        class="rule-wrapper"
        v-for="(ruler, index) in detailInfo.HospitalDetailInfo.bookingRule
          ?.rule"
        :key="index"
      >
        <ol>
          <li>
            {{ ruler }}
          </li>
        </ol>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 引入FileSaver库

import { ref, onMounted } from "vue";
import useDetailStore from "@/store/moudues/hospitalDetail";
name: "register";
// 使用仓库
let detailInfo = useDetailStore();

onMounted(() => {});
</script>

<style lang="scss" scoped>
.common-header {
  display: flex;
  justify-content: space-between;
  .title-wrapper {
    display: flex;
    align-items: center;
    border: 1px dashed red;
    .hospital-title {
      span {
        color: #333;
        font-size: 20px;
        font-weight: 700;
      }
    }
    .icon-wrapper {
      display: flex;
      align-items: center;
      color: #999;
      font-size: 14px;
    }
  }
}
.info-wrapper {
  width: 100%;
  display: flex;
  gap: 4%;
  margin-top: 30px;
  padding-left: 0%;
  padding-right: 0%;
  flex-direction: increment;
  // 医院logo图片
  img {
    height: 80px;
    width: 80px;
    border-radius: 40px;
  }
  //   医院logo图片右侧信息
  .content-wrapper {
    //挂号规则信息
    .line {
      display: flex;
      justify-content: space-between;
      margin-top: 2%;
      color: #999;
      .space {
        .label {
          color: #333;
        }
      }
    }
    .rule-wrapper {
      font-size: 12px;
      margin-top: 8p;
      min-height: 20px;
      color: #999;
      padding: 0;
      background: none;
      line-height: 20px;
      ol {
        line-height: 24px;
        li {
          margin-top: 3%;
          list-style-type: decimal;
          font-family: Helvetica Neue, Helvetica, Arial, PingFang SC,
            Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei,
            sans-serif;
          display: list-item;
          text-align: -webkit-match-parent;
        }
      }
    }
  }
}
</style>
