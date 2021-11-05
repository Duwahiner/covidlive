/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Search from '../components/Search'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Search />', () => {
  it('render without crash', () => {
    const component = shallow(<Search />)
    expect(component).toHaveLength(1)
  })
})
