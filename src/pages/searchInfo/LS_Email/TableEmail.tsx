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

export default function TableEmail() {
  const columns: ColumnsType<DataType> = [
    {
      title: "Thời gian gửi",
      dataIndex: "transtionCode",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Địa chỉ email",
      dataIndex: "receiptDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Nội dung",
      dataIndex: "implementationDate",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Trạng thái email",
      dataIndex: "contractNumber",
    },
    {
      title: "Loại thông tin",
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
