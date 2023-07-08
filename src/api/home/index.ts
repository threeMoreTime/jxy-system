import requset from '@/utils/request'
import internal from 'stream'
enum API{
    // 获取现在有的医院数据的接口路径
    HOSPITAL_URL='/hosp/hospital/'
}

export const reqHospital = (page:number, limit:number)=>requset.get(API.HOSPITAL_URL+`${page}/${limit}`)
