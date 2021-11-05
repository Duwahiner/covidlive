import styled from '@emotion/styled'
import Proptypes from 'prop-types'
import { animated } from 'react-spring'
import { Flex } from 'rebass'

export const Animated = styled(animated(Flex))`
`
export const ContentItemsMenu = styled(Flex)`
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderMenu};
`

export const TextItems = styled.span`
  font-family: RalewaySemiBold;
  font-size: 18px;
  color: ${({ color }) => color};
  line-height: 21.13px;
  cursor: pointer;
`

TextItems.propTypes = {
  color: Proptypes.string
}

TextItems.defaultProps = {
  color: '#fff'
}
