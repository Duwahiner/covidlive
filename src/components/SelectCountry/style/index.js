import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  
`

export const ContenCountry = styled(Flex)`
  overflow:  hidden;
  border-radius: ${({ theme }) => theme.colors.radius}px;
`

export const CasesCountry = styled(Flex)`
  width: ${({ width }) => width};
  height:  ${({ height }) => height};
  box-shadow: 0px 3px 5px 1px ${({ theme }) => theme.colors.shadow};
`
