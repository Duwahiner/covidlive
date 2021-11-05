import { withTheme } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { mapString } from '../../util'
import { Title } from '../Title'
import { Container, ContentText } from './style'

const HistoryItems = withTheme(({ item, theme }) => {
  const dispatch = useDispatch()

  const selectCountry = (e) => {
    const id = e.target.id
    const title = e.target.title
    dispatch(actions.getCurrentCountrie({ id }))
    dispatch(actions.getInput(title))
  }

  return (
    <Container
      width={1}
      my={['5px', '5px', '10px']}
      mx={['0px', '0px', '5px']}
      maxWidth={['100%', '90%', 228]}
      height={[300, 300, 238]}
      flex='none'
    >
      <Flex width={1} flexDirection='column' alignItems='center'>
        <Flex mt='14px'>
          <ContentText
            width={['90px', '118px']}
            justifyContent='center'
          >
            <Title
              as='span'
              color={theme.text.secundary}
              fontSize={['25px', '20px', '18px']}
              fontFamily='RalewayBold'
              mx='auto'
            > {mapString(item.Country)}
            </Title>
          </ContentText>
        </Flex>

        <Box
          width={['80%', '60%', 177]}
          height={[200, 200, 118]}
          flex='none' mt='10px'
          sx={{ borderRadius: '10px', overflow: 'hidden' }}
        >
          <Flex height={[200, 200, 118]}>
            <img
              src={`${process.env.PUBLIC_URL}/svg/flags/${item.CountryCode}.svg`}
              width='100%' height='auto' alt=''
            />
          </Flex>
        </Box>

        <Flex mt='10px'>
          <Box sx={{ cursor: 'pointer' }}>
            <Link to='/country'>
              <Title
                as='span'
                color={theme.colors.link} fontSize='13px'
                fontFamily='RalewayRegular'
                textDecoration='underline'
                id={item.ID}
                title={item.Country}
                onClick={selectCountry}
              > More...
              </Title>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
})

export default HistoryItems
