import { Pagination, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function TableReceipt() {

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã giao dịch",
      dataIndex: "transtionCode",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Ngày hóa đơn",
      dataIndex: "receiptDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Ngày thực hiện",
      dataIndex: "implementationDate",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Số HĐ",
      dataIndex: "contractNumber",
    },
    {
      title: "Mã số thuế",
      dataIndex: "taxCode",
    },

    {
      title: "Nội dung",
      dataIndex: "content",
    },
    {
      title: "Số tiền",
      dataIndex: "moneys",
    },
    {
      title: "Trạng thái",
      dataIndex: "state",
    },
    {
      title: "Loại hóa đơn",
      dataIndex: "receiptType",
    },
    {
      title: "Người lập",
      dataIndex: "owner",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Người duyệt",
      dataIndex: "approvedBy",
    },
    {
      title: "Ngày duyệt",
      dataIndex: "approvedDate",
    },
    {
      title: "Biển số xe",
      dataIndex: "licensePlates",
      sorter: (a, b) => a.age - b.age,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Pagination simple defaultCurrent={1} total={50} />
      <Table
        columns={columns}
        dataSource={[]}
        onChange={onChange}
        pagination={{ pageSize: 50 }}
        scroll={{ x: 2000 }}
      />
    </>
  );
}
