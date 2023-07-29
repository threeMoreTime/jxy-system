import request from '@/utils/request';
import type { HospTailResponseData } from './type';

enum API {
  // 获取现在有的医院数据的接口路径
  HOSPITAL_URL = '/hosp/hospital/',
  // 数据字典接口路径
  HOSPITALLEVElANDREGION_URL= '/cmn/dict/findByDictCode/',
}

// 获取分页列表信息
export const reqHospital = (page: number, limit: number,hostype:string,districtCode:string) => request.get<any, HospTailResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`);
//获取数据字典数据
export const reqExportData = (dictCode:string) =>request.get<any>(API.HOSPITALLEVElANDREGION_URL + dictCode);
//获取医院的等级或者获取医院地区的数据
// export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVElANDREGION_URL + dictCode);

// 获取排班数据
export const findScheduleList = (hoscode: string, depcode: string, workDate: string) => request.get<any>(API.HOSPITAL_URL+`/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`);

// 获取可预约排班数据
export const getBookingScheduleRule = (page: number, limit: number, hoscode: string, depcode: string) => request.get<any>(API.HOSPITAL_URL+`/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`);

// 获取科室列表
export const getDepartmentList = (hoscode: string) => request.get<any>(API.HOSPITAL_URL+`/department/${hoscode}`);

// 根据医院名称获取医院列表
export const getHospitalListByName = (hosname: string) => request.get<any>(API.HOSPITAL_URL+`/findByHosname/${hosname}`);

// 根据排班id获取排班数据
export const getScheduleById = (scheduleId: string) => request.get<any>(API.HOSPITAL_URL+`/getSchedule/${scheduleId}`);

// 根据排班id获取预约下单数据
export const getScheduleOrderVo = (scheduleId: string) => request.get<any>(API.HOSPITAL_URL+`/inner/getScheduleOrderVo/${scheduleId}`);

// 获取医院签名信息
export const getSignInfoVo = (hoscode: string) => request.get<any>(API.HOSPITAL_URL+`/inner/getSignInfoVo/${hoscode}`);

// 医院预约挂号详情
export const getHospitalRegistrationDetail = (hoscode: string) => request.get<any>(API.HOSPITAL_URL+`/${hoscode}`);