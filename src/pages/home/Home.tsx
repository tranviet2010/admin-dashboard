
import { Card, Col, Row } from "antd";
import { useState } from "react";
import Tabinput from "../../components/input/TabInput";
import {
  SearchOutlined
} from "@ant-design/icons";

import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";


export default function Home() {
  const [search, setSearch] = useState({
    cmd: "",
    ho_chieu: "",
    code_account: ""
  })
  const title = <><SearchOutlined /> TRA CỨU</>
  const onChang = () => {

  }
  const onSearch = () => {

  }
  console.log("search",search)
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary">Next</Button>}
    />
  )

}
