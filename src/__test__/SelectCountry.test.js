/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import SelectCountry from '../components/SelectCountry'
import Adapter from 'enzyme-adapter-react-16'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'

configure({ adapter: new Adapter() })

const data = {
  CountryCode: 'cd',
  TotalConfirmed: 234,
  NewConfirmed: 12,
  NewDeaths: 13,
  NewRecovered: 35
}
// Validando de que el componente se renderice sin problemas
describe('<SelectCountry />', () => {
  it('render without crash', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <SelectCountry data={data} />
      </ThemeProvider>)
    expect(component).toHaveLength(1)
  })
})
