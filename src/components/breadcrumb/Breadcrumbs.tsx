import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Space } from "antd";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { CalendarOutlined, HomeOutlined } from "@ant-design/icons";
import routers, { Routers, routersPage } from "../../routers/routers";
import moment from "moment";
import {
  changeDayVN,
  days,
  flattenArray,
} from "../commom/functions/functionCommom";
import { BreadcrumbStyle, BreadscrumbEmpty } from "./BreadcrumbStyle";
import { useAppDispatch } from "../../stores/hook";
import { openSiderBar } from "../../stores/sider/siderBar";

const routersArr: any = (routes: Routers[]) =>
  routes.map((item) => (!item.children ? item : routersArr(item.children)));

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [realTime, setRealTime] = useState("");
  const [breadscumbNameSider, setBreadscumbNameSider] = useState<string>();
  const [breadscumbNamePage, setBreadscumbNamePage] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const routersFlat: Routers[] = flattenArray(routersArr(routers));
    setBreadscumbNameSider(
      (pre) => routersFlat.find((item) => item.path === pathname)?.name
    );
  }, [pathname]);

  useEffect(() => {
    setBreadscumbNamePage(
      (pre) => routersPage.find((item) => item.path === pathname)?.name
    );
  }, [pathname]);

  useEffect(() => {
    const time = setTimeout(() => {
      setShow(() => true);
    }, 600);
    return () => clearTimeout(time);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setRealTime(moment().format("DD/MM/YYYY - h:mm:ss"));
    }, 1000);
  }, [realTime]);

  const handleToggleSider = useCallback(
    () => {
      dispatch(openSiderBar());
    },
    [],
  )

  return (
    <>
      {show ? (
        <BreadcrumbStyle>
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeOutlined />
              <Link to="/home" onClick={handleToggleSider}>
                Trang chủ
              </Link>
            </Breadcrumb.Item>
            {breadscumbNameSider !== "Trang chủ" && (
              <Breadcrumb.Item>
                {breadscumbNameSider || breadscumbNamePage}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div className="alert-today">
            <Marquee pauseOnHover gradient={false} speed={20}>
              <Space>
                <CalendarOutlined />
                <span>{`${changeDayVN(
                  days[new Date().getDay()]
                )} - ${realTime}`}</span>
              </Space>
            </Marquee>
          </div>
        </BreadcrumbStyle>
      ) : (
        <BreadscrumbEmpty />
      )}
    </>
  );
}
