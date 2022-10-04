import React from 'react'
import { Button, Col, Row } from 'antd'
import styled, { keyframes } from "styled-components";
import { ExportOutlined } from '@ant-design/icons'

export default function ButtonExport(props: any) {
    const ContentStyle = styled.div`
        .ant-btn-primary{
            background-color: #01a651;
            border-color: #01a651 ;
            
        }
`
    return (
        <ContentStyle>
            <Button icon={<ExportOutlined />} type="primary">{props.title}</Button>
        </ContentStyle>
    )
}
