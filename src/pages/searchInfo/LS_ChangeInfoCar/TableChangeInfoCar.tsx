import { Pagination, Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
`;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function TableChangeInfoCar() {
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã giao dịch",
      dataIndex: "transtionCode",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Biển số xe",
      dataIndex: "receiptDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Trường thay đổi",
      dataIndex: "implementationDate",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Ngày thực hiện",
      dataIndex: "contractNumber",
    },
    {
      title: "Mã NV",
      dataIndex: "taxCode",
    },
    {
      title: "NV thực hiện",
      dataIndex: "taxCode",
    },
    {
      title: "Đơn vị",
      dataIndex: "taxCode",
    },
    {
      title: "Nội dung cũ",
      dataIndex: "taxCode",
    },
    {
      title: "Nội dung mới",
      dataIndex: "taxCode",
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
    <TableContainer>
      <Pagination simple defaultCurrent={1} total={50} />
      <Table
        columns={columns}
        dataSource={[]}
        onChange={onChange}
        pagination={{ pageSize: 50 }}
      />
    </TableContainer>
  );
}
