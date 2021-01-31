import React from 'react'
import { Col, Row, Skeleton } from 'antd'

import { ListItem } from './ListItem'

import { getPokemonImage } from '../hooks/usePokemon'
import { NamedAPIResource } from '../types'

type Props = {
  loading: boolean
  results: NamedAPIResource<string>[]
}

export const List: React.FC<Props> = ({ results, loading }) => (
  <Skeleton loading={loading}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {results.map(({ name, url }) => {
        const image = getPokemonImage(url)
        return (
          <Col key={name}>
            <ListItem name={name} src={image} />
          </Col>
        )
      })}
    </Row>
  </Skeleton>
)
