import requset from '@/utils/request'
import type {HospTailResponseData} from './type'
enum API{
    // 获取现在有的医院数据的接口路径
    HOSPITAL_URL='/hosp/hospital/'
}

export const reqHospital = (page:number, limit:number)=>requset.get<any,HospTailResponseData>(API.HOSPITAL_URL+`${page}/${limit}`)
