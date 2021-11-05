import styled from '@emotion/styled'
import Proptypes from 'prop-types'

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
