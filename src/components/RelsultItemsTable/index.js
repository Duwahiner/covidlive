import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { useScreen } from '../../hooks'
import { calculateWidth, getMapNumber, getToLowerCase } from '../../util'
import { Title } from '../Title'
import { Container, ContentText } from './style'

const RelsultItemsTable = memo(({ data, item }) => {
  const dispatch = useDispatch()
  const [width] = useScreen()
  const theme = useTheme()
  const fontSize = (width > 825 && width < 952) ? '14px' : '18px'

  const selectCountry = (e) => {
    const id = e.target.id
    const name = e.target.name
    dispatch(actions.getCurrentCountrie({ id }))
    dispatch(actions.getCurrentHistory({ name }))
    dispatch(actions.getInput(name))
  }

  return (
    <>
      <Container
        width={1}
        sx={{ position: 'relative' }}
        mb={['33px']}
        mt={['10px']}
      >
        <Flex
          width={1}
          justifyContent={['space-between']}
          alignItems='center'
          flex='auto'
          px='20px'
          pb='3px'
        >
          <Flex
            flex='none'
            justifyContent={['center', 'center', 'flex-start']}
            alignItems={['center', 'center', 'center']}
            flexDirection={['column', 'row', 'row']}
            width={[1 / 2, 1 / 2, 1 / 5.6]}
          >
            <Box
              flex='none' mr='6px'
              width='38px' height='24px'
              mb={['20px', '0px', '0px']}
            >
              <img
                src={`${process.env.PUBLIC_URL}/svg/flags/${getToLowerCase(item.CountryCode)}.svg`}
                width='100%' height='24px' alt=''
              />
            </Box>
            <ContentText width={['90px', '118px']}>
              <Title
                as='span'
                color={theme.text.secundary}
                fontSize={fontSize}
                fontFamily='RalewayMedium'
              > {item.Country}
              </Title>
            </ContentText>
          </Flex>

          <Flex
            flex='auto'
            justifyContent={['center', 'center', 'flex-start']}
            aligndatas={['center']}
            flexDirection={['column', 'row', 'row']}
            ml={['10px', '0px', '30px']}
          >
            <Box mb={['20px', '0px', '0px']} ml={['0px', '0px', '10px']}>
              <Title
                as='span'
                color={theme.text.secundary}
                fontSize={fontSize}
                fontFamily='RalewayMedium'
              > {getMapNumber(item.TotalConfirmed)}
              </Title>
            </Box>
            <Box width='90px' flex='none'>
              <Box
                flex='none'
                width={`${calculateWidth(item.TotalConfirmed, data)}%`}
                ml={['10px', '30px']}
                height='11px' bg={theme.colors.primaryDark}
                sx={{ borderRadius: '7px' }}
              />
            </Box>
          </Flex>

          <Flex width={[0, 0, 1 / 5]} justifyContent='center' ml={['10px', '0px']}>
            <Box display={['none', 'none', 'block']} pr={['20px', '0px', '40px']}>
              <Title
                as='span'
                color={theme.text.secundary}
                fontSize={fontSize}
                fontFamily='RalewayMedium'
              > {getMapNumber(item.TotalDeaths)}
              </Title>
            </Box>
          </Flex>

          <Flex
            width={[0, 0, 1 / 4]}
            justifyContent={['center', 'center', 'flex-end']}
            ml={['10px', '0px']} pr={['0px', '0px', '40px']}
          >
            <Box display={['none', 'none', 'block']}>
              <Title
                as='span'
                color={theme.text.secundary}
                fontSize={fontSize}
                fontFamily='RalewayMedium'
              > {getMapNumber(item.TotalRecovered)}
              </Title>
            </Box>
          </Flex>
        </Flex>

        <Box
          width={1}
          height={40}
          sx={{
            position: 'absolute',
            backgroundColor: 'transparent',
            top: '-8px',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: theme.colors.menu,
              opacity: 0.03
            }
          }}
        >
          <NavLink
            to='/country'
            onClick={selectCountry}
            id={item.ID}
            name={item.Country}
            style={{
              width: '100%',
              height: '40px',
              display: 'block',
              position: 'absolute',
              top: '0px'
            }}
          />
        </Box>
      </Container>
    </>
  )
})

export default RelsultItemsTable
