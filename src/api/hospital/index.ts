import request from '@/utils/request';
import type { HospitalDetail } from './type';

enum API {
  // 获取现在有的医院数据的接口路径
  HOSPITAL_URL = '/hosp/hospital/',

}

// 获取医院详情页信息
export const reqHospitalDetail = ( hoscode:string) => request.get<any, HospitalDetail>(API.HOSPITAL_URL + hoscode);
