import { useTheme } from '@emotion/react'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { useScreen } from '../../hooks'
import { sort } from '../../util'
import { Title } from '../Title'
import { Container } from './style'

const DescribeHeadTable = memo((props) => {
  const { countries, summaryCountries } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [width] = useScreen()
  const theme = useTheme()
  const [rotate, setRotate] = useState(true)
  const fontSize = (width > 825 && width < 1076) ? '16px' : '24px'

  useEffect(() => setRotate(true), [setRotate])

  const handleOrderDataTable = useCallback(
    () => {
      if (rotate) {
        const resultSort = countries.sort(sort('TotalConfirmed'))
        dispatch(actions.getSummaryCountries([...resultSort.reverse()]))
      } else {
        dispatch(actions.getSummaryCountries([...summaryCountries.reverse()]))
      }
      setRotate(!rotate)
    }, [dispatch, rotate, countries, summaryCountries])

  useEffect(() => () => handleOrderDataTable, [handleOrderDataTable])

  return (
    <Container
      width={1}
      px={['0px', '0px', '20px']}
      pb='3px' mb='22px'
      justifyContent={['space-between']}
    >
      <Flex
        width={[1 / 2, 1 / 2, 1 / 5.6]}
        justifyContent={['center', 'center', 'flex-start']}
        alignItems={['center', 'flex-start', 'flex-start']}
        flex='none'
      >
        <Title
          as='h2'
          color={theme.text.secundary}
          fontSize={['24px', '24px', fontSize]}
          fontFamily='RalewayThin'
          style={{ textAlign: 'center' }}
        > Name
        </Title>
      </Flex>

      <Flex
        alignItems='center'
        justifyContent={['center']}
        sx={{ cursor: 'pointer' }}
        onClick={handleOrderDataTable}
      >
        <Box>
          <Title
            as='h2'
            color={theme.text.secundary}
            fontSize={['24px', '24px', fontSize]}
            fontFamily='RalewayThin'
            style={{ textAlign: 'center' }}
          > Cases - cumulative total
          </Title>
        </Box>

        <Box
          ml={['7px', '0px', '0px']}
          width='16px' height='16px'
          display={['block', 'block', 'block']}
          flex='none'
          sx={{
            transform: rotate ? 'rotate(0deg)' : 'rotate(180deg)'
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/svg/f-0.svg`}
            width='100%' height='auto' alt=''
          />
        </Box>
      </Flex>

      <Flex width={[0, 0, 1 / 5]} justifyContent='center' ml={['0px', '0px', '40px']}>
        <Box display={['none', 'none', 'block']} flex='none'>
          <Title
            as='h2'
            color={theme.text.secundary}
            fontSize={['24px', '24px', fontSize]}
            fontFamily='RalewayThin'
            style={{ textAlign: 'center' }}
          > Total Deaths
          </Title>
        </Box>
      </Flex>

      <Flex
        width={[0, 0, 1 / 4]}
        justifyContent={['center', 'center', 'flex-end']}
      >
        <Box display={['none', 'none', 'block']}>
          <Title
            color={theme.text.secundary}
            fontSize={['24px', '24px', fontSize]}
            fontFamily='RalewayThin'
            style={{ textAlign: 'center' }}
          > Total Recovered
          </Title>
        </Box>
      </Flex>

    </Container>
  )
})

export default DescribeHeadTable
