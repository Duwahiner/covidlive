import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from 'rebass'
import { useScreen } from '../../hooks'
import Logo from '../Logo'
import Menu from '../Menu'
import NavBarMovil from '../NavbarMovil'

const Header = memo((props) => {
  const { showMenuMovil } = useSelector((state) => state)
  const [width] = useScreen()
  const theme = useTheme()
  const margin = (width > 819 && width < 1025) ? '80px' : '165px'

  return (
    <Flex
      width={1}
      sx={{ position: 'relative' }}
    >
      {
        !showMenuMovil
          ? (
            <Flex width={1} bg={theme.colors.menu} px={[20, 20, margin]} height='auto'>
              <Flex mr='20px' flex='none' width='auto' maxWidth='200px'>
                <Logo />
              </Flex>
              <Flex height='60px' flex='auto' width={1}>
                <Menu />
              </Flex>
            </Flex>
            )
          : (<NavBarMovil />)
      }
    </Flex>
  )
})

export default Header
