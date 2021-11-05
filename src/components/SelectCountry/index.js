import { useTheme } from '@emotion/react'
import { memo } from 'react'
import { Box, Flex } from 'rebass'
import { useScreen } from '../../hooks'
import { getMapNumber, getToLowerCase } from '../../util'
import { Title } from '../Title'
import { Container, ContenCountry, CasesCountry } from './style'

const SelectCountry = memo(({ data }) => {
  const [width] = useScreen()
  const theme = useTheme()
  const magin = (width > 830 && width < 970) ? 10 : 0

  return (
    <Container width={1} flexDirection='column'>
      <Flex mt={54} width={1}>
        <Flex
          width={1}
          flexDirection={['column', 'row', 'row']}
          justifyContent='center'
          alignItems={['flex-start', 'center', 'center']}
          mb={[30, 0, 0]}
          pt={[40, 0, 0]}
          flex='none'
        >
          <ContenCountry
            maxWidth={['100%', 260, 330]}
            width={[1, 1 / 2, 1 / 2]}
            mr={[0, 30, 116]}
            maxHeight={['260px', '100%', 220]}
            height={['100%', '100%', 220]}
            flex='none'
          >
            <img
              src={`${process.env.PUBLIC_URL}/svg/flags/${getToLowerCase(data.CountryCode)}.svg`}
              width='100%' height='auto' alt=''
            />
          </ContenCountry>

          <CasesCountry
            flexDirection='column' alignItems='center'
            justifyContent='center'
            maxWidth={['100%', 419, 419]}
            width={[1, 1 / 2, 1 / 2]}
            mt={[30, 0, 0]}
            height={['260px', '217px', '217px']}
            maxHeight={['100%', '217px', '217px']}
            flex='none'
          >
            <Box>
              <Title
                color={theme.text.secundary}
                fontSize='30px' fontFamily='RalewayBold'
              > Total Cases
              </Title>
            </Box>

            <Box mt='53px'>
              <Title
                color={theme.text.secundary}
                fontSize='50px' fontFamily='RalewayExtraBold'
              > {getMapNumber(data.TotalConfirmed)}
              </Title>
            </Box>

          </CasesCountry>
        </Flex>
      </Flex>

      <Flex mt={[30, 80, 80]} width={1}>
        <Flex
          width={1} justifyContent='space-between'
          flexDirection={['column', 'column', 'row']}
          alignItems={['flex-start', 'center', 'center']}
        >
          <CasesCountry
            flexDirection='column' alignItems='center'
            justifyContent='center'
            maxWidth={['100%', '100%', 251]}
            width={[1, '90%', '251px']}
            height={['230px', '250px', '175px']}
            maxHeight={['100%', '100%', '175px']}
            mx={['0px', magin, magin]}
          >
            <Box>
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize='20px'
                fontFamily='RalewayBold'
              > Confirmed
              </Title>
            </Box>

            <Box mt='32px'>
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize='30px'
                fontFamily='RalewayExtraBold'
              > {getMapNumber(data.NewConfirmed)}
              </Title>
            </Box>
          </CasesCountry>

          <CasesCountry
            flexDirection='column' alignItems='center'
            justifyContent='center'
            maxWidth={['100%', '100%', 251]}
            width={[1, '90%', '251px']}
            height={['230px', '250px', '175px']}
            maxHeight={['100%', '100%', '175px']}
            mt={[30, 30, 0]}
            mx={['0px', magin, magin]}
          >
            <Box>
              <Title
                color={theme.text.secundary}
                fontSize='20px' fontFamily='RalewayBold'
              > Deaths
              </Title>
            </Box>

            <Box mt='32px'>
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize='30px'
                fontFamily='RalewayExtraBold'
              > {getMapNumber(data.NewDeaths)}
              </Title>
            </Box>
          </CasesCountry>

          <CasesCountry
            flexDirection='column' alignItems='center'
            justifyContent='center'
            maxWidth={['100%', '100%', 251]}
            width={[1, '90%', '251px']}
            my={[30, 30, 0]}
            height={['230px', '250px', '175px']}
            maxHeight={['100%', '100%', '175px']}
            mx={['0px', magin, magin]}
          >
            <Box>
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize='20px' fontFamily='RalewayBold'
              > Recovered
              </Title>
            </Box>

            <Box mt='32px'>
              <Title
                as='h2'
                color={theme.text.secundary}
                fontSize='30px'
                fontFamily='RalewayExtraBold'
              > {getMapNumber(data.NewRecovered)}
              </Title>
            </Box>
          </CasesCountry>
        </Flex>
      </Flex>
    </Container>
  )
})

export default SelectCountry
