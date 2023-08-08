// 创建hospitalDetail小仓库
import { defineStore } from "pinia";
// 获取医院详情信息的接口
import { reqHospitalDetail } from "@/api/hospital";
// 医院详情信息类型
import type { HospitalDetail } from "@/api/hospital/type";
// 引入仓库内部的数据类型
import type {DetailState} from './interface'
import { type } from "os";

const useDetailStore = defineStore("Detail", {
  state: ():DetailState => {
    return {
      // 医院详情的数据
      HospitalDetailInfo: {} as HospitalDetail
    };
  },
  actions: {
     //获取医院详情的方法
    async getHospitalInfo(hospcode: string) {
      try {
        let result: HospitalDetail = await reqHospitalDetail(hospcode);
        if (result.code==200) {
          this.HospitalDetailInfo = result.data;
        }
      } catch (error) {
        console.error('Error fetching hospital detail:', error);
      } 
    },
  },
  getters: {

  },
});

export default useDetailStore;
