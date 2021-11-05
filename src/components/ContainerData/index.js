import { withTheme } from '@emotion/react'
import { useSpring, config } from 'react-spring'
import { Box, Flex } from 'rebass'
import { Title } from '../Title'
import { Container, Wrapper, Animated } from './style'

const ContainerData = withTheme(({ children, title, theme }) => {
  const opacity = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000, ...config }
  })

  return (
    <Container
      width={[1 / 1.05]}
      maxWidth={1110}
      height={['auto', 'auto', 800]}
      flex='none'
    >
      <Animated width={1} style={opacity}>
        <Wrapper width={1} px={['10px', '10px', '62px']} pt='17px'>
          <Flex width={1} flexDirection='column'>
            <Flex width={1} justifyContent={['center', 'center', 'flex-start']}>
              <Box height='auto'>
                <Title
                  color={theme.text.secundary}
                  fontSize='40px'
                  fontFamily='RalewayMedium'
                >
                  {title}
                </Title>
              </Box>
            </Flex>
            <Flex width={1}> {children} </Flex>
          </Flex>
        </Wrapper>
      </Animated>
    </Container>

  )
})

export default ContainerData
