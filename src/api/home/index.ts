import request from '@/utils/request';
import type { HospTailResponseData,HospitalInfo } from './type';

enum API {
  // 获取现在有的医院数据的接口路径
  HOSPITAL_URL = '/hosp/hospital/',
  // 数据字典接口路径
  HOSPITALLEVElANDREGION_URL= '/cmn/dict/findByDictCode/',
  // 根据医院名称获取医院列表
  HOSPITALINFO_URL='/hosp/hospital/findByHosname/'
}

// 获取分页列表信息
export const reqHospital = (page: number, limit: number,hostype:string,districtCode:string) => request.get<any, HospTailResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);
//获取数据字典数据
export const reqExportData = (dictCode:string) =>request.get<any>(API.HOSPITALLEVElANDREGION_URL + dictCode);
//根据医院名称获取医院列表
export const reqSearchInfo = (hosname:string) =>request.get<HospitalInfo>(API.HOSPITALINFO_URL + hosname);
