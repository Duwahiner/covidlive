import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const Container = styled(Flex)`
    overflow: auto;
    overflow-x: none;
    max-height: 650px;

    &::-webkit-scrollbar {
        display: block;
        background:  ${({ theme }) => theme.colors.text};;
        width: 8px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.scroll};
        border-radius: 5px;
    }
`
