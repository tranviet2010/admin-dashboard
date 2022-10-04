import { Col, Row, Select, Space } from 'antd'
import React from 'react'
import ButtonCheck from '../../../components/Button/Button'
import ButtonExport from '../../../components/Button/Export'
import SelectOption from '../../../components/input/SelectOption'
import Tabinput from '../../../components/input/TabInput'
import TableFee from './TableFee'
const { Option } = Select;

export default function LS_Fee() {
  const dataMOnth=[
    {id:0,name:"Theo tháng"},
    {id:1,name:"Theo quý"},
  ];
  const dataPLuss=[
    {id:0,name:"Theo Block"},
    {id:1,name:"Thường"},
  ]
  return (
    <div>
      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Biển số xe" />
        </Col>
        <Col span={8}>
          <SelectOption data={dataMOnth} title="Loại vé"/>
        </Col>
        <Col span={8}>
        <SelectOption data={dataPLuss} title="Cách tính"/>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Loại trạm" />
        </Col>
        <Col span={8}>

        </Col>
        <Col span={8}>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Từ ngày hiệu lực" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến ngày hiệu lực" />
        </Col>
        <Col span={8}>
        </Col>
      </Row>

      <Row justify="end" >
        <Col span={8} offset={16} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10px" }}>
          <Space size={[8, 8]}>
            <ButtonCheck title="Tra cứu" />
            <ButtonExport title="Xuất báo cáo" />
          </Space>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <TableFee />
      </Row>
    </div>
  )
}
