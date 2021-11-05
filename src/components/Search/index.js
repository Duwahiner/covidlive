import { withTheme } from '@emotion/react'
import { useEffect, useState } from 'react'
import { Box, Flex } from 'rebass'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../actions'
import Buttom from '../Buttom'
import { Container, SearchInput } from './style'
import { getMapString } from '../../util'
import FilterSearch from '../FilterSearch'

const Search = withTheme(({ theme }) => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [input, setInput] = useState(state.input)

  const onChange = ({ target }) => {
    setInput(target.value)
    dispatch(actions.getFilter({ name: target.value }))
  }

  useEffect(() => dispatch(actions.getInput(input)), [input, dispatch])

  const handleSelect = () => {
    if (state.input !== '') {
      dispatch(actions.getSearchCountrie({ name: getMapString(state.input) }))
      dispatch(actions.getCurrentHistory({ name: getMapString(state.input) }))
    }
  }

  return (
    <Container pl='25px' pr='7px' sx={{ position: 'relative' }}>
      <FilterSearch />
      <Box width={1}>
        <SearchInput
          placeholder='Type Country...'
          color={theme.text.secondary}
          onChange={onChange}
          autoFocus
          value={state.input}
        />
      </Box>
      <Flex flex='none'>
        <Buttom onClick={handleSelect}>
          <Flex width='25px' height='26px' mx={2}>
            <img src={`${process.env.PUBLIC_URL}/svg/lupa.svg`} alt='' />
          </Flex>
        </Buttom>
      </Flex>
    </Container>
  )
})

export default Search
