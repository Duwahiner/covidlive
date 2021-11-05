import { withTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex } from 'rebass'
import { actions } from '../../actions'
import { getMapString } from '../../util'
import { Title } from '../Title'
import { Container } from './style'

const FilterSearch = withTheme(({ theme }) => {
  const dispatch = useDispatch()
  const { filterSearch, countries } = useSelector((state) => state)

  const handleSelectList = (e) => {
    const id = e.target.id
    const result = countries.filter((item) => item.ID === id)

    if (result.length > 0) {
      const country = Object.assign({}, ...result)
      dispatch(actions.getInput(country.Country))
      dispatch(actions.getSearchCountrie({ name: getMapString(country.Country) }))
      dispatch(actions.getCurrentHistory({ name: getMapString(country.Country) }))
      dispatch(actions.getFilter({ name: '' }))
    }
  }

  return (
    <>
      {
        filterSearch.length > 0 &&
          <Container
            width={1}
            p='15px'
            flexDirection='column'
          >
            {
              filterSearch.map((item, index) => {
                return (
                  <Flex
                    width={1}
                    height={40}
                    mb='15px'
                    py='10px'
                    alignItems='center'
                    key={index}
                    sx={{
                      backgroundColor: theme.colors.text,
                      borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <Box
                      flex='none' mr='15px'
                      width='30px' height='22px'
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/svg/flags/${item.CountryCode}.svg`}
                        width='100%' height='20px' alt=''
                      />
                    </Box>

                    <Box>
                      <Title
                        as='span'
                        color={theme.text.secundary}
                        fontSize='16px'
                        fontFamily='RalewayRegular'
                        id={item.ID}
                        onClick={handleSelectList}
                        sx={{
                          transition: 'all 0.3s',
                          cursor: 'pointer',
                          ':hover': {
                            color: theme.colors.secondary
                          }
                        }}
                      >  {item.Country}
                      </Title>
                    </Box>
                  </Flex>
                )
              })
            }
          </Container>
      }
    </>
  )
})

export default FilterSearch
