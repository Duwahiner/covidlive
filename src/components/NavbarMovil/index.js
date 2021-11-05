import { withTheme } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { useDispatch } from 'react-redux'
import { Animated, ContentItemsMenu, TextItems } from './style'
import { actions } from '../../actions'
import Logo from '../Logo'
import { config, useSpring } from 'react-spring'

const NavBarMovil = withTheme(({ theme }) => {
  const dispatch = useDispatch()
  const position = useSpring({
    right: '0%',
    opacity: 1,
    from: { right: '-100%', opacity: 0 },
    config: { ...config }
  })

  const handleShowMenu = () => dispatch(actions.showMenuMovil(false))

  return (
    <Animated
      width={1}
      justifyContent=''
      flexDirection='column'
      alignItems='center'
      bg={theme.colors.menu}
      style={position}
      sx={{
        position: 'fixed',
        height: '100vh',
        zIndex: '19099'
      }}
    >
      <Flex
        py='7px' flex='none' width={1} alignItems='center'
        sx={{
          borderBottom: 'solid 1px #3D3D3D',
          position: 'relative'
        }}
      >
        <Box flex='auto' width={1}> <Logo /> </Box>
        <Flex width='auto' sx={{ cursor: 'pointer' }}>
          <Flex
            flex='none' width='25px' height='25px' mr={4}
            onClick={handleShowMenu}
          >
            <img src={`${process.env.PUBLIC_URL}/svg/x-100.svg`} alt='' />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width={1} flexDirection='column' alignItems='center'
        mt='50px'
      >
        <ContentItemsMenu
          py='30px'
          width={[1 / 1.2, 1 / 1.4]} justifyContent='center'
        >
          <Link to='/' onClick={handleShowMenu}>
            <TextItems
              color={theme.text.primary}
            > Summary
            </TextItems>
          </Link>
        </ContentItemsMenu>

        <ContentItemsMenu
          py='30px'
          width={[1 / 1.2, 1 / 1.4]} justifyContent='center'
        >
          <Link to='/country' onClick={handleShowMenu}>
            <TextItems
              color={theme.text.primary}
            > Country
            </TextItems>
          </Link>
        </ContentItemsMenu>

        <ContentItemsMenu
          py='30px'
          width={[1 / 1.2, 1 / 1.4]} justifyContent='center'
        >
          <Link to='/history' onClick={handleShowMenu}>
            <TextItems
              color={theme.text.primary}
            > History
            </TextItems>
          </Link>
        </ContentItemsMenu>
      </Flex>
    </Animated>
  )
})

export default NavBarMovil
