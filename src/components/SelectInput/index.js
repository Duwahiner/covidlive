import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'rebass'
import { actions } from '../../actions'
import { sort } from '../../util'
import { SelectOptions } from '../SelectOptions'
import { Container } from './style'

const SelectInput = (props) => {
  const dispatch = useDispatch()
  const { inputSelectData, countries } = useSelector((state) => state)

  const handleChange = (value) => {
    if (value) {
      const selectCountry = countries.filter((item) => item.Country === value.label)
      dispatch(actions.getSummaryCountries(selectCountry))
    } else {
      dispatch(actions.getSummaryCountries(countries.sort(sort('TotalConfirmed'))))
    }
  }

  return (
    <Container>
      <Box width={1}>
        <SelectOptions
          placeholder='Search by country, Regions'
          option={inputSelectData}
          handleChange={handleChange}
        />
      </Box>
    </Container>
  )
}

export default SelectInput
