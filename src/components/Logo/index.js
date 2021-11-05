import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { Title } from '../Title'

const Logo = (props) => {
  const theme = useTheme()

  return (
    <Flex
      width={1}
      justifyContent='center'
      alignItems='center'
    >
      <Box
        id='__fer__'
        width={155}
        height='auto'
        display='inline'
      >
        <Link to='/'>
          <Title
            color={theme.text.primary}
            as='span'
            fontSize='30px' fontFamily='RalewayBold'
          > Covid
          </Title>
          <Title
            color={theme.colors.primaryDark}
            as='span'
            fontSize='30px' fontFamily='RalewayBold'
          >live
          </Title>
        </Link>
      </Box>
    </Flex>
  )
}

export default Logo
