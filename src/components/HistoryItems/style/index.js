import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  overflow:  hidden;
  box-shadow: 0px 3px 5px 1px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
`
export const ContentText = styled(Flex)`
  white-space: nowrap;
  text-overflow: ellipsis;
`
