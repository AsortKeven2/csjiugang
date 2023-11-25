import './App.css'
import logo from './logoBig.png'

/**
 *
 * @type {Record<string,DataRow>}
 */
const FULL_DATA = {
  '68/288': {
    baseInfo: {
      certificateNo: 'E200718210',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C70E 1621456',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1199453',
        batchNo: 'B220201164',
        size: '5.50*1500',
        num: 1,
        weight: 29.11,
        C: 0.18,
        Si: 0.27,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      },
      {
        circleNo: '1199453',
        batchNo: 'B220201164',
        size: '5.50*1500',
        num: 1,
        weight: 29.46,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.015,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }]
  },
  '69/289': {
    baseInfo: {
      certificateNo: 'E20061513',
      acceptCompany: '国家粮食和物资储备局青海五三五处',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C70E 1722663',
      arrivedStation: '西宁东',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191986',
        batchNo: '1365823603',
        size: '14.00*2000*10900',
        num: 3,
        weight: 7.188,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }, {
        circleNo: '1191986',
        batchNo: '1365823603',
        size: '14.00*2000*10900',
        num: 14,
        weight: 33.544,
        C: 0.18,
        Si: 0.24,
        Mn: 0.42,
        P: 0.016,
        S: 0.012,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 304,
        Rm: 427,
      }
    ]
  },
  '305': {
    baseInfo: {
      certificateNo: 'E20080233',
      acceptCompany: '国家粮食和物资储备局青海五三五处',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C69E 1624618',
      arrivedStation: '西宁东',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191989',
        batchNo: '1165824006',
        size: '14.00*2000*10900',
        num: 15,
        weight: 35.99,
        C: 0.17,
        Si: 0.25,
        Mn: 0.42,
        P: 0.016,
        S: 0.012,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 304,
        Rm: 424,
      }
    ]
  },
  '544': {
    baseInfo: {
      certificateNo: 'E20081302',
      acceptCompany: '国家粮食和物资储备局青海五三五处',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C71E 1624241',
      arrivedStation: '西宁东',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '11902416',
        batchNo: 'B213052024',
        size: '5.50*1510',
        num: 1,
        weight: 32.94,
        C: 0.16,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.013,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 304,
        Rm: 424,
      }
    ]
  },
  '545/546': {
    baseInfo: {
      certificateNo: 'E201018014',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C71E 1722675',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191921',
        batchNo: '125534012',
        size: '14.00*2000*10900',
        num: 7,
        weight: 17.493,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }, {
        circleNo: '1191923',
        batchNo: '125544016',
        size: '14.00*2000*10900',
        num: 8,
        weight: 19.992,
        C: 0.18,
        Si: 0.24,
        Mn: 0.41,
        P: 0.017,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 304,
        Rm: 427,
      }
    ]
  },
  '547/548': {
    baseInfo: {
      certificateNo: 'E201101524',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C54 1929364',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191988',
        batchNo: '125534006',
        size: '14.00*2000*10900',
        num: 7,
        weight: 17.361,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }, {
        circleNo: '1191988',
        batchNo: '125544005',
        size: '14.00*2000*10950',
        num: 7,
        weight: 17.472,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }
    ]
  },
  '549/550': {
    baseInfo: {
      certificateNo: 'E201018011',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C66E 1735147',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191926',
        batchNo: '125534010',
        size: '14.00*2000*10900',
        num: 7,
        weight: 17.218,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      },
      {
        circleNo: '1191926',
        batchNo: '125544014',
        size: '14.00*2000*10900',
        num: 7,
        weight: 17.268,
        C: 0.18,
        Si: 0.24,
        Mn: 0.41,
        P: 0.017,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 304,
        Rm: 427,
      }
    ]
  },
  '701': {
    baseInfo: {
      certificateNo: 'E2106140002',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C68E 1648755',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191742',
        batchNo: '2021061503',
        size: '14.00*2000*10900',
        num: 3,
        weight: 8.423,
        C: 0.17,
        Si: 0.25,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }
    ]
  },
  '716': {
    baseInfo: {
      certificateNo: 'E210625003',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C66E 1648946',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191817',
        batchNo: '1198102017',
        size: '14.00*2000*10900',
        num: 6,
        weight: 14.97,
        C: 0.16,
        Si: 0.24,
        Mn: 0.41,
        P: 0.017,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 426,
      }
    ]
  },
  '735': {
    baseInfo: {
      certificateNo: 'E210629018',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C69E 1718459',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191854',
        batchNo: '1199572004',
        size: '14.00*2000*10900',
        num: 8,
        weight: 19.92,
        C: 0.16,
        Si: 0.24,
        Mn: 0.41,
        P: 0.016,
        S: 0.012,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 426,
      }
    ]
  },
  '790': {
    baseInfo: {
      certificateNo: 'E211024215',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C64E 1841256',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1199729',
        batchNo: '125533110',
        size: '5.50*1500',
        num: 1,
        weight: 28.44,
        C: 0.18,
        Si: 0.27,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 139,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 427,
      }
    ]
  },
  '792': {
    baseInfo: {
      certificateNo: 'E211017024',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C69E 1718459',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191375',
        batchNo: '1203573024',
        size: '14.00*2000*10900',
        num: 12,
        weight: 30.02,
        C: 0.17,
        Si: 0.24,
        Mn: 0.4,
        P: 0.016,
        S: 0.012,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 426,
      }
    ]
  },
  '953/954': {
    baseInfo: {
      certificateNo: 'E220217037',
      acceptCompany: '甘肃通聚鑫仓储物流管理有限公司',
      productName: '碳素结构钢热轧钢板',
      pNo: 'Q235B',
      standard: 'GB/T 3274-2017',
      trainNo: 'C72E 1845221',
      arrivedStation: '社棠',
      status: '热轧'
    },
    detailList: [
      {
        circleNo: '1191387',
        batchNo: '22051222',
        size: '14.00*2000*10900',
        num: 19,
        weight: 47.215,
        C: 0.17,
        Si: 0.24,
        Mn: 0.4,
        P: 0.016,
        S: 0.012,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 120,
        AKVFX: '纵向20℃',
        ReH: 305,
        Rm: 426,
      },
      {
        circleNo: '1191387',
        batchNo: '22052111',
        size: '14.00*2000*10900',
        num: 12,
        weight: 29.822,
        C: 0.16,
        Si: 0.24,
        Mn: 0.41,
        P: 0.016,
        S: 0.011,
        A: 36.0,
        AKV1: 107,
        AKV2: 138,
        AKV3: 121,
        AKVFX: '纵向20℃',
        ReH: 306,
        Rm: 426,
      }
    ]
  }
}

const ITEM_KEY_TO_ZH = {
  certificateNo: '质证书编号',
  acceptCompany: '收货单位',
  productName: '产品名称',
  pNo: '牌号',
  standard: '标准',
  trainNo: '车号',
  arrivedStation: '到站',
  status: '交货状态',
  circleNo: '批板卷号',
  batchNo: '炉(批)号',
  size: '规格',
  num: '数量',
  weight: '重量',
  C: 'C',
  Si: 'Si',
  Mn: 'Mn',
  P: 'P',
  S: 'S',
  A: 'A',
  AKV1: 'AKV1',
  AKV2: 'AKV2',
  AKV3: 'AKV3',
  AKVFX: 'AKVFX',
  ReH: 'ReH',
  Rm: 'Rm',
}

const Row = ({itemKey, value}) => {
  const itemName = ITEM_KEY_TO_ZH[itemKey]
  return <tr className="itemRow">
    <td className="itemRowLeft">{itemName}：</td>
    <td className="itemRowRight">{value}</td>
  </tr>
}

const App = () => {
  const key = window.location.search.replace('?code=', '');
  const {baseInfo, detailList} = FULL_DATA[key];
  return (
    <div className="appContainer">
      <div className="appHeader">
        <img src={logo} className="logo"/>
        酒钢集团
      </div>
      <div>
        <div className="title">批板卷基本信息</div>
        <table className="table">
          <tbody>
          {Object.keys(baseInfo).map((objKey, index) => {
            return <Row key={index} itemKey={objKey} value={baseInfo[objKey]}/>
          })}
          </tbody>
        </table>
        <div className="detail">明细列表</div>
        {
          detailList.map(item => {
            return <table className="table">
              <tbody>
              {Object.keys(item).map((objKey, index) => {
                return <Row key={index} itemKey={objKey} value={item[objKey]}/>
              })}
              </tbody>
            </table>
          })
        }
      </div>
    </div>
  )
}
export default App