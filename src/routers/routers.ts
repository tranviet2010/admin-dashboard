import { lazy } from "react";
import {
  HomeOutlined,
  AccountBookOutlined,
  CreditCardOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

const Home = lazy(() => import("../pages/home/Home"));
const ChangePassword = lazy(() => import("../pages/author/changePassword/ChangePassword"));
const SearchInfo = lazy(() => import("../pages/searchInfo"));

export type Routers = {
  id: number;
  path: string;
  element: JSX.Element | any;
  name: string;
  icon?: JSX.Element | any;
  children?: Routers[] | any;
};

const routers: Routers[] = [
  {
    id: 1,
    path: "/home",
    element: Home,
    name: "Trang chủ",
    icon: HomeOutlined,
  },
  {
    id: 2,
    path: "/account",
    element: Home,
    name: "Quản lý tài khoản",
    icon: AccountBookOutlined,
    children: [
      {
        id: 3,
        path: "/account-eTag-personal",
        element: Home,
        name: "Mở tài khoản và kích hoạt eTag KHCN",
      },
      {
        id: 4,
        path: "/account-changInfo-personal",
        element: Home,
        name: "Thay đổi thông tin KHCN",
        children: [
          {
            id: 61,
            path: "/account-personal-form-of-fee-collection",
            element: Home,
            name: "Hình thức thu phí KHCN",
          },
          {
            id: 62,
            path: "/account-personal-change-infomation",
            element: Home,
            name: "Hình thức thu phí KHCN",
          },
          {
            id: 63,
            path: "/account-personal-password-retrieval",
            element: Home,
            name: "Lấy lại mật khẩu KHCN",
          },
          {
            id: 64,
            path: "/account-personal-open-close-eTag",
            element: Home,
            name: "Đóng mở eTag KHCN",
          },
          {
            id: 65,
            path: "/account-personal-change-owner",
            element: Home,
            name: "Chuyển chủ sở hữu KHCN",
          },
          {
            id: 66,
            path: "/account-personal-active-monthly-ticket",
            element: Home,
            name: "Kịch hoạt vé tháng theo lô",
          },
        ],
      },
      {
        id: 5,
        path: "/account-eTag-enterprise",
        element: Home,
        name: "Mở tài khoản và kích hoạt eTag KHDN",
      },
      {
        id: 6,
        path: "/account-changInfo-enterprise",
        element: Home,
        name: "Thay đổi thông tin KHDN",
        children: [
          {
            id: 67,
            path: "/account-enterprise-form-of-fee-collection",
            element: Home,
            name: "Hình thức thu phí KHCN",
          },
          {
            id: 68,
            path: "/account-enterprise-change-infomation",
            element: Home,
            name: "Hình thức thu phí KHCN",
          },
          {
            id: 69,
            path: "/account-enterprise-password-retrieval",
            element: Home,
            name: "Lấy lại mật khẩu KHCN",
          },
          {
            id: 70,
            path: "/account-enterprise-open-close-eTag",
            element: Home,
            name: "Đóng mở eTag KHCN",
          },
          {
            id: 71,
            path: "/account-enterprise-change-owner",
            element: Home,
            name: "Chuyển chủ sở hữu KHCN",
          },
          {
            id: 72,
            path: "/account-enterprise-active-monthly-ticket",
            element: Home,
            name: "Kịch hoạt vé tháng theo lô",
          },
        ],
      },
      {
        id: 7,
        path: "/search-infomations",
        element: SearchInfo,
        name: "Tra cứu thông tin",
      },
      {
        id: 8,
        path: "/closing-service-fee",
        element: Home,
        name: "Chốt số tiền thu tại điểm dịch vụ, đại lý",
      },
      {
        id: 9,
        path: "/create-reports",
        element: Home,
        name: "Lập báo cáo",
      },
      {
        id: 10,
        path: "/fee-services",
        element: Home,
        name: "Thu phí dịch vụ",
      },
      {
        id: 11,
        path: "/update-state-gift",
        element: Home,
        name: "Cập nhật trạng thái nhận quà",
      },
      {
        id: 12,
        path: "/temporarily-lock-account",
        element: Home,
        name: "Tạm khóa mở tài khoản",
      },
      {
        id: 13,
        path: "/account-withdrawal",
        element: Home,
        name: "Rút tiền tài khoản",
      },
      {
        id: 14,
        path: "/temporarily-keep-monthly-ticket",
        element: Home,
        name: "Tạm giữ tiền mua vé tháng quý",
      },
    ],
  },
  {
    id: 15,
    path: "/account",
    element: Home,
    name: "Quản lý kho thẻ",
    icon: CreditCardOutlined,
    children: [
      {
        id: 16,
        path: "receive-superiors",
        element: Home,
        name: "Nhập hàng từ cấp trên",
        children: [
          {
            id: 17,
            path: "/receive-superiors-make-card-eTag",
            element: Home,
            name: "Lập yêu cầu nhập eTag",
          },
          {
            id: 18,
            path: "/receive-superiors-approve-card-eTag",
            element: Home,
            name: "Duyệt yêu cầu nhập eTag",
          },
          {
            id: 19,
            path: "/receive-superiors-export-card-eTagm",
            element: Home,
            name: "Xuất kho eTag",
          },
          {
            id: 20,
            path: "/receive-superiors-stock-card-eTag",
            element: Home,
            name: "Nhập kho eTag",
          },
        ],
      },
      {
        id: 21,
        path: "management-export-return",
        element: Home,
        name: "Quản lý hàng xuất trả",
        children: [
          {
            id: 22,
            path: "/management-export-make-request-return-eTag",
            element: Home,
            name: "Lập yêu cầu xuất trả eTag",
          },
          {
            id: 23,
            path: "/management-export-approve-request-return-eTag",
            element: Home,
            name: "Duyệt yêu cầu xuất trả eTag",
          },
          {
            id: 24,
            path: "/management-export-export-pay-eTag",
            element: Home,
            name: "Xuất trả eTag",
          },
          {
            id: 25,
            path: "/management-export-stock-export-pay-eTag",
            element: Home,
            name: "Nhập kho eTag xuất trả",
          },
        ],
      },
      {
        id: 26,
        path: "horizontal-transfer",
        element: Home,
        name: "Điều chuyển ngang cấp",
        children: [
          {
            id: 27,
            path: "/horizontal-transfer-make-request-return-eTag",
            element: Home,
            name: "Lập yêu cầu xuất trả eTag",
          },
          {
            id: 28,
            path: "/horizontal-transfer-approve-request-return-eTag",
            element: Home,
            name: "Duyệt yêu cầu xuất trả eTag",
          },
          {
            id: 29,
            path: "/horizontal-transfer-export-pay-eTag",
            element: Home,
            name: "Xuất trả eTag",
          },
          {
            id: 30,
            path: "/horizontal-transfer-stock-export-pay-eTag",
            element: Home,
            name: "Nhập kho eTag xuất trả",
          },
        ],
      },
      {
        id: 31,
        path: "/management-lostdamaged-goods",
        element: Home,
        name: "Quản lý hàng mất/hỏng",
      },
      {
        id: 32,
        path: "management-employee",
        element: Home,
        name: "Quản lý kho nhân viên",
        children: [
          {
            id: 33,
            path: "/management-employee-export-eTag",
            element: Home,
            name: "Xuất kho eTag",
          },
          {
            id: 34,
            path: "/management-employee-export-pay-eTag",
            element: Home,
            name: "Xuất trả eTag",
          },
        ],
      },
      {
        id: 35,
        path: "search",
        element: Home,
        name: "Tra cứu",
        children: [
          {
            id: 36,
            path: "/search-view-stock",
            element: Home,
            name: "Xem kho",
          },
          {
            id: 37,
            path: "/search-import-export-transactions",
            element: Home,
            name: "Tra cứu giao dịch xuất/nhập kho",
          },
          {
            id: 38,
            path: "/search-look-up-goods",
            element: Home,
            name: "Tra cứu hàng hóa",
          },
        ],
      },
      {
        id: 39,
        path: "report",
        element: Home,
        name: "Báo cáo",
        children: [
          {
            id: 40,
            path: "report-inventory",
            element: Home,
            name: "Báo cáo tồn kho",
            children: [
              {
                id: 41,
                path: "/report-inventory-summary-sold-goods",
                element: Home,
                name: "Báo cáo tổng hợp hàng đã bán",
              },
              {
                id: 42,
                path: "/report-inventory-details-sold-goods",
                element: Home,
                name: "Báo cáo chi tiết hàng tồn kho",
              },
            ],
          },
          {
            id: 43,
            path: "report-stock",
            element: Home,
            name: "Báo cáo kho",
            children: [
              {
                id: 44,
                path: "/report-stock-sum-warehouse",
                element: Home,
                name: "Báo cáo tổng hợp kho",
              },
              {
                id: 45,
                path: "/report-stock-details-warehouse",
                element: Home,
                name: "Báo cáo chi tiết kho",
              },
            ],
          },
          {
            id: 46,
            path: "report-sold-goods",
            element: Home,
            name: "Báo cáo hàng đã bán",
            children: [
              {
                id: 47,
                path: "/report-sold-goods-summary",
                element: Home,
                name: "Báo cáo tổng hợp hàng đã bán",
              },
              {
                id: 48,
                path: "/report-sold-goods-details",
                element: Home,
                name: "Báo cáo chi tiết hàng đã bán",
              },
            ],
          },
          {
            id: 49,
            path: "report-import-export-warehouse",
            element: Home,
            name: "Báo cáo xuất nhập kho",
            children: [
              {
                id: 50,
                path: "/report-import-export-warehouse-summary",
                element: Home,
                name: "Báo cáo tổng hợp xuất nhập kho",
              },
              {
                id: 51,
                path: "/report-import-export-warehouse-details",
                element: Home,
                name: "Báo cáo chi tiết xuất nhập kho",
              },
            ],
          },
          {
            id: 52,
            path: "report-goods-transit",
            element: Home,
            name: "Báo cáo hàng đang điều chuyển",
          },
          {
            id: 53,
            path: "/the-latch-report-exists",
            element: Home,
            name: "Báo cáo chốt tồn kho",
          },
        ],
      },
    ],
  },
  {
    id: 54,
    path: "utilities",
    element: Home,
    name: "Tiện ích",
    icon: PlusSquareOutlined,
    children: [
      {
        id: 55,
        path: "/utilities-invoice-transfer-printing",
        element: Home,
        name: "In chuyển hóa đơn",
      },
      {
        id: 56,
        path: "/utilities-invoice-lookup",
        element: Home,
        name: "Tra cứu hóa đơn",
      },
      {
        id: 57,
        path: "/utilities-records-management",
        element: Home,
        name: "Quản lý hồ sơ",
      },
      {
        id: 58,
        path: "/utilities-look-up-rose-details",
        element: Home,
        name: "Tra cứu chi tiết hoa hồng",
      },
      {
        id: 59,
        path: "/utilities-look-up-rose-sum",
        element: Home,
        name: "Tra cứu tổng hợp hoa hồng",
      },
      {
        id: 60,
        path: "/utilities-information-being-check",
        element: Home,
        name: "Tra cứu thông tin đang kiểm",
      },
    ],
  },
];

export const routersPage: Routers[] = [
  {
    id: 73,
    path: "/change-password",
    element: ChangePassword,
    name: "Đổi mật khẩu",
  },
];

export default routers;