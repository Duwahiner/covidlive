/* global describe, it, expect */
import React from 'react'
import { shallow, configure } from 'enzyme'
import Menu from '../components/Menu'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// Validando de que el componente se renderice sin problemas
describe('<Menu />', () => {
  it('render without crash', () => {
    const component = shallow(<Menu />)
    expect(component).toHaveLength(1)
  })
})
