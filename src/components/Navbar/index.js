import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { useDispatch } from 'react-redux'
import { useScreen } from '../../hooks'
import { TextItems } from './style'
import { actions } from '../../actions'

const NavBar = memo((props) => {
  const dispatch = useDispatch()
  const [width] = useScreen()
  const theme = useTheme()

  const handleShowMenu = () => dispatch(actions.showMenuMovil(true))

  return (
    <Flex
      width={1}
      justifyContent='flex-end'
      alignItems='center'
    >

      {
        width > 1024 && (
          <Flex width={['0%', '0%', 1]} justifyContent='flex-end' alignItems='center'>
            <Box ml='0px' display='inline'>
              <Link to='/'>
                <TextItems
                  color={theme.text.primary}
                > Summary
                </TextItems>
              </Link>
            </Box>

            <Box ml='31px' display='inline'>
              <Link to='/country'>
                <TextItems
                  color={theme.text.primary}
                > Country
                </TextItems>
              </Link>
            </Box>

            <Box ml='31px' display='inline'>
              <Link to='/history'>
                <TextItems
                  color={theme.text.primary}
                > History
                </TextItems>
              </Link>
            </Box>
          </Flex>
        )
      }

      {
        width <= 1024 && (
          <Flex width='auto' sx={{ cursor: 'pointer' }}>
            <Flex
              flex='none' width='30px' height='30px' ml={4}
              onClick={handleShowMenu}
            >
              <img src={`${process.env.PUBLIC_URL}/svg/m-100.svg`} alt='' />
            </Flex>
          </Flex>
        )
      }
    </Flex>
  )
})

export default NavBar
