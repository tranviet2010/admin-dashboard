import { SearchOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import ButtonCheck from '../../../components/Button/Button'
import Tabinput from '../../../components/input/TabInput'
import TableEtag from './TableEtag'

export default function LS_Etag() {
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
          <Tabinput title="Từ ngày" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến ngày" />
        </Col>
        <Col span={8}>

        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Biển số xe" />
        </Col>
        <Col span={8}>
          <Tabinput title="Số eTag" />
        </Col>
        <Col span={8}>

        </Col>
      </Row>

      <Row justify="end" >
        <Col span={8} className="d-flex justify-content-end" style={{display: 'flex', justifyContent: 'flex-end'}}>
        <ButtonCheck title="Tra cứu"/>
        </Col>
      </Row>

      <Row>
          <TableEtag />
      </Row>
    </div>
  )
}
