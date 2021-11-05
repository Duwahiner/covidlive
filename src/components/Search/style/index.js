import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
  width: 450px;
  height: 40px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  box-sizing: content-box;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    font-family: RalewayMedium;
    font-size: 20px;
    color: ${({ color }) => color};
    padding: 0px;
    outline: none;
    border: none;
    box-sizing: border-box;
    line-height: 40px;
    background-color: transparent;
    &::placeholder {
        font-family: RalewayMedium;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.placeholder};
    }
`
