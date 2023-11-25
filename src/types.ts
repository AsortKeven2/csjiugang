export interface BaseInfo {
  certificateNo: string;
  acceptCompany: string;
  productName: string;
  pNo: string;
  standard: string;
  trainNo: string;
  arrivedStation: string;
  status: string;
}

export interface Detail {
  circleNo: string;
  batchNo: string;
  size: string;
  num: number;
  weight: number;
  C: number;
  Si: number;
  Mn: number;
  P: number;
  S: number;
  A: number;
  AKV1: number;
  AKV2: number;
  AKV3: number;
  AKVFX: string;
  ReH: number;
  Rm: number;
}

export interface DataRow {
  baseInfo: BaseInfo;
  detailList: Detail[];
}