// 返回的基本信息
export interface ResponseData {
  code: number; //状态码
  message: string; //消息
  ok: boolean;
}

//已有的医院信息数据类型的TS类型
export interface HospTailInfo {
  id: string; // 医院 ID
  createTime: string; // 创建时间
  updateTime: string; // 更新时间
  isDeleted: number; // 是否删除
  param: {
    hostypeString: string;
    fullAddress: string;
  }; // 医院的参数
  hoscode: string; // 医院编码
  hosname: string; // 医院名称
  hostype: string; // 医院类型
  provinceCode: string; // 省份编码
  cityCode: string; // 城市编码
  districtCode: string; // 地区编码
  address: string; // 地址
  logoData: string; // Logo 数据
  intro: string; // 医院介绍（任意类型）
  route: string; // 医院路线
  status: number; // 医院状态
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[]; // 预约规则
  };
}

//存储全部已有医院的数组类型
export type Content = HospTailInfo[];

//获取全部已有医院的数组类型
export interface  HospTailResponseData extends ResponseData{
    data:{
        content: Content
        pageable: {
            sort: {
                sorted: boolean
                unsorted: boolean
                empty: boolean
              },
              "pageNumber": number
              "pageSize": number
              "offset": number
              "paged": boolean
              "unpaged": boolean
        }
        totalPages: number
        totalElements: number
        last: boolean
        first: boolean
        sort: {
            "sorted": boolean,
            "unsorted": boolean,
            "empty": boolean
          },
        numberOfElements: number
        size: number
        number: number
        empty: boolean
    } 
  }

 //医院的参数类型
export interface Param {
  hostypeString: string; // 医院类型描述
  fullAddress: string; // 完整地址
}

/**
 * 预约规则类型
 */
export interface BookingRule {
  cycle: number; // 规则周期
  releaseTime: string; // 发布时间
  stopTime: string; // 停止时间
  quitDay: number; // 退订天数
  quitTime: string; // 退订时间
  rule: string[]; // 规则列表
}

//医院或地区的等级数据的ts类型
export interface HospitalLevelAndRegion{
  createTime: string
  dictCode: string
  hasChildren: boolean
  id: number
  isDeleted: number
  name: string
  param: {}
  parentId: number
  updateTime: string
  value: string
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
//获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData {
    data: HospitalLevelAndRegionArr
}


export interface HospitalInfo extends ResponseData {
    data: Content
}

