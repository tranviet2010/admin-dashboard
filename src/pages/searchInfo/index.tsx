import { useState } from "react";
import "./style.css";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Tabs } from "antd";
import Tabinput from "../../components/input/TabInput";
import LS_InfoCustom from "./LS_InfoCustom";
import InfoCustom from "./InfoCustom";
import LS_Registry from "./LS_Registry";
import LS_Etag from "./LS_Etag";
import LS_Recharge from "./LS_Recharge";
import LS_CardToStation from "./LS_CarToStation";
import LS_Fee from "./LS_Fee";
import LS_ChangeAccount from "./LS_ChangeAccout";
import LS_Receipt from "./LS_Receipt";
import LS_Access from "./LS_Access";
import LS_SMS from "./LS_Sms";
import LS_Email from "./LS_Email";
import LS_ChangeInfoCar from "./LS_ChangeInfoCar";
import LS_Promotion from "./LS_Promotion";

export default function index() {

    const [search, setSearch] = useState({
        cmd: "",
        ho_chieu: "",
        code_account: "",
    });
    const titleSearch = (
        <>
            <SearchOutlined /> TRA CỨU
        </>
    );
    const titleInfoAcc = (
        <>
            <UserOutlined /> THÔNG TIN TÀI KHOẢN
        </>
    );
    const titleCardInfo = [
        "Thông tin khách hàng",
        "LS thông tin khách hàng",
        "LS thông tin đăng kiểm",
        "LS E-tag",
        "LS nạp tiền",
        "LS xe qua trạm",
        "LS hình thức thu phí",
        "LS thay đổi tài khoản",
        "LS hóa đơn",
        "LS truy cập",
        "LS SMS",
        "LS Email",
        "LS thay đổi thông tin xe",
        "LS chương trình khuyến mãi",
    ];
    const onSearch = () => { };
    const items = titleCardInfo.map((_, i) => {
        const id = String(i + 1);
        return {
            label: _,
            key: id,
            children: (
                <>
                    {i == 0 ? (
                        <InfoCustom />
                    ) : i == 1 ? (
                        <LS_InfoCustom />
                    ) : i == 2 ? (
                        <LS_Registry />
                    ) : i == 3 ? (
                        <LS_Etag />
                    ) : i == 4 ? (
                        <LS_Recharge />
                    ) : i == 5 ? (
                        <LS_CardToStation />
                    ) : i == 6 ? (
                        <LS_Fee />
                    ) : i == 7 ? (
                        <LS_ChangeAccount />
                    ) : i == 8 ? (
                        <LS_Receipt />
                    ) : i == 9 ? (
                        <LS_Access />
                    ) : i == 10 ? (
                        <LS_SMS />
                    ) : i == 11 ? (
                        <LS_Email />
                    ) : i == 12 ? (
                        <LS_ChangeInfoCar />
                    ) : i == 13 ? (
                        <LS_Promotion />
                    ) : (
                        ""
                    )}
                </>
            ),
        };
    });
    return (
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card title={titleSearch} bordered={false} size="small">
                <Row justify="space-around">
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, cmd: e })}
                            title="CMND/Thẻ căn cước"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, ho_chieu: e })}
                            title="Hộ chiếu"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, code_account: e })}
                            title="Mã tài khoản"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, cmd: e })}
                            title="Biển số xe"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, ho_chieu: e })}
                            title="Số khung"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, code_account: e })}
                            title="Số eTag"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, cmd: e })}
                            title="Giấy phép ĐKKD"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}>
                        <Tabinput
                            onChang={(e: any) => setSearch({ ...search, ho_chieu: e })}
                            title="Số công văn/QĐ"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Card>
            <Card
                title={titleInfoAcc}
                bordered={false}
                size="small"
                className="infocard"
            >
                <div
                    className="card-container"
                >
                    <Tabs type="card" items={items} />
                </div>
            </Card>
        </Space>
    );
}
