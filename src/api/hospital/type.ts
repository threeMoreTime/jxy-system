// 医院详情的类型接口

export interface ResponseData{
    code: number; //状态码
    message: string; //消息
    ok: boolean;
}
// 医院的详情数据
export interface HospitalDetail{
    bookingRule:{
        cycle: number
        releaseTime: string
        stopTime: string
        quitDay: number
        quitTime: string
        rule: string[]
    },
    hospital: {
        id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    hostypeString: string
    fullAddress: string
  }
  hoscode: string
  hosname: string
  hostype: string
  provinceCode: string
  cityCode: string
  districtCode: string
  address: string
  logoData: string
  intro: boolean
  route: string
  status: number
  bookingRule: boolean
        },
    }

// 返回的医院详情数据的类型
export interface HospitalDetail extends ResponseData{
    data:HospitalDetail
}
