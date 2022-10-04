import { Card, Tabs } from 'antd'
import React from 'react'

export default function ListCard() {
    return (
        <div>
            <Card title="Danh sách xe đã có" size="small">
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Card Tab ${id}`,
                            key: id,
                            children: `Content of card tab ${id}`,
                        };
                    })}
                />
            </Card>
        </div>
    )
}
