import { Col, Row, Select, Space } from 'antd'
import React from 'react'
import ButtonCheck from '../../../components/Button/Button'
import ButtonExport from '../../../components/Button/Export'
import SelectOption from '../../../components/input/SelectOption'
import Tabinput from '../../../components/input/TabInput'
import TableSms from './TableSms'
const { Option } = Select;

export default function LS_SMS() {
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
          <Tabinput title="Mã tài khoản" disble/>
        </Col>
        <Col span={8}>
          <Tabinput title="Tên khách hàng" disble/>
        </Col>
        <Col span={8}>
          <Tabinput title="CMND/TCC/HC" disble/>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Từ thời gian" typeInput='date' placeholder="Từ ngày"/>
        </Col>
        <Col span={8}>
          <Tabinput title="Đến thời gian" typeInput='date' placeholder="Đến ngày"/>
        </Col>
        <Col span={8}>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Loại SMS" />
        </Col>
        <Col span={8}>
          <Tabinput title="Số điện thoại" />
        </Col>
        <Col span={8}>
        </Col>
      </Row>

      <Row justify="end" >
        <Col span={8} offset={16} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10px" }}>
          <Space size={[8, 8]}>
            <ButtonCheck title="Tra cứu" />
          </Space>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <TableSms />
      </Row>
    </div>
  )
}
