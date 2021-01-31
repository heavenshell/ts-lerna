import React from 'react'
import { Card } from 'antd'
import styled from '@emotion/styled'

type Props = {
  name: string
  src: string
}
const StyledCard = styled(Card)`
  width: 240px;
  margin-left: 10px;
  margin-top: 10px;
`
const StyledImg = styled.img`
  margin-top: 20px;
`

export const ListItem: React.FC<Props> = ({ name, src }) => (
  <StyledCard
    bodyStyle={{ textAlign: 'center' }}
    cover={<StyledImg src={src} alt={name} width="128" height="128" />}
  >
    <Card.Meta title={name} />
  </StyledCard>
)
