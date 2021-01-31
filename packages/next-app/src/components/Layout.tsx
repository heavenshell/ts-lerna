import React, { ReactNode } from 'react'
import { Layout as AntLayout, Menu, Breadcrumb } from 'antd'
import styled from '@emotion/styled'

type Props = {
  children?: ReactNode
}

const StyledLogo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 0px 24px 16px 0;
  color: #fff;
`

const StyledLayoutContent = styled(AntLayout.Content)`
  padding: 0 50px;
`

const StyledContent = styled.div`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`

const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`

export const Layout: React.FC<Props> = ({ children }) => (
  <AntLayout>
    <AntLayout.Header>
      <StyledLogo>Logo</StyledLogo>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </AntLayout.Header>
    <StyledLayoutContent>
      <StyledBreadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </StyledBreadcrumb>
      <StyledContent>{children}</StyledContent>
    </StyledLayoutContent>
  </AntLayout>
)
