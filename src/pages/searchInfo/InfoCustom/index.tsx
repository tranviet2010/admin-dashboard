import { Col, Radio, Row } from "antd";
import React from "react";
import Tabinput from "../../../components/input/TabInput";
import GeneralInfo from "./GeneralInfo";
import ListCard from "./ListCard/ListCard";

export default function InfoCustom() {
  return (
    <div>
      <GeneralInfo />
      <ListCard />
    </div>
  );
}
