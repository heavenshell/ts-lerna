import * as React from 'react'
import styled from '@emotion/styled'

type ViewProps = {
  // Add view props here
}

type UserEvent =
  | React.MouseEvent<HTMLAnchorElement>
  | React.KeyboardEvent<HTMLAnchorElement>

type ActionProps = {
  onSubredditLinkClick: (e: UserEvent) => void
}

type Props = ViewProps & ActionProps

const StyledBox = styled.div`
  padding: 20px;
  cursol: pointer;
`

const Home: React.FC<Props> = ({ onSubredditLinkClick }) => (
  <StyledBox>
    <a
      role="link"
      onClick={onSubredditLinkClick}
      onKeyDown={onSubredditLinkClick}
      tabIndex={0}
    >
      Subreddit(use hooks)
    </a>
  </StyledBox>
)

export default Home
