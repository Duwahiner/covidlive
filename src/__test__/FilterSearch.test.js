/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import FilterSearch from '../components/FilterSearch'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<FilterSearch />', () => {
  it('render without crash', () => {
    const component = shallow(<FilterSearch />)
    expect(component).toHaveLength(1)
  })
})
