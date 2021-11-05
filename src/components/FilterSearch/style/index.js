import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  max-height: 350px;
  min-height: 170px;
  /* border: solid 1px ${({ theme }) => theme.colors.border};*/
  background-color: ${({ theme }) => theme.colors.text};
  left: 0px;
  top: 45px;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: auto;
  box-sizing: border-box;
    &::-webkit-scrollbar {
      display: block;
      background:  transparent;
      width: 8px;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #D6DBDF;
      border-radius: 6px;
    }
`
