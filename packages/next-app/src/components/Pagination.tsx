import React from 'react'
import { Pagination as AntPagination } from 'antd'
import styled from '@emotion/styled'

const StyledPagination = styled(AntPagination)`
  padding: 20px;
`

type Props = {
  current: number
  total: number
  onChange?: (page: number, pageSize?: number) => void
}

export const Pagination: React.FC<Props> = ({ current, total, onChange }) => (
  <StyledPagination
    current={current}
    total={total}
    onChange={onChange}
    defaultPageSize={20}
  />
)
