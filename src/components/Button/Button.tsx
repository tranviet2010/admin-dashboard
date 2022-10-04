import React from 'react'
import { Button, Col, Row } from 'antd'
import styled, { keyframes } from "styled-components";
import { SearchOutlined } from '@ant-design/icons'

export default function ButtonCheck(props: any) {
    const ContentStyle = styled.div`
        .ant-btn-primary{
            background-color: #01a651;
            border-color: #01a651 ;
            
        }
`
    return (
        <ContentStyle>
            <Button icon={<SearchOutlined />} type="primary">{props.title}</Button>
        </ContentStyle>
    )
}
