import { Col, Row, Space } from 'antd'
import React from 'react'
import ButtonCheck from '../../../components/Button/Button'
import ButtonExport from '../../../components/Button/Export'
import Tabinput from '../../../components/input/TabInput'
import TableStation from './TableStation'

export default function LS_CardToStation() {
  return (
    <div>
      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Mã tài khoản" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Tên khách hàng" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="CMND/TCC/HC" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Biển số xe" />
        </Col>
        <Col span={8}>
          <Tabinput typeInput="date" title="Từ ngày" placeholder="Từ ngày"/>
        </Col>
        <Col span={8}>
          <Tabinput typeInput='date' title="Đến ngày" placeholder="Đến ngày"/>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Loại vé" />
        </Col>
        <Col span={8}>
          <Tabinput title="Trạng thái" />
        </Col>
        <Col span={8}>
          <Tabinput title="Mã giao dịch" />
        </Col>
      </Row>

      <Row justify="end" >
        <Col span={8} offset={16} style={{ display: 'flex', justifyContent: 'flex-end',marginTop:"10px" }}>
          <Space size={[8,8]}>
            <ButtonCheck title="Tra cứu" />
            <ButtonExport title="Xuất báo cáo" />
          </Space>
        </Col>
      </Row>
      <hr></hr>
      <Row>
          <TableStation />
      </Row>
    </div>
  )
}
