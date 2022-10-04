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

export default function TablePromotion() {
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã CTKM",
      dataIndex: "transtionCode",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Tên CTKM",
      dataIndex: "receiptDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Loại CTKM",
      dataIndex: "implementationDate",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Chi tiết CTKM",
      dataIndex: "contractNumber",
    },
    {
      title: "Thời gian hưởng",
      dataIndex: "taxCode",
    },
    {
      title: "Mô tả khuyến mại",
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
