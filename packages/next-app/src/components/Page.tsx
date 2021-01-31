import React from 'react'
import { Col, Row } from 'antd'

import { Layout } from './Layout'
import { List } from './List'
import { Pagination } from './Pagination'

import { NamedAPIResource } from '../types'

export const Loading = () => {
  return (
    <Layout>
      <List results={[]} loading />
    </Layout>
  )
}

type Props = {
  current: number
  total: number
  results: NamedAPIResource<string>[]
  onChange?: (page: number, pageSize?: number) => void
}

export const Page: React.FC<Props> = ({
  results,
  total,
  current,
  onChange,
}) => (
  <Layout>
    <List results={results} loading={false} />
    <Row justify="end">
      <Col>
        <Pagination current={current} total={total} onChange={onChange} />
      </Col>
    </Row>
  </Layout>
)
