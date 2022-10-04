import { Pagination, Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Mã giao dịch',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Mã tài khoản',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Ngày thực hiện',
        dataIndex: 'address',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Ngày thực hiện',
        dataIndex: 'address',
    },
    {
        title: 'NV thực hiện',
        dataIndex: 'address',
    },

    {
        title: 'Biển số xe',
        dataIndex: 'address',
    },
    {
        title: 'Số eTag',
        dataIndex: 'address',
    },
    {
        title: 'Loại eTag',
        dataIndex: 'address',
    },
    {
        title: 'eTag dán lại',
        dataIndex: 'address',
    },
    {
        title: 'Trạng thái eTag',
        dataIndex: 'address',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Nhân viên dán thẻ',
        dataIndex: 'address',
    },
    {
        title: 'DL thực hiện',
        dataIndex: 'address',
    },
    {
        title: 'Mô tả',
        dataIndex: 'address',
        sorter: (a, b) => a.age - b.age,
    },

];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableSms: React.FC = () => (
    <>
        <Pagination simple defaultCurrent={2} total={50} />
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={{ pageSize: 50 }} />
    </>
)


export default TableSms;